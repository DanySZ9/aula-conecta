import { useState } from "react";
import { Clapperboard } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

// Archivo ubicado en public/video-promocional.mp4
const VIDEO_SRC = "/video-promocional.mp4";

export default function VideoSection() {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <section id="video" className="bg-cocoa-950/[0.03] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionEyebrow>Video promocional</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            Conoce <span className="script-accent text-cocoa-600">Aula Conecta</span> en video.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-cocoa-900/80">
            Descubre cómo una clase puede convertirse en un espacio donde todos
            participan, colaboran y aprenden.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 overflow-hidden rounded-3xl border border-line bg-cocoa-950 shadow-xl shadow-cocoa-900/15">
          {unavailable ? (
            <div className="flex aspect-video flex-col items-center justify-center gap-4 px-6 text-center text-cream">
              <Clapperboard size={40} className="text-gold-300" aria-hidden="true" />
              <p className="font-display text-lg font-semibold">Video disponible próximamente</p>
            </div>
          ) : (
            <video
              src={VIDEO_SRC}
              controls
              playsInline
              preload="metadata"
              poster="/og-image.png"
              aria-label="Video promocional de Aula Conecta"
              onError={() => setUnavailable(true)}
              className="aspect-video w-full object-contain"
            >
              Tu navegador no puede reproducir este video.
            </video>
          )}
        </Reveal>
      </div>
    </section>
  );
}
