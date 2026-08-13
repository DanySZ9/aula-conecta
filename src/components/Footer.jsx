import { LogoMark } from "./Header";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-sm font-semibold text-plum-950">
            CEC · Consultoría Educativa y de Calidad
          </span>
        </div>
        <p className="text-xs text-plum-900/60">
          © {new Date().getFullYear()} CEC. Tu aliado estratégico para una educación de calidad.
        </p>
      </div>
    </footer>
  );
}
