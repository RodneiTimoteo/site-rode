import InternalPage from "@/components/layout/InternalPage";
import Projects from "@/components/sections/Projects";
import { projectsSection } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfólio",
  description: projectsSection.description,
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <InternalPage
      eyebrow="Portfólio"
      title={projectsSection.title}
      description={projectsSection.description}
    >
      <Projects showHeading={false} />
    </InternalPage>
  );
}
