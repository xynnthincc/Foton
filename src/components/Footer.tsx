export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-bg font-bold">
              Φ
            </div>
            <span className="font-serif text-base font-semibold text-text">
              Foton
            </span>
          </div>
          <p className="text-sm text-text-muted">
            Dibuat untuk persiapan Tes Kemampuan Akademik
          </p>
        </div>
      </div>
    </footer>
  );
}
