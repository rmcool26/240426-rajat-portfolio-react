import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const ContactPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;
