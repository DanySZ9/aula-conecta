import { Hand, BatteryLow, Users, Shapes, Network } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const ROWS = [
  {
    icon: Hand,
    problem: "Poca participación en clase",
    solution:
      "Retos y partidas de Blooket en las que todo el grupo responde, no solo quienes suelen levantar la mano.",
  },
  {
    icon: BatteryLow,
    problem: "Desmotivación y desinterés por las actividades",
    solution:
      "Juegos educativos, metas cortas y retroalimentación inmediata que dan sentido y reconocimiento al esfuerzo.",
  },
  {
    icon: Users,
    problem: "Dificultad para integrarse y trabajar en equipo",
    solution:
      "Equipos heterogéneos con roles rotativos, para que cada estudiante tenga una tarea necesaria para el grupo.",
  },
  {
    icon: Shapes,
    problem: "Enseñanza que no considera los distintos ritmos y necesidades",
    solution:
      "Detección de necesidades, niveles de dificultad graduados y distintas formas de participar.",
  },
  {
    icon: Network,
    problem: "Estrategias docentes aisladas y sin seguimiento",
    solution:
      "Objetivos comunes, responsabilidades claras y una misma rúbrica para comparar avances.",
  },
];

export default function ChallengesSection() {
  return (
    <section id="problematica" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>La problemática</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            Estudiantes que asisten a clase, pero <span className="script-accent text-cocoa-600">no se sienten parte de ella.</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-cocoa-900/80">
            En algunas instituciones educativas se observa que ciertos
            estudiantes participan poco, muestran desinterés por las
            actividades, tienen dificultades para trabajar en equipo o no se
            sienten suficientemente motivados para aprender. En ocasiones, las
            estrategias tradicionales de enseñanza no consideran sus diferentes
            necesidades, ritmos y estilos de aprendizaje.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 overflow-hidden rounded-3xl border border-line bg-paper">
          <div className="hidden grid-cols-[1fr_1fr] gap-6 border-b border-line bg-sand-100/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-cocoa-800 sm:grid">
            <span>Problema</span>
            <span>Estrategia de Aula Conecta</span>
          </div>

          <ul>
            {ROWS.map((row, i) => (
              <li
                key={row.problem}
                className={`grid grid-cols-1 gap-3 px-8 py-6 sm:grid-cols-[1fr_1fr] sm:gap-6 sm:py-7 ${
                  i !== ROWS.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <row.icon size={20} className="mt-0.5 shrink-0 text-honey" />
                  <p className="font-display text-base font-semibold text-cocoa-950 sm:text-lg">
                    {row.problem}
                  </p>
                </div>
                <p className="leading-relaxed text-cocoa-900/75 sm:pl-0">{row.solution}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
