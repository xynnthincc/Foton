"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/materi", label: "Materi" },
  { href: "/latihan", label: "Latihan Soal" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Tutup menu setiap navigasi berganti halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="min-w-0" aria-label="Foton — beranda">
          <LogoLockup />
        </Link>

        {/* Navigasi desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-accent-subtle text-accent"
                  : "text-text-secondary hover:bg-surface hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface hover:text-text md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Panel menu mobile */}
      {open && (
        <div className="border-t border-border-subtle bg-bg md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-2 py-2 sm:px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-accent-subtle text-accent"
                    : "text-text-secondary hover:bg-surface hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
