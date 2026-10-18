import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { contactInfo } from "@/data/contact";
import { heroContent } from "@/data/hero";

const primaryActionHref = contactInfo.whatsappUrl || "#contato";
const primaryActionIsExternal = Boolean(contactInfo.whatsappUrl);

function HeroVisual() {
  return (
    <div className="relative mx-auto hidden w-full max-w-sm sm:max-w-md lg:mt-0 lg:block lg:max-w-[27rem] xl:max-w-[29rem]" aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.10] blur-3xl sm:h-72 sm:w-72"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card/90 p-4 shadow-card sm:p-5 lg:p-5">
        <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" aria-hidden="true" />

        <div className="pointer-events-none absolute left-5 top-8 hidden w-24 rounded-2xl border border-border bg-foreground/[0.035] p-3 sm:block" aria-hidden="true">
          <span className="block h-1.5 w-10 rounded-full bg-primary/60" />
          <span className="mt-3 block h-1.5 rounded-full bg-foreground/[0.16]" />
          <span className="mt-2 block h-1.5 w-2/3 rounded-full bg-foreground/10" />
        </div>

        <div className="pointer-events-none absolute right-5 top-16 hidden w-20 rounded-2xl border border-primary/20 bg-primary/[0.055] p-3 sm:block" aria-hidden="true">
          <span className="block h-2 w-2 rounded-full bg-primary" />
          <span className="mt-5 block h-px bg-primary/30" />
          <span className="mt-3 block h-1.5 rounded-full bg-foreground/[0.14]" />
        </div>

        <div className="pointer-events-none absolute bottom-24 right-7 hidden h-12 w-28 rounded-2xl border border-border bg-foreground/[0.035] sm:block" aria-hidden="true" />

        <div className="relative mx-auto flex aspect-[1.05/1] max-w-[17rem] items-center justify-center sm:max-w-[21rem] lg:max-w-[24rem]">
          <div className="absolute inset-4 rounded-full border border-primary/[0.18] bg-primary/[0.03]" aria-hidden="true" />
          <div className="absolute inset-10 rounded-full border border-border" aria-hidden="true" />

          <Image
            src="/images/brand/web/logo-abelha.webp"
            alt=""
            width={420}
            height={217}
            priority
            className="relative z-10 h-auto w-[96%] drop-shadow-xl"
          />
        </div>

        <div className="relative mt-3 grid grid-cols-3 gap-2.5" aria-hidden="true">
          <span className="h-12 rounded-xl border border-border bg-foreground/[0.035]" />
          <span className="h-12 rounded-xl border border-primary/20 bg-primary/[0.08]" />
          <span className="h-12 rounded-xl border border-border bg-foreground/[0.035]" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-border bg-background pb-[4.5rem] pt-12 scroll-mt-24 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16 xl:pt-[4.5rem]"
    >
      <div className="hero-backdrop absolute inset-0 -z-10" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.16fr)_minmax(320px,0.84fr)] lg:gap-12 xl:grid-cols-[minmax(0,1.18fr)_minmax(340px,0.82fr)] xl:gap-14">
          <div className="max-w-[52rem]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.11em] text-primary sm:text-sm">
              {heroContent.eyebrow}
            </p>

            <h1 className="max-w-[51rem] text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.04] xl:text-[3.58rem]">
              {heroContent.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:max-w-[42rem]">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryActionHref}
                target={primaryActionIsExternal ? "_blank" : undefined}
                rel={primaryActionIsExternal ? "noopener noreferrer" : undefined}
                className="button-primary whitespace-nowrap"
              >
                {heroContent.primaryAction.label}
              </Link>

              <Link
                href={heroContent.secondaryAction.href}
                className="button-secondary whitespace-nowrap"
              >
                {heroContent.secondaryAction.label}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 border-t border-border pt-5 sm:grid-cols-3">
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
