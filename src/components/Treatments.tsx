import {
  Bone,
  PersonStanding,
  Footprints as Running,
  HeartPulse,
  Sparkles,
  Activity,
  Hand,
  Brain,
  Waves,
  Users,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const treatments = [
  {
    title: "Coluna",
    description: "Dores na lombar, cervical, hérnia de disco, ciática e mais.",
    icon: Bone,
  },
  {
    title: "Joelho",
    description: "Lesões, dores, pós-operatório e fortalecimento.",
    icon: PersonStanding,
  },
  {
    title: "Esportiva",
    description:
      "Prevenção e tratamento de lesões para atletas e praticantes de atividade física, do amador ao competidor.",
    icon: Running,
  },
  {
    title: "Pós-operatório",
    description: "Recuperação segura e orientada para cirurgias ortopédicas.",
    icon: HeartPulse,
  },
  {
    title: "Pilates Terapêutico",
    description:
      "Força, equilíbrio e consciência corporal com segurança, respeitando o momento de cada corpo.",
    icon: Sparkles,
  },
  {
    title: "Ombro e Mão",
    description: "Tendinites, capsulite, lesões e reabilitação funcional.",
    icon: Hand,
  },
  {
    title: "Reabilitação Funcional",
    description:
      "Recuperação de movimento e força para retomar as atividades do dia a dia.",
    icon: Activity,
  },
  {
    title: "Dor Crônica",
    description: "Abordagem multidisciplinar para dores persistentes.",
    icon: Brain,
  },
  {
    title: "Hidroterapia",
    description:
      "Exercícios em piscina aquecida para reduzir impacto e dor durante a recuperação.",
    icon: Waves,
  },
  {
    title: "Terceira Idade",
    description: "Equilíbrio, mobilidade e prevenção de quedas.",
    icon: Users,
  },
];


export default function Treatments() {
  return (
    <section id="tratamentos" className="relative overflow-hidden bg-[#F7F4EF] px-6 py-24 lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-10 hidden text-forest-300/50 lg:block"
      >
        <svg width="140" height="220" viewBox="0 0 140 220" fill="none">
          <path
            d="M10 210 C 10 120, 60 90, 55 10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {Array.from({ length: 7 }).map((_, i) => (
            <ellipse
              key={i}
              cx={30 + (i % 2) * 20}
              cy={20 + i * 26}
              rx="16"
              ry="7"
              transform={`rotate(${i % 2 === 0 ? -30 : 30} ${30 + (i % 2) * 20} ${20 + i * 26})`}
              fill="currentColor"
              opacity={0.5}
            />
          ))}
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Tratamentos
          </p>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Como posso te ajudar
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-forest-900/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-cream">
                  <t.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-lg font-medium text-ink">
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/60">
                  {t.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* <Reveal className="mt-12 flex justify-center">
          <a
            href="#tratamentos"
            className="group flex items-center gap-2 rounded-full border border-forest-900/15 bg-cream px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-forest-700 hover:bg-forest-700 hover:text-cream"
          >
            Ver todos os tratamentos
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal> */}
      </div>
    </section>
  );
}
