import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import FeatureCard from "@/components/cards/FeatureCard";

const features = [
  {
    icon: "layers" as const,
    title: "Arquitetura organizada",
    description:
      "Estrutura de pastas clara e componentes separados por responsabilidade.",
  },
  {
    icon: "code" as const,
    title: "Componentes reutilizáveis",
    description:
      "Blocos prontos para acelerar a criação de sites institucionais e landing pages.",
  },
  {
    icon: "gauge" as const,
    title: "Performance e manutenção",
    description:
      "Base moderna com Next.js, TypeScript e Tailwind CSS para projetos rápidos e fáceis de evoluir.",
  },
];

export default function Features() {
  return (
    <Section id="recursos">
      <SectionTitle
        eyebrow="Recursos"
        title="Tudo o que uma boa base precisa."
        description="Uma fundação pensada para reduzir retrabalho e manter qualidade entre diferentes projetos."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}