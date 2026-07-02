import Link from "next/link";
import { ArrowDown, ExternalLink } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import Section from "@/components/layout/Section";
import {
  featuredProject,
  projectsSection,
  segmentConcepts,
  segmentConceptsIntro,
} from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projetos" className="border-b border-white/10 bg-[#050505] scroll-mt-24">
      <SectionTitle
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
        tone="dark"
      />

      <article
        id={featuredProject.detailsHref.replace("#", "")}
        className="mt-10 grid gap-8 rounded-[2rem] border border-white/10 bg-[#111111] p-5 text-card-foreground shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:mt-12 md:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <ProjectCarousel images={featuredProject.images} />

        <div className="min-w-0 lg:pl-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/35 bg-primary/[0.08] px-3 py-1 text-xs font-semibold text-primary">
              {featuredProject.status}
            </span>
            <span className="text-sm text-muted-foreground">
              Projeto realizado
            </span>
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            {featuredProject.category}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-normal text-card-foreground sm:text-4xl">
            {featuredProject.client}
          </h3>

          <div className="mt-7 space-y-6 text-sm leading-7 text-muted-foreground">
            <div>
              <h4 className="mb-2 font-semibold text-card-foreground">
                Objetivo
              </h4>
              <p>{featuredProject.objective}</p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-card-foreground">
                Solução entregue
              </h4>
              <p>{featuredProject.solution}</p>
            </div>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
            {featuredProject.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {featuredProject.primaryLink ? (
              <Link
                href={featuredProject.primaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {featuredProject.primaryLink.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}

            <Link
              href={featuredProject.detailsHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Ver detalhes
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t border-white/10 pt-9 sm:mt-14 sm:pt-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Conceitos por segmento
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">
            {segmentConceptsIntro.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {segmentConceptsIntro.description}
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {segmentConcepts.map((concept) => (
            <article
              key={concept.id}
              className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-primary/25 hover:bg-[#151515]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">
                Conceito visual
              </p>
              <h4 className="mt-4 text-lg font-semibold text-foreground">
                {concept.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {concept.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
