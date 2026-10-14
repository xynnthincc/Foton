import { notFound } from "next/navigation";
import { latihanList } from "@/lib/soal";
import { QuizRunner } from "@/components/QuizRunner";

export function generateStaticParams() {
  return latihanList.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const latihan = latihanList.find((l) => l.slug === slug);
  if (!latihan) return { title: "Latihan tidak ditemukan" };
  return {
    title: `${latihan.title} — Latihan Foton`,
    description: latihan.description,
  };
}

export default async function LatihanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const latihan = latihanList.find((l) => l.slug === slug);
  if (!latihan) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="font-serif text-2xl font-bold text-text">
          {latihan.title}
        </h1>
        <p className="mt-1 text-sm text-text-muted">{latihan.description}</p>
      </div>

      <QuizRunner latihan={latihan} />
    </div>
  );
}
