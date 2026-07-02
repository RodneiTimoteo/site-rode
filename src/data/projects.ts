export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  label: string;
  fit: "contain" | "cover";
  objectPosition: string;
}

export interface FeaturedProject {
  id: string;
  client: string;
  category: string;
  objective: string;
  solution: string;
  technologies: string[];
  status: string;
  primaryLink?: ProjectLink;
  detailsHref: string;
  images: ProjectImage[];
}

export interface SegmentConcept {
  id: string;
  title: string;
  description: string;
}

export const projectsSection = {
  eyebrow: "Projetos",
  title: "Projetos desenvolvidos para transformar presença digital em confiança",
  description:
    "Cada projeto é planejado de acordo com os objetivos, o público e a identidade de cada cliente.",
} as const;

export const featuredProject: FeaturedProject = {
  id: "camila-timoteo-vieira",
  client: "Camila Timóteo Vieira",
  category: "Portfólio executivo",
  objective:
    "Apresentar sua trajetória profissional, experiências, cursos, conquistas e projetos pessoais em uma presença digital moderna e organizada.",
  solution:
    "Desenvolvimento de um site responsivo, com identidade executiva, navegação clara, integração com redes sociais e estrutura preparada para valorizar sua autoridade profissional.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  status: "Projeto publicado",
  detailsHref: "#case-camila-timoteo-vieira",
  images: [
    {
      src: "/images/projects/camila/hero.jpeg",
      alt: "Página inicial do portfólio executivo de Camila Timóteo Vieira",
      label: "Página inicial",
      fit: "contain",
      objectPosition: "center",
    },
    {
      src: "/images/projects/camila/sobre.jpeg",
      alt: "Seção sobre a trajetória profissional de Camila Timóteo Vieira",
      label: "Trajetória profissional",
      fit: "contain",
      objectPosition: "center",
    },
    {
      src: "/images/projects/camila/conquistas.jpeg",
      alt: "Seção de conquistas e reconhecimentos profissionais de Camila Timóteo Vieira",
      label: "Conquistas e reconhecimento",
      fit: "contain",
      objectPosition: "center",
    },
    {
      src: "/images/projects/camila/canais.jpeg",
      alt: "Seção de conteúdos, redes sociais e comunidades do site de Camila",
      label: "Conteúdo e comunidades",
      fit: "contain",
      objectPosition: "center",
    },
    {
      src: "/images/projects/camila/final.jpeg",
      alt: "Seção final de contato e rodapé do portfólio de Camila Timóteo Vieira",
      label: "Contato e encerramento",
      fit: "contain",
      objectPosition: "center",
    },
  ],
};

export const segmentConcepts = [
  {
    id: "advocacia",
    title: "Advocacia",
    description:
      "Presença institucional sóbria, clara e focada em confiança.",
  },
  {
    id: "clinica-odontologica",
    title: "Clínica odontológica",
    description:
      "Experiência acolhedora, profissional e orientada ao agendamento.",
  },
  {
    id: "industria-servicos-b2b",
    title: "Indústria e serviços B2B",
    description:
      "Comunicação objetiva para apresentar soluções, capacidades e gerar oportunidades comerciais.",
  },
] satisfies SegmentConcept[];

export const segmentConceptsIntro = {
  title: "Conceitos por segmento",
  description:
    "Estudos visuais desenvolvidos para demonstrar possibilidades de presença digital em diferentes áreas.",
} as const;
