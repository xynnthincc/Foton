import Link from "next/link";
import { latihanList } from "@/lib/soal";

export const metadata = {
  title: "Latihan Soal — Foton",
};

export default function LatihanPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-text">
          Latihan Soal
        </h1>
        <p className="mt-2 text-sm text-text-secondary max-w-2xl">
          Soal bergaya TKA dengan 5 pilihan jawaban (A-E) dan pembahasan lengkap.
          Pilih topik untuk mulai berlatih.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {latihanList.map((l) => (
          <li key={l.slug}>
            <Link
              href={`/latihan/${l.slug}`}
              className="group block rounded-md border border-border-subtle bg-surface/30 p-4 transition-colors hover:border-accent/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
                <h3 className="font-medium text-text group-hover:text-accent transition-colors">
                  {l.title}
                </h3>
                <DifficultyBadge difficulty={l.difficulty} />
              </div>
              <p className="mt-2 text-sm text-text-muted">{l.description}</p>
              <p className="mt-3 text-xs text-text-muted">
                {l.soalList.length} soal · {l.category}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Mudah: "text-success",
    Sedang: "text-warning",
    Sulit: "text-danger",
  };
  return (
    <span className={`text-xs font-medium ${colors[difficulty] ?? ""}`}>
      {difficulty}
    </span>
  );
}
