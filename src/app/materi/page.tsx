import Link from "next/link";
import { materiList } from "@/lib/materi";

export default function MateriPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-text">Materi Fisika</h1>
        <p className="mt-2 text-sm text-text-secondary max-w-2xl">
          15 topik lengkap dengan penjelasan, rumus, keterangan simbol, contoh
          soal, dan tips TKA.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {materiList.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/materi/${m.slug}`}
              className="group block rounded-md border border-border-subtle bg-surface/30 p-4 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-xs font-mono font-semibold text-text-muted group-hover:border-accent/50 group-hover:text-accent transition-colors">
                  {String(m.no).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted">{m.category}</p>
                  <h3 className="mt-0.5 font-medium text-text group-hover:text-accent transition-colors">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted line-clamp-2 leading-snug">
                    {m.summary}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
