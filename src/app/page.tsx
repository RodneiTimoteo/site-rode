import Header from "@/components/layout/Header";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeAbout from "@/components/home/HomeAbout";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomeSolutions from "@/components/home/HomeSolutions";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="conteudo-principal">
        <HeroCarousel />
        <HomeSolutions />
        <FeaturedProjects />
        <HomeAbout />
        <HomeFinalCta />
      </main>

      <Footer />
    </>
  );
}
