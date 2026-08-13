import { Search, ClipboardList, Lightbulb, Settings2, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Search,
    title: "Diagnosticamos",
    body: "Analizamos la situación actual de la institución para identificar necesidades y causas reales.",
  },
  {
    icon: ClipboardList,
    title: "Analizamos",
    body: "Recopilamos información y utilizamos herramientas estratégicas para comprender el contexto y priorizar acciones.",
  },
  {
    icon: Lightbulb,
    title: "Diseñamos",
    body: "Creamos estrategias y soluciones a la medida de cada institución.",
  },
  {
    icon: Settings2,
    title: "Implementamos",
    body: "Organizamos las acciones, recursos y tiempos necesarios para llevarlas a cabo.",
  },
  {
    icon: TrendingUp,
    title: "Evaluamos",
    body: "Medimos los resultados y damos seguimiento para asegurar la mejora continua.",
  },
];

// Vertical offsets that trace the same flowing rhythm as the logo's ribbon.
const OFFSETS = ["lg:translate-y-0", "lg:translate-y-10", "lg:-translate-y-2", "lg:translate-y-12", "lg:translate-y-2"];

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-plum-950 px-6 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>
            <span className="text-gold-300">Cómo trabajamos</span>
          </SectionEyebrow>

          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Un método en cinco etapas, pensado como un recorrido continuo.
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

          <ol className="relative grid gap-6 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 100} className={`transition-transform duration-300 ${OFFSETS[i]}`}>
                <div className="h-full rounded-2xl border border-cream/10 bg-plum-900/60 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-semibold text-gold-300/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <step.icon size={22} className="text-rose" />
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
