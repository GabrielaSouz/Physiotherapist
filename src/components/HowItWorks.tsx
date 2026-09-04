import { Search, Sprout, Dumbbell, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";


const items = [
  {
    title: "Avaliação",
    description: "Entendemos sua dor, seu histórico e seus objetivos.",
    icon: Search,
  },
  {
    title: "Tratamento",
    description: "Plano terapêutico personalizado com técnicas eficazes.",
    icon: Sprout,
  },
  {
    title: "Fortalecimento",
    description: "Exercícios específicos para recuperar força e estabilidade.",
    icon: Dumbbell,
  },
  {
    title: "Prevenção",
    description: "Orientações para evitar recidivas e manter sua qualidade de vida.",
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className=" bg-[#FCFAF9] px-6 py-24 lg:px-10">
    
    
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Como funciona
          </p>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Um método pensado{" "}
            <span className="italic text-forest-600">para você</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-2 gap-y-12 gap-x-6 sm:grid-cols-4 sm:gap-x-4">
          {/* connecting line, desktop only */}
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t border-dashed border-forest-900/20 sm:block"
          />
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 120}
              className="group relative z-10 flex flex-col items-center text-center"
            >
              <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-cream-dark text-forest-700 ring-8 ring-cream transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-forest-700 group-hover:text-cream">
                <item.icon className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-display text-lg font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[11rem] text-sm leading-relaxed text-ink/60">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
