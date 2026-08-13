import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Por qué CEC", href: "#por-que-cec" },
  { label: "Entregables", href: "#entregables" },
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
          <span className="font-display text-lg font-semibold tracking-tight text-plum-950">
            CEC <span className="hidden text-sm font-medium text-plum-600 sm:inline">Consultoría Educativa y de Calidad</span>
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
          Agenda un diagnóstico
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
              Agenda un diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function LogoMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="CEC">
      <circle cx="32" cy="32" r="31" fill="none" stroke="var(--color-lavender)" strokeWidth="1.2" opacity="0.6" />
      <path
        d="M12 40c8 5 15 5 20 -3s16 -9 22 -3"
        stroke="var(--color-gold)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14" r="2.4" fill="var(--color-rose)" />
      <circle cx="32" cy="12" r="2.4" fill="var(--color-plum-950)" />
      <circle cx="40" cy="14" r="2.4" fill="var(--color-lavender)" />
    </svg>
  );
}
