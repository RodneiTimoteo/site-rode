import InternalPage from "@/components/layout/InternalPage";
import About from "@/components/sections/About";
import { aboutSection } from "@/data/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre",
  description: aboutSection.description,
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <InternalPage
      eyebrow="Sobre"
      title={aboutSection.title}
      description={aboutSection.description}
    >
      <About showHeading={false} />
    </InternalPage>
  );
}
