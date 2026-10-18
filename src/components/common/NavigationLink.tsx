"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

interface NavigationLinkProps extends ComponentProps<typeof Link> {
  activeClassName?: string;
}

function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/$/, "");
}

export default function NavigationLink({
  href,
  className = "",
  activeClassName = "nav-link-active",
  ...props
}: NavigationLinkProps) {
  const pathname = normalizePath(usePathname());
  const target = typeof href === "string" ? href.split("#")[0] : "";
  const isActive = target ? pathname === normalizePath(target) : false;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[className, isActive ? activeClassName : ""].join(" ")}
      {...props}
    />
  );
}
