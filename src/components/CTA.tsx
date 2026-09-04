import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-forest-600 px-6 py-20 text-cream lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-forest-600/40 blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-200">
          Pronto para dar o primeiro passo?
        </p>
        <h2 className="font-display text-3xl font-medium leading-tight text-balance sm:text-4xl">
          Vamos juntos transformar sua qualidade de vida.
        </h2>

        <a
          href="mailto:contato@fisiomais.com"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-forest-800 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Agendar minha sessão
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </section>
  );
}
