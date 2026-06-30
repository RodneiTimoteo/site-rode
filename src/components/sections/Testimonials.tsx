import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-slate-50">
      <SectionTitle
        eyebrow="Depoimentos"
        title="Experiências de quem já confiou no trabalho."
        description="Provas sociais ajudam a transmitir confiança, autoridade e segurança para novos clientes."
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}