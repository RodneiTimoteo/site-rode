import Link from "next/link";

import Container from "@/components/layout/Container";
import { contactInfo } from "@/data/contact";
import { heroContent } from "@/data/hero";

const primaryActionHref = contactInfo.whatsappUrl || "#contato";
const primaryActionIsExternal = Boolean(contactInfo.whatsappUrl);

function HeroVisual() {
  return (
    <div
      className="relative mx-auto mt-14 w-full max-w-md lg:mt-0 lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-6 rounded-[2rem] border border-primary/10 bg-primary/[0.03] blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0C]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="h-px w-24 bg-primary/30" />
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="h-2 w-20 rounded-full bg-primary/70" />
              <span className="h-2 w-10 rounded-full bg-white/15" />
            </div>
            <div className="space-y-3">
              <span className="block h-2 rounded-full bg-white/16" />
              <span className="block h-2 w-4/5 rounded-full bg-white/10" />
              <span className="block h-2 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="min-h-28 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <span className="block h-8 w-8 rounded-xl border border-primary/30" />
              <span className="mt-5 block h-2 w-20 rounded-full bg-white/14" />
              <span className="mt-3 block h-2 w-14 rounded-full bg-primary/50" />
            </div>

            <div className="min-h-28 rounded-2xl border border-primary/20 bg-primary/[0.055] p-4">
              <span className="block h-2 w-16 rounded-full bg-primary/70" />
              <div className="mt-5 space-y-2.5">
                <span className="block h-2 rounded-full bg-white/14" />
                <span className="block h-2 w-4/5 rounded-full bg-white/10" />
                <span className="block h-2 w-3/5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="h-px bg-white/14" />
              <span className="h-3 w-3 rounded-full border border-primary/50" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <span className="h-16 rounded-xl bg-white/[0.045]" />
              <span className="h-16 rounded-xl bg-primary/[0.09]" />
              <span className="h-16 rounded-xl bg-white/[0.045]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-white/10 bg-background py-20 scroll-mt-24 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(201,165,92,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:gap-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:text-sm">
              {heroContent.eyebrow}
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.04]">
              {heroContent.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryActionHref}
                target={primaryActionIsExternal ? "_blank" : undefined}
                rel={primaryActionIsExternal ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-primary/40 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_rgba(201,165,92,0.16)] transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {heroContent.primaryAction.label}
              </Link>

              <Link
                href={heroContent.secondaryAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {heroContent.secondaryAction.label}
              </Link>
            </div>

            <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              {heroContent.trustItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
