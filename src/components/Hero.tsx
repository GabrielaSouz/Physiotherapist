import Image from "next/image";
import { ArrowUpRight, PlayCircle, ShieldCheck, Users, Dumbbell } from "lucide-react";
import Reveal from "./Reveal";

const avatars = [
  "https://i.pravatar.cc/64?img=47",
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-14 lg:px-10 lg:pt-20">
      {/* ambient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-forest-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-64 h-96 w-96 rounded-full bg-forest-100/60 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Fisioterapia personalizada
          </p>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ink text-balance sm:text-6xl">
            Seu corpo não
            <br />
            deveria limitar
            <br />
            <span className="italic text-forest-600">sua vida.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/65">
            Tratamentos personalizados para aliviar dores, recuperar
            movimentos e devolver sua confiança no seu dia a dia.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group flex items-center gap-2 rounded-full bg-[#4F6D5A] px-6 py-3.5 text-sm font-medium text-cream shadow-md shadow-forest-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-xl hover:shadow-forest-700/30"
            >
              Agendar minha sessão
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#sobre"
              className="group flex items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-forest-700"
            >
              <PlayCircle className="h-5 w-5 text-forest-600 transition-transform duration-300 group-hover:scale-110" />
              Conhecer meu trabalho
            </a>
          </div>

          <div className="mt-11 flex items-center gap-4">
            {/* <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <span
                  key={i}
                  className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-cream"
                >
                  <Image
                    src={src}
                    alt="Paciente atendido"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
            </div> */}
            <p className="text-sm leading-snug text-ink/70">
              <span className="font-semibold text-ink">+200 pessoas</span> já
              transformaram
              <br className="hidden sm:block" /> sua qualidade de vida
            </p>
          </div>
        </Reveal>

        {/* Right column: image + floating cards */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] rounded-tr-[6rem] border-8 border-cream shadow-2xl shadow-forest-900/10 sm:aspect-[9/10]">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
              alt="Fisioterapeuta atendendo paciente, avaliando o joelho"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          {/* Floating stat card 1 */}
          <div className="absolute -top-6 -right-4 hidden w-40 animate-float items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl shadow-forest-900/10 backdrop-blur sm:flex">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
              <Dumbbell className="h-4 w-4" />
            </span>
            <p className="text-xs leading-tight text-ink/70">
              <span className="block font-display text-lg font-medium text-ink">
                +5
              </span>
              anos de experiência
            </p>
          </div>

          {/* Floating stat card 2 */}
          <div
            className="absolute right-[-1.5rem] top-1/2 hidden w-40 -translate-y-1/2 animate-float items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl shadow-forest-900/10 backdrop-blur sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
              <Users className="h-4 w-4" />
            </span>
            <p className="text-xs leading-tight text-ink/70">
              <span className="block font-display text-lg font-medium text-ink">
                +200
              </span>
              pacientes atendidos
            </p>
          </div>

          {/* Floating stat card 3 */}
          <div
            className="absolute -bottom-6 right-2 hidden w-44 animate-float items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl shadow-forest-900/10 backdrop-blur sm:flex"
            style={{ animationDelay: "2.4s" }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <p className="text-xs leading-tight text-ink/70">
              <span className="block font-medium text-ink">CREFITO</span>
              XXXXXX-F
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
