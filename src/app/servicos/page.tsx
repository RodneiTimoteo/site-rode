import FeatureCard from "@/components/cards/FeatureCard";
import InternalPage from "@/components/layout/InternalPage";
import Section from "@/components/layout/Section";
import { solutions, solutionsSection } from "@/data/solutions";
import { createPageMetadata } from "@/lib/metadata";

const serviceAnchors: Record<string, string[]> = {
  "sites-landing-pages": ["sites", "catalogos"],
  "formularios-integracoes": ["integracoes"],
  "automacoes-processos": ["automacoes"],
  "manutencao-suporte": ["manutencao"],
};

export const metadata = createPageMetadata({
  title: "Serviços",
  description: solutionsSection.description,
  path: "/servicos",
});

export default function ServicesPage() {
  return (
    <InternalPage
      eyebrow="Serviços"
      title={solutionsSection.title}
      description={solutionsSection.description}
    >
      <Section id="solucoes" className="bg-surface-subtle scroll-mt-24">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution.id} className="relative h-full">
              {serviceAnchors[solution.id]?.map((anchor) => (
                <span
                  key={anchor}
                  id={anchor}
                  className="pointer-events-none absolute -top-28"
                  aria-hidden="true"
                />
              ))}
              <FeatureCard solution={solution} />
            </div>
          ))}
        </div>
      </Section>
    </InternalPage>
  );
}
