"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Leaf, Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FCFAF9]/90 backdrop-blur-md shadow-sm"
          : "bg-[#FCFAF9]/0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2 text-lg font-display font-medium tracking-tight text-forest-900">
          <Leaf className="h-5 w-5 text-forest-600" strokeWidth={1.75} />
          Fisio+
        </a>

        <nav className="hidden items-center gap-9 text-[15px] text-ink/80 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-forest-700 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-forest-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group hidden items-center gap-2 rounded-full bg-[#4F6D5A] px-5 py-2.5 text-sm font-medium text-[#F7F4EF] transition-all duration-300 hover:bg-forest-800 hover:shadow-lg hover:shadow-forest-700/20 lg:flex"
        >
          Agendar sessão
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="text-forest-800 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-forest-900/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-ink/80 transition-colors hover:bg-forest-100/60 hover:text-forest-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#4F6D5A] px-5 py-3 text-sm font-medium text-cream"
          >
            Agendar sessão
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
