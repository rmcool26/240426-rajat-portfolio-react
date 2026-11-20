import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";

const milestones = [
  { year: "2016", title: "A foundation in the web", body: "Started in web design and development. Learned how layout, content, code and client needs meet in a real deliverable." },
  { year: "2020", title: "Interfaces with real-world data", body: "Moved into geospatial applications, where maps, complex information and practical field constraints shaped the experience." },
  { year: "2021", title: "Design tied to conversion", body: "At IIDE, worked on course-page experience and helped improve course-page conversion by 16%." },
  { year: "2022 → now", title: "From product designer to design lead", body: "Joined Terranxt as employee #2. Helped build pvNXT and the design practice, and now manage four designers in a 12-person cross-functional team." },
];

const principles = [
  ["Start with the workflow", "Understand what people are trying to finish, where work gets stuck and which constraints are real."],
  ["Design the system around it", "Map roles, information, states and handoffs before polishing individual screens."],
  ["Stay close to implementation", "Work with engineering through interaction details, responsive behaviour, QA and release."],
];

const AboutPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Cursor />
      <ScrollProgress />
      <Nav />

      <section className="bg-hero pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="container max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_330px] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">About Rajat / The person behind the product work</p>
              <h1 className="mt-5 max-w-4xl font-editorial text-[clamp(3.4rem,7vw,6.7rem)] leading-[0.92] text-foreground">
                I care about what happens after the screen looks finished.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-[1.85] text-muted-foreground md:text-lg">
                I’m Rajat Mishra, a product designer and UI/UX lead with 10+ years across websites, geospatial products, education and enterprise SaaS. I enjoy making complicated workflows easier to understand, easier to use and easier to build.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/work" className="inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-bold text-primary-foreground hover:bg-foreground" data-cursor="hover">
                  See selected work <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/experience" className="inline-flex h-12 items-center gap-2 border border-border bg-card px-5 text-sm font-bold text-foreground hover:border-primary hover:text-primary" data-cursor="hover">
                  Career & leadership
                </Link>
              </div>
            </motion.div>

            <motion.figure
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto w-full max-w-[330px]"
            >
              <div className="aspect-[4/5] overflow-hidden border border-border bg-secondary">
                <img src={content.hero.profileImage} alt="Rajat Mishra" width="900" height="1125" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                <span>Product design / Systems</span>
                <span>India</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">The point of view</p>
              <h2 className="mt-4 font-editorial text-4xl leading-[0.98] text-foreground md:text-5xl">Useful beats impressive.</h2>
            </div>
            <div className="max-w-3xl space-y-5 text-base leading-[1.9] text-muted-foreground">
              <p>
                A strong interface is more than a clean arrangement of components. It helps someone understand what matters, make a decision and move to the next step without needing a workaround.
              </p>
              <p>
                That means getting into the detail: data dependencies, permissions, empty states, edge cases, responsive behaviour, content and the handoff between design and engineering. I enjoy that level of work because it is where a product either holds together or falls apart.
              </p>
              <p>
                My frontend background helps me work through those questions with developers. My current role adds another layer: setting direction, reviewing work and helping a small design team deliver consistently with a wider product and engineering group.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">The path so far</p>
              <h2 className="mt-4 font-editorial text-5xl leading-[0.95] text-foreground md:text-6xl">A decade of changing problems.</h2>
            </div>
            <p className="max-w-lg text-sm leading-[1.8] text-muted-foreground">
              Different industries, different users, different constraints. Each move added another layer to how I approach product design.
            </p>
          </div>
          <ol className="grid gap-0 border-y border-border md:grid-cols-4 md:divide-x md:divide-border">
            {milestones.map((step, index) => (
              <motion.li
                key={step.year}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="border-b border-border py-7 last:border-b-0 md:border-b-0 md:px-5 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-editorial text-4xl text-primary">{step.year}</p>
                <h3 className="mt-5 font-display text-lg font-extrabold leading-snug text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">How I approach the work</p>
              <h2 className="mt-4 font-editorial text-4xl leading-[0.98] text-foreground md:text-5xl">A clear route from ambiguity to release.</h2>
              <Link to="/process" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground" data-cursor="hover">
                See the process <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {principles.map(([title, body], index) => (
                <li key={title} className="grid gap-3 py-6 sm:grid-cols-[50px_1fr] sm:gap-5">
                  <span className="font-editorial text-3xl text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-foreground">{title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-[1.8] text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-foreground py-16 text-background md:py-20">
        <div className="container flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-glow">The work speaks next</p>
            <h2 className="mt-4 max-w-3xl font-editorial text-5xl leading-[0.95] md:text-6xl">See the decisions, not just the final screens.</h2>
          </div>
          <Link to="/work" className="inline-flex h-12 shrink-0 items-center gap-2 bg-primary px-5 text-sm font-bold text-primary-foreground hover:bg-background hover:text-foreground" data-cursor="hover">
            Explore the work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
