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
    <section id={id} className={["py-20 sm:py-24 lg:py-28", className].join(" ")}>
      <Container>{children}</Container>
    </section>
  );
}
