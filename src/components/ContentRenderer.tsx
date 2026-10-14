import { ContentBlock, GlossaryItem } from "@/lib/types";
import { Math } from "./Math";

const LETTER_COLORS = [""];

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading": {
      if (block.level === 2) {
        return (
          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-text">
            <InlineText text={block.text} />
          </h2>
        );
      }
      return (
        <h3 className="mt-7 mb-3 font-serif text-lg font-semibold text-text">
          <InlineText text={block.text} />
        </h3>
      );
    }

    case "paragraph": {
      return (
        <p className="leading-relaxed text-text-secondary">
          <InlineText text={block.text} />
        </p>
      );
    }

    case "formula": {
      return (
        <div className="space-y-1.5">
          <Math tex={block.latex} display />
          {block.description && (
            <p className="text-sm text-text-muted italic leading-relaxed">
              <InlineText text={block.description} />
            </p>
          )}
        </div>
      );
    }

    case "list": {
      if (block.ordered) {
        return (
          <ol className="ml-6 list-decimal space-y-2 text-text-secondary marker:text-accent marker:font-semibold">
            {block.items.map((item, i) => (
              <ListItem key={i} item={item} />
            ))}
          </ol>
        );
      }
      return (
        <ul className="ml-6 list-disc space-y-2 text-text-secondary marker:text-accent">
          {block.items.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </ul>
      );
    }

    case "table": {
      return (
        <div className="overflow-x-auto rounded-lg border border-border-subtle">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text"
                  >
                    <InlineText text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border-subtle last:border-0"
                >
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-text-secondary">
                      <InlineText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "note": {
      const styles = {
        info: "border-info/40 text-info",
        warning: "border-warning/40 text-warning",
        tip: "border-accent/40 text-accent",
      };
      const labels = { info: "Catatan", warning: "Perhatian", tip: "Tips" };
      const cls = styles[block.variant ?? "info"];
      return (
        <div className={`rounded-lg border-l-4 bg-surface/40 px-4 py-3 ${cls}`}>
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">
              {labels[block.variant ?? "info"]}.{" "}
            </span>
            <InlineText text={block.text} />
          </p>
        </div>
      );
    }

    case "glossary": {
      return <GlossaryRenderer block={block} />;
    }

    case "image": {
      return (
        <figure className="my-6">
          {/* Diagram lebarnya 600px; di layar HP diberi lebar minimum agar
              label tetap terbaca dan bisa digeser horizontally. */}
          <div className="overflow-x-auto rounded-lg border border-border-subtle bg-bg-elevated px-3 py-4 sm:px-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              className="mx-auto h-auto w-full min-w-[520px] sm:min-w-0"
              loading="lazy"
              decoding="async"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2.5 border-l-2 border-border pl-3 text-sm leading-relaxed text-text-muted">
              <InlineText text={block.caption} />
            </figcaption>
          )}
        </figure>
      );
    }

    case "definition": {
      return (
        <div className="rounded-lg border border-border-subtle bg-surface/40 p-4">
          <p className="text-sm">
            <span className="font-semibold text-text"><InlineText text={block.term} />:</span>{" "}
            <span className="text-text-secondary"><InlineText text={block.definition} /></span>
          </p>
        </div>
      );
    }

    case "example": {
      return (
        <div className="rounded-lg border border-border bg-surface/30 p-4">
          <p className="mb-3 text-sm font-semibold text-accent">
            Contoh: <InlineText text={block.title} />
          </p>
          <div className="space-y-3">
            {block.blocks.map((b, i) => (
              <BlockRenderer key={i} block={b} />
            ))}
          </div>
        </div>
      );
    }
  }
}

function GlossaryRenderer({ block }: { block: { title?: string; items: GlossaryItem[] } }) {
  return (
    <div className="space-y-2">
      {block.title && (
        <p className="text-sm font-semibold text-text">{block.title}</p>
      )}
      <div className="overflow-x-auto rounded-lg border border-border-subtle">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="w-16 px-3 py-2.5 text-left font-semibold text-text sm:w-20 sm:px-4">
                Simbol
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-text sm:px-4">
                Arti
              </th>
              <th className="w-24 px-3 py-2.5 text-left font-semibold text-text sm:w-32 sm:px-4">
                Satuan
              </th>
              {/* Kolom keterangan disembunyikan di layar sempit agar tabel tetap legibel */}
              <th className="hidden px-4 py-2.5 text-left font-semibold text-text md:table-cell">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {block.items.map((g, i) => (
              <tr key={i} className="border-b border-border-subtle last:border-0">
                <td className="px-3 py-2.5 font-mono font-semibold text-accent sm:px-4">
                  <InlineText text={g.symbol} />
                </td>
                <td className="px-3 py-2.5 text-text sm:px-4">
                  <InlineText text={g.meaning} />
                </td>
                <td className="px-3 py-2.5 font-mono text-text-muted sm:px-4">
                  <InlineText text={g.unit ?? "—"} />
                </td>
                <td className="hidden px-4 py-2.5 text-text-secondary md:table-cell">
                  {g.note ? <InlineText text={g.note} /> : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Keterangan dirinci di bawah tabel untuk layar sempit */}
      <ul className="space-y-1.5 md:hidden">
        {block.items
          .filter((g) => g.note)
          .map((g, i) => (
            <li key={i} className="text-xs leading-relaxed text-text-muted">
              <span className="font-mono font-semibold text-accent">
                <InlineText text={g.symbol} />
              </span>{" "}
              — <InlineText text={g.note ?? ""} />
            </li>
          ))}
      </ul>
    </div>
  );
}

function ListItem({ item }: { item: { text: string; children?: any[] } }) {
  return (
    <li>
      <InlineText text={item.text} />
      {item.children && item.children.length > 0 && (
        <ul className="ml-5 mt-2 list-disc space-y-1 text-text-muted marker:text-border">
          {item.children.map((child: any, i: number) => (
            <ListItem key={i} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\$.+?\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          return <Math key={i} tex={part.slice(1, -1)} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
