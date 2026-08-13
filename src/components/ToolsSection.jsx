import {
  ScanSearch,
  Grid2x2,
  RefreshCcw,
  RotateCcw,
  Gauge,
  GanttChartSquare,
  ShieldAlert,
  ListChecks,
} from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const TOOLS = [
  { icon: Grid2x2, name: "FODA", detail: "Fortalezas, Oportunidades, Debilidades y Amenazas." },
  { icon: ScanSearch, name: "Diagnóstico institucional", detail: "Lectura integral de la institución." },
  { icon: RefreshCcw, name: "POES", detail: "Planear, Organizar, Ejecutar y Supervisar." },
  { icon: RotateCcw, name: "PDCA", detail: "Ciclo de mejora continua." },
  { icon: Gauge, name: "KPIs", detail: "Indicadores de desempeño." },
  { icon: GanttChartSquare, name: "Diagrama de Gantt", detail: "Planificación de actividades." },
  { icon: ShieldAlert, name: "Matriz de riesgos", detail: "Anticipación de obstáculos." },
  { icon: ListChecks, name: "Listas de cotejo", detail: "Formatos de seguimiento." },
];

export default function ToolsSection() {
  return (
    <section id="herramientas" className="bg-plum-950/[0.03] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Herramientas que utilizamos</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-plum-950 sm:text-4xl">
            Metodologías probadas, aplicadas con criterio propio.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={(i % 4) * 90}>
              <div className="group h-full rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-gold/50">
                <tool.icon size={22} className="text-plum-600 transition-colors group-hover:text-gold-700" />
                <h3 className="mt-4 font-display text-base font-semibold text-plum-950">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-plum-900/70">{tool.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
