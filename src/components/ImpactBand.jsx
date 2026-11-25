import Reveal from "./Reveal";
import { InstitutionSilhouette } from "./illustrations";

const STATS = [
  { value: "4", label: "componentes" },
  { value: "3", label: "ejes: participación, motivación e integración" },
  { value: "2", label: "mediciones: antes y después" },
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
            Una pregunta para los docentes
          </p>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-cream sm:text-3xl">
            “¿Alguna vez han preparado una clase <span className="script-accent text-gold-300">con mucho entusiasmo</span>, pero al
            llegar al salón se encuentran con estudiantes que no participan, que
            se distraen o que simplemente no muestran interés?”
          </blockquote>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/75">
            No todos los estudiantes aprenden de la misma manera y captar su
            atención es un reto constante. Aula Conecta busca convertir ese reto
            en una oportunidad.
          </p>
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
