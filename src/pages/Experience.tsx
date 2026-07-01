import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Experience } from "@/components/portfolio/Experience";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

const ExperiencePage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
};

export default ExperiencePage;
