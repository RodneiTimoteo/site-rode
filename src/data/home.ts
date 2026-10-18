export type HeroVisualType = "website" | "catalog" | "automation";

export interface HomeHeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  visual: HeroVisualType;
}

export type HomeSolutionIcon =
  | "website"
  | "catalog"
  | "automation"
  | "support";

export interface HomeSolution {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: HomeSolutionIcon;
}

export const homeHeroSlides = [
  {
    id: "sites-profissionais",
    eyebrow: "Sites profissionais",
    title: "Sites profissionais que valorizam seu negócio.",
    description:
      "Criamos experiências digitais modernas e personalizadas para fortalecer sua presença online.",
    ctaLabel: "Conhecer soluções",
    ctaHref: "/servicos",
    visual: "website",
  },
  {
    id: "catalogos-digitais",
    eyebrow: "Catálogos digitais",
    title: "Seus produtos online. Pedidos pelo WhatsApp.",
    description:
      "Apresente produtos, preços e ofertas em um catálogo organizado, fácil de atualizar e utilizar.",
    ctaLabel: "Conhecer catálogos digitais",
    ctaHref: "/servicos#catalogos",
    visual: "catalog",
  },
  {
    id: "integracoes-automacao",
    eyebrow: "Integrações e automação",
    title: "Tecnologia que simplifica sua rotina.",
    description:
      "Integramos sites e ferramentas para facilitar atualizações, organizar informações e reduzir tarefas manuais.",
    ctaLabel: "Explorar integrações",
    ctaHref: "/servicos#integracoes",
    visual: "automation",
  },
] satisfies HomeHeroSlide[];

export const homeSolutions = [
  {
    id: "sites-institucionais",
    title: "Sites institucionais",
    description:
      "Presença digital clara, responsiva e preparada para conduzir visitantes até o contato.",
    href: "/servicos#sites",
    icon: "website",
  },
  {
    id: "catalogos-digitais",
    title: "Catálogos digitais",
    description:
      "Produtos, preços e ofertas apresentados de forma organizada, com pedidos pelo WhatsApp.",
    href: "/servicos#catalogos",
    icon: "catalog",
  },
  {
    id: "integracoes-automacao",
    title: "Integrações e automação",
    description:
      "Sites e ferramentas conectados para organizar informações e reduzir tarefas manuais.",
    href: "/servicos#integracoes",
    icon: "automation",
  },
  {
    id: "manutencao-suporte",
    title: "Manutenção e suporte",
    description:
      "Atualizações, correções e acompanhamento técnico depois da publicação.",
    href: "/servicos#manutencao",
    icon: "support",
  },
] satisfies HomeSolution[];

export const homeAbout = {
  title: "Muito mais que sites. Soluções inteligentes.",
  description:
    "A RODE desenvolve soluções digitais personalizadas, combinando tecnologia, criatividade e atendimento próximo para atender às necessidades de cada negócio.",
  differentials: [
    "Atendimento personalizado",
    "Soluções adaptadas ao negócio",
    "Tecnologia com foco em praticidade",
  ],
} as const;

export const homeFinalCta = {
  title: "Seu próximo projeto começa aqui.",
  description:
    "Conte o que sua empresa precisa e descubra como podemos ajudar.",
} as const;
