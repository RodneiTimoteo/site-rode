import { ArrowUpRight, MessageCircle } from "lucide-react";

import Container from "@/components/layout/Container";
import { buildWhatsAppUrl, contactInfo } from "@/data/contact";
import { homeFinalCta } from "@/data/home";

export default function HomeFinalCta() {
  const whatsappUrl = buildWhatsAppUrl(contactInfo.whatsappMessage);

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-b border-border bg-background py-section-sm scroll-mt-24 sm:py-section-md"
    >
      <span id="faq" className="absolute -top-24" aria-hidden="true" />
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Vamos conversar?</p>
            <h2 className="mt-4 text-3xl font-semibold text-card-foreground sm:text-4xl lg:text-5xl">
              {homeFinalCta.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              {homeFinalCta.description}
            </p>
          </div>

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-8 w-full shrink-0 sm:w-fit lg:mt-0"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
