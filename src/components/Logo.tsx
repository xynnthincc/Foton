type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Logo Foton.
 *
 * Monogram "F" yang lengan tengahnya melanjut menjadi gelombang cahaya,
 * ditambah berkas sinar (photon) yang terpancar dari ujung lengan atas.
 * Mengacu pada dua makna "Foton": cahaya (gelombang) dan foton (partikel cahaya).
 */
export function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Foton"
    >
      {/* Tile */}
      <rect width="40" height="40" rx="9" className="fill-accent" />

      {/* Sinar foton yang terpancar dari ujung lengan atas */}
      <g
        className="stroke-bg"
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity="0.75"
      >
        <path d="M26.6 6.4 L29.8 3.4" />
        <path d="M30.4 9 L34.6 9" />
        <path d="M26.6 11.6 L29.8 14.6" />
      </g>

      {/* Batang F */}
      <path
        d="M13 10.6 V29.4"
        className="stroke-bg"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* Lengan atas F */}
      <path
        d="M13 11 H24.6"
        className="stroke-bg"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* Lengan tengah F yang melanjut menjadi gelombang cahaya */}
      <path
        d="M13 20.4 H19.4"
        className="stroke-bg"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M19.4 20.4 q2.4 -3.6 4.8 0 t4.8 0"
        className="stroke-bg"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

/** Logo + wordmark untuk header/footer */
export function LogoLockup({
  size = 36,
  subtitle = "Belajar Fisika",
}: {
  size?: number;
  subtitle?: string;
}) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Logo size={size} className="shrink-0" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-serif text-lg font-semibold text-text">Foton</span>
        <span className="mt-0.5 truncate text-[10px] uppercase tracking-wider text-text-muted">
          {subtitle}
        </span>
      </span>
    </span>
  );
}
