// =============================================================================
// Audit LaTeX untuk src/lib
//
// Tiga kelas bug yang TIDAK bisa ditangkap KaTeX throwOnError, karena semuanya
// lolos parser tapi tampil salah di layar:
//
//   1. PARSE ERROR  - mis. "\cdot" di dalam \text{...}. KaTeX tidak melempar
//                     error (Math.tsx pakai throwOnError: false) tapi menampilkan
//                     source LaTeX mentah, persis gejala "L\cdotatm".
//   2. ESCAPE RUSAK - "\U0001d514" bukan escape JS yang sah (butuh \u), jadi
//                     backslash dibuang diam-diam -> user lihat "|U0001d514".
//   3. BACKSLASH HILANG - "\qquad" ditulis sebagai "\qquad" di string yang
//                     sebagian ter-escape. Sintaksnya tetap sah, tapi dirender
//                     sebagai teks "qquad".
//
// Jalankan: node scripts/lint-math.js
// =============================================================================
const fs = require("fs");
const path = require("path");
const katex = require("katex");

const base = path.join(__dirname, "..", "src", "lib");
const files = fs.readdirSync(base).filter((f) => f.endsWith(".ts"));

// --- Decode escape string literal persis seperti mesin JS -------------------
const SIMPLE = { b: "\b", f: "\f", n: "\n", r: "\r", t: "\t", v: "\v", 0: "\0" };
const VALID_ESC = new Set([...Object.keys(SIMPLE), "\\", "'", '"', "`", "/", "u", "x"]);

function decodeTs(s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "\\") { out += s[i]; continue; }
    const nx = s[++i];
    if (nx === undefined) { out += "\\"; break; }
    if (nx === "\\" || nx === "'" || nx === '"' || nx === "`" || nx === "/") { out += nx; continue; }
    if (nx === "u") {
      const b = /^u\{([0-9a-fA-F]+)\}/.exec(s.slice(i));
      if (b) { out += String.fromCodePoint(parseInt(b[1], 16)); i += b[0].length - 1; continue; }
      const h = /^u([0-9a-fA-F]{4})/.exec(s.slice(i));
      if (h) { out += String.fromCharCode(parseInt(h[1], 16)); i += h[0].length - 1; continue; }
      out += "u"; continue;
    }
    if (nx === "x") {
      const h = /^x([0-9a-fA-F]{2})/.exec(s.slice(i));
      if (h) { out += String.fromCharCode(parseInt(h[1], 16)); i += h[0].length - 1; continue; }
      out += "x"; continue;
    }
    if (nx in SIMPLE) { out += SIMPLE[nx]; continue; }
    out += nx; // escape tak dikenal -> backslash hilang
  }
  return out;
}

// --- Kumpulkan potongan math dari satu baris sumber -------------------------
function collectMath(line) {
  const out = [];
  const m = line.match(/\blatex:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
  if (m) out.push({ kind: "latex", tex: decodeTs(m[1].slice(1, -1)) });
  for (const s of line.match(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g) || []) {
    for (const mm of decodeTs(s.slice(1, -1)).matchAll(/\$([^$]+)\$/g)) {
      out.push({ kind: "inline $..$", tex: mm[1] });
    }
  }
  return out;
}

// --- Deteksi backslash hilang ----------------------------------------------
const COMMANDS = new Set([
  "frac", "dfrac", "tfrac", "sqrt", "left", "right", "text", "mathrm", "mathbf",
  "cdot", "times", "div", "pm", "approx", "equiv", "sim", "propto",
  "quad", "qquad", "to", "rightarrow", "Rightarrow", "leftarrow", "Leftarrow",
  "infty", "partial", "nabla", "sum", "prod", "int", "overline", "underline",
  "hat", "vec", "bar", "tilde", "dot", "ddot", "begin", "end", "big",
  "circ", "ast", "star", "oplus", "otimes", "perp", "parallel", "angle",
  "alpha", "beta", "gamma", "delta", "epsilon", "varepsilon", "zeta", "eta",
  "theta", "vartheta", "iota", "kappa", "lambda", "mu", "nu", "xi", "pi", "rho",
  "sigma", "tau", "upsilon", "phi", "varphi", "chi", "psi", "omega",
  "Gamma", "Delta", "Theta", "Lambda", "Sigma", "Phi", "Psi", "Omega",
  "sin", "cos", "tan", "log", "ln", "exp", "min", "max", "lim", "det",
  "leq", "geq", "neq", "ldots", "cdots", "dots",
]);

function textModeRanges(tex) {
  const ranges = [];
  const re = /\\(?:text|textbf|textit|textrm|texttt|hbox)\s*\{/g;
  let m;
  while ((m = re.exec(tex)) !== null) {
    let i = m.index + m[0].length, depth = 1;
    const start = i;
    while (i < tex.length && depth > 0) {
      if (tex[i] === "\\") { i += 2; continue; }
      if (tex[i] === "{") depth++;
      else if (tex[i] === "}") { depth--; if (depth === 0) break; }
      i++;
    }
    ranges.push([start, i]);
  }
  return ranges;
}

function findBareCommands(tex) {
  const ranges = textModeRanges(tex);
  const found = [];
  for (const m of tex.matchAll(/[a-zA-Z]+/g)) {
    const word = m[0], start = m.index;
    if (!COMMANDS.has(word)) continue;
    const prev = tex[start - 1] ?? "";
    if (prev === "\\") continue;                                    // perintah sah
    if (/[a-zA-Z0-9,]/.test(prev)) continue;                       // bagian identifier lain
    if (/[a-zA-Z0-9]/.test(tex[start + word.length] ?? "")) continue;
    if (ranges.some(([a, b]) => start >= a && start <= b)) continue; // di dalam \text{}
    if (prev === "{" && /[_^]/.test(tex[start - 2] ?? "")) continue; // v_{mp} = variabel
    found.push(word);
  }
  return found;
}

// --- Reported ---------------------------------------------------------------
const problems = [];
let checked = 0;

for (const f of files) {
  const lines = fs.readFileSync(path.join(base, f), "utf8").split("\n");

  lines.forEach((line, i) => {
    // (2) escape tak dikenal di string literal
    for (const s of line.match(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g) || []) {
      const body = s.slice(1, -1);
      for (let k = 0; k < body.length - 1; k++) {
        if (body[k] !== "\\") continue;
        const nx = body[k + 1];
        if (nx === "u" || nx === "x") { k += 2; continue; }
        if (VALID_ESC.has(nx)) { k += 1; continue; }
        problems.push({ f, i, rule: "ESCAPE", tex: body.slice(0, 120),
          note: `"\\${nx}" bukan escape JS yang sah (butuh \\u) -> backslash dibuang` });
        break;
      }
    }

    // (1) parse error + (3) backslash hilang
    for (const { kind, tex } of collectMath(line)) {
      if (!tex.trim()) continue;
      checked++;
      try {
        katex.renderToString(tex, { displayMode: kind === "latex", throwOnError: true, strict: false });
      } catch (e) {
        problems.push({ f, i, rule: "PARSE", tex, note: e.message });
        continue;
      }
      for (const w of findBareCommands(tex)) {
        problems.push({ f, i, rule: "BACKSLASH", tex,
          note: `"${w}" tanpa backslash -> tampil sebagai teks "${w}"` });
      }
    }
  });
}

for (const p of problems) {
  console.log(`\n${p.f}:${p.i}  [${p.rule}]  ${p.note}`);
  console.log(`  math : ${p.tex}`);
}
console.log(`\n=== ${problems.length} masalah dari ${checked} string math / ${files.length} file ===`);
if (problems.length) process.exit(1);