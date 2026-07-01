import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { DesignProcess } from "@/components/portfolio/DesignProcess";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

const ProcessPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <DesignProcess />
      <CTA />
      <Footer />
    </main>
  );
};

export default ProcessPage;
