import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
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
        <Hero />

        <Features />

        <Projects />

        <Process />

        <About />

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
