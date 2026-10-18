import Link from "next/link";

import Container from "@/components/layout/Container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background py-14 sm:py-16 lg:py-20">
      <div className="hero-backdrop absolute inset-0 -z-10" />

      <Container>
        <nav aria-label="Navegação estrutural" className="mb-8 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <li>
              <Link
                href="/"
                className="rounded-sm transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-brand-champagne">
              {eyebrow}
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
