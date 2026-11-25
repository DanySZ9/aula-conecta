import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

const LEVELS = ["1 · Inicial", "2 · En proceso", "3 · Logrado", "4 · Destacado"];

const CRITERIA = [
  {
    name: "Participación",
    levels: [
      "No participa, incluso cuando se le invita.",
      "Participa solo cuando se le pide.",
      "Participa por iniciativa propia en varias actividades.",
      "Participa de forma constante y anima a los demás.",
    ],
  },
  {
    name: "Motivación e interés",
    levels: [
      "Muestra desinterés o abandona la actividad.",
      "Muestra interés por momentos.",
      "Mantiene el interés y termina la actividad.",
      "Se involucra, pregunta y busca nuevos retos.",
    ],
  },
  {
    name: "Integración grupal",
    levels: [
      "Permanece al margen del grupo.",
      "Se relaciona solo con algunos compañeros.",
      "Se integra y respeta a sus compañeros.",
      "Se integra y procura incluir a todos.",
    ],
  },
  {
    name: "Trabajo colaborativo",
    levels: [
      "No asume su rol en el equipo.",
      "Cumple su rol con apoyo constante.",
      "Cumple su rol y aporta ideas.",
      "Coordina, escucha y apoya a su equipo.",
    ],
  },
  {
    name: "Atención y seguimiento",
    levels: [
      "Se distrae la mayor parte del tiempo.",
      "Requiere recordatorios frecuentes.",
      "Sigue las indicaciones y mantiene la atención.",
      "Mantiene la atención y ayuda a otros a retomarla.",
    ],
  },
];

const SCALE = [
  { range: "5–8", label: "Requiere apoyo prioritario" },
  { range: "9–12", label: "Participación en desarrollo" },
  { range: "13–16", label: "Participación satisfactoria" },
  { range: "17–20", label: "Participación destacada" },
];

export default function RubricSection() {
  return (
    <section id="evaluacion" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Instrumento de evaluación</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            Rúbrica de observación de participación estudiantil.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-cocoa-900/80">
            El docente observa a cada estudiante y asigna de 1 a 4 puntos por
            criterio. La rúbrica se aplica antes y después de implementar el
            proyecto, en condiciones similares, para comparar los resultados.
          </p>
        </Reveal>

        <div
          role="region"
          aria-label="Rúbrica de observación"
          tabIndex={0}
          className="mt-10 overflow-x-auto rounded-3xl border border-line bg-paper"
        >
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead className="bg-sand-100/60 text-cocoa-800">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Criterio</th>
                {LEVELS.map((level) => (
                  <th key={level} scope="col" className="px-5 py-4 font-semibold">{level}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((criterion) => (
                <tr key={criterion.name} className="border-t border-line align-top">
                  <th scope="row" className="px-5 py-5 font-display text-base font-semibold text-cocoa-950">
                    {criterion.name}
                  </th>
                  {criterion.levels.map((text) => (
                    <td key={text} className="px-5 py-5 leading-relaxed text-cocoa-900/75">{text}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Reveal delay={100}>
          <h3 className="mt-10 font-display text-lg font-semibold text-cocoa-950">
            Interpretación del puntaje (máximo 20)
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SCALE.map((item) => (
              <div key={item.range} className="rounded-2xl border border-line bg-paper p-5">
                <dt className="font-display text-xl font-semibold text-gold-700">{item.range}</dt>
                <dd className="mt-1 text-sm text-cocoa-900/75">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
