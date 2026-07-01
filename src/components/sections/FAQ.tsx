import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, faqSection } from "@/data/faq";

export default function FAQ() {
  return (
    <Section id="faq" className="border-b border-white/10 bg-[#181818] scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <SectionTitle
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            description={faqSection.description}
            tone="dark"
          />

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">
            As respostas ajudam a alinhar expectativas antes do diagnóstico e deixam o início do projeto mais claro.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="rounded-3xl border border-white/10 bg-[#202020] p-3 text-card-foreground shadow-[0_18px_60px_rgba(0,0,0,0.2)] sm:p-4"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-white/10 px-2 last:border-b-0 data-[state=open]:bg-white/[0.025] sm:px-3"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold leading-6 text-card-foreground hover:text-primary hover:no-underline focus-visible:ring-primary/70 sm:text-lg">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
