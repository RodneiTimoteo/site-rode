import {
  Check,
  MessageCircle,
  PlugZap,
  MonitorSmartphone,
  Workflow,
  Wrench,
} from "lucide-react";

import type { Solution } from "@/data/solutions";
import { buildWhatsAppUrl } from "@/data/contact";

const icons = {
  layout: MonitorSmartphone,
  integration: PlugZap,
  workflow: Workflow,
  support: Wrench,
} as const;

interface FeatureCardProps {
  solution: Solution;
}

export default function FeatureCard({ solution }: FeatureCardProps) {
  const Icon = icons[solution.icon];
  const whatsappUrl = buildWhatsAppUrl(solution.whatsappMessage);

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-surface-elevated sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/[0.075] text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground transition group-hover:border-primary/45 group-hover:text-brand-champagne">
          {solution.number}
        </span>
      </div>

      <div className="mt-7 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-normal text-card-foreground">
          {solution.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {solution.description}
        </p>

        <ul className="mt-6 space-y-3 border-t border-border pt-6">
          {solution.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar sobre ${solution.title} pelo WhatsApp`}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-brand-champagne transition hover:border-primary/70 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Conversar sobre este serviço
          </a>
        )}
      </div>
    </article>
  );
}
