"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/materi", label: "Materi" },
  { href: "/latihan", label: "Latihan Soal" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-bg font-bold text-lg">
            Φ
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-text">
              Foton
            </span>
            <span className="text-[10px] uppercase tracking-wider text-text-muted">
              Belajar Fisika
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  isActive
                    ? "bg-accent-subtle text-accent"
                    : "text-text-secondary hover:text-text hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
