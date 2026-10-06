export interface AboutPerson {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface AboutDifferential {
  id: string;
  title: string;
}

export const aboutSection = {
  eyebrow: "Sobre a RODE",
  title: "Quem atende e como o trabalho é conduzido",
  description:
    "A RODE une desenvolvimento, organização e identidade de marca para transformar uma necessidade de negócio em uma solução clara e funcional.",
} as const;

export const aboutContent = {
  paragraphs: [
    "Cada projeto começa com uma conversa para entender o objetivo, o público e o problema a resolver. A partir disso, a RODE organiza o escopo, desenvolve a solução, apresenta a versão para revisão e orienta os próximos passos até a publicação.",
  ],
  brandStory:
    "O nome RODE une Rodnei e Débora. A referência à abelha representa organização, trabalho em equipe, dedicação e construção — valores que orientam a forma como cada projeto é planejado e desenvolvido.",
} as const;

export const aboutPeople = [
  {
    id: "rodnei-timoteo",
    name: "Rodnei Timóteo",
    role: "Desenvolvimento e soluções digitais",
    description:
      "Responsável pelo planejamento, desenvolvimento de sites, landing pages, automações, integrações e soluções personalizadas para cada projeto.",
  },
  {
    id: "debora",
    name: "Débora",
    role: "Organização e identidade da marca",
    description:
      "Participa da construção da identidade da RODE e representa os valores de organização, cuidado, colaboração e consistência presentes na marca.",
  },
] satisfies AboutPerson[];

export const aboutDifferentials = [
  {
    id: "atendimento-direto",
    title: "Atendimento direto com o responsável pelo projeto",
  },
  {
    id: "comunicacao-clara",
    title: "Comunicação clara durante o desenvolvimento",
  },
  {
    id: "solucoes-personalizadas",
    title: "Soluções personalizadas para cada necessidade",
  },
] satisfies AboutDifferential[];
