import Image from "next/image";

import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    wrapper: "gap-2.5",
    bee: "h-[3.15rem] w-[4.7rem]",
    name: "text-[2rem]",
    detail: "text-[0.64rem]",
  },
  md: {
    wrapper: "gap-3",
    bee: "h-[3.55rem] w-[5.25rem]",
    name: "text-[2.32rem]",
    detail: "text-[0.82rem]",
  },
  lg: {
    wrapper: "gap-3.5",
    bee: "h-[4.45rem] w-[6.55rem]",
    name: "text-[3.05rem]",
    detail: "text-[0.98rem]",
  },
} as const;

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const classes = sizeClasses[size];

  return (
    <div
      className={[
        "inline-flex min-w-0 items-center",
        classes.wrapper,
        className,
      ].join(" ")}
      aria-label={siteConfig.name}
    >
      <span className={["relative shrink-0", classes.bee].join(" ")}>
        <Image
          src="/images/brand/logoabelha.png"
          alt="Símbolo da RODE Soluções Inteligentes"
          fill
          sizes="110px"
          className="object-contain object-left"
          priority
        />
      </span>

      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          aria-label="RODE"
          className={[
            "block font-semibold tracking-[0.03em] drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)]",
            classes.name,
          ].join(" ")}
        >
          <span className="text-foreground" aria-hidden="true">R</span>
          <span className="text-primary" aria-hidden="true">O</span>
          <span className="text-foreground" aria-hidden="true">D</span>
          <span className="text-primary" aria-hidden="true">E</span>
        </span>

        <span
          className={[
            "mt-1 block truncate font-semibold uppercase tracking-[0.14em] text-primary/90",
            classes.detail,
          ].join(" ")}
        >
          Soluções Inteligentes
        </span>
      </span>
    </div>
  );
}
