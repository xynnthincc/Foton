import Link from "next/link";
import { LogoLockup } from "./Logo";

const navLinks = [
  { href: "/materi", label: "Materi" },
  { href: "/latihan", label: "Latihan Soal" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <Link href="/" className="shrink-0" aria-label="Foton — beranda">
            <LogoLockup size={32} />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
            Dibuat untuk persiapan Tes Kemampuan Akademik
          </p>
        </div>
      </div>
    </footer>
  );
}
