import type { CSSProperties } from "react";

interface DecorProps {
  className?: string;
  style?: CSSProperties;
  opacity?: number;
}

/* ── Feuille de monstera ── */
export function MonsleraLeaf({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      <path d="M60 130 C60 130 10 90 15 45 C20 0 75 5 75 40 C75 75 60 130 60 130Z" fill="#7A9685"/>
      <path d="M60 130 C60 130 60 80 60 40" stroke="#7A9685" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M15 55 C35 50 55 55 60 70" stroke="#7A9685" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M20 75 C42 68 58 72 62 88" stroke="#7A9685" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M22 96 C44 88 59 90 63 105" stroke="#7A9685" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* Découpes monstera */}
      <path d="M15 55 C15 55 5 30 30 28 C55 26 75 5 75 40" fill="#FAF7F2" opacity="0.8"/>
      <path d="M22 96 C22 96 -5 80 8 60" fill="#FAF7F2" opacity="0.8"/>
    </svg>
  );
}

/* ── Branche avec feuilles rondes ── */
export function LeafBranch({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      {/* Tige principale */}
      <path d="M90 210 C85 170 70 130 55 90 C40 50 60 15 80 10" stroke="#7B5230" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Feuilles gauche */}
      <ellipse cx="45" cy="75" rx="22" ry="14" transform="rotate(-40 45 75)" fill="#7A9685"/>
      <path d="M45 75 C55 68 62 72 65 82" stroke="#7A9685" strokeWidth="0.8" fill="none"/>
      <ellipse cx="38" cy="118" rx="20" ry="12" transform="rotate(-50 38 118)" fill="#7A9685" opacity="0.85"/>
      <ellipse cx="50" cy="160" rx="18" ry="11" transform="rotate(-35 50 160)" fill="#7A9685" opacity="0.75"/>
      {/* Feuilles droite */}
      <ellipse cx="80" cy="55" rx="20" ry="12" transform="rotate(30 80 55)" fill="#7A9685" opacity="0.9"/>
      <ellipse cx="72" cy="98" rx="18" ry="11" transform="rotate(25 72 98)" fill="#7A9685" opacity="0.8"/>
      <ellipse cx="78" cy="138" rx="16" ry="10" transform="rotate(20 78 138)" fill="#7A9685" opacity="0.7"/>
    </svg>
  );
}

/* ── Bougie allumée ── */
export function CandleDecor({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      {/* Flamme */}
      <path d="M30 18 C30 18 22 10 25 4 C27 0 33 0 35 4 C38 10 30 18 30 18Z" fill="#C9908A"/>
      <path d="M30 16 C30 16 26 11 28 7 C29 5 31 5 32 7 C34 11 30 16 30 16Z" fill="#FAF7F2" opacity="0.8"/>
      {/* Corps bougie */}
      <rect x="20" y="18" width="20" height="55" rx="4" fill="#7B5230"/>
      {/* Mèche */}
      <line x1="30" y1="18" x2="30" y2="22" stroke="#2C1A0E" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Soucouppe */}
      <ellipse cx="30" cy="73" rx="18" ry="5" fill="#A67C52"/>
      {/* Reflet */}
      <rect x="24" y="24" width="4" height="20" rx="2" fill="#FAF7F2" opacity="0.2"/>
    </svg>
  );
}

/* ── Tasse de thé ── */
export function TeaCupDecor({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      {/* Vapeur */}
      <path d="M30 18 C30 12 34 8 30 4" stroke="#A67C52" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M42 16 C42 10 46 6 42 2" stroke="#A67C52" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M54 18 C54 12 58 8 54 4" stroke="#A67C52" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Tasse */}
      <path d="M18 24 L22 62 Q42 68 62 62 L66 24 Z" fill="#7B5230"/>
      {/* Anse */}
      <path d="M66 32 C78 32 78 52 66 52" stroke="#7B5230" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Soucoupe */}
      <ellipse cx="42" cy="65" rx="30" ry="7" fill="#A67C52"/>
      {/* Reflet tasse */}
      <path d="M26 30 C26 28 28 27 28 35" stroke="#FAF7F2" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

/* ── Fleur simple ── */
export function SimpleFlower({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      {/* Pétales */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse key={i} cx="40" cy="20" rx="8" ry="14" fill="#C9908A"
          transform={`rotate(${angle} 40 40)`} opacity={0.7 + (i % 2) * 0.3}/>
      ))}
      {/* Centre */}
      <circle cx="40" cy="40" r="10" fill="#7B5230"/>
      <circle cx="40" cy="40" r="6" fill="#A67C52"/>
    </svg>
  );
}

/* ── Étoile/sparkle ── */
export function SparkleDecor({ className = "", style, opacity = 0.12 }: DecorProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      <path d="M20 2 L22 18 L38 20 L22 22 L20 38 L18 22 L2 20 L18 18 Z" fill="#C9908A"/>
    </svg>
  );
}

/* ── Croissant de lune ── */
export function MoonDecor({ className = "", style, opacity = 0.08 }: DecorProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      <path d="M38 8 C20 12 10 28 14 46 C18 60 34 66 48 58 C32 58 20 46 20 30 C20 16 28 6 38 8Z" fill="#A67C52"/>
    </svg>
  );
}

/* ── Feuille de laurier / herbe ── */
export function LavenderSprig({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 50 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      <path d="M25 115 C25 85 25 55 25 25" stroke="#7A9685" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {[20, 35, 50, 65, 80, 95].map((y, i) => (
        <g key={i}>
          <ellipse cx={i % 2 === 0 ? 16 : 34} cy={y} rx="8" ry="5"
            transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 16 : 34} ${y})`}
            fill="#7A9685" opacity={0.9 - i * 0.05}/>
        </g>
      ))}
    </svg>
  );
}

/* ── Petit carnet / journal ── */
export function NotebookDecor({ className = "", style, opacity = 0.06 }: DecorProps) {
  return (
    <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      <rect x="10" y="5" width="52" height="78" rx="4" fill="#7B5230"/>
      <rect x="6" y="5" width="8" height="78" rx="3" fill="#A67C52"/>
      {/* Lignes pages */}
      <line x1="20" y1="25" x2="55" y2="25" stroke="#FAF7F2" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="35" x2="55" y2="35" stroke="#FAF7F2" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="45" x2="55" y2="45" stroke="#FAF7F2" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="55" x2="45" y2="55" stroke="#FAF7F2" strokeWidth="1" opacity="0.3"/>
      {/* Signe page */}
      <path d="M48 5 L48 20 L54 14 L60 20 L60 5" fill="#C9908A" opacity="0.8"/>
    </svg>
  );
}

/* ── Fougère ── */
export function FernLeaf({ className = "", style, opacity = 0.07 }: DecorProps) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }} aria-hidden="true">
      <path d="M50 155 C48 120 38 85 20 50 C10 30 15 5 35 5" stroke="#7A9685" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Petites feuilles côté gauche */}
      {[140, 118, 96, 74, 52, 30].map((y, i) => (
        <ellipse key={`l${i}`} cx={50 - 8 - i * 2} cy={y} rx={12 - i} ry={5}
          transform={`rotate(-${50 + i * 5} ${50 - 8 - i * 2} ${y})`}
          fill="#7A9685" opacity={0.8 - i * 0.05}/>
      ))}
      {/* Petites feuilles côté droit */}
      {[130, 108, 86, 64, 42].map((y, i) => (
        <ellipse key={`r${i}`} cx={50 + 8 + i} cy={y} rx={10 - i} ry={4}
          transform={`rotate(${40 + i * 5} ${50 + 8 + i} ${y})`}
          fill="#7A9685" opacity={0.75 - i * 0.05}/>
      ))}
    </svg>
  );
}
