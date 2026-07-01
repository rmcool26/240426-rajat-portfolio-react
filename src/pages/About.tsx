import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { About } from "@/components/portfolio/About";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

const AboutPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default AboutPage;
