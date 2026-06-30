import Link from "next/link";

import Container from "@/components/layout/Container";

interface CTAProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export default function CTA({
  id,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTAProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {eyebrow}
            </p>
          )}

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={primaryAction.href}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              {primaryAction.label}
            </Link>

            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}