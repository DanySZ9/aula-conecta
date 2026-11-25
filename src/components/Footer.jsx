import { LogoMark } from "./Header";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-sm font-semibold text-plum-950">
            Aula Conecta · Consultoría Educativa
          </span>
        </div>
        <p className="font-script text-lg font-semibold leading-tight text-plum-600 sm:max-w-xs sm:text-center">
          Transformando la manera de enseñar para transformar la manera de aprender
        </p>
        <p className="max-w-xs text-xs leading-relaxed text-plum-900/60 sm:text-right">
          © {new Date().getFullYear()} Aula Conecta.
          <br />
          Proyecto educativo independiente, sin afiliación con Blooket.
        </p>
      </div>
    </footer>
  );
}
