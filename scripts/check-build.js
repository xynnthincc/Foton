// Cek HTML hasil build: pastikan tidak ada LaTeX mentah yang bocor ke tampilan.
// Catatan: KaTeX selalu menyertakan <annotation encoding="application/x-tex">
// berisi source LaTeX sebagai fallback aksesibilitas -- itu NORMAL dan harus
// dikecualikan. Yang dicari adalah LaTeX yang bocor di luar annotation.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", ".next", "server", "app");

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const ARTIFACTS = [
  [/\bcdot\b/, "cdot"],
  [/\bqquad\b/, "qquad"],
  [/U0001d514/, "U0001d514"],
  [/\\(?:text|mathrm|frac|sqrt|sin|cos|times)\{/, "backslash+command"],
];

let leaks = 0, pages = 0;

for (const f of walk(root)) {
  const html = fs.readFileSync(f, "utf8");
  pages++;

  // buang fallback MathML KaTeX (berisi source LaTeX secara normal)
  const visible = html
    .replace(/<span class="katex-mathml">[\s\S]*?<\/annotation><\/semantics><\/math><\/span>/g, "")
    // buang isi <annotation> lain / <script>/<style>
    .replace(/<annotation[\s\S]*?<\/annotation>/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "");

  // teks yang benar-benar dilihat user
  const text = visible.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

  for (const [re, label] of ARTIFACTS) {
    const m = text.match(re);
    if (m) {
      leaks++;
      const at = text.indexOf(m[0]);
      console.log(`LEAK ${path.relative(root, f)}  [${label}]`);
      console.log(`   ...${text.slice(Math.max(0, at - 90), at + 90)}...`);
    }
  }
}

console.log(`\n=== ${leaks} kebocoran LaTeX dari ${pages} halaman ===`);
process.exit(leaks ? 1 : 0);