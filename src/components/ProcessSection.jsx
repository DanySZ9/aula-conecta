import { Gamepad2, HeartHandshake, ClipboardList, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Gamepad2,
    title: "Aprendizaje dinámico",
    body: "Incorpora juegos educativos, retos, actividades prácticas y aprendizaje colaborativo, con Blooket como punto de encuentro del grupo.",
  },
  {
    icon: HeartHandshake,
    title: "Atención psicopedagógica",
    body: "Identifica las necesidades de aprendizaje y utiliza estrategias que favorecen la participación de todos.",
  },
  {
    icon: ClipboardList,
    title: "Organización docente",
    body: "Establece objetivos, distribuye responsabilidades y coordina las estrategias entre los docentes.",
  },
  {
    icon: TrendingUp,
    title: "Evaluación continua",
    body: "Mide los cambios en participación, motivación e integración mediante instrumentos de evaluación.",
  },
];

// Vertical offsets that trace the same flowing rhythm as the logo's ribbon.
const OFFSETS = ["lg:translate-y-0", "lg:translate-y-10", "lg:-translate-y-2", "lg:translate-y-12"];

export default function ProcessSection() {
  return (
    <section id="componentes" className="bg-cocoa-950 px-6 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>
            <span className="text-gold-300">Los cuatro componentes</span>
          </SectionEyebrow>

          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Cuatro componentes que <span className="script-accent text-gold-300">se conectan</span> dentro de la misma clase.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-10 hidden h-40 w-full lg:block"
          >
            <path
              d="M0 60 C 120 130, 220 10, 340 70 C 460 130, 560 10, 680 70 C 800 130, 900 10, 1020 70 C 1090 105, 1150 90, 1200 70"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="2"
              strokeDasharray="1 12"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 100} className={`transition-transform duration-300 ${OFFSETS[i]}`}>
                <div className="h-full rounded-2xl border border-cream/10 bg-cocoa-900/60 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-semibold text-gold-300/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <step.icon size={22} className="text-honey" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
