import katex from "katex";
import "katex/dist/katex.min.css";

type MathProps = {
  tex: string;
  display?: boolean;
};

export function Math({ tex, display = false }: MathProps) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: false,
    trust: true,
  });

  if (display) {
    return (
      <div
        className="my-4 overflow-x-auto rounded-lg border border-border-subtle bg-bg-elevated px-3 py-4 sm:px-5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    // max-w-full + overflow-x-auto: rumus inline yang panjang digulir di dalam
    // itself, bukan melebarkan halaman di layar sempit.
    <span
      className="inline-block max-w-full overflow-x-auto align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
