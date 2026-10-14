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
        className="my-4 overflow-x-auto rounded-lg border border-border-subtle bg-bg-elevated px-5 py-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className="inline-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
