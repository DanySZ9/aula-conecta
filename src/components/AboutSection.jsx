import { Users, Lightbulb, Target } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Quiénes somos y qué hacemos</SectionEyebrow>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0}>
            <article className="h-full rounded-3xl border border-line bg-paper p-8 sm:p-10">
              <IconBadge>
                <Users size={22} />
              </IconBadge>
              <h2 className="mt-6 font-display text-2xl font-semibold text-plum-950">
                ¿Quiénes somos?
              </h2>
              <p className="mt-4 leading-relaxed text-plum-900/80">
                CEC es una consultoría enfocada en apoyar a instituciones
                educativas en la identificación de problemas, la mejora de
                procesos y el diseño de estrategias que generen un mejor
                desempeño y calidad en la educación.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="h-full rounded-3xl border border-line bg-paper p-8 sm:p-10">
              <IconBadge>
                <Lightbulb size={22} />
              </IconBadge>
              <h2 className="mt-6 font-display text-2xl font-semibold text-plum-950">
                ¿Qué hacemos?
              </h2>
              <p className="mt-4 leading-relaxed text-plum-900/80">
                Detectamos problemas, analizamos sus causas y diseñamos
                soluciones estratégicas para fortalecer la organización, el
                trabajo docente, el aprendizaje de los alumnos y la gestión
                institucional, generando resultados medibles y sostenibles.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-plum-950 p-8 text-cream sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-300/15 text-gold-300">
              <Target size={26} />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-gold-300 sm:text-2xl">
                Objetivo
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-cream/85">
                Identificar áreas de oportunidad en las instituciones educativas
                y desarrollar soluciones estratégicas que mejoren sus procesos,
                organización y calidad, generando resultados medibles y
                sostenibles.
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
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-100 text-plum-600">
      {children}
    </div>
  );
}
