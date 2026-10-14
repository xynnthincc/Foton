import Link from "next/link";
import { materiList } from "@/lib/materi";
import { latihanList } from "@/lib/soal";

export default function Home() {
  const totalSoal = latihanList.reduce((sum, l) => sum + l.soalList.length, 0);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border-subtle">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Persiapan TKA Fisika
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-text sm:text-5xl">
              Belajar Fisika untuk
              <span className="text-accent"> Tes Kemampuan Akademik</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              Materi lengkap dengan penjelasan, rumus, keterangan simbol, dan
              contoh soal, disertai latihan bergaya TKA dengan pembahasan detail
              untuk persiapan ujian masuk universitas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/materi"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
              >
                Mulai belajar
              </Link>
              <Link
                href="/latihan"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-surface"
              >
                Latihan soal
              </Link>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
            <div className="rounded-md border border-border-subtle px-4 py-3">
              <dd className="text-2xl font-bold text-accent">
                {materiList.length}
              </dd>
              <dt className="mt-0.5 text-xs text-text-muted">Materi</dt>
            </div>
            <div className="rounded-md border border-border-subtle px-4 py-3">
              <dd className="text-2xl font-bold text-accent">{totalSoal}</dd>
              <dt className="mt-0.5 text-xs text-text-muted">Soal latihan</dt>
            </div>
            <div className="rounded-md border border-border-subtle px-4 py-3">
              <dd className="text-2xl font-bold text-accent">15</dd>
              <dt className="mt-0.5 text-xs text-text-muted">Topik</dt>
            </div>
          </dl>
        </div>
      </section>

      {/* Materi preview */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="mb-6 flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-text">
              Materi Fisika
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              15 topik dengan penjelasan, rumus, keterangan simbol, dan contoh
            </p>
          </div>
          <Link
            href="/materi"
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Semua materi
          </Link>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {materiList.slice(0, 6).map((m) => (
            <li key={m.slug}>
              <Link
                href={`/materi/${m.slug}`}
                className="group block rounded-md border border-border-subtle bg-surface/30 p-4 transition-colors hover:border-accent/50"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-xs font-mono font-semibold text-text-muted">
                    {String(m.no).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-medium text-text group-hover:text-accent transition-colors">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted line-clamp-2 leading-snug">
                      {m.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Latihan preview */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <header className="mb-6 flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-text">
              Latihan Soal
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Soal bergaya TKA dengan pembahasan step-by-step
            </p>
          </div>
          <Link
            href="/latihan"
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Semua latihan
          </Link>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {latihanList.slice(0, 4).map((l) => (
            <li key={l.slug}>
              <Link
                href={`/latihan/${l.slug}`}
                className="block rounded-md border border-border-subtle bg-surface/30 p-4 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium text-text">{l.title}</h3>
                  <DifficultyBadge difficulty={l.difficulty} />
                </div>
                <p className="mt-1.5 text-sm text-text-muted">{l.description}</p>
                <p className="mt-2 text-xs text-text-muted">
                  {l.soalList.length} soal · {l.category}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Mudah: "border-success/40 text-success",
    Sedang: "border-warning/40 text-warning",
    Sulit: "border-danger/40 text-danger",
  };
  return (
    <span className={`text-xs font-medium ${colors[difficulty] ?? ""}`}>
      {difficulty}
    </span>
  );
}
