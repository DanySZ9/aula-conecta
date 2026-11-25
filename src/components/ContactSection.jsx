import { useState } from "react";
import { Mail, Phone, MapPin, Send, CircleCheck, LoaderCircle } from "lucide-react";
import { SectionEyebrow } from "./AboutSection";
import Reveal from "./Reveal";
import { sendContactMessage } from "../services/contactApi";

const initialForm = {
  name: "",
  institution: "",
  email: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-cocoa-950 outline-none placeholder:text-cocoa-900/40 focus-visible:border-gold aria-invalid:border-red-700";

function validate(data) {
  const errors = {};
  if (data.name.trim().length < 2) errors.name = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Escribe un correo válido, como nombre@correo.com.";
  if (data.message.trim().length < 10) errors.message = "Escribe un mensaje de al menos 10 caracteres.";
  return errors;
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");

    const found = validate(formData);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      e.currentTarget.elements[firstInvalid]?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await sendContactMessage(formData);
      setSent(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitError(error.userMessage ?? "No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionEyebrow>Contacto</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-cocoa-950 sm:text-4xl">
            <span className="script-accent text-cocoa-600">Conectemos</span> con tu grupo.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cocoa-900/75">
            Cuéntanos qué retos de participación, motivación o integración
            observas en tu aula y cómo te gustaría implementar Aula Conecta.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-cocoa-900/80">
              <Mail size={18} className="text-cocoa-600" /> contacto@ceceducativa.mx
            </li>
            <li className="flex items-center gap-3 text-cocoa-900/80">
              <Phone size={18} className="text-cocoa-600" /> +52 55 0000 0000
            </li>
            <li className="flex items-center gap-3 text-cocoa-900/80">
              <MapPin size={18} className="text-cocoa-600" /> Atención remota y presencial
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} as="form" noValidate onSubmit={handleSubmit} className="rounded-3xl border border-line bg-paper p-8 sm:p-10">
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-300/25 text-gold-700">
                <CircleCheck size={26} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-cocoa-950">
                Mensaje enviado
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-cocoa-900/70">
                Gracias por escribirnos. El equipo de Aula Conecta se
                pondrá en contacto contigo pronto.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-cocoa-400/40 px-6 py-3 text-sm font-semibold text-cocoa-900 transition-colors hover:bg-sand-100"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className="grid gap-5">
              <Field label="Nombre" name="name" error={errors.name}>
                <input
                  required
                  type="text"
                  name="name"
                  maxLength={80}
                  autoComplete="name"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </Field>
              <Field label="Institución (opcional)" name="institution" error={errors.institution}>
                <input
                  type="text"
                  name="institution"
                  maxLength={120}
                  autoComplete="organization"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.institution)}
                  aria-describedby={errors.institution ? "institution-error" : undefined}
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Nombre de la institución"
                  className={inputClass}
                />
              </Field>
              <Field label="Correo electrónico" name="email" error={errors.email}>
                <input
                  required
                  type="email"
                  name="email"
                  maxLength={120}
                  autoComplete="email"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Cuéntanos sobre tu grupo" name="message" error={errors.message}>
                <textarea
                  required
                  name="message"
                  maxLength={1000}
                  autoComplete="off"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ resize: "none" }}
                  placeholder="Nivel educativo, número de estudiantes y reto principal"
                  className={inputClass}
                />
              </Field>

              {submitError && (
                <p role="alert" className="rounded-xl border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cocoa-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                {isSubmitting ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-800/70">
        {label}
      </span>
      {children}
      {error && (
        <span id={`${name}-error`} className="mt-1.5 block text-sm text-red-700">
          {error}
        </span>
      )}
    </label>
  );
}
