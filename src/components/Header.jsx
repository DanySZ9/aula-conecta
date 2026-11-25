import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Problemática", href: "#problematica" },
  { label: "Propuesta", href: "#propuesta" },
  { label: "Componentes", href: "#componentes" },
  { label: "Blooket", href: "#blooket" },
  { label: "Justificación", href: "#justificacion" },
  { label: "Evaluación", href: "#evaluacion" },
  { label: "Video", href: "#video" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2.5">
          <LogoMark className="h-9 w-9" />
          <span className="whitespace-nowrap font-display text-lg font-semibold leading-tight tracking-tight text-plum-950">
            Aula Conecta <span className="hidden text-xs font-medium tracking-normal text-plum-600 sm:block">Consultoría Educativa</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.filter((l) => l.href !== "#contacto").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-plum-800 transition-colors hover:text-gold-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-plum-600 xl:inline-block"
        >
          Contáctanos
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-md p-2 text-plum-950 xl:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-6 pt-2 xl:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-plum-800 hover:bg-lavender-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-plum px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Contáctanos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function LogoMark({ className = "" }) {
  return <img src="/favicon.svg" alt="" className={className} />;
}
