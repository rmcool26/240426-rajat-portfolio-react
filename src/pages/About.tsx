import { motion } from "framer-motion";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";
import { MagneticButton } from "@/components/portfolio/MagneticButton";
import { Mail, Linkedin } from "lucide-react";

const AboutPage = () => {
  const { about, contact } = content;

  const whyRajat = [
    {
      title: "Messy workflows, made simple",
      desc: "I turn confusing business processes into clear flows, screens and decisions.",
    },
    {
      title: "Business-first UX",
      desc: "I connect user needs, business goals and real constraints before jumping into screens.",
    },
    {
      title: "Clean UI with intent",
      desc: "I design interfaces that feel premium, usable and calm — not noisy or over-designed.",
    },
    {
      title: "Design that can ship",
      desc: "I think beyond Figma: responsiveness, handoff, frontend feasibility and final execution.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <Nav />

      {/* ABOUT HERO */}
      <section className="relative isolate overflow-hidden bg-background py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
              About Rajat
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Not just a designer. <br />
              <span className="text-primary">A finisher.</span>
            </h1>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground md:text-xl">
              <p>
                I’m Rajat Mishra — a UI/UX Designer, and programmatic designer who turns messy workflows into clean, shipped digital products.
              </p>
              <p>
                I design websites, dashboards and web apps with business clarity, usable flows and frontend-ready thinking.
              </p>
              <p className="italic text-foreground/80">
                There are thousands of designers who can make a good-looking screen. I like staying with the problem until it becomes simple, useful and ready to move forward.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RMCOOL26 DECODED CARD */}
      <section className="relative isolate bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-3xl border border-border bg-background p-8 md:p-12 shadow-soft"
          >
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              rmcool26 decoded
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The cool guy behind the pixels — my personal design signature: calm under complexity, sharp with pixels, and focused on finishing what matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY RAJAT CARDS */}
      <section className="relative isolate bg-background py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Why work with me?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyRajat.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary"
                >
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STATS */}
      <section className="relative isolate border-y border-border bg-background py-12 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
            {about.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <CTA
        title="Think I can help <br /><span className='text-primary'>untangle your workflow?</span>"
        subtext="If you need someone who can simplify the mess, design the flow, and stay close until it ships — let’s talk."
        buttons={[
          {
            label: "View Work",
            href: "/work",
            variant: "primary",
            cursorLabel: "See what I've shipped",
          },
          {
            label: "Email Me",
            href: `mailto:${contact.email}`,
            variant: "ghost",
            icon: <Mail className="h-4 w-4" />,
            cursorLabel: "Shoot me an email",
          },
          {
            label: "LinkedIn",
            href: contact.linkedin,
            variant: "ghost",
            icon: <Linkedin className="h-4 w-4" />,
            cursorLabel: "Connect on LinkedIn",
            external: true,
          },
        ]}
      />

      <Footer />
    </main>
  );
};

export default AboutPage;
