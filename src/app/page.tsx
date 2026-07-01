import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
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

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
