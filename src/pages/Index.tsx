import { useEffect } from "react";
import Lenis from "lenis";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { DesignProcess } from "@/components/portfolio/DesignProcess";
import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { AboutCombined } from "@/components/portfolio/AboutCombined";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { OtherWork } from "@/components/portfolio/OtherWork";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.title = `${content.meta.name} — ${content.meta.role}`;
    const desc = `${content.meta.name}: UI/UX Lead with 9+ years. I solve complex problems through design & systems thinking. Currently leading design at Terranxt.`;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      {/* <Marquee /> */}
      <FeaturedWork />
      {/* <OtherWork /> */}
      {/* <AboutCombined /> */}
      <About />
      <Experience />
      <DesignProcess />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
