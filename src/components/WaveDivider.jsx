export default function WaveDivider({ flip = false, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-20"
      >
        <path
          d="M0 55 C 180 10, 340 90, 520 45 C 700 0, 860 80, 1040 40 C 1120 22, 1160 30, 1200 45 L1200 90 L0 90 Z"
          fill="var(--color-cream)"
        />
        <path
          d="M0 55 C 180 10, 340 90, 520 45 C 700 0, 860 80, 1040 40 C 1120 22, 1160 30, 1200 45"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
