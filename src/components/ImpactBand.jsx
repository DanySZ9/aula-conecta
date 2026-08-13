import Reveal from "./Reveal";
import { InstitutionSilhouette } from "./illustrations";

const STATS = [
  { value: "5", label: "etapas de método" },
  { value: "8", label: "herramientas estratégicas" },
  { value: "100%", label: "soluciones a la medida" },
];

export default function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-plum-950 px-6 py-20 text-cream sm:py-24">
      <InstitutionSilhouette className="absolute inset-x-0 bottom-0 h-full w-full" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/95 to-plum-900/70"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Compromiso institucional
          </p>
          <blockquote className="mt-5 font-display text-2xl font-medium italic leading-snug text-cream sm:text-3xl">
            "Trabajamos para inspirar soluciones que transforman la educación,
            institución por institución."
          </blockquote>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-gold-300">{stat.value}</p>
                <p className="mt-1 text-xs text-cream/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
