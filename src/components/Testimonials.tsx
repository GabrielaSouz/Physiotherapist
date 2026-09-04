
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Depois de meses com dor na lombar, finalmente voltei a treinar sem dor. O atendimento é incrível!",
    name: "Juliana S.",
    role: "Paciente",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote:
      "Profissional extremamente atenciosa e competente. Me ajudou muito na recuperação do meu joelho.",
    name: "Carlos M.",
    role: "Paciente",
    avatar: "https://i.pravatar.cc/80?img=51",
  },
  {
    quote:
      "As sessões de pilates terapêutico mudaram minha postura e minha qualidade de vida.",
    name: "Fernanda L.",
    role: "Paciente",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote:
      "Método claro, evolução visível a cada semana e muito cuidado com cada detalhe do tratamento.",
    name: "Rafael P.",
    role: "Paciente",
    avatar: "https://i.pravatar.cc/80?img=13",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Carousel automático
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev === testimonials.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, AUTOPLAY_DELAY);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const AUTOPLAY_DELAY = 6000;
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="depoimentos"
      className="bg-[#F7F4EF] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Depoimentos
          </p>

          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Histórias reais de transformação
          </h2>
        </Reveal>

        {/* Carousel */}
        <div className="relative mt-14 grid items-center gap-10 lg:grid-cols-[1fr_280px]">

          {/* Depoimento principal */}
          <div className="relative">

            {/* Botão anterior */}
            <button
              onClick={handlePrevious}
              aria-label="Depoimento anterior"
              className="absolute -left-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest-700 shadow-md ring-1 ring-forest-900/5 transition hover:bg-forest-700 hover:text-white sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              key={currentIndex}
              className="min-h-[330px] rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-forest-900/5 sm:p-12"
            >
              {/* Estrelas */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>

              {/* Aspas */}
              <div className="mt-8">
                <span className="font-display text-6xl leading-none text-forest-200">
                  “
                </span>

                <p className="-mt-3 max-w-2xl font-display text-2xl leading-relaxed text-ink sm:text-3xl">
                  {currentTestimonial.quote}
                </p>
              </div>

              {/* Pessoa */}
              <div className="mt-10 flex items-center gap-4">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-ink">
                    {currentTestimonial.name}
                  </p>

                  <p className="text-xs text-ink/50">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Botão próximo */}
            <button
              onClick={handleNext}
              aria-label="Próximo depoimento"
              className="absolute -right-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest-700 shadow-md ring-1 ring-forest-900/5 transition hover:bg-forest-700 hover:text-white sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Lista lateral */}
          <div className="flex flex-col gap-3">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Mais histórias
            </p>

            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setCurrentIndex(index)}
                className={`group flex items-center gap-3 rounded-2xl p-3 text-left transition-all duration-300 ${index === currentIndex
                    ? "bg-white shadow-sm ring-1 ring-forest-900/5"
                    : "opacity-55 hover:bg-white/60 hover:opacity-100"
                  }`}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-ink/45">
                    {testimonial.role}
                  </p>
                </div>

                {index === currentIndex && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-forest-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Controles mobile */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
          <button
            onClick={handlePrevious}
            aria-label="Depoimento anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest-700 shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${index === currentIndex
                    ? "w-6 bg-forest-600"
                    : "w-1.5 bg-forest-200"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest-700 shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

