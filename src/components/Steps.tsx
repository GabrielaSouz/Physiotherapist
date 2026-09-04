import { Activity, Footprints, Syringe } from "lucide-react";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const steps = [
  {
    number: "01",
    title: "Alívio da dor",
    description:
      "Tratamentos individualizados que atacam a causa da dor, não apenas os sintomas.",
    icon: Syringe,
  },
  {
    number: "02",
    title: "Mobilidade",
    description:
      "Recupere seus movimentos com segurança e volte a fazer o que você ama.",
    icon: Footprints,
  },
  {
    number: "03",
    title: "Fortalecimento",
    description:
      "Um corpo mais forte, estável e preparado para os desafios do dia a dia.",
    icon: Activity,
  },
];

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EF] px-6 py-24 lg:px-10">
      {/* onda mordendo o topo — cor = seção anterior (Hero, bg-cream) */}
           <WaveDivider position="top" color="#FCFAF9" />
         {/* onda mordendo a base — cor = próxima seção (HowItWorks, bg-cream) */}
           <WaveDivider position="bottom" color="#FCFAF9" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Sua recuperação começa aqui
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink text-balance sm:text-4xl">
            Pequenas ações hoje,
            <br />
            grandes transformações amanhã.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (


            <Reveal
              key={step.number}
              delay={i * 120}
              className="group relative sm:border-l sm:border-forest-900/10 sm:pl-8 sm:first:pl-0 sm:first:border-l-0"
            >

              {/* <span className="font-display text-sm text-[#4F6D5A]/70 mb-4 block">
                {step.number}
              </span> */}
              <div className="flex items-center justify-center gap-2.5">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#839676] text-[#4f6d5a] shadow-sm transition-all duration-300 group-hover:-translate-y-1 bg-forest-700 group-hover:text-cream group-hover:shadow-lg group-hover:shadow-forest-700/25">
                <step.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>

              <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className=" text-[15px] leading-relaxed text-ink/60">
                  {step.description}
                </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
