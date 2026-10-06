export type SolutionIcon = "layout" | "integration" | "workflow" | "support";

export interface Solution {
  id: string;
  number: string;
  icon: SolutionIcon;
  title: string;
  description: string;
  items: string[];
  whatsappMessage: string;
}

export const solutionsSection = {
  eyebrow: "Soluções",
  title: "Tecnologia aplicada às necessidades reais da sua empresa",
  description:
    "Escolha o ponto que mais se aproxima da sua necessidade. A conversa inicial serve para entender o cenário e definir um escopo adequado.",
} as const;

export const solutions = [
  {
    id: "sites-landing-pages",
    number: "01",
    icon: "layout",
    title: "Sites e landing pages",
    description:
      "Para apresentar sua empresa e seus serviços com clareza, funcionar bem no celular e conduzir o visitante até o contato.",
    items: [
      "Sites institucionais",
      "Landing pages para serviços e campanhas",
      "Portfólios profissionais",
      "Integração com WhatsApp e redes sociais",
    ],
    whatsappMessage:
      "Olá! Conheci a RODE pelo site e quero conversar sobre um site ou landing page. Meu objetivo é: [conte brevemente o que você precisa].",
  },
  {
    id: "formularios-integracoes",
    number: "02",
    icon: "integration",
    title: "Formulários e integrações",
    description:
      "Para receber solicitações de forma organizada e conectar o site aos canais e às ferramentas já usadas pela empresa.",
    items: [
      "Formulários de contato e captação",
      "Encaminhamento por e-mail",
      "Integrações com WhatsApp e CRM",
      "Conexão com outras ferramentas previstas no projeto",
    ],
    whatsappMessage:
      "Olá! Conheci a RODE pelo site e quero conversar sobre formulários ou integrações. Hoje preciso conectar: [descreva as ferramentas ou o fluxo].",
  },
  {
    id: "automacoes-processos",
    number: "03",
    icon: "workflow",
    title: "Automações de processos",
    description:
      "Para reduzir tarefas repetitivas e organizar etapas de atendimento ou operação que hoje dependem de trabalho manual.",
    items: [
      "Diagnóstico de processos",
      "Mapeamento de tarefas repetitivas",
      "Automação de etapas definidas no escopo",
      "Soluções ajustadas à rotina da empresa",
    ],
    whatsappMessage:
      "Olá! Conheci a RODE pelo site e quero conversar sobre uma automação. A tarefa que desejo simplificar é: [descreva como funciona hoje].",
  },
  {
    id: "manutencao-suporte",
    number: "04",
    icon: "support",
    title: "Manutenção e suporte",
    description:
      "Para manter um site atualizado, corrigir problemas e contar com acompanhamento técnico depois da publicação.",
    items: [
      "Atualizações de conteúdo",
      "Ajustes e correções",
      "Acompanhamento técnico",
      "Manutenção contratada conforme a necessidade",
    ],
    whatsappMessage:
      "Olá! Conheci a RODE pelo site e quero conversar sobre manutenção ou suporte para um site. Preciso de ajuda com: [descreva o problema ou atualização].",
  },
] satisfies Solution[];
