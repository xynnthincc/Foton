// Uji negativity: suntikkan 3 kelas bug ke materi-termo.ts lalu jalankan lint-math.js
// untuk memastikan setiap aturan benar-benar menangkapnya. File asli dikembalikan.
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const target = path.join(__dirname, "..", "src", "lib", "materi-termo.ts");
const original = fs.readFileSync(target, "utf8");
const BS = "\\"; // satu backslash; di file .ts tertulis dua kali (escape string literal)

const injects = [
  {
    rule: "PARSE",
    name: "backslash cdot di dalam text{}",
    from: BS + BS + " " + BS + BS + "mathrm{W/(m",
    to: BS + BS + " " + BS + BS + "text{W/(m",
  },
  {
    rule: "ESCAPE",
    name: "U0001d514 instead of u0001d514",
    from: "'$" + BS + BS + "lambda_{" + BS + BS + "max}$'",
    to: "'$" + BS + BS + "lambda_{" + BS + BS + "max}$ $|" + BS + "U0001d514$'",
  },
  {
    rule: "BACKSLASH",
    name: "qquad kehilangan backslash",
    from: BS + BS + "text{m/s}^2",
    to: BS + BS + "text{m/s}^2 $x " + BS + "qquad y$",
  },
];

function runLint() {
  try {
    return execFileSync(process.execPath, [path.join(__dirname, "lint-math.js")], { encoding: "utf8" });
  } catch (e) {
    return e.stdout || "";
  }
}

let allCaught = true;

try {
  for (const inj of injects) {
    const mutated = original.replace(inj.from, inj.to);
    if (mutated === original) {
      console.log(`!! anchor tidak cocok: ${JSON.stringify(inj.from)}`);
      allCaught = false;
      continue;
    }
    fs.writeFileSync(target, mutated, "utf8");
    const out = runLint();
    const caught = out.includes(`[${inj.rule}]`);
    console.log(`${caught ? "TERDETEKSI" : "TERLEWAT  "}  ${inj.rule.padEnd(9)} ${inj.name}`);
    if (!caught) {
      allCaught = false;
      console.log(out.split("\n").filter((l) => l.trim()).slice(0, 5).map((l) => "      " + l).join("\n"));
    }
    fs.writeFileSync(target, original, "utf8");
  }
} finally {
  fs.writeFileSync(target, original, "utf8");
}

const clean = runLint().trim();
console.log(`\nsetelah file dikembalikan: ${clean}`);
const ok = allCaught && /0 masalah/.test(clean);
console.log(ok ? "\nSEMUA ATURAN BEKERJA" : "\nADA YANG SALAH");
process.exit(ok ? 0 : 1);