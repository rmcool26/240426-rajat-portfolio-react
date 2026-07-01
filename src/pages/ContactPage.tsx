import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CTA } from "@/components/portfolio/CTA";
import { content } from "@/content";
import { Mail, Linkedin, FileText } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Contact />
      <CTA
        title="Got a messy workflow? <br /><span className='text-primary'>Let’s make it cool.</span>"
        subtext="Send the brief — I’ll help turn it into something clean, usable and shippable."
        buttons={[
          {
            label: "Email Me",
            href: `mailto:${content.contact.email}`,
            variant: "primary",
            icon: <Mail className="h-4 w-4" />,
            cursorLabel: "Shoot me an email",
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
            cursorLabel: "View Resume",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default ContactPage;
