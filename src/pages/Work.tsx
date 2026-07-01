import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { Mail, Linkedin, FileText } from "lucide-react";

const WorkPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <FeaturedWork />
      <CTA
        title="Seen enough proof? <br /><span className='text-primary'>Let’s talk about yours.</span>"
        subtext="Bring the messy brief — I’ll help shape it into a clean, usable product story."
        buttons={[
          {
            label: "Email Me",
            href: `mailto:${content.contact.email}`,
            variant: "primary",
            icon: <Mail className="h-4 w-4" />,
            cursorLabel: "Start a project",
          },
          {
            label: "LinkedIn",
            href: content.contact.linkedin,
            variant: "ghost",
            icon: <Linkedin className="h-4 w-4" />,
            cursorLabel: "Connect on LinkedIn",
            external: true,
          },
          {
            label: "Download Resume",
            href: content.contact.resume,
            variant: "ghost",
            icon: <FileText className="h-4 w-4" />,
            cursorLabel: "View my track record",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default WorkPage;
