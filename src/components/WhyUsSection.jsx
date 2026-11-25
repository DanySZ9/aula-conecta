import { Check } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import { LogoMark } from "./Header";
import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Responde a las necesidades del grupo",
    detail: "Parte de observar cómo aprenden y participan los estudiantes.",
  },
  {
    title: "Ofrece herramientas prácticas",
    detail: "Los docentes cuentan con estrategias sencillas para fomentar la participación.",
  },
  {
    title: "Favorece la integración grupal",
    detail: "Las dinámicas colaborativas dan a cada estudiante un lugar en el equipo.",
  },
  {
    title: "Genera ambientes más dinámicos",
    detail: "Los juegos y retos con Blooket hacen del repaso una experiencia activa.",
  },
  {
    title: "Fortalece el trabajo entre docentes",
    detail: "La organización y la colaboración permiten una intervención más estructurada.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="justificacion" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionEyebrow>Justificación</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            Participar también es <span className="script-accent text-cocoa-600">una forma de aprender.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-cocoa-900/80">
            Aula Conecta surge de la necesidad de fortalecer los procesos de
            enseñanza-aprendizaje mediante estrategias que respondan a las
            necesidades de los estudiantes y que los docentes puedan aplicar de
            forma coordinada.
          </p>
          <div className="mt-8 hidden items-center gap-4 rounded-2xl bg-cocoa-950 p-6 text-cream sm:flex">
            <LogoMark className="h-10 w-10 shrink-0" />
            <p className="font-script text-2xl font-semibold leading-snug text-gold-300">
              Transformando la manera de enseñar para transformar la manera de aprender.
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
                <p className="font-display text-base font-semibold text-cocoa-950">
                  {reason.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-cocoa-900/70">{reason.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
