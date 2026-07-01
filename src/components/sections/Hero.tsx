import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { contactInfo } from "@/data/contact";
import { heroContent } from "@/data/hero";

const primaryActionHref = contactInfo.whatsappUrl || "#contato";
const primaryActionIsExternal = Boolean(contactInfo.whatsappUrl);

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-md lg:mt-0 lg:max-w-none">
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.11] blur-3xl sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/88 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-6">
        <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto flex aspect-square max-w-[18rem] items-center justify-center sm:max-w-[22rem] lg:max-w-[25rem]">
          <div className="absolute inset-5 rounded-full border border-primary/18 bg-primary/[0.035]" aria-hidden="true" />
          <div className="absolute inset-12 rounded-full border border-white/10" aria-hidden="true" />

          <Image
            src="/images/brand/logoabelha.png"
            alt="Abelha da identidade visual da RODE Soluções Inteligentes"
            width={1536}
            height={1024}
            priority
            className="relative z-10 h-auto w-[88%] drop-shadow-[0_24px_42px_rgba(0,0,0,0.38)]"
          />
        </div>

        <div className="relative mt-5 grid gap-3 sm:grid-cols-3" aria-hidden="true">
          <span className="h-16 rounded-2xl border border-white/10 bg-white/[0.035]" />
          <span className="h-16 rounded-2xl border border-primary/20 bg-primary/[0.08]" />
          <span className="h-16 rounded-2xl border border-white/10 bg-white/[0.035]" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#050505] py-20 scroll-mt-24 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(201,165,92,0.12),transparent_32%),radial-gradient(circle_at_82%_42%,rgba(201,165,92,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_38%)]" />

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
