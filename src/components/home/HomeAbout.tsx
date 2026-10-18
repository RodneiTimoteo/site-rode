import Link from "next/link";
import { ArrowRight, Cpu, SlidersHorizontal, UserRound } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { homeAbout } from "@/data/home";

const icons = [UserRound, SlidersHorizontal, Cpu] as const;

export default function HomeAbout() {
  return (
    <Section
      id="sobre"
      className="bg-brand-warm-white text-light-foreground scroll-mt-24"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionTitle
            eyebrow="Sobre a RODE"
            title={homeAbout.title}
            description={homeAbout.description}
            tone="light"
          />

          <Link
            href="/sobre"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand-graphite/20 px-6 py-3 text-sm font-semibold text-light-foreground transition hover:border-brand-gold hover:bg-brand-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            Conhecer a RODE
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {homeAbout.differentials.map((differential, index) => {
            const Icon = icons[index];

            return (
              <li
                key={differential}
                className="flex items-center gap-4 rounded-2xl border border-brand-graphite/15 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-graphite text-brand-champagne">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-base font-semibold text-light-foreground">
                  {differential}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
