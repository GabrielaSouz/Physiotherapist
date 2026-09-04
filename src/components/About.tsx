import Image from "next/image";
import { GraduationCap, HeartHandshake, ArrowUpRight, Star } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  { label: "Formação especializada", icon: GraduationCap },
  { label: "Atendimento humanizado", icon: HeartHandshake },
  { label: "Atualização constante", icon: Star },
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#FCFAF9] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[3rem] rounded-bl-[6rem] shadow-xl shadow-forest-900/10">
            <Image
              src="/imagem-fisiot.png"
              alt="Fisioterapeuta sorridente em seu consultório"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 hidden grid-cols-4 gap-2 sm:grid"
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-forest-400/60"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Sobre mim
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink text-balance sm:text-4xl">
            Mais que tratamentos, conexão e cuidado.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/65">
            Acredito que cada corpo tem uma história única. Por isso, meu foco
            é ouvi-lo, entender suas necessidades e caminhar junto com você em
            cada etapa da sua recuperação.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                  <h.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-ink/80">
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-forest-900/15 bg-transparent px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-forest-700 hover:bg-forest-700 hover:text-cream"
          >
            Conhecer minha história
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
