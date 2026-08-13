import {
  ClipboardCheck,
  BarChart3,
  BookOpenCheck,
  CalendarRange,
  ShieldAlert,
  LayoutDashboard,
  Lightbulb,
  FileText,
} from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: ClipboardCheck, label: "Diagnóstico institucional" },
  { icon: BarChart3, label: "Análisis FODA" },
  { icon: BookOpenCheck, label: "Plan estratégico y operativo" },
  { icon: CalendarRange, label: "Cronogramas y diagramas de Gantt" },
  { icon: ShieldAlert, label: "Matriz de riesgos" },
  { icon: LayoutDashboard, label: "Indicadores y dashboard de resultados" },
  { icon: Lightbulb, label: "Propuestas de mejora y planes de acción" },
  { icon: FileText, label: "Informes de resultados" },
];

export default function DeliverablesSection() {
  return (
    <section id="entregables" className="bg-plum-950 px-6 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>
            <span className="text-gold-300">¿Qué entregamos?</span>
          </SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Resultados concretos que fortalecen a la institución.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 90}>
              <div className="h-full rounded-2xl border border-cream/10 bg-plum-900/50 p-6">
                <item.icon size={22} className="text-gold-300" />
                <p className="mt-4 text-sm font-medium leading-snug text-cream/90">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
