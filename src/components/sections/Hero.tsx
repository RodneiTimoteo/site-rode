import Link from "next/link";
import Container from "@/components/layout/Container";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_35%)]" />

      <Container>
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {primaryAction.label}
                </Link>
              )}

              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}