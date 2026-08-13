import { Check } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import { LogoMark } from "./Header";
import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Enfoque personalizado",
    detail: "Soluciones a la medida de cada institución.",
  },
  {
    title: "Metodología comprobada",
    detail: "Herramientas prácticas y efectivas.",
  },
  {
    title: "Resultados medibles",
    detail: "Con indicadores claros.",
  },
  {
    title: "Acompañamiento cercano",
    detail: "En cada etapa del proceso.",
  },
  {
    title: "Compromiso con la calidad",
    detail: "Trabajamos por un cambio real y sostenible.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="por-que-cec" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionEyebrow>¿Por qué elegir a CEC?</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-plum-950 sm:text-4xl">
            No solo identificamos problemas: los transformamos en
            oportunidades de mejora.
          </h2>
          <div className="mt-8 hidden items-center gap-4 rounded-2xl bg-plum-950 p-6 text-cream sm:flex">
            <LogoMark className="h-10 w-10 shrink-0" />
            <p className="text-sm leading-relaxed text-cream/80">
              CEC: tu aliado estratégico para una educación de calidad.
            </p>
          </div>
        </Reveal>

        <ul className="space-y-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} as="li" delay={i * 90} className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-300/25 text-gold-700">
                <Check size={16} strokeWidth={3} />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-plum-950">
                  {reason.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-plum-900/70">{reason.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
