import { CheckCircle2 } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import {
  aboutContent,
  aboutDifferentials,
  aboutPeople,
  aboutSection,
} from "@/data/about";

function AboutVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="rounded-[2rem] border border-border bg-card p-5 text-card-foreground">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <span className="text-3xl font-semibold tracking-normal text-foreground">
            RODE
          </span>
          <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            organização
          </span>
        </div>

        <div className="grid gap-4 py-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="h-2 w-20 rounded-full bg-primary/70" />
              <span className="h-2 w-12 rounded-full bg-white/15" />
            </div>
            <div className="space-y-3">
              <span className="block h-2 rounded-full bg-white/16" />
              <span className="block h-2 w-5/6 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                clareza
              </span>
              <span className="mt-6 block h-16 rounded-xl bg-white/[0.05]" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                tecnologia
              </span>
              <span className="mt-6 block h-16 rounded-xl bg-primary/[0.08]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-border pt-5">
          <span className="h-px bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="h-px bg-white/12" />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="sobre" className="border-b border-white/10 bg-background scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-start lg:gap-16">
        <div>
          <SectionTitle
            eyebrow={aboutSection.eyebrow}
            title={aboutSection.title}
            description={aboutSection.description}
            tone="dark"
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <AboutVisual />
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {aboutPeople.map((person) => (
          <article
            key={person.id}
            className="rounded-3xl border border-border bg-card p-6 text-card-foreground transition duration-300 hover:border-primary/35 hover:bg-secondary sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {person.role}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-card-foreground">
              {person.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {person.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/[0.055] p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          História da marca
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {aboutContent.brandStory}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {aboutDifferentials.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-6 text-muted-foreground"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
