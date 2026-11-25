import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";
import { MeetingIllustration, ClassroomIllustration, ResultsIllustration } from "./illustrations";

const PANELS = [
  {
    Illustration: MeetingIllustration,
    title: "Antes: planear y observar",
    body: "Los docentes aplican la rúbrica inicial, identifican necesidades, acuerdan objetivos y preparan las preguntas del tema.",
  },
  {
    Illustration: ClassroomIllustration,
    title: "Durante: jugar y colaborar",
    body: "El grupo se organiza en equipos, participa en la partida de Blooket y hace pausas breves para explicar y comentar las respuestas.",
  },
  {
    Illustration: ResultsIllustration,
    title: "Después: reflexionar y ajustar",
    body: "Se revisan los resultados, se refuerzan los temas difíciles y, al cierre del proyecto, se aplica de nuevo la rúbrica.",
  },
];

export default function ApproachGallery() {
  return (
    <section aria-labelledby="asi-se-vive-heading" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionEyebrow>Así se vive en el aula</SectionEyebrow>
          <h2 id="asi-se-vive-heading" className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            Del acuerdo entre docentes a <span className="script-accent text-cocoa-600">la participación del grupo.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PANELS.map(({ Illustration, title, body }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="h-full overflow-hidden rounded-3xl border border-line bg-paper">
                <Illustration className="h-48 w-full" />
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold text-cocoa-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-900/75">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
