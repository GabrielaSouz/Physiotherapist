import { Leaf, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-12 text-cream/70 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-medium text-cream">
          <Leaf className="h-5 w-5 text-forest-400" strokeWidth={1.75} />
          Fisio+
        </a>

        <p className="text-sm">
          © {new Date().getFullYear()} Fisio+. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 hover:bg-forest-600 hover:text-cream"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 hover:bg-forest-600 hover:text-cream"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:contato@fisiomais.com"
            aria-label="E-mail"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 hover:bg-forest-600 hover:text-cream"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
