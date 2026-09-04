import { Search, Sprout, Dumbbell, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Avaliação",
    description:
      "Entendemos sua dor, seu histórico e seus objetivos para identificar o melhor caminho para sua recuperação.",
    icon: Search,
  },
  {
    number: "02",
    title: "Tratamento",
    description:
      "Criamos um plano terapêutico personalizado com técnicas adequadas às suas necessidades.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Fortalecimento",
    description:
      "Utilizamos exercícios específicos para recuperar força, mobilidade e estabilidade.",
    icon: Dumbbell,
  },
  {
    number: "04",
    title: "Prevenção",
    description:
      "Orientamos você para evitar novas lesões e manter sua qualidade de vida no dia a dia.",
    icon: ShieldCheck,
  },
];

export default function HowItWorksTest() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-[#FCFAF9] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-forest-600">
            Como funciona
          </p>

          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Um método pensado{" "}
            <br/><span className="italic text-forest-600">para você</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/60 sm:text-base">
            Cada etapa é cuidadosamente planejada para acompanhar sua evolução
            e ajudar você a recuperar seus movimentos com mais segurança.
          </p>
        </Reveal>

        {/* CONTENT */}
        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_0.9fr_1fr] lg:gap-12 xl:gap-16">

          {/* LEFT CARDS */}
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            {items.slice(0, 2).map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number}>
                  <div className="group relative rounded-[2rem] border border-forest-900/10 bg-white p-6 shadow-[0_12px_40px_rgba(40,70,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(40,70,50,0.1)] sm:p-7">

                    {/* NUMBER */}
                    <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-forest-900/20">
                      {item.number}
                    </div>

                    {/* ICON */}
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF1E8] text-forest-700 transition-all duration-300 group-hover:bg-forest-700 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* TEXT */}
                    <h3 className="font-display text-xl font-medium text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-ink/60">
                      {item.description}
                    </p>

                    {/* DECORATIVE LINE */}
                    <div className="mt-5 h-px w-10 bg-forest-700/20 transition-all duration-300 group-hover:w-16 group-hover:bg-forest-700/50" />
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* CENTER IMAGE */}
          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md">

              {/* Decorative background */}
              <div className="absolute -inset-3 rounded-[3rem] bg-[#EAF1E8]/70 blur-sm" />

              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] rounded-tl-[9rem] rounded-br-[9rem] border-[6px] border-white shadow-[0_25px_70px_rgba(40,70,50,0.14)] sm:rounded-tl-[11rem] sm:rounded-br-[11rem]">

                <Image
                  src="/HowItWorksTest.png"
                  alt="Fisioterapeuta atendendo paciente"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md sm:-bottom-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF1E8] text-forest-700">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-ink">
                    Cuidado personalizado
                  </p>
                  <p className="text-[11px] text-ink/50">
                    Em todas as etapas
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT CARDS */}
          <div className="order-3 flex flex-col gap-5">
            {items.slice(2, 4).map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number}>
                  <div className="group relative rounded-[2rem] border border-forest-900/10 bg-white p-6 shadow-[0_12px_40px_rgba(40,70,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(40,70,50,0.1)] sm:p-7">

                    {/* NUMBER */}
                    <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-forest-900/20">
                      {item.number}
                    </div>

                    {/* ICON */}
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF1E8] text-forest-700 transition-all duration-300 group-hover:bg-forest-700 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* TEXT */}
                    <h3 className="font-display text-xl font-medium text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-ink/60">
                      {item.description}
                    </p>

                    {/* DECORATIVE LINE */}
                    <div className="mt-5 h-px w-10 bg-forest-700/20 transition-all duration-300 group-hover:w-16 group-hover:bg-forest-700/50" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <Reveal className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <p className="text-sm leading-7 text-ink/50">
            Seu tratamento evolui junto com você. Cada etapa é adaptada ao seu
            momento, respeitando seus limites e objetivos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}