export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqSection = {
  eyebrow: "Perguntas frequentes",
  title: "Dúvidas comuns antes de iniciar um projeto",
  description:
    "Reunimos respostas objetivas sobre valores, prazos, hospedagem, manutenção e funcionamento do desenvolvimento.",
} as const;

export const faqItems = [
  {
    id: "quanto-custa-criar-site",
    question: "Quanto custa criar um site?",
    answer:
      "O valor depende do tipo de projeto, da quantidade de páginas, dos recursos necessários e do nível de personalização. Após entender sua necessidade, a RODE apresenta uma proposta clara e adequada ao escopo.",
  },
  {
    id: "prazo-projeto",
    question: "Quanto tempo leva para o projeto ficar pronto?",
    answer:
      "O prazo varia conforme a complexidade, o conteúdo e os recursos do projeto. Sites e landing pages mais simples costumam ser desenvolvidos em menos tempo, enquanto projetos personalizados exigem etapas adicionais de planejamento, revisão e integração.",
  },
  {
    id: "dominio-hospedagem",
    question: "Domínio e hospedagem estão inclusos?",
    answer:
      "Isso depende da proposta escolhida. A RODE orienta sobre domínio e hospedagem, pode realizar a configuração e deixa todos os custos e condições apresentados de forma transparente antes da contratação.",
  },
  {
    id: "responsivo-celular",
    question: "O site funcionará no celular?",
    answer:
      "Sim. Todos os projetos são desenvolvidos com estrutura responsiva, adaptada para celulares, tablets e computadores.",
  },
  {
    id: "alteracoes-desenvolvimento",
    question: "Posso solicitar alterações durante o desenvolvimento?",
    answer:
      "Sim. O processo inclui uma etapa de revisão para que você avalie a primeira versão e solicite os ajustes necessários dentro do escopo acordado.",
  },
  {
    id: "manutencao-entrega",
    question: "A RODE oferece manutenção após a entrega?",
    answer:
      "Sim. A manutenção pode ser contratada de forma opcional para atualizações, ajustes, suporte e acompanhamento técnico após a publicação.",
  },
  {
    id: "atendimento-outras-cidades",
    question: "A RODE atende clientes de outras cidades?",
    answer:
      "Sim. O atendimento pode ser realizado de forma remota para clientes de qualquer região do Brasil, além do atendimento local em Sertânia e região.",
  },
  {
    id: "site-google",
    question: "O site vai aparecer no Google?",
    answer:
      "O site será preparado com boas práticas técnicas de SEO e poderá ser indexado pelo Google. O posicionamento nas buscas depende de fatores como concorrência, conteúdo, autoridade do domínio e estratégia contínua de otimização.",
  },
  {
    id: "integracoes-ferramentas",
    question: "É possível integrar o site com WhatsApp, formulários ou outras ferramentas?",
    answer:
      "Sim. A RODE pode integrar WhatsApp, formulários, e-mail, CRM e outras ferramentas conforme a necessidade do projeto.",
  },
  {
    id: "pagamento",
    question: "Como funciona o pagamento?",
    answer:
      "As condições de pagamento são definidas na proposta comercial, de acordo com o tipo e o escopo do projeto. Tudo é apresentado antes do início do desenvolvimento.",
  },
] satisfies FaqItem[];
