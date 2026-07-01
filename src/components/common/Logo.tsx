import Image from "next/image";

import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    wrapper: "gap-3",
    bee: "h-12 w-[4.4rem]",
    name: "text-3xl",
    detail: "text-[0.62rem]",
  },
  md: {
    wrapper: "gap-3.5",
    bee: "h-14 w-[5rem]",
    name: "text-[2.15rem]",
    detail: "text-xs",
  },
  lg: {
    wrapper: "gap-4",
    bee: "h-[4.25rem] w-[6.1rem]",
    name: "text-[2.85rem]",
    detail: "text-[0.94rem]",
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
          sizes="100px"
          className="object-contain object-left"
          priority
        />
      </span>

      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={[
            "block font-semibold tracking-[0.035em] text-foreground drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)]",
            classes.name,
          ].join(" ")}
        >
          RODE
        </span>

        <span
          className={[
            "mt-1 block truncate font-semibold uppercase tracking-[0.18em] text-primary/90",
            classes.detail,
          ].join(" ")}
        >
          Soluções Inteligentes
        </span>
      </span>
    </div>
  );
}
