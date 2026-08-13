import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";
import { MeetingIllustration, ClassroomIllustration, ResultsIllustration } from "./illustrations";

const PANELS = [
  {
    Illustration: MeetingIllustration,
    title: "Sesiones de diagnóstico",
    body: "Nos sentamos con directivos y equipos docentes para entender, con datos y contexto, lo que realmente ocurre en la institución.",
  },
  {
    Illustration: ClassroomIllustration,
    title: "Acompañamiento en el aula",
    body: "Observamos clases, damos seguimiento a la práctica docente y capacitamos con base en lo que vemos, no en supuestos.",
  },
  {
    Illustration: ResultsIllustration,
    title: "Entrega de resultados",
    body: "Presentamos indicadores claros y un plan de acción concreto que la institución puede ejecutar y sostener.",
  },
];

export default function ApproachGallery() {
  return (
    <section aria-labelledby="asi-trabajamos-heading" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Así trabajamos con instituciones</SectionEyebrow>
          <h2 id="asi-trabajamos-heading" className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-plum-950 sm:text-4xl">
            De la sala de juntas al salón de clases.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PANELS.map(({ Illustration, title, body }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="h-full overflow-hidden rounded-3xl border border-line bg-paper">
                <Illustration className="h-48 w-full" />
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold text-plum-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-900/75">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
