# Fisio+ — Landing Page

Landing page para clínica de fisioterapia, construída com **Next.js 14 (App Router)**, **React**, **TypeScript** e **Tailwind CSS**. Totalmente responsiva, com micro-interações (hover, scroll-reveal, elementos flutuantes) e respeito a `prefers-reduced-motion`.

## Stack

- Next.js 14 + App Router
- React 18 + TypeScript
- Tailwind CSS (tokens customizados: paleta verde "forest", tipografia serif/sans)
- [lucide-react](https://lucide.dev) para ícones
- `next/font` (Fraunces + Inter) via Google Fonts
- `next/image` com imagens remotas (Unsplash / Pravatar como placeholders)

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/
    layout.tsx       # fontes + metadata
    page.tsx          # monta as seções
    globals.css        # estilos globais + utilitário .reveal
  components/
    Header.tsx         # navbar sticky com menu mobile
    Hero.tsx           # seção principal + cards flutuantes
    Steps.tsx           # "01 / 02 / 03"
    HowItWorks.tsx       # 4 etapas do método
    Treatments.tsx        # grid de especialidades
    About.tsx              # seção "sobre mim"
    Testimonials.tsx        # carrossel de depoimentos (client component)
    CTA.tsx                   # banner final de contato
    Footer.tsx                 # rodapé
    Reveal.tsx                  # wrapper com IntersectionObserver p/ animação on-scroll
```

## Notas

- As imagens de exemplo vêm de `images.unsplash.com` e `i.pravatar.cc` — troque pelos ativos reais do cliente (fotos, retrato, avatares de pacientes) antes de publicar.
- Os links do menu (`#sobre`, `#tratamentos`, etc.) fazem scroll suave até as respectivas seções (`scroll-behavior: smooth` já está em `globals.css`).
- Cores, tipografia e demais tokens estão centralizados em `tailwind.config.ts` (`theme.extend.colors.forest`, `fontFamily.display/sans`).
