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
  title: "Tecnologia com organização, proximidade e propósito",
  description:
    "A RODE Soluções Inteligentes desenvolve projetos digitais personalizados para empresas e profissionais que desejam crescer com mais presença, eficiência e clareza.",
} as const;

export const aboutContent = {
  paragraphs: [
    "A RODE nasceu para transformar necessidades reais de negócios em soluções digitais claras, profissionais e funcionais. Cada projeto é desenvolvido de forma personalizada, com atenção à identidade do cliente, aos objetivos da empresa e à experiência de quem utiliza a solução.",
    "O trabalho combina planejamento, design, desenvolvimento e automação, sempre com comunicação direta durante todas as etapas e orientação também após a publicação.",
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
