import { useEffect } from "react";
import Lenis from "lenis";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { Mail } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.title = `${content.meta.name} — ${content.meta.role}`;
    const desc = `${content.meta.name}: UI/UX Lead with 9+ years. I solve complex problems through design & systems thinking. Currently leading design at Terranxt.`;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    return () => lenis.destroy();
  }, []);

  const emailHref = `mailto:${content.contact.email}`;

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <CTA
        title="Messy workflow? <br /><span className='text-primary'>Cool. Let’s make it work.</span>"
        subtext="Start with the work, the story, or just say hi — I’ll help turn the rough idea into something clear and usable."
        buttons={[
          {
            label: "View Work",
            href: "/work",
            variant: "primary",
            cursorLabel: "See the proof",
          },
          {
            label: "About Rajat",
            href: "/about",
            variant: "ghost",
            cursorLabel: "Know the guy",
          },
          {
            label: "Email Me",
            href: emailHref,
            variant: "ghost",
            icon: <Mail className="h-4 w-4" />,
            cursorLabel: "Say hi",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Index;
