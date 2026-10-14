import { notFound } from "next/navigation";
import Link from "next/link";
import { materiList } from "@/lib/materi";
import { ContentRenderer } from "@/components/ContentRenderer";

export const instant = false;

export function generateStaticParams() {
  return materiList.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const materi = materiList.find((m) => m.slug === slug);
  if (!materi) return { title: "Materi tidak ditemukan" };
  return {
    title: `${materi.title} — Foton`,
    description: materi.summary,
  };
}

export default async function MateriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const materi = materiList.find((m) => m.slug === slug);
  if (!materi) notFound();

  const idx = materiList.findIndex((m) => m.slug === slug);
  const prev = idx > 0 ? materiList[idx - 1] : null;
  const next = idx < materiList.length - 1 ? materiList[idx + 1] : null;

  return (
    <div>
      <header className="border-b border-border-subtle bg-bg-elevated/50">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/materi"
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            ← Kembali ke Materi
          </Link>
          <div className="mt-4 flex items-start gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-xs font-mono font-semibold text-text-muted sm:h-12 sm:w-12 sm:text-sm">
              {String(materi.no).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-sm text-text-muted">
                Materi {materi.no} · {materi.category}
              </p>
              <h1 className="font-serif text-2xl font-bold text-text sm:text-3xl">
                {materi.title}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                {materi.summary}
              </p>
            </div>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <ContentRenderer blocks={materi.blocks} />

        <div className="mt-12 rounded-md border border-accent/30 bg-accent-subtle p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-text">
                Siap latihan soal untuk materi ini?
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Uji pemahamanmu dengan soal bergaya TKA dan pembahasan.
              </p>
            </div>
            <Link
              href={`/latihan/${materi.slug}`}
              className="shrink-0 self-start rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              Mulai latihan
            </Link>
          </div>
        </div>

        <nav className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/materi/${prev.slug}`}
              className="group flex flex-col rounded-md border border-border-subtle p-3 transition-colors hover:border-accent/50"
            >
              <span className="text-xs text-text-muted">← Sebelumnya</span>
              <span className="mt-0.5 text-sm font-medium text-text group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/materi/${next.slug}`}
              className="group flex flex-col items-end rounded-md border border-border-subtle p-3 transition-colors hover:border-accent/50"
            >
              <span className="text-xs text-text-muted">Selanjutnya →</span>
              <span className="mt-0.5 text-sm font-medium text-text group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  );
}
