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
    <section
      id={id}
      className={[
        "py-section-sm sm:py-section-md lg:py-section-lg",
        className,
      ].join(" ")}
    >
      <Container>{children}</Container>
    </section>
  );
}
