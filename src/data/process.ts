export type ProcessIcon =
  | "diagnosis"
  | "planning"
  | "development"
  | "review"
  | "launch";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ProcessIcon;
}

export const processSection = {
  eyebrow: "Como funciona",
  title: "Um processo claro do diagnóstico à publicação",
  description:
    "Cada projeto é conduzido em etapas bem definidas, com comunicação direta, revisões e acompanhamento durante todo o desenvolvimento.",
} as const;

export const processSteps = [
  {
    id: "diagnostico",
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos sua empresa, seus objetivos, seu público e o que precisa ser resolvido.",
    icon: "diagnosis",
  },
  {
    id: "planejamento",
    number: "02",
    title: "Planejamento",
    description:
      "Definimos a estrutura, o conteúdo, a identidade e os recursos necessários para o projeto.",
    icon: "planning",
  },
  {
    id: "design-desenvolvimento",
    number: "03",
    title: "Design e desenvolvimento",
    description:
      "Construímos a solução com foco em clareza, experiência do usuário, desempenho e responsividade.",
    icon: "development",
  },
  {
    id: "revisao-ajustes",
    number: "04",
    title: "Revisão e ajustes",
    description:
      "Apresentamos a primeira versão, recebemos seu retorno e realizamos os ajustes necessários.",
    icon: "review",
  },
  {
    id: "publicacao-suporte",
    number: "05",
    title: "Publicação e suporte",
    description:
      "Configuramos domínio e hospedagem, publicamos o projeto e oferecemos suporte após a entrega.",
    icon: "launch",
  },
] satisfies ProcessStep[];
