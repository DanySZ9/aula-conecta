import {
  Target,
  FilePlus2,
  Gamepad2,
  QrCode,
  Users,
  MessagesSquare,
  House,
  ChartColumn,
} from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const TOOLS = [
  { icon: Target, name: "Definir el objetivo", detail: "Elegir el tema y lo que el grupo debe lograr en la sesión." },
  { icon: FilePlus2, name: "Preparar las preguntas", detail: "Crear un conjunto propio o adaptar uno existente, de menor a mayor dificultad." },
  { icon: Gamepad2, name: "Elegir el modo de juego", detail: "Seleccionar la dinámica según el grupo, el tiempo y el objetivo." },
  { icon: QrCode, name: "Unirse a la partida", detail: "Los estudiantes entran desde un dispositivo con el código que comparte el docente." },
  { icon: Users, name: "Jugar en equipo", detail: "Comentar cada respuesta y rotar los roles de lectura, respuesta y explicación." },
  { icon: MessagesSquare, name: "Conversar los errores", detail: "Pausar para resolver dudas y aprender de las respuestas incorrectas." },
  { icon: House, name: "Reforzar en casa", detail: "Asignar una actividad para practicar a un ritmo propio." },
  { icon: ChartColumn, name: "Revisar resultados", detail: "Detectar los temas por reforzar y planear la siguiente sesión." },
];

export default function ToolsSection() {
  return (
    <section id="blooket" className="bg-cocoa-950/[0.03] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Aprender jugando con Blooket</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            El juego como <span className="script-accent text-cocoa-600">puerta de entrada</span> a la participación.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-cocoa-900/80">
            Blooket es una plataforma de juegos educativos en la que el docente
            prepara preguntas y los estudiantes las responden dentro de
            distintos modos de juego. En Aula Conecta, cada partida tiene una
            intención pedagógica: preparar, jugar, conversar y mejorar. Si faltan
            dispositivos, se comparte uno por equipo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={(i % 4) * 90}>
              <div className="group h-full rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-gold/50">
                <tool.icon size={22} className="text-cocoa-600 transition-colors group-hover:text-gold-700" />
                <h3 className="mt-4 font-display text-base font-semibold text-cocoa-950">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cocoa-900/70">{tool.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
