/**
 * CaseStudyPvNXT.tsx
 * Revamped pvNXT Master Case Study
 */
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  Users,
  HardHat,
  Briefcase,
  Wrench,
  GraduationCap,
  Network,
  ExternalLink,
  Monitor,
  Smartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import epcAll from "@/assets/projects/rmcool26-pvNXT-epc-all.svg";
import consumerAll from "@/assets/projects/rmcool26-pvNXT-consumer-all.svg";
import installerAll from "@/assets/projects/rmcool26-pvNXT-installer-all.svg";
import epcProposal from "@/assets/projects/rmcool26-pvNXT-epc-proposal.svg";
import fieldApp from "@/assets/projects/rmcool26-pvNXT-epc-fieldapp.svg";
import scada from "@/assets/projects/rmcool26-pvNXT-sacada.svg";
import { ZoomableImage } from "./ZoomableImage";
import { Cursor } from "../Cursor";
import { Footer } from "../Footer";
import { ScrollProgress } from "../ScrollProgress";

// ---------- motion presets ----------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08 } },
};

// ---------- atoms ----------
function Eyebrow({ children, tone = "accent" }: { children: React.ReactNode; tone?: "accent" | "muted" }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${tone === "accent" ? "text-indigo-400" : "text-neutral-500"}`}>
      {children}
    </p>
  );
}

function Section({
  bg,
  children,
  className = "",
  id,
}: {
  bg: "dark" | "darker" | "deepest" | "grey" | "softgrey" | "white";
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const bgMap: Record<string, string> = {
    dark: "bg-[#111111] text-neutral-100",
    darker: "bg-[#0D0D0D] text-neutral-100",
    deepest: "bg-[#0A0A0A] text-neutral-100",
    grey: "bg-[#F5F5F7] text-neutral-900",
    softgrey: "bg-[#F8F8F8] text-neutral-900",
    white: "bg-white text-neutral-900",
  };
  return (
    <section id={id} className={`scroll-mt-20 ${bgMap[bg]} ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-28 lg:py-32">{children}</div>
    </section>
  );
}

// ---------- 01 HERO ----------
function Hero() {
  return (
    <Section id="overview" bg="darker" className="relative overflow-hidden">
      <Link to="/work" className="mb-12 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow>Case Study · pvNXT Solar Suite</Eyebrow>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          A solar workflow system built from idea.
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-2xl font-medium leading-snug text-neutral-200 md:text-3xl">
          I helped turn WhatsApp, Excel, manual site visits and scattered solar operations into a connected product suite built from scratch for EPC teams, consumers and installers.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
          {[
            "UI/UX Design Lead",
            "Terranxt · 2022 — Now",
            "Web portals + mobile apps",
            "Live product",
            "FITT IIT Delhi incubated",
          ].map((chip) => (
            <span key={chip} className="rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs font-medium text-neutral-400">
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-neutral-800 pt-12 md:grid-cols-4">
          {[
            { n: "4+", l: "EPCs" },
            { n: "6+", l: "Real users" },
            { n: "50+", l: "Screens shipped" },
            { n: "10–15 min", l: "Roof analysis" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-bold text-indigo-400 md:text-5xl">{s.n}</div>
              <div className="mt-2 text-sm text-neutral-400">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ---------- 02 SNAPSHOT ----------
function Snapshot() {
  const cards = [
    {
      title: "The mess",
      body: "Solar work was split across calls, WhatsApp, Excel, manual analysis and repeated site visits.",
    },
    {
      title: "My role",
      body: "From workflow mapping and product naming to UI design, dev handoff, testing and demos — I stayed close from problem to shipped product.",
    },
    {
      title: "What shipped",
      body: "A connected suite across EPC, consumer, installer, proposal and field workflows.",
    },
    {
      title: "Impact",
      body: "4+ EPCs, 6+ real users, 50+ screens shipped, 10–15 min roof analysis, FITT IIT Delhi incubated.",
    },
  ];

  return (
    <Section id="snapshot" bg="grey">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <div className="grid gap-6 md:grid-cols-4">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-indigo-300"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-500">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function Glossary() {
  const terms = [
    { term: "EPC", def: "The solar company/team that sells, designs and manages installation projects." },
    { term: "Consumer", def: "The home or business owner exploring solar." },
    { term: "Installer", def: "The on-ground team that visits the site and completes installation." },
    { term: "O&M", def: "The team that monitors and maintains solar plants after installation." },
    { term: "SCADA", def: "A monitoring system used to track plant health, alerts and performance." },
  ];
  return (
    <Section id="glossary" bg="white" className="py-12 md:py-16">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="max-w-xs">
            <Eyebrow>Quick decode</Eyebrow>
            <h3 className="mt-2 text-xl font-bold text-neutral-900">Solar terms for non-experts.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 flex-1">
            {terms.map((t) => (
              <motion.div key={t.term} variants={fadeUp} className="flex gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 shrink-0">{t.term}</span>
                <span className="text-sm text-neutral-600">{t.def}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}


// ---------- 03 THE MESS ----------
function Problem() {
  return (
    <Section id="problem" bg="white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>The Mess Before pvNXT</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Before pvNXT, one solar project moved through too many disconnected places.
            </h2>
            <ul className="mt-10 space-y-6">
              {[
                "Leads came from calls.",
                "Site details came through WhatsApp.",
                "Analysis happened in separate tools.",
                 "Proposals were built manually.",
                 "Installers updated progress through phone calls.",
                 "No one had one clean view of the project.",
              ].map((p, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-center gap-4 text-lg text-neutral-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-xs font-bold">
                    {i + 1}
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <motion.div variants={fadeUp} className="relative w-full max-w-md aspect-square bg-neutral-50 rounded-3xl border border-neutral-200 p-8 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4 opacity-40">
                <div className="h-10 w-10 rounded-lg bg-neutral-200" />
                <div className="h-4 w-32 rounded bg-neutral-200" />
              </div>
              <div className="flex items-center gap-4 translate-x-8">
                <div className="h-10 w-10 rounded-lg bg-rose-200" />
                <div className="h-4 w-48 rounded bg-rose-100" />
              </div>
              <div className="flex items-center gap-4 translate-x-16 opacity-60">
                <div className="h-10 w-10 rounded-lg bg-neutral-200" />
                <div className="h-4 w-40 rounded bg-neutral-200" />
              </div>
              <div className="flex items-center gap-4 translate-x-4 opacity-40">
                <div className="h-10 w-10 rounded-lg bg-neutral-200" />
                <div className="h-4 w-36 rounded bg-neutral-200" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest rotate-12 bg-white px-2 py-1 border border-neutral-200 rounded">
                  Fragmented Flow
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 04 THE CONNECTED SYSTEM ----------
function System() {
  const products = [
    {
      name: "pvNXT Studio",
      desc: "For EPC teams to manage leads, roof analysis, proposals and projects.",
      link: "/work/pvnxt-studio",
    },
    {
      name: "pvNXT Connect",
      desc: "For consumers to estimate, compare, request and track solar installation.",
      link: "/work/pvnxt-connect-web",
    },
    {
      name: "pvNXT Go",
      desc: "For installers to receive tasks, upload proof and update progress.",
      link: "/work/pvnxt-go-web",
    },
    {
      name: "Proposal System",
      desc: "For clean solar proposals generated from real project data.",
      link: "/work/proposal-design",
    },
    {
      name: "Field App",
      desc: "For field teams to capture site details in one visit.",
      link: "/work/pvnxt-field-app",
    },
    {
      name: "SCADA Monitoring",
      desc: "For solar plant monitoring, alerts and O&M workflows.",
      link: "/work/scada-monitoring",
    },
  ];

  return (
    <Section id="system" bg="dark">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="text-center">
          <Eyebrow tone="muted">The Connected System</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            We built one connected suite where every role had its own workspace, but the project data stayed connected.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-indigo-500/50 hover:bg-neutral-900"
            >
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
              <Link
                to={p.link}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 transition hover:text-indigo-300"
              >
                Explore full breakdown <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 05 MY ROLE ----------
function MyRole() {
  const bullets = [
    "Worked with real EPC teams to understand manual workflows",
    "Mapped workflows, inputs and data flow in FigJam",
    "Designed mid-fi, hi-fi and dev-ready Figma files",
    "Named and structured the pvNXT product ecosystem",
    "Built early frontend UI with HTML, CSS and Bootstrap",
    "Led developer handoff, QA and product demos",
  ];

  return (
    <Section id="role" bg="white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>MY ROLE</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              I connected users, design and build.
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>I joined when there was no application, no design system and no fixed workflow — just a real solar operations problem.</p>
              <p>
                I worked with EPC teams to understand the manual process, mapped workflows and data flow in FigJam, designed the screens in Figma, explained the logic to developers, tested builds and helped the product move from scratch to live use.
              </p>
            </div>
            <ul className="mt-10 space-y-4">
              {bullets.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-start gap-3 text-base text-neutral-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Discovery + workflow",
                text: "Met real EPC teams, understood how solar work happened manually, then mapped the flow in FigJam.",
              },
              {
                title: "Product architecture",
                text: "Defined inputs, data flow, roles and permissions. Also named and structured the product family — Studio, Connect, Go and supporting tools.",
              },
              {
                title: "Design + frontend",
                text: "Designed mid-fi and hi-fi screens. In the early phase, also converted UI into HTML/CSS/Bootstrap.",
              },
              {
                title: "Build + launch support",
                text: "Led developer handoff, coordinated API flow, tested builds, managed fixes and supported demos at IIT Delhi FITT.",
              },
            ].map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-900">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 06 PROCESS ----------
function Process() {
  const steps = [
    {
      n: "01",
      title: "Decode the real workflow",
      body: "Met EPC teams and converted manual work into a clear FigJam workflow.",
    },
    {
      n: "02",
      title: "Structure the system",
      body: "Mapped inputs, data flow, permissions and edge cases before UI.",
    },
    {
      n: "03",
      title: "Design the product",
      body: "Created mid-fidelity for review, then high-fidelity Figma for build.",
    },
    {
      n: "04",
      title: "Ship with the team",
      body: "Explained flows to developers, coordinated API needs, tested builds and improved after feedback.",
    },
  ];

  return (
    <Section id="process" bg="grey">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="text-center">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Whiteboard → Working product.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-8 transition hover:border-indigo-400 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl font-bold text-neutral-100 group-hover:text-indigo-50 transition-colors">
                {s.n}
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 07 PRODUCT STORIES ----------
function ProductStories() {
  return (
    <Section id="stories" bg="white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="text-center mb-20">
          <Eyebrow>Product Stories</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Turning pain points into product logic.
          </h2>
        </div>

        {/* Flagship Deep-Dive */}
        <div className="mb-24 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Flagship Product
            </div>
            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">pvNXT Studio</h3>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Problem</p>
                <p className="mt-2 text-lg text-neutral-600">EPC teams were managing leads, site data, layouts and proposals across disconnected tools.</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">What I designed</p>
                <p className="mt-2 text-lg text-neutral-600">A web portal for project intake, rooftop analysis, proposal generation and project tracking.</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Why it helped</p>
                <p className="mt-2 text-lg text-neutral-600">The team could move from site data to proposal inside one workflow.</p>
              </div>
            </div>
            <Link to="/work/pvnxt-studio" className="mt-8 inline-flex items-center gap-2 font-bold text-indigo-600 hover:underline">
              Explore full breakdown <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <ZoomableImage src={epcAll} alt="pvNXT Studio" caption="pvNXT Studio · Core EPC Portal" className="rounded-3xl shadow-2xl" />
          </motion.div>
        </div>

        {/* Compact Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Proposal System",
              problem: "Customers needed a proposal they could actually understand, not a rough cost sheet.",
              designed: "A clean proposal format with system details, cost, subsidy, savings and solar impact.",
              helped: "EPCs could send a more trustworthy proposal directly from real project data.",
              link: "/work/proposal-design",
              img: epcProposal,
            },
            {
              name: "pvNXT Connect",
              problem: "Consumers had too many doubts and very little visibility after showing interest in solar.",
              designed: "A consumer portal for estimate, quote, installation tracking and solar journey clarity.",
              helped: "Consumers could understand the process without chasing updates on calls.",
              link: "/work/pvnxt-connect-web",
              img: consumerAll,
            },
             {
               name: "pvNXT Go",
               problem: "Before pvNXT Go, installers updated progress through WhatsApp or calls. EPC teams had to manually chase every site for updates.",
               designed: "An installer portal with daily photo and status inputs so progress could be tracked without manual chasing.",
               helped: "EPC teams could track on-ground progress in real-time via status and photo updates.",
               link: "/work/pvnxt-go-web",
               img: installerAll,
             },
            {
              name: "Field App",
              problem: "Site visits created incomplete handoffs. The design team still had to ask for missing details later.",
              designed: "A field capture app for site data, rooftop details, keepouts, measurements and handoff notes.",
              helped: "One site visit could create a cleaner design handoff.",
              link: "/work/pvnxt-field-app",
              img: fieldApp,
            },
            {
              name: "SCADA Monitoring",
              problem: "O&M teams needed a clearer way to monitor plant health, alerts and work orders.",
              designed: "A monitoring workflow for plant visibility, alerts, issue tracking and field actions.",
              helped: "Teams could move from reactive checking to a more visible operations flow.",
              link: "/work/scada-monitoring",
              img: scada,
            },
          ].map((story) => (
            <motion.div
              key={story.name}
              variants={fadeUp}
              className="group flex flex-col rounded-3xl border border-neutral-200 bg-white transition hover:border-indigo-300 hover:shadow-xl overflow-hidden"
            >
              <div className="aspect-video overflow-hidden bg-neutral-100">
                <img src={story.img} alt={story.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-neutral-900">{story.name}</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Problem</p>
                    <p className="text-sm text-neutral-600">{story.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Solution</p>
                    <p className="text-sm text-neutral-600">{story.designed}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Impact</p>
                    <p className="text-sm text-neutral-600">{story.helped}</p>
                  </div>
                </div>
                <Link to={story.link} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 hover:underline">
                  Full Story <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 08 DESIGN DECISIONS ----------
function Decisions() {
  const cards = [
    {
      title: "Role-based views instead of one common dashboard",
      body: "Because consumers, EPCs and installers need different information from the same project.",
    },
    {
      title: "Mid-fidelity before visual polish",
      body: "Because the workflow was complex. Structure had to be right before UI became beautiful.",
    },
    {
      title: "Reusable components from day one",
      body: "Because one product quickly became a suite.",
    },
    {
      title: "Proposal clarity over technical overload",
      body: "Because consumers needed confidence, not a document full of jargon.",
    },
  ];

  return (
    <Section id="decisions" bg="grey">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="text-center">
          <Eyebrow>Trade-offs</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Design Decisions That Mattered.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="rounded-2xl border border-neutral-200 bg-white p-8 transition hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{c.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-neutral-600">{c.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 09 RESULTS ----------
function Results() {
  return (
    <Section id="results" bg="deepest">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
        <div className="text-center">
          <Eyebrow tone="muted">Outcome</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            From messy solar workflows to a live product suite.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            The suite moved from early workflow mapping to a live product ecosystem used by real teams.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-neutral-800 py-12 md:grid-cols-5">
          {[
            { n: "4+", l: "EPCs" },
            { n: "6+", l: "Real users" },
            { n: "50+", l: "Screens shipped" },
            { n: "10–15 min", l: "Roof analysis" },
            { n: "IIT Delhi", l: "Incubated at" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-bold text-indigo-400 md:text-4xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-neutral-500">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Key Learnings</h3>
            <ul className="space-y-4">
              {[
                "Complex products become usable when roles are clear.",
                "Mid-fidelity saves time when workflows are messy.",
                "A design system is not decoration, it helps teams ship faster.",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-neutral-400">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="text-center lg:text-right">
            <p className="text-2xl font-bold text-white md:text-3xl leading-tight">
              Messy solar workflows,<br />
              made usable and shipped.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

// ---------- 10 NEXT ----------
function Next() {
  const links = [
    { name: "pvNXT Studio", href: "/work/pvnxt-studio" },
    { name: "pvNXT Connect", href: "/work/pvnxt-connect-web" },
    { name: "pvNXT Go", href: "/work/pvnxt-go-web" },
    { name: "Proposal Design", href: "/work/proposal-design" },
    { name: "Field App", href: "/work/pvnxt-field-app" },
    { name: "SCADA Monitoring", href: "/work/scada-monitoring" },
  ];

  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="text-center">
          <p className="text-sm text-neutral-500">Next up →</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            This was not one app. It became a product ecosystem.
          </h3>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.href}
                className="rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- TOC / NAVIGATION ----------
function TableOfContents() {
  const TOC_ITEMS = [
    { id: "overview", label: "01 Overview" },
    { id: "snapshot", label: "02 Snapshot" },
    { id: "glossary", label: "03 Glossary" },
    { id: "problem", label: "04 Problem" },
    { id: "system", label: "05 System" },
    { id: "role", label: "06 Role" },
    { id: "process", label: "07 Process" },
    { id: "stories", label: "08 Product Stories" },
    { id: "decisions", label: "09 Decisions" },
    { id: "results", label: "10 Results" },
  ];

  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) visible.set(id, e.intersectionRatio);
            else visible.delete(id);
          });
          if (visible.size) {
            const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
            setActive(top);
          }
        },
        { rootMargin: "-20% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop Rail */}
      <nav className="group/toc fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col gap-2">
          {TOC_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`flex items-center justify-end gap-3 transition-all duration-300 ${
                    isActive ? "translate-x-[-8px]" : "hover:translate-x-[-4px]"
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium uppercase tracking-widest transition-all duration-300 ${
                      isActive ? "text-indigo-500 font-bold" : "text-neutral-500"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`h-1 w-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-indigo-500 scale-150" : "bg-neutral-300"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Pills */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-neutral-100 overflow-x-auto scrollbar-none py-4 lg:hidden">
        <div className="flex gap-2 px-6">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition ${
                active === item.id ? "bg-indigo-500 text-white" : "bg-neutral-100 text-neutral-500"
              }`}
            >
              {item.label.split(" ")[1]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default function CaseStudyPvNXT() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <main className="relative bg-white min-h-screen overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <TableOfContents />
      <Hero />
      <Snapshot />
      <Glossary />
      <Problem />
      <System />
      <MyRole />
      <Process />
      <ProductStories />
      <Decisions />
      <Results />
      <Next />
      <Footer />
    </main>
  );
}
