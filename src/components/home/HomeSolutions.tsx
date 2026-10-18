import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MonitorSmartphone,
  Workflow,
  Wrench,
} from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { homeSolutions } from "@/data/home";
import type { HomeSolutionIcon } from "@/data/home";

const icons: Record<HomeSolutionIcon, typeof MonitorSmartphone> = {
  website: MonitorSmartphone,
  catalog: BookOpen,
  automation: Workflow,
  support: Wrench,
};

export default function HomeSolutions() {
  return (
    <Section
      id="solucoes"
      className="relative bg-brand-warm-white text-light-foreground scroll-mt-24"
    >
      <span id="processo" className="absolute -top-24" aria-hidden="true" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Soluções"
          title="Tecnologia pensada para o seu negócio"
          description="Soluções digitais objetivas para apresentar sua empresa, organizar seus produtos e tornar a rotina mais simples."
          tone="light"
        />

        <Link
          href="/servicos"
          className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-graphite px-6 py-3 text-sm font-semibold text-brand-warm-white transition hover:bg-brand-graphite-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-warm-white"
        >
          Ver todos os serviços
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeSolutions.map((solution) => {
          const Icon = icons[solution.icon];

          return (
            <Link
              key={solution.id}
              href={solution.href}
              className="group flex min-h-64 flex-col rounded-3xl border border-brand-graphite/15 bg-brand-warm-white p-6 transition hover:-translate-y-1 hover:border-brand-gold/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-graphite text-brand-champagne">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="mt-7 text-xl font-semibold text-light-foreground">
                {solution.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-light-muted">
                {solution.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-light-foreground">
                Saiba mais
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
