import { CheckCircle2, ClipboardList, Code2, Globe2, Search } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { processSection, processSteps } from "@/data/process";
import type { ProcessIcon } from "@/data/process";

const icons: Record<ProcessIcon, typeof Search> = {
  diagnosis: Search,
  planning: ClipboardList,
  development: Code2,
  review: CheckCircle2,
  launch: Globe2,
};

export default function Process() {
  return (
    <Section id="processo" className="border-b border-white/10 bg-[#151515] scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionTitle
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          description={processSection.description}
          tone="dark"
        />

        <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
          A sequência ajuda a transformar ideias soltas em entregas organizadas, com decisões claras em cada fase do projeto.
        </p>
      </div>

      <ol className="relative mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-5">
        <span
          className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-primary/35 via-white/[0.16] to-primary/20 lg:block"
          aria-hidden="true"
        />

        {processSteps.map((step) => {
          const Icon = icons[step.icon];

          return (
            <li key={step.id} className="relative">
              <article className="group flex h-full gap-4 rounded-3xl border border-white/10 bg-[#1A1A1A] p-5 text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-[#202020] md:flex-col">
                <div className="relative flex shrink-0 flex-col items-center md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/[0.075] text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="mt-3 hidden h-full w-px bg-white/10 md:hidden" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-card-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
