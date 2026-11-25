import { ArrowRight } from "lucide-react";
import WaveDivider from "./WaveDivider";
import { AcademicPattern } from "./illustrations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-sand-100 via-honey-100 to-gold-100"
    >
      <AcademicPattern className="absolute inset-0 h-full w-full" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="animate-hero-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cocoa-400/30 bg-paper/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cocoa-800">
            Estrategias para la participación estudiantil
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-cocoa-950 sm:text-5xl lg:text-[3.4rem]">
            Transformando la manera de enseñar{" "}
            <span className="script-accent text-cocoa-600">para transformar la manera de aprender.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa-900/80">
            Aula Conecta es un modelo de estrategias para mejorar la
            participación, la motivación y la integración de los estudiantes.
            Combina herramientas psicopedagógicas, aprendizaje colaborativo y
            el juego educativo con Blooket.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-cocoa-900/15 transition-transform hover:-translate-y-0.5 hover:bg-cocoa-600"
            >
              Implementa Aula Conecta
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#propuesta"
              className="inline-flex items-center justify-center rounded-full border border-cocoa-400/40 bg-paper/60 px-7 py-3.5 text-sm font-semibold text-cocoa-900 transition-colors hover:bg-paper"
            >
              Conocer la propuesta
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cocoa-400/20 pt-6">
            <div>
              <dt className="sr-only">Componentes del modelo</dt>
              <dd className="font-display text-2xl font-semibold text-cocoa-950">4</dd>
              <p className="text-xs text-cocoa-800/70">componentes del modelo</p>
            </div>
            <div>
              <dt className="sr-only">Criterios de evaluación</dt>
              <dd className="font-display text-2xl font-semibold text-cocoa-950">5</dd>
              <p className="text-xs text-cocoa-800/70">criterios en la rúbrica</p>
            </div>
            <div>
              <dt className="sr-only">Mediciones</dt>
              <dd className="font-display text-2xl font-semibold text-cocoa-950">2</dd>
              <p className="text-xs text-cocoa-800/70">mediciones: antes y después</p>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto w-full max-w-sm animate-hero-rise"
          style={{ animationDelay: "150ms" }}
        >
          <div className="flex aspect-square items-center justify-center rounded-full bg-paper p-10 shadow-[0_18px_40px_rgba(138,95,14,0.2)]">
            <img src="/logo.svg" alt="Aula Conecta, Consultoría Educativa" width="940" height="880" className="h-auto w-full" />
          </div>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}
