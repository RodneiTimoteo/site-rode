import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero
          eyebrow="Starter Kit Premium"
          title="Uma base profissional para criar sites modernos com mais rapidez."
          description="Next.js, TypeScript, Tailwind CSS, Shadcn/UI e componentes reutilizáveis organizados para projetos reais."
          primaryAction={{
            label: "Conhecer estrutura",
            href: "#sobre",
          }}
          secondaryAction={{
            label: "Entrar em contato",
            href: "#contato",
          }}
        />

        <Section id="sobre" className="bg-slate-50">
          <SectionTitle
            eyebrow="Sobre o Starter Kit"
            title="Uma estrutura sólida para projetos profissionais."
            description="Componentes reutilizáveis, conteúdo organizado e uma arquitetura preparada para sites institucionais e landing pages."
          />
        </Section>

        <Features />

        <Testimonials />

        <FAQ />
        <Contact />
        <CTA
          eyebrow="Pronto para começar?"
          title="Transforme sua próxima ideia em um projeto profissional."
          description="Use esta base para criar sites institucionais e landing pages com mais velocidade, organização e consistência."
          primaryAction={{
            label: "Entrar em contato",
            href: "#contato",
          }}
          secondaryAction={{
            label: "Conhecer recursos",
            href: "#recursos",
          }}
        />
      </main>

      <Footer />
    </>
  );
}