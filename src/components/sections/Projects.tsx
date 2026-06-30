import Link from "next/link";
import { ArrowDown, ExternalLink } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import {
  featuredProject,
  projectsSection,
  segmentConcepts,
  segmentConceptsIntro,
} from "@/data/projects";

function ProjectPreview() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-card p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
        <div className="rounded-2xl border border-border bg-[#080808] p-4">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <span className="rounded-full border border-primary/25 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-primary">
              Prévia provisória
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_0.42fr]">
            <div className="min-h-72 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-8 max-w-xs">
                <span className="mb-3 block h-2 w-24 rounded-full bg-primary/70" />
                <span className="block h-4 w-56 rounded-full bg-foreground/80" />
                <span className="mt-3 block h-3 w-40 rounded-full bg-muted-foreground/45" />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <span className="h-24 rounded-2xl border border-white/10 bg-white/[0.04]" />
                <span className="h-24 rounded-2xl border border-primary/20 bg-primary/[0.08]" />
                <span className="h-24 rounded-2xl border border-white/10 bg-white/[0.04]" />
              </div>

              <div className="mt-6 space-y-3">
                <span className="block h-2 rounded-full bg-white/16" />
                <span className="block h-2 w-5/6 rounded-full bg-white/10" />
                <span className="block h-2 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[11rem] flex-col justify-end rounded-[2rem] border border-white/12 bg-[#050505] p-2 md:mx-0 md:max-w-none">
              <div className="min-h-64 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4">
                <span className="mb-5 block h-1.5 w-12 rounded-full bg-primary/70" />
                <span className="block h-3 w-24 rounded-full bg-foreground/75" />
                <span className="mt-3 block h-2 w-20 rounded-full bg-white/15" />
                <div className="mt-8 space-y-2">
                  <span className="block h-14 rounded-xl bg-white/[0.05]" />
                  <span className="block h-14 rounded-xl bg-primary/[0.08]" />
                  <span className="block h-14 rounded-xl bg-white/[0.05]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Moldura provisória até a inclusão das imagens reais do projeto.
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projetos" className="border-b border-white/10 bg-background scroll-mt-24">
      <SectionTitle
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
        tone="dark"
      />

      <article
        id={featuredProject.detailsHref.replace("#", "")}
        className="mt-12 grid gap-8 rounded-[2rem] border border-border bg-card p-5 text-card-foreground md:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <ProjectPreview />

        <div className="lg:pl-4">
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
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {featuredProject.primaryLink.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : (
              <span className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-muted-foreground">
                Link em confirmação
              </span>
            )}

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

      <div className="mt-14 border-t border-white/10 pt-10">
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
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
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
