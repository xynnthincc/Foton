const fs = require("fs");
const path = require("path");

const base = path.join(__dirname, "src", "lib");

// kata/karakter yang tidak mungkin muncul pada teks Indonesia yang benar
const suspect = [
  // CJK / Thai / Devanagari nyasar
  { re: /[\u3000-\u9FFF\u0E00-\u0E7F\u0900-\u097F]/, why: "karakter CJK/Asia non-Latin" },
  // kata Inggris yang seharusnya Indonesia
  { re: /\b(would've|disains|Interfaces|EXCEPTION|_rel|discribe|cause)\b/, why: "kata Inggris nyasar" },
  // sisa mojibake
  { re: /[\u00C2\u00E2][\u0080-\u00BF\u2013\u2014\u2020\u2019]/, why: "mojibake" },
  { re: /\uFFFD/, why: "replacement char" },
  // sisa placeholder
  { re: /\b(TODO|FIXME|PLACEHOLDER|XXX|Lorem)\b/, why: "placeholder" },
  // $ yang tidak berpasangan dalam satu string literal
  { re: /"(?:[^"\\]|\\.)*"/, why: "CEK-PASANGAN-$", countOnly: true },
];

let issues = 0;

for (const f of fs.readdirSync(base)) {
  if (!f.endsWith(".ts")) continue;
  const src = fs.readFileSync(path.join(base, f), "utf8");
  const lines = src.split("\n");

  lines.forEach((l, i) => {
    // lewati baris LaTeX murni (latex: "...")
    const isLatexOnly = /^\s*(latex|formulaLatex|explanationLatex):/.test(l);

    for (const s of suspect) {
      if (s.countOnly) continue;
      const m = l.match(s.re);
      if (m) {
        issues++;
        console.log(`${f}:${i + 1} [${s.why}] ${l.trim().slice(0, 130)}`);
      }
    }

    // cek pasangan $ per string
    if (!isLatexOnly) {
      const strs = l.match(/"(?:[^"\\]|\\.)*"/g) || [];
      for (const str of strs) {
        const dollars = (str.match(/\$/g) || []).length;
        if (dollars % 2 !== 0) {
          issues++;
          console.log(`${f}:${i + 1} [$ ganjil: ${dollars}] ${l.trim().slice(0, 120)}`);
        }
      }
    }
  });
}

console.log(`\n=== ${issues} masalah ditemukan ===`);
