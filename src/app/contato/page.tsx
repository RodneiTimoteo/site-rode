import InternalPage from "@/components/layout/InternalPage";
import Contact from "@/components/sections/Contact";
import { createPageMetadata } from "@/lib/metadata";

const contactDescription =
  "Conte o que deseja criar, integrar, automatizar ou manter. A RODE entende o cenário e orienta o próximo passo com base na sua necessidade.";

export const metadata = createPageMetadata({
  title: "Contato",
  description: contactDescription,
  path: "/contato",
});

export default function ContactPage() {
  return (
    <InternalPage
      eyebrow="Contato"
      title="Vamos entender o que seu projeto precisa?"
      description={contactDescription}
    >
      <Contact showHeading={false} />
    </InternalPage>
  );
}
