import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionEyebrow>Contacto</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-plum-950 sm:text-4xl">
            Hablemos sobre tu institución.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-plum-900/75">
            Cuéntanos qué está pasando en tu escuela o centro educativo.
            Respondemos para agendar un primer diagnóstico sin costo.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-plum-900/80">
              <Mail size={18} className="text-plum-600" /> contacto@ceceducativa.mx
            </li>
            <li className="flex items-center gap-3 text-plum-900/80">
              <Phone size={18} className="text-plum-600" /> +52 55 0000 0000
            </li>
            <li className="flex items-center gap-3 text-plum-900/80">
              <MapPin size={18} className="text-plum-600" /> Atención remota y presencial
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} as="form" onSubmit={handleSubmit} className="rounded-3xl border border-line bg-paper p-8 sm:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-300/25 text-gold-700">
                <Send size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-plum-950">
                Mensaje enviado
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-plum-900/70">
                Gracias por escribirnos. Un miembro de CEC se pondrá en
                contacto contigo pronto.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <Field label="Nombre">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-plum-950 outline-none placeholder:text-plum-900/40 focus-visible:border-gold"
                />
              </Field>
              <Field label="Institución">
                <input
                  type="text"
                  name="institution"
                  placeholder="Nombre de la institución"
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-plum-950 outline-none placeholder:text-plum-900/40 focus-visible:border-gold"
                />
              </Field>
              <Field label="Correo electrónico">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-plum-950 outline-none placeholder:text-plum-900/40 focus-visible:border-gold"
                />
              </Field>
              <Field label="Cuéntanos qué necesitas">
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Describe brevemente el reto que enfrenta tu institución"
                  className="w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-plum-950 outline-none placeholder:text-plum-900/40 focus-visible:border-gold"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-plum px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-plum-600"
              >
                Enviar mensaje
                <Send size={16} />
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-plum-800/70">
        {label}
      </span>
      {children}
    </label>
  );
}
