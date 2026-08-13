import { GraduationCap, PresentationIcon, CalendarClock, MessageSquareWarning, UserX } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const ROWS = [
  {
    icon: GraduationCap,
    problem: "Bajo rendimiento académico",
    solution:
      "Diagnósticos, planes de apoyo, estrategias de enseñanza y seguimiento de resultados.",
  },
  {
    icon: PresentationIcon,
    problem: "Docentes desorganizados o con poco seguimiento",
    solution: "Planeaciones, observaciones de clase, capacitación e indicadores de desempeño.",
  },
  {
    icon: CalendarClock,
    problem: "Mala organización institucional",
    solution: "Calendarios, cronogramas, manuales y gestión de procesos.",
  },
  {
    icon: MessageSquareWarning,
    problem: "Comunicación deficiente",
    solution: "Protocolos, reuniones y canales formales de comunicación.",
  },
  {
    icon: UserX,
    problem: "Ausentismo estudiantil y docente",
    solution: "Registro de asistencia, seguimiento individual y estrategias de prevención.",
  },
];

export default function ChallengesSection() {
  return (
    <section id="soluciones" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Problemas que atendemos</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-plum-950 sm:text-4xl">
            Cada problema institucional tiene una solución concreta.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 overflow-hidden rounded-3xl border border-line bg-paper">
          <div className="hidden grid-cols-[1fr_1fr] gap-6 border-b border-line bg-lavender-100/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-plum-800 sm:grid">
            <span>Problema</span>
            <span>Solución que aplicamos</span>
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
                  <row.icon size={20} className="mt-0.5 shrink-0 text-rose" />
                  <p className="font-display text-base font-semibold text-plum-950 sm:text-lg">
                    {row.problem}
                  </p>
                </div>
                <p className="leading-relaxed text-plum-900/75 sm:pl-0">{row.solution}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
