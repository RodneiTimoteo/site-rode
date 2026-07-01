import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={["py-16 sm:py-20 lg:py-24 xl:py-28", className].join(" ")}>
      <Container>{children}</Container>
    </section>
  );
}
