import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { DesignProcess } from "@/components/portfolio/DesignProcess";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { Mail, FileText } from "lucide-react";

const ProcessPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <DesignProcess />
      <CTA
        title="Have a messy flow that <br /><span className='text-primary'>needs a clear path?</span>"
        subtext="I can help decode the problem, craft the experience, and prepare the design for real execution."
        buttons={[
          {
            label: "View Work",
            href: "/work",
            variant: "primary",
            cursorLabel: "See the process in action",
          },
          {
            label: "Email Me",
            href: `mailto:${content.contact.email}`,
            variant: "ghost",
            icon: <Mail className="h-4 w-4" />,
            cursorLabel: "Let's untangle it",
          },
          {
            label: "Download Resume",
            href: content.contact.resume,
            variant: "ghost",
            icon: <FileText className="h-4 w-4" />,
            cursorLabel: "Check my experience",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default ProcessPage;
