import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Experience } from "@/components/portfolio/Experience";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { Mail, Linkedin, FileText } from "lucide-react";

const ExperiencePage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Experience />
      <CTA
        title="Need senior design thinking <br /><span className='text-primary'>without the drama?</span>"
        subtext="I bring 15+ years of UI/UX, product, and frontend-aware design thinking to teams that want clarity and momentum."
        buttons={[
          {
            label: "Download Resume",
            href: content.contact.resume,
            variant: "primary",
            icon: <FileText className="h-4 w-4" />,
            cursorLabel: "Grab the resume",
          },
          {
            label: "LinkedIn",
            href: content.contact.linkedin,
            variant: "ghost",
            icon: <Linkedin className="h-4 w-4" />,
            cursorLabel: "Professional network",
            external: true,
          },
          {
            label: "Email Me",
            href: `mailto:${content.contact.email}`,
            variant: "ghost",
            icon: <Mail className="h-4 w-4" />,
            cursorLabel: "Get in touch",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default ExperiencePage;
