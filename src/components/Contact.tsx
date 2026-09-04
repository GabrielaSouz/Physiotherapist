
"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-[#FCFAF9]  px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
            Entre em contato
          </p>

          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Pronto para cuidar melhor do seu corpo?
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/60">
            Agende sua avaliação e dê o primeiro passo para uma vida
            com mais movimento, conforto e qualidade.
          </p>
        </Reveal>

        {/* Conteúdo */}
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-forest-900/5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Informações */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">

            <div>
              <h3 className="font-display text-2xl text-ink">
                Vamos conversar?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink/55">
                Estamos à disposição para tirar suas dúvidas e
                encontrar o melhor tratamento para você.
              </p>

              {/* Informações */}
              <div className="mt-10 space-y-6">

                {/* Endereço */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Endereço
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-ink/55">
                      Rua das Flores, 123
                      <br />
                      São Paulo — SP
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Telefone
                    </p>

                    <a
                      href="tel:+5511999999999"
                      className="mt-1 block text-sm text-ink/55 transition hover:text-forest-700"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-ink">
                      E-mail
                    </p>

                    <a
                      href="mailto:contato@clinica.com"
                      className="mt-1 block text-sm text-ink/55 transition hover:text-forest-700"
                    >
                      contato@clinica.com
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Horário de atendimento
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-ink/55">
                      Segunda a sexta
                      <br />
                      08:00 — 18:00
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Botão */}
            <a
              href="#agendamento"
              className="group mt-10 flex w-fit items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-forest-800"
            >
              Agendar avaliação

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mapa */}
          <div className="relative min-h-[420px] lg:min-h-[600px]">

            <iframe
              title="Localização da clínica"
              src="https://www.google.com/maps?q=São%20Paulo%2C%20SP&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

          </div>
        </div>
      </div>
    </section>
  );
}

