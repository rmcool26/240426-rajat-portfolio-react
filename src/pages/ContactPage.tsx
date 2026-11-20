import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const ContactPage = () => (
  <main className="relative min-h-screen overflow-x-clip bg-foreground">
    <Cursor />
    <ScrollProgress />
    <Nav />
    <div className="pt-16 sm:pt-20">
      <Contact />
    </div>
    <Footer />
  </main>
);

export default ContactPage;
