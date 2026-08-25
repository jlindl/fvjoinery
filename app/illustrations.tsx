/* ==========================================================================
   Illustrations — original "measured drawing" artwork used in the image slots
   until FV supply real photos. Orange + slate technical elevations of the
   actual jobs, so the page reads as FV's own visual language (not stock).
   Colours resolve from tokens.css via CSS custom properties, so these re-theme
   with the rest of the site — tokens.css stays the single palette file.
   ========================================================================== */
import type { ReactNode } from "react";

const INK = "var(--color-ink)";
const ACC = "var(--color-accent)";
const ACCS = "var(--color-accent-strong)";
const HAIR = "var(--color-hairline)";
const BRASSHI = "var(--color-accent-hi)";
const PAPER = "var(--color-bg)";
const SURFACE = "var(--color-surface)";
const INKSOFT = "var(--color-ink-soft)";

export type IllustrationVariant =
  | "kitchen"
  | "shelving"
  | "bathroom"
  | "panelling"
  | "flooring"
  | "painting"
  | "door"
  | "bench"
  | "gardenroom"
  | "band";

/* horizontal dimension line with end ticks + arrowheads + label */
function DimH({ x1, x2, y, label }: { x1: number; x2: number; y: number; label: string }) {
  return (
    <g stroke={ACCS} strokeWidth={1} fill="none">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <path d={`M${x1 + 6} ${y - 3} ${x1} ${y} ${x1 + 6} ${y + 3}`} />
      <path d={`M${x2 - 6} ${y - 3} ${x2} ${y} ${x2 - 6} ${y + 3}`} />
      <rect
        x={(x1 + x2) / 2 - 18}
        y={y - 8}
        width={36}
        height={16}
        fill={PAPER}
        stroke="none"
      />
      <text
        x={(x1 + x2) / 2}
        y={y + 4}
        textAnchor="middle"
        className="font-body"
        fontSize="10"
        fill={ACCS}
        stroke="none"
      >
        {label}
      </text>
    </g>
  );
}

function TitleBlock({ index, label }: { index: string; label: string }) {
  return (
    <g className="font-body" fontSize="9" stroke="none">
      <text x={22} y={283} fill={ACCS} letterSpacing="1.2" fontWeight={600}>
        FIG.{index}
      </text>
      <text
        x={22}
        y={293}
        fill={INK}
        opacity={0.6}
        letterSpacing="0.5"
      >
        {label.toUpperCase()}
      </text>
      <text
        x={378}
        y={288}
        textAnchor="end"
        fill={INK}
        opacity={0.45}
        letterSpacing="1.4"
      >
        FV · SCALE 1:20
      </text>
    </g>
  );
}

function Sheet({
  children,
  index,
  label,
}: {
  children: ReactNode;
  index: string;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={SURFACE} />
          <stop offset="1" stopColor={HAIR} />
        </linearGradient>
        <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke={HAIR} strokeWidth="0.6" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#pg)" />
      <rect width="400" height="300" fill="url(#grid)" />
      {/* corner registration marks */}
      <g stroke={ACC} strokeWidth="1.4" fill="none" opacity="0.8">
        <path d="M14 24V14H24" />
        <path d="M386 24V14H376" />
        <path d="M14 276v10h10" />
        <path d="M386 276v10h-10" />
      </g>
      {children}
      <TitleBlock index={index} label={label} />
    </svg>
  );
}

export function Illustration({
  variant,
  index = "01",
  label = "",
}: {
  variant: IllustrationVariant;
  index?: string;
  label?: string;
}) {
  if (variant === "band") return <TimberBand />;

  const stroke = { stroke: INK, strokeWidth: 2, fill: "none" as const };
  const accFill = "color-mix(in srgb, var(--color-accent) 14%, transparent)";

  const motif: Record<Exclude<IllustrationVariant, "band">, ReactNode> = {
    kitchen: (
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* wall units */}
        <rect x="86" y="82" width="104" height="46" {...stroke} />
        <rect x="210" y="82" width="104" height="46" {...stroke} />
        <line x1="130" y1="120" x2="146" y2="120" {...stroke} />
        <line x1="254" y1="120" x2="270" y2="120" {...stroke} />
        {/* worktop */}
        <rect x="80" y="150" width="240" height="9" fill={accFill} stroke={INK} strokeWidth="2" />
        {/* base units */}
        <rect x="82" y="159" width="76" height="74" {...stroke} />
        <rect x="160" y="159" width="76" height="74" {...stroke} />
        <rect x="238" y="159" width="80" height="74" {...stroke} />
        <line x1="116" y1="170" x2="124" y2="170" {...stroke} />
        <line x1="194" y1="170" x2="202" y2="170" {...stroke} />
        <line x1="274" y1="170" x2="282" y2="170" {...stroke} />
        {/* tap */}
        <path d="M150 150v-10a8 8 0 0 1 16 0" stroke={ACC} strokeWidth="2" fill="none" />
        <DimH x1={80} x2={320} y={66} label="3600" />
      </g>
    ),
    gardenroom: (
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* overhanging flat roof */}
        <rect x="64" y="96" width="272" height="12" fill={accFill} stroke={INK} strokeWidth="2" />
        {/* clad walls either side of the glazed front */}
        <rect x="74" y="108" width="252" height="124" {...stroke} />
        {[86, 96, 106, 296, 306, 316].map((x) => (
          <line key={x} x1={x} y1="108" x2={x} y2="232" stroke={HAIR} strokeWidth="1.5" />
        ))}
        {/* fixed lights, then the door pair on centre */}
        <rect x="116" y="120" width="56" height="100" {...stroke} />
        <rect x="180" y="120" width="40" height="100" {...stroke} />
        <rect x="220" y="120" width="40" height="100" {...stroke} />
        <rect x="268" y="120" width="20" height="100" {...stroke} />
        <path d="M214 170h-4M226 170h4" stroke={ACC} strokeWidth="2" fill="none" />
        {/* level base */}
        <line x1="58" y1="232" x2="342" y2="232" stroke={INK} strokeWidth="2" />
        <path d="M66 232l-6 8M84 232l-6 8M316 232l-6 8M334 232l-6 8" stroke={HAIR} strokeWidth="1.5" fill="none" />
        <DimH x1={64} x2={336} y={84} label="4200" />
      </g>
    ),
    shelving: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="112" y="72" width="176" height="162" stroke={HAIR} strokeWidth="2" fill="none" />
        {[118, 158, 198].map((y) => (
          <g key={y}>
            <rect x="112" y={y} width="176" height="7" fill={accFill} stroke={INK} strokeWidth="2" />
            <path d={`M126 ${y + 7}l10 14M274 ${y + 7}l-10 14`} stroke={ACC} strokeWidth="1.5" fill="none" />
          </g>
        ))}
        <rect x="130" y="94" width="10" height="20" {...stroke} />
        <rect x="146" y="98" width="10" height="16" {...stroke} />
        <circle cx="250" cy="146" r="9" {...stroke} />
        <rect x="150" y="176" width="26" height="18" {...stroke} />
        <DimH x1={112} x2={288} y={62} label="900" />
      </g>
    ),
    bathroom: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="92" y="74" width="150" height="118" {...stroke} />
        <line x1="92" y1="114" x2="242" y2="114" stroke={HAIR} strokeWidth="1.4" />
        <line x1="92" y1="154" x2="242" y2="154" stroke={HAIR} strokeWidth="1.4" />
        <line x1="142" y1="74" x2="142" y2="192" stroke={HAIR} strokeWidth="1.4" />
        <line x1="192" y1="74" x2="192" y2="192" stroke={HAIR} strokeWidth="1.4" />
        <rect x="118" y="88" width="98" height="42" fill={accFill} stroke={INK} strokeWidth="2" />
        {/* basin */}
        <path d="M258 150h58l-8 26h-42z" {...stroke} />
        <path d="M287 150v-10a7 7 0 0 1 14 0" stroke={ACC} strokeWidth="2" fill="none" />
        <DimH x1={92} x2={242} y={64} label="1500" />
      </g>
    ),
    panelling: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="88" y="72" width="224" height="162" stroke={HAIR} strokeWidth="2" fill="none" />
        <line x1="88" y1="120" x2="312" y2="120" stroke={INK} strokeWidth="2" />
        {[122, 150, 178, 206, 234, 262, 290].map((x) => (
          <line key={x} x1={x} y1="120" x2={x} y2="222" stroke={INK} strokeWidth="1.6" />
        ))}
        <rect x="88" y="222" width="224" height="12" fill={accFill} stroke={INK} strokeWidth="2" />
        <circle cx="200" cy="98" r="7" stroke={ACC} strokeWidth="2" fill="none" />
        <DimH x1={88} x2={312} y={62} label="2400" />
      </g>
    ),
    flooring: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <line x1="80" y1="120" x2="320" y2="120" stroke={INK} strokeWidth="2" />
        {[138, 158, 178, 198, 218].map((y, i) => (
          <g key={y}>
            <line x1="80" y1={y} x2="320" y2={y} stroke={INK} strokeWidth="1.6" />
            <line x1={120 + i * 34} y1={y - 20} x2={120 + i * 34} y2={y} stroke={ACC} strokeWidth="1.2" />
            <line x1={230 - i * 26} y1={y - 20} x2={230 - i * 26} y2={y} stroke={ACC} strokeWidth="1.2" />
          </g>
        ))}
        <rect x="80" y="112" width="240" height="8" fill={accFill} stroke="none" />
        <DimH x1={80} x2={320} y={104} label="LVT / ENGINEERED" />
      </g>
    ),
    painting: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="96" y="74" width="150" height="160" stroke={HAIR} strokeWidth="2" fill="none" />
        <rect x="112" y="90" width="118" height="120" fill={accFill} stroke="none" />
        {/* roller */}
        <rect x="150" y="96" width="46" height="16" rx="3" stroke={ACC} strokeWidth="2" fill="none" />
        <path d="M196 104h14v10h-22" stroke={INK} strokeWidth="2" fill="none" />
        <path d="M200 114l24 40" stroke={INK} strokeWidth="2" />
        {/* paint tin */}
        <rect x="250" y="196" width="40" height="34" {...stroke} />
        <path d="M250 196c8-8 32-8 40 0" stroke={INK} strokeWidth="2" fill="none" />
        <DimH x1={96} x2={246} y={64} label="FEATURE WALL" />
      </g>
    ),
    door: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="126" y="70" width="148" height="176" {...stroke} />
        <rect x="134" y="76" width="132" height="164" stroke={INK} strokeWidth="1.6" fill="none" />
        <rect x="146" y="90" width="108" height="60" fill={accFill} stroke={INK} strokeWidth="1.6" />
        <rect x="146" y="162" width="108" height="66" fill={accFill} stroke={INK} strokeWidth="1.6" />
        <rect x="130" y="96" width="6" height="14" fill={ACC} stroke="none" />
        <rect x="130" y="204" width="6" height="14" fill={ACC} stroke="none" />
        <circle cx="244" cy="160" r="4" fill={ACC} stroke="none" />
        <line x1="120" y1="246" x2="280" y2="246" stroke={INK} strokeWidth="2" />
        <DimH x1={126} x2={274} y={60} label="762" />
      </g>
    ),
    bench: (
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* pegboard */}
        <rect x="80" y="66" width="240" height="132" stroke={HAIR} strokeWidth="2" fill="none" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4, 5, 6, 7].map((c) => (
            <circle key={`${r}-${c}`} cx={100 + c * 30} cy={82 + r * 30} r="1.4" fill={HAIR} stroke="none" />
          ))
        )}
        {/* saw */}
        <path d="M96 96l58 6-4 16z" {...stroke} />
        <path d="M92 92l8-2 2 8-8 2z" stroke={ACC} strokeWidth="2" fill="none" />
        {/* try-square */}
        <path d="M196 84v46h34" {...stroke} />
        {/* hammer */}
        <path d="M250 88h22l-3 10h-16z" {...stroke} />
        <line x1="261" y1="98" x2="261" y2="134" stroke={ACC} strokeWidth="3" />
        {/* spirit level on the bench */}
        <rect x="92" y="214" width="216" height="16" {...stroke} />
        <rect x="188" y="218" width="24" height="8" rx="4" stroke={ACC} strokeWidth="1.6" fill="none" />
        <DimH x1={80} x2={320} y={250} label="TOOLKIT" />
      </g>
    ),
  };

  return (
    <Sheet index={index} label={label}>
      {motif[variant]}
    </Sheet>
  );
}

/* Dark, wide timber band used behind the "our promise" section */
function TimberBand() {
  const lines = Array.from({ length: 22 });
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={INKSOFT} />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={INK} />
      <rect width="400" height="300" fill="url(#tg)" />
      {/* long grain */}
      {lines.map((_, i) => {
        const y = 8 + i * 13;
        const bow = (i % 3) - 1;
        return (
          <path
            key={i}
            d={`M0 ${y} C120 ${y + bow * 4}, 260 ${y - bow * 5}, 400 ${y + bow * 3}`}
            fill="none"
            stroke={ACC}
            strokeWidth={i % 5 === 0 ? 1.3 : 0.7}
            opacity={i % 5 === 0 ? 0.28 : 0.16}
          />
        );
      })}
      {/* knots */}
      <ellipse cx="300" cy="120" rx="16" ry="7" fill="none" stroke={BRASSHI} strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="300" cy="120" rx="7" ry="3" fill="none" stroke={BRASSHI} strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="110" cy="210" rx="12" ry="6" fill="none" stroke={BRASSHI} strokeWidth="0.8" opacity="0.35" />
    </svg>
  );
}
