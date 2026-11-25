import { Users, Lightbulb, Target } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="propuesta" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>La propuesta</SectionEyebrow>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0}>
            <article className="h-full rounded-3xl border border-line bg-paper p-8 sm:p-10">
              <IconBadge>
                <Users size={22} />
              </IconBadge>
              <h2 className="mt-6 font-display text-2xl font-semibold text-cocoa-950">
                ¿Qué es Aula Conecta?
              </h2>
              <p className="mt-4 leading-relaxed text-cocoa-900/80">
                Es un modelo de intervención que permite a los docentes
                implementar estrategias sencillas para conseguir clases más
                participativas e inclusivas. Usa Blooket como recurso central
                para convertir el repaso y la evaluación en retos compartidos.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="h-full rounded-3xl border border-line bg-paper p-8 sm:p-10">
              <IconBadge>
                <Lightbulb size={22} />
              </IconBadge>
              <h2 className="mt-6 font-display text-2xl font-semibold text-cocoa-950">
                Pregunta de investigación
              </h2>
              <p className="mt-4 leading-relaxed text-cocoa-900/80">
                ¿Cómo puede la implementación de estrategias psicopedagógicas
                y colaborativas mejorar la participación y motivación de los
                estudiantes dentro del aula?
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-cocoa-950 p-8 text-cream sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-300/15 text-gold-300">
              <Target size={26} />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-gold-300 sm:text-2xl">
                Objetivo
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-cream/85">
                Mejorar la participación, la motivación y la integración de los
                estudiantes mediante estrategias psicopedagógicas, dinámicas
                colaborativas y actividades con Blooket, y valorar los cambios
                con una rúbrica de observación antes y después de la
                intervención.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-gold" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
        {children}
      </span>
    </div>
  );
}

export function IconBadge({ children }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 text-cocoa-600">
      {children}
    </div>
  );
}
