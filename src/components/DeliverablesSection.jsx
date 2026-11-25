import {
  BookOpenCheck,
  Gamepad2,
  HeartHandshake,
  Users,
  CalendarRange,
  ClipboardCheck,
  ChartColumn,
  Lightbulb,
} from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: BookOpenCheck, label: "Guía de estrategias de participación" },
  { icon: Gamepad2, label: "Secuencia para planear sesiones con Blooket" },
  { icon: HeartHandshake, label: "Orientaciones psicopedagógicas para el aula" },
  { icon: Users, label: "Dinámicas colaborativas y roles de equipo" },
  { icon: CalendarRange, label: "Plan de trabajo y responsabilidades docentes" },
  { icon: ClipboardCheck, label: "Rúbrica de observación inicial y final" },
  { icon: ChartColumn, label: "Comparación de resultados antes y después" },
  { icon: Lightbulb, label: "Recomendaciones para dar continuidad" },
];

export default function DeliverablesSection() {
  return (
    <section id="recursos" className="bg-plum-950 px-6 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>
            <span className="text-gold-300">Recursos para docentes</span>
          </SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Lo que el docente necesita para <span className="script-accent text-gold-300">llevar la propuesta al aula.</span>
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
