import { ArrowRight } from "lucide-react";
import WaveDivider from "./WaveDivider";
import { AcademicPattern } from "./illustrations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-lavender-100 via-rose-100 to-gold-100"
    >
      <AcademicPattern className="absolute inset-0 h-full w-full" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="animate-hero-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-plum-400/30 bg-paper/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-plum-800">
            Consultoría Educativa y de Calidad
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-plum-950 sm:text-5xl lg:text-[3.4rem]">
            Calidad que se demuestra,{" "}
            <span className="italic text-plum-600">resultados que transforman.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-plum-900/80">
            Trabajamos junto a instituciones educativas para inspirar soluciones
            que transforman: diagnosticamos lo que ocurre hoy, diseñamos la
            estrategia adecuada y acompañamos cada paso hasta ver resultados
            medibles y sostenibles.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-plum px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-plum-900/15 transition-transform hover:-translate-y-0.5 hover:bg-plum-600"
            >
              Agenda un diagnóstico
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-full border border-plum-400/40 bg-paper/60 px-7 py-3.5 text-sm font-semibold text-plum-900 transition-colors hover:bg-paper"
            >
              Ver cómo trabajamos
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-plum-400/20 pt-6">
            <div>
              <dt className="sr-only">Etapas del método</dt>
              <dd className="font-display text-2xl font-semibold text-plum-950">5</dd>
              <p className="text-xs text-plum-800/70">etapas de método</p>
            </div>
            <div>
              <dt className="sr-only">Herramientas estratégicas</dt>
              <dd className="font-display text-2xl font-semibold text-plum-950">8</dd>
              <p className="text-xs text-plum-800/70">herramientas estratégicas</p>
            </div>
            <div>
              <dt className="sr-only">Enfoque</dt>
              <dd className="font-display text-2xl font-semibold text-plum-950">100%</dd>
              <p className="text-xs text-plum-800/70">a la medida</p>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto w-full max-w-sm animate-hero-rise"
          style={{ animationDelay: "150ms" }}
        >
          <CrestIllustration />
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}

function CrestIllustration() {
  return (
    <svg viewBox="0 0 360 360" className="w-full drop-shadow-[0_18px_40px_rgba(74,36,114,0.18)]">
      <circle cx="180" cy="180" r="172" fill="var(--color-paper)" opacity="0.55" />
      <circle cx="180" cy="180" r="150" fill="none" stroke="var(--color-lavender)" strokeWidth="1.4" opacity="0.7" />

      <circle cx="145" cy="58" r="6" fill="var(--color-rose)" />
      <circle cx="180" cy="50" r="6" fill="var(--color-plum-950)" />
      <circle cx="215" cy="58" r="6" fill="var(--color-lavender)" />

      <text
        x="180"
        y="205"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize="128"
        fontWeight="600"
        fill="var(--color-plum-950)"
      >
        CEC
      </text>

      <path
        d="M55 210c45 24 78 24 112 -18s90 -46 122 -18"
        stroke="var(--color-gold)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      <text
        x="180"
        y="252"
        textAnchor="middle"
        fontFamily="Manrope, sans-serif"
        fontSize="17"
        letterSpacing="6"
        fill="var(--color-plum-900)"
      >
        CONSULTORÍA
      </text>

      <line x1="130" y1="266" x2="230" y2="266" stroke="var(--color-plum-400)" strokeWidth="1" opacity="0.6" />

      <circle cx="180" cy="288" r="9" fill="var(--color-plum-950)" />
      <circle cx="160" cy="298" r="8" fill="var(--color-rose)" />
      <circle cx="200" cy="298" r="8" fill="var(--color-lavender)" />
    </svg>
  );
}
