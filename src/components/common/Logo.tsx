import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    wrapper: "gap-2",
    name: "text-lg",
    detail: "text-[0.65rem]",
  },
  md: {
    wrapper: "gap-3",
    name: "text-xl",
    detail: "text-xs",
  },
  lg: {
    wrapper: "gap-3.5",
    name: "text-2xl",
    detail: "text-sm",
  },
} as const;

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const classes = sizeClasses[size];

  return (
    <div
      className={["inline-flex items-center", classes.wrapper, className].join(" ")}
      aria-label={siteConfig.name}
    >
      <span className="h-9 w-px rounded-full bg-primary/70" aria-hidden="true" />

      <span className="flex flex-col leading-none">
        <span
          className={[classes.name, "font-semibold tracking-normal text-foreground"].join(" ")}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={[
            classes.detail,
            "mt-1 font-medium uppercase tracking-[0.14em] text-muted-foreground",
          ].join(" ")}
        >
          Soluções Inteligentes
        </span>
      </span>
    </div>
  );
}
