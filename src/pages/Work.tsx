import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

const WorkPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <FeaturedWork />
      <CTA />
      <Footer />
    </main>
  );
};

export default WorkPage;
