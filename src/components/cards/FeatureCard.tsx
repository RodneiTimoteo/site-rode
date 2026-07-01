import { Check, Compass, MonitorSmartphone, Workflow } from "lucide-react";

import type { Solution } from "@/data/solutions";

const icons = {
  layout: MonitorSmartphone,
  workflow: Workflow,
  strategy: Compass,
} as const;

interface FeatureCardProps {
  solution: Solution;
}

export default function FeatureCard({ solution }: FeatureCardProps) {
  const Icon = icons[solution.icon];

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/[0.12] bg-[#202020] p-6 text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-[#242424] sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/[0.075] text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-muted-foreground transition group-hover:border-primary/45 group-hover:text-primary">
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

        <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
          {solution.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
