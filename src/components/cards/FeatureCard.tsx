import { Code2, Gauge, Layers3 } from "lucide-react";

type FeatureIcon = "layers" | "code" | "gauge";

interface FeatureCardProps {
  icon: FeatureIcon;
  title: string;
  description: string;
}

const icons = {
  layers: Layers3,
  code: Code2,
  gauge: Gauge,
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  const Icon = icons[icon];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}