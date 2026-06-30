import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle
          eyebrow="Perguntas frequentes"
          title="Informações importantes antes de começar."
          description="Use esta seção para esclarecer dúvidas comuns e reduzir objeções dos visitantes."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-slate-950">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-base leading-7 text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}