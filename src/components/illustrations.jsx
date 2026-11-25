// Formal, line-art illustrations built from the brand palette so the site
// never depends on stock photography or external image hosts.

export function MeetingIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Docentes planeando la intervención">
      <rect x="0" y="0" width="400" height="300" rx="20" fill="var(--color-lavender-100)" />
      <ellipse cx="200" cy="235" rx="150" ry="10" fill="var(--color-plum-400)" opacity="0.15" />

      {/* table */}
      <rect x="90" y="170" width="220" height="14" rx="6" fill="var(--color-plum-800)" />
      <rect x="105" y="184" width="12" height="46" fill="var(--color-plum-800)" opacity="0.7" />
      <rect x="283" y="184" width="12" height="46" fill="var(--color-plum-800)" opacity="0.7" />

      {/* chart on table */}
      <rect x="165" y="140" width="70" height="34" rx="4" fill="var(--color-paper)" stroke="var(--color-gold)" strokeWidth="2" />
      <polyline points="172,166 185,150 198,160 212,142 228,148" fill="none" stroke="var(--color-gold-700)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* person left */}
      <circle cx="130" cy="118" r="16" fill="var(--color-rose)" />
      <path d="M104 172c2-24 20-38 26-38s24 14 26 38" fill="var(--color-plum-600)" />

      {/* person center */}
      <circle cx="200" cy="108" r="17" fill="var(--color-plum-950)" />
      <path d="M170 170c2-27 22-42 30-42s28 15 30 42" fill="var(--color-gold-700)" />

      {/* person right */}
      <circle cx="270" cy="118" r="16" fill="var(--color-lavender)" />
      <path d="M244 172c2-24 20-38 26-38s24 14 26 38" fill="var(--color-plum-800)" />

      {/* speech / notes marks */}
      <circle cx="330" cy="80" r="3" fill="var(--color-gold)" />
      <circle cx="345" cy="95" r="2.2" fill="var(--color-rose)" />
      <circle cx="60" cy="90" r="3" fill="var(--color-gold)" />
    </svg>
  );
}

export function ClassroomIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Estudiantes participando en clase">
      <rect x="0" y="0" width="400" height="300" rx="20" fill="var(--color-rose-100)" />

      {/* board */}
      <rect x="60" y="52" width="180" height="104" rx="6" fill="var(--color-plum-950)" />
      <rect x="60" y="52" width="180" height="104" rx="6" fill="none" stroke="var(--color-gold)" strokeWidth="3" />
      <path d="M84 130c18-30 40-30 58-6 16-22 38-24 58 2" stroke="var(--color-gold-300)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
      <line x1="80" y1="90" x2="150" y2="90" stroke="var(--color-cream)" strokeWidth="2.5" opacity="0.6" />
      <line x1="80" y1="102" x2="130" y2="102" stroke="var(--color-cream)" strokeWidth="2.5" opacity="0.4" />

      {/* teacher */}
      <circle cx="270" cy="118" r="15" fill="var(--color-plum-600)" />
      <path d="M245 176c2-25 22-40 30-40s28 15 30 40" fill="var(--color-plum-900)" />

      {/* desks with students */}
      {[70, 150, 230, 310].map((x, i) => (
        <g key={x}>
          <rect x={x} y="216" width="52" height="8" rx="3" fill="var(--color-plum-800)" opacity="0.55" />
          <circle cx={x + 26} cy="196" r="10" fill={i % 2 === 0 ? "var(--color-gold-300)" : "var(--color-lavender)"} />
          <path
            d={`M${x + 10} 216c1-14 12-22 16-22s15 8 16 22`}
            fill={i % 2 === 0 ? "var(--color-plum-400)" : "var(--color-rose)"}
          />
        </g>
      ))}
    </svg>
  );
}

export function ResultsIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Resultados e indicadores de participación">
      <rect x="0" y="0" width="400" height="300" rx="20" fill="var(--color-gold-100)" />

      {/* dashboard card */}
      <rect x="55" y="50" width="290" height="200" rx="14" fill="var(--color-paper)" stroke="var(--color-line)" strokeWidth="2" />
      <circle cx="80" cy="72" r="4" fill="var(--color-rose)" />
      <circle cx="94" cy="72" r="4" fill="var(--color-gold)" />
      <circle cx="108" cy="72" r="4" fill="var(--color-lavender)" />

      {/* bar chart */}
      <g>
        <rect x="80" y="150" width="24" height="70" rx="4" fill="var(--color-lavender)" />
        <rect x="116" y="120" width="24" height="100" rx="4" fill="var(--color-plum-600)" />
        <rect x="152" y="160" width="24" height="60" rx="4" fill="var(--color-rose)" />
        <rect x="188" y="100" width="24" height="120" rx="4" fill="var(--color-gold)" />
      </g>

      {/* trend line + checklist */}
      <polyline
        points="230,190 255,165 280,175 305,130 325,110"
        fill="none"
        stroke="var(--color-plum-950)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="325" cy="110" r="5" fill="var(--color-gold-700)" />

      <g transform="translate(230 205)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 16})`}>
            <rect width="14" height="14" rx="3" fill="none" stroke="var(--color-plum-600)" strokeWidth="1.6" />
            <path d="M3 7l3 3 6-6" stroke="var(--color-gold-700)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="20" y="4" width="70" height="6" rx="3" fill="var(--color-plum-400)" opacity="0.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Low-opacity tiled academic motif used behind the hero content. */
export function AcademicPattern({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="academic-motif" width="140" height="140" patternUnits="userSpaceOnUse">
          <g stroke="var(--color-plum-800)" strokeWidth="1.4" fill="none" opacity="0.16">
            <path d="M20 30 L45 18 L70 30 L45 42 Z" />
            <line x1="45" y1="42" x2="45" y2="55" />
            <path d="M95 90c8-8 22-8 30 0" />
            <line x1="95" y1="100" x2="125" y2="100" />
            <line x1="95" y1="108" x2="118" y2="108" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#academic-motif)" />
    </svg>
  );
}

/** Institutional building silhouette used as a section background. */
export function InstitutionSilhouette({ className = "" }) {
  return (
    <svg viewBox="0 0 900 300" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <g fill="var(--color-cream)" opacity="0.06">
        <rect x="120" y="140" width="660" height="140" />
        <polygon points="450,60 130,140 770,140" />
        <rect x="420" y="30" width="60" height="30" />
        <rect x="440" y="10" width="20" height="24" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={165 + i * 90} y="180" width="30" height="60" />
        ))}
        <rect x="415" y="180" width="70" height="100" />
      </g>
    </svg>
  );
}
