import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { featuredProject } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <Section
      id="projetos"
      className="border-y border-border bg-background scroll-mt-24"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Projeto em destaque"
          title="Uma presença digital construída com propósito"
          description="Conheça um projeto real desenvolvido pela RODE."
          tone="dark"
        />

        <Link href="/portfolio" className="button-secondary w-fit shrink-0">
          Explorar portfólio
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <article className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-72 overflow-hidden bg-surface-subtle sm:min-h-96 lg:min-h-[30rem]">
          <Image
            src={featuredProject.images[0].src}
            alt={featuredProject.images[0].alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-brand-champagne">
              {featuredProject.status}
            </span>
            <span className="text-sm text-muted-foreground">
              Caso real de cliente
            </span>
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
            {featuredProject.category}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-card-foreground sm:text-4xl">
            {featuredProject.client}
          </h3>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {featuredProject.solution}
          </p>

          <ul className="mt-6 grid gap-3" aria-label="Destaques do projeto">
            {featuredProject.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-card-foreground"
              >
                <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={`/portfolio${featuredProject.detailsHref}`}
            className="button-primary mt-8 w-fit"
          >
            Ver detalhes do projeto
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Section>
  );
}
