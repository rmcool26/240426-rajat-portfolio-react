import { useEffect } from "react";
import Lenis from "lenis";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { Mail, BriefcaseBusiness, UserRound, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.title = `${content.meta.name} — ${content.meta.role}`;
    const desc = `${content.meta.name}: UI/UX Lead with 10+ years. I solve complex problems through design & systems thinking. Currently leading design at Terranxt.`;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />

      {/* Start Here Hub */}
      <section className="relative isolate overflow-hidden bg-background py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-foreground">
              Not sure where to start?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Pick what matters right now.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "See the proof",
                description: "Websites, dashboards and apps I’ve shaped from messy briefs to usable products.",
                href: "/work",
                icon: <BriefcaseBusiness className="h-6 w-6" />,
                label: "View Work",
                cursorLabel: "See the proof",
              },
              {
                title: "Know the guy",
                description: "A quick read on Rajat Mishra, rmcool26 and why I care about finishing well.",
                href: "/about",
                icon: <UserRound className="h-6 w-6" />,
                label: "About Rajat",
                cursorLabel: "Know the guy",
              },
              {
                title: "Start a conversation",
                description: "Got a workflow, website or product idea that needs clarity? Send it over.",
                href: "/contact",
                icon: <Send className="h-6 w-6" />,
                label: "Contact Me",
                cursorLabel: "Say hi",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col items-start rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-soft"
              >
                <div className="mb-4 rounded-xl bg-secondary/50 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                  {card.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {card.description}
                </p>
                <Link
                  to={card.href}
                  data-cursor="hover"
                  data-cursor-label={card.cursorLabel}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
                >
                  {card.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
