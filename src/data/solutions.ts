export type SolutionIcon = "layout" | "workflow" | "strategy";

export interface Solution {
  id: string;
  number: string;
  icon: SolutionIcon;
  title: string;
  description: string;
  items: string[];
}

export const solutionsSection = {
  eyebrow: "Soluções",
  title: "Tecnologia aplicada às necessidades reais da sua empresa",
  description:
    "Desenvolvemos soluções digitais personalizadas para fortalecer sua presença online, simplificar processos e melhorar a experiência dos seus clientes.",
} as const;

export const solutions = [
  {
    id: "sites-landing-pages",
    number: "01",
    icon: "layout",
    title: "Sites e landing pages",
    description:
      "Projetos profissionais, responsivos e personalizados para apresentar sua empresa, fortalecer sua marca e facilitar o contato de novos clientes.",
    items: [
      "Sites institucionais",
      "Landing pages de alta conversão",
      "Portfólios profissionais",
      "Integração com WhatsApp e redes sociais",
    ],
  },
  {
    id: "automacoes-integracoes",
    number: "02",
    icon: "workflow",
    title: "Automações e integrações",
    description:
      "Conectamos ferramentas e automatizamos tarefas repetitivas para tornar o atendimento e a operação da empresa mais organizados e eficientes.",
    items: [
      "Automação de atendimento",
      "Formulários e captação de leads",
      "Integrações com WhatsApp, e-mail e CRM",
      "Organização de processos internos",
    ],
  },
  {
    id: "consultoria-ia",
    number: "03",
    icon: "strategy",
    title: "Consultoria e soluções com IA",
    description:
      "Analisamos necessidades, processos e oportunidades para desenvolver soluções digitais sob medida para cada negócio.",
    items: [
      "Diagnóstico de processos",
      "Agentes e assistentes de IA",
      "Soluções personalizadas",
      "Orientação tecnológica para empresas",
    ],
  },
] satisfies Solution[];
