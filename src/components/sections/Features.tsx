import FeatureCard from "@/components/cards/FeatureCard";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { solutions, solutionsSection } from "@/data/solutions";

export default function Features() {
  return (
    <Section id="solucoes" className="border-b border-white/10 bg-[#080808] scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionTitle
          eyebrow={solutionsSection.eyebrow}
          title={solutionsSection.title}
          description={solutionsSection.description}
          tone="dark"
        />

        <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
          Cada solução é planejada a partir da realidade da empresa, com foco em clareza, atendimento e processos mais organizados.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <FeatureCard key={solution.id} solution={solution} />
        ))}
      </div>
    </Section>
  );
}
