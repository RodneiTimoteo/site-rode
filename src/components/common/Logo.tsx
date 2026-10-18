import Image from "next/image";

import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  surface?: "dark" | "light";
  priority?: boolean;
}

const sizeClasses = {
  sm: {
    wrapper: "gap-2",
    bee: "h-9 w-[4.4rem]",
    wordmark: "h-5 w-[5.6rem]",
  },
  md: {
    wrapper: "gap-2.5",
    bee: "h-12 w-[5.8rem]",
    wordmark: "h-7 w-[7.6rem]",
  },
  lg: {
    wrapper: "gap-3",
    bee: "h-14 w-[6.8rem]",
    wordmark: "h-8 w-[9rem]",
  },
} as const;

export default function Logo({
  className = "",
  size = "md",
  surface = "dark",
  priority = false,
}: LogoProps) {
  const classes = sizeClasses[size];

  return (
    <span
      role="img"
      aria-label={siteConfig.name}
      className={[
        "inline-flex min-w-0 items-center",
        classes.wrapper,
        surface === "light"
          ? "rounded-xl bg-brand-graphite px-3 py-2"
          : "",
        className,
      ].join(" ")}
    >
      <span className={["relative shrink-0", classes.bee].join(" ")}>
        <Image
          src="/images/brand/web/logo-abelha.webp"
          alt=""
          fill
          sizes="110px"
          className="object-contain"
          priority={priority}
        />
      </span>

      <span className={["relative shrink-0", classes.wordmark].join(" ")}>
        <Image
          src="/images/brand/web/logo-rode.webp"
          alt=""
          fill
          sizes="150px"
          className="object-contain"
          priority={priority}
        />
      </span>
    </span>
  );
}
