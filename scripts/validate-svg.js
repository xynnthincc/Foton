const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "diagrams");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".svg"));
let bad = 0;

for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  const issues = [];

  const vb = src.match(/viewBox="([^"]+)"/);
  if (!vb) issues.push("tanpa viewBox");
  if (!/aria-label="[^"]{5,}"/.test(src)) issues.push("tanpa aria-label");

  const defined = new Set([...src.matchAll(/<marker[^>]*id="([^"]+)"/g)].map((m) => m[1]));
  const used = new Set([...src.matchAll(/url\(#([^)]+)\)/g)].map((m) => m[1]));
  for (const u of used) if (!defined.has(u)) issues.push("marker tak terdefinisi #" + u);

  const open = (src.match(/<(?!\/)[a-zA-Z]/g) || []).length;
  const close = (src.match(/<\/[a-zA-Z]/g) || []).length;
  const self = (src.match(/\/>/g) || []).length;
  if (open !== close + self) issues.push("tag tidak seimbang " + open + "/" + (close + self));

  if (!src.trimEnd().endsWith("</svg>")) issues.push("TAG PENUTUP SVG TERPOTONG");
  if (/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/.test(src)) issues.push("& belum di-escape");
  if (/[\u3000-\u9FFF]/.test(src)) issues.push("CJK nyasar");
  if (/\u00C2[\u0080-\u00BF]|\u00E2\u2020|\uFFFD/.test(src)) issues.push("mojibake");
  if (/[\u0080-\u009F]/.test(src)) issues.push("kontrol char C1");

  const sizes = (src.match(/font-size:\s*([\d.]+)px/g) || []).map((s) => parseFloat(s.match(/[\d.]+/)[0]));
  if (sizes.some((s) => s < 10)) issues.push("ada font < 10px");

  if (issues.length) {
    bad++;
    console.log("[!] " + f + "\n    " + issues.join("\n    "));
  }
}

console.log("\n" + files.length + " diagram, " + bad + " bermasalah");
