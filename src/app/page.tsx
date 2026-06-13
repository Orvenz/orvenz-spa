import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Region from "@/components/Region";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Region />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
