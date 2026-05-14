/**
 * CaseStudyPvNXT.tsx
 * 9 sections, alternating dark/light rhythm.
 * Replace 5 placeholder images (search TODO:image) with @/assets imports.
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
} from "lucide-react";
import { useState, useEffect } from "react";
import { KeyScreen } from "./KeyScreen";
import testImg from "@/assets/projects/test_image.svg";

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
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${tone === "accent" ? "text-indigo-400" : "text-neutral-500"
        }`}
    >
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
    <Section id="hero" bg="darker" className="relative overflow-hidden">
      {/* back link */}
      <Link
        to="/"
        className="mb-12 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow>Case Study · UI/UX Design Lead · Terranxt · 2022 — Now</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          pvNXT Solar Suite
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-3xl text-2xl font-medium leading-snug text-neutral-200 md:text-3xl"
        >
          Manual solar operations,{" "}
          {/* <br className="hidden md:inline" />{" "} */}
          turned into a live product ecosystem incubated at IIT Delhi.
        </motion.p>

        <motion.p variants={fadeUp} className="mt-6 text-base text-neutral-400 md:text-lg">
          Enterprise SaaS · 3 web portals · 2 mobile apps · Live, in production.
        </motion.p>

        {/* impact strip */}
        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-neutral-800 pt-12 md:grid-cols-4"
        >
          {[
            { n: "20+", l: "EPCs onboarded" },
            { n: "100+", l: "Users enrolled" },
            { n: "2–3 wks", l: "Project cycle now" },
            { n: "IIT Delhi", l: "FITT incubated" },
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

// ---------- 02 BEFORE ----------
function Before() {
  const points = [
    "Proposals stitched across WhatsApp and Excel",
    "Site analysis split between AutoCAD, PVsyst and spreadsheets",
    "Installer updates came through calls, photos and voice notes",
    "No single place to seewhere a project actually stood",
  ];

  return (
    <Section id="before" bg="grey">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow>The Problem</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
        >
          Before pvNXT, running a solar EPC project looked like this.
        </motion.h2>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <motion.ul variants={fadeUp} className="space-y-5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-neutral-700 md:text-lg">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="border-l border-neutral-300 pl-8">
            <div className="text-6xl font-bold leading-none tracking-tight text-neutral-900 md:text-7xl">
              2–3 mo
            </div>
            <div className="mt-3 text-sm uppercase tracking-wider text-neutral-500">
              Average project cycle
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-16 max-w-3xl text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl"
        >
          A 3-week job was taking 2–3 months. Manual. Invisible. Broken. Expensive.
          <span className="mt-3 block text-neutral-500">
            I joined as employee #2 to turn that idea into a product.
          </span>
        </motion.p>
      </motion.div>
    </Section>
  );
}

// ---------- 03 SYSTEM ----------
function System() {
  const portals = [
    {
      icon: Briefcase,
      name: "EPC Portal",
      tag: "Web",
      bullets: ["Leads & proposals", "RFP bidding", "Installer assignment", "Project + O&M tracking"],
    },
    {
      icon: Users,
      name: "Consumer Portal",
      tag: "Web + Mobile",
      bullets: ["Solar feasibility", "ROI calculator", "Live install tracking", "Plant monitoring"],
    },
    {
      icon: HardHat,
      name: "Installer Portal",
      tag: "Web + Mobile",
      bullets: ["Site assignment", "Rooftop analysis", "Daily progress", "Work orders & status"],
    },
  ];

  return (
    <Section id="system" bg="white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp} className="text-center">
          <Eyebrow>The System</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            3 portals. 2 apps. 1 connected reality.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-600 md:text-lg">
            Not one app — an ecosystem where every role sees exactly what they need,
            and nothing they don't.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 grid gap-6 md:grid-cols-3">
          {portals.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="group rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <h3 className="text-xl font-semibold text-neutral-900">{p.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {p.tag}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <p className="inline-flex items-center gap-3 text-base font-semibold text-neutral-900 md:text-lg">
            <Network className="h-5 w-5 text-indigo-500" />
            Everything connected. Real-time. Role-based.
          </p>
          <p className="mt-3 text-sm italic text-neutral-500">
            EPC mobile app is currently in design.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ---------- 04 MY ROLE ----------
function MyRole() {
  const chips = [
    "Stakeholder research with real EPCs",
    "Full UX architecture across 5 products",
    "Design system from scratch, used by devs daily",
    "Annotated dev handoffs, flow-by-flow",
    "Hired and led a 5-person dev squad",
    "Live booth demos at IIT Delhi FITT to investors",
  ];

  return (
    <Section id="role" bg="dark">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow tone="muted">My Role</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          I was employee #2.
          <br />
          <span className="text-neutral-500">No design team. No system. No process.</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="mt-6 text-lg text-neutral-300">
          I didn’t just design screens. I owned the path to shipping.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12 grid gap-3 md:grid-cols-2">
          {chips.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 px-5 py-4 transition hover:border-indigo-500/60"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
              <span className="text-sm text-neutral-200 md:text-base">{c}</span>
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-12 text-xl font-semibold text-white md:text-2xl">
          From first sketch to final ship — I owned it.
        </motion.p>
      </motion.div>
    </Section>
  );
}

// ---------- 05 PROCESS ----------
function Process() {
  const steps = [
    {
      n: "01",
      title: "Decode",
      body: "Sat with real EPCs. Walked through their actual work. Mapped every manual step on FigJam. Pain points became the product brief.",
    },
    {
      n: "02",
      title: "Architect",
      body: "Mid-fidelity first. Always. Mapped roles, permissions, data flow and edge cases before touching hi-fi. No pixel-pushing until the system made sense.",
    },
    {
      n: "03",
      title: "Build with devs",
      body: "Annotated Figma handoff — flows, edge states, dev-ready components. Sat with developers till every screen made sense to them.",
    },
    {
      n: "04",
      title: "Ship & scale",
      body: "QA, iteration, edge cases. Then scaled it to SCADA monitoring with one suite, multiple roles.",
    },
  ];

  return (
    <Section id="process" bg="white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow>How I Work</Eyebrow>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          Whiteboard → Working product, in 4 steps.
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute right-3 top-2 select-none text-7xl font-bold text-neutral-100 transition group-hover:scale-110 group-hover:text-indigo-50">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                  Step {s.n}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ---------- 06 KEY SCREENS (tabs + sticky header + 2-col grid) ----------
type ScreenTab = {
  id: string;
  name: string;
  platform: "Web" | "Web + App" | "Mobile";
  headline: string;
  body: string;
  chips: string[];
  replaced: string;
  replacedNote: string;
  shots: number; // number of placeholder mockups in 2-col grid
  images?: string[];
};

function Screens() {
  const tabs: ScreenTab[] = [
    {
      id: "epc",
      name: "EPC Dashboard",
      platform: "Web",
      headline: "One screen replaces 4 tools.",
      body:
        "EPC teams manage their entire pipeline here — leads, proposals, RFP bidding, installer assignment, project tracking, and O&M. Before this, all of it lived across WhatsApp, Excel, and phone calls.",
      chips: ["Lead-to-handover pipeline", "Installer assignment & tracking", "O&M dashboard + alerts", "Real-time project visibility"],
      replaced: "WhatsApp + Excel + AutoCAD + Phone calls",
      replacedNote: "Manual. Invisible. Broken.",
      shots: 4,
      images: [testImg, testImg, testImg, testImg],
    },
    {
      id: "consumer",
      name: "Consumer Portal",
      platform: "Web + App",
      headline: "The full solar journey, finally clear.",
      body:
        "From feasibility to live monitoring — built for homeowners who just want to know what's happening with their rooftop. No jargon, no spreadsheets, no calls to the EPC.",
      chips: ["Solar feasibility check", "ROI calculator", "Live install tracking", "Plant monitoring"],
      replaced: "Phone calls + PDF quotes + No visibility",
      replacedNote: "Customers chasing updates.",
      shots: 4,
      images: [testImg, testImg, testImg, testImg],
    },
    {
      id: "installer",
      name: "Installer App",
      platform: "Web + App",
      headline: "Built for rooftops, not desks.",
      body:
        "Site assignment, rooftop analysis, daily progress capture. Designed for installers working in the sun with one hand on a ladder — large tap targets, offline-first, photo-led.",
      chips: ["Site assignment", "Rooftop analysis", "Daily progress capture", "Work orders & status"],
      replaced: "Paper checklists + WhatsApp photos",
      replacedNote: "Lost in chat threads.",
      shots: 4,
      images: [testImg, testImg, testImg, testImg],
    },
    {
      id: "scada",
      name: "SCADA Monitoring",
      platform: "Web",
      headline: "Every inverter, one place.",
      body:
        "Real-time inverter data, alerts, work orders. O&M teams finally have one place to look instead of logging into 5 vendor dashboards every morning.",
      chips: ["Live inverter data", "Alert routing", "Work-order generation", "Plant-level analytics"],
      replaced: "5 vendor dashboards + Excel logs",
      replacedNote: "Reactive, not proactive.",
      shots: 4,
      images: [testImg],
    },
  ];

  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId)!;

  return (
    <section id="screens" className="scroll-mt-20 bg-[#F8F8F8] text-neutral-900 py-24">
      {/* Sticky tabs header */}
      <div className="sticky top-0 z-30 border-b border-neutral-200/80 bg-[#F8F8F8]/85 backdrop-blur-md">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex items-center justify-between gap-6 py-4">
            <div className="flex items-center gap-3">
              <Eyebrow>The Work</Eyebrow>
            </div>
            <p className="hidden text-xs italic text-neutral-500 md:block">
              <Sparkles className="mr-1.5 inline h-3.5 w-3.5 text-indigo-400" />
              The cool guy behind the pixels.
            </p>
          </div>

          {/* Tab strip — underline style, not buttons */}
          <nav role="tablist" className="-mb-px flex gap-1">
            {tabs.map((t) => {
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(t.id)}
                  className={`group relative flex shrink-0 items-center gap-2.5 px-4 py-4 text-sm font-medium transition ${isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-800"
                    }`}
                >
                  {t.platform === "Mobile" ? (
                    <Smartphone className="h-4 w-4" />
                  ) : (
                    <Monitor className="h-4 w-4" />
                  )}
                  <span>{t.name}</span>
                  <span
                    className={`hidden rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition md:inline-block ${isActive ? "bg-indigo-50 text-indigo-600" : "bg-neutral-100 text-neutral-500"
                      }`}
                  >
                    {t.platform}
                  </span>
                  {/* underline indicator */}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-[2px] rounded-full transition-all duration-300 ${isActive ? "scale-x-100 bg-neutral-900" : "scale-x-0 bg-neutral-300"
                      }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* headline + body */}
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {active.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                {active.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {active.chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1.5 text-xs font-medium text-indigo-700"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                What this replaced
              </div>
              <p className="mt-3 text-base font-semibold text-neutral-900">{active.replaced}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                {active.replacedNote}
              </div>
            </aside>
          </div>

          <div className="mt-12">
            <img
              src={active.images[0]}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* 2-col placeholder grid */}
            {/* <div className="mt-12 grid gap-5 md:grid-cols-2">
           {Array.from({ length: active.shots }).map((_, i) => (
              <figure
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
              >
                {active.images?.[i] ? (
                  <img
                    src={active.images[i]}
                    alt={`${active.name} — Screen ${i + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-neutral-400">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white/70">
                      {active.platform === "Mobile" ? (
                        <Smartphone className="h-5 w-5" />
                      ) : (
                        <Monitor className="h-5 w-5" />
                      )}
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider">
                      {active.name} — Screen {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-[10px] text-neutral-400">Replace with mockup</p>
                  </div>
                )}
              </figure>
            ))} */}
          </div>

          {/* <div className="mt-12 grid gap-5 md:grid-cols-2">
            {Array.from({ length: active.shots }).map((_, i) => (
              <figure
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-200/60"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-neutral-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white/70">
                    {active.platform === "Mobile" ? (
                      <Smartphone className="h-5 w-5" />
                    ) : (
                      <Monitor className="h-5 w-5" />
                    )}
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider">
                    {active.name} — Screen {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] text-neutral-400">Replace with mockup</p>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </figure>
            ))}
          </div> */}

          {/* footer stats strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-neutral-200 pt-8 text-sm text-neutral-600">
            <span><strong className="text-neutral-900">3</strong> Web portals</span>
            <span><strong className="text-neutral-900">2</strong> Mobile apps</span>
            <span><strong className="text-neutral-900">5</strong> Products shipped</span>
            <span><strong className="text-neutral-900">1</strong> Connected system</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- 06 KEY SCREENS ----------
{/* <KeyScreen /> */ }
/* function Screens() {
  const screens = [
    {
      img: epcShot,
      name: "EPC Dashboard",
      tag: "Web",
      caption: "Complete pipeline view — leads to handover. One screen replaces 4 tools.",
    },
    {
      img: consumerShot,
      name: "Consumer Portal",
      tag: "Web + Mobile",
      caption: "Feasibility to monitoring — the full solar journey for a homeowner who just wants clarity.",
    },
    {
      img: installerShot,
      name: "Installer App",
      tag: "Mobile",
      caption: "Site assignment, rooftop analysis, daily progress. Built for people who work on rooftops, not desks.",
    },
    {
      img: scadaShot,
      name: "SCADA Monitoring",
      tag: "Web",
      caption: "Real-time inverter data, alerts, work orders. O&M teams finally have one place to look.",
    },
  ];

  return (
    <Section id="screens" bg="softgrey">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow>The Work</Eyebrow>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          What it actually looks like.
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-14 grid gap-6 md:grid-cols-2">
          {screens.map((s) => (
            <figure
              key={s.name}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="overflow-hidden bg-neutral-100">
                <img
                  src={s.img}
                  alt={s.name}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-6">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900">{s.name}</h3>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.caption}</p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
} */

// ---------- 07 KEY DECISIONS ----------
function Decisions() {
  const cards = [
    {
      icon: Layers,
      title: "Why role-based, not one-size-fits-all",
      body: "EPC, Installer, and Consumer all touch the same project. But they should never see each other's data.",
      result: "One login. Three realities. Fewer support calls. Zero access confusion.",
    },
    {
      icon: Wrench,
      title: "Why mid-fidelity first, always",
      body: "A polished UI in Week 1 looks great and gets the wrong feedback. \"This flow doesn't match how we work\" is easier to hear when you're looking at boxes — not beautiful screens.",
      result: "Stakeholder validation before pixel-perfection. Every time.",
    },
  ];

  return (
    <Section id="decisions" bg="white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow>Trade-offs</Eyebrow>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          Two strategic decisions that shaped the product.
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-neutral-200 bg-white p-8 transition hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-neutral-900 md:text-2xl">{c.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">{c.body}</p>
                <div className="my-6 h-px w-full bg-neutral-200" />
                <p className="text-base font-semibold text-indigo-600">
                  Result: <span className="text-neutral-900">{c.result}</span>
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ---------- 08 OUTCOME ----------
function Outcome() {
  const stats = [
    { n: "20+", l: "EPCs onboarded" },
    { n: "100+", l: "Users enrolled" },
    { n: "2–3 wks", l: "Down from 2–3 mo" },
    { n: "IIT Delhi", l: "FITT incubated", icon: GraduationCap },
  ];

  return (
    <Section id="outcome" bg="deepest">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <Eyebrow tone="muted">Outcome</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          From a FigJam board to a live product
          <br className="hidden md:inline" /> used by real solar companies every day.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-neutral-800 py-12 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold text-indigo-400 md:text-5xl">{s.n}</div>
              <div className="mt-2 text-sm text-neutral-400">{s.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-14 max-w-2xl">
          <p className="text-base italic leading-relaxed text-neutral-400 md:text-lg">
            We presented at IIT Delhi FITT with nothing but a Figma prototype and a real
            problem worth solving.
            <br />
            <br />
            Today, it's a live platform. Real companies. Real data. Real solar
            installations tracked end-to-end. That’s the metric I care about.
          </p>
          {/* <p className="mt-8 text-2xl font-bold text-white md:text-3xl">
            That’s the metric I care about.
          </p> */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-2xl font-bold text-white md:text-3xl"
          >
            The cool guy behind{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">the pixels</span>
              {/* <span className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-primary/20" /> */}
            </span>{" "}
          </motion.h1>
          <div className="flex justify-start items-center gap-x-2 mt-6">
            <span className="font-medium text-white">Visit:</span>
            <div className="flex justify-between gap-x-6">
              <a
                href="https://consumer.pvnxt.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
              >
                Consumer <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://epc.pvnxt.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
              >
                EPC <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://installer.pvnxt.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
              >
                Installer <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ---------- 09 NEXT ----------
function Next() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-neutral-500">Next up →</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
              SCADA Solar Monitoring
            </h3>
            <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-600">
              Redesign in progress
            </span>
          </div>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </div>
    </section>
  );
}

// ---------- export ----------

const TOC_ITEMS = [
  { id: "hero", label: "Overview" },
  { id: "before", label: "The Problem" },
  { id: "system", label: "The System" },
  { id: "role", label: "My Role" },
  { id: "process", label: "How I Work" },
  { id: "screens", label: "The Work" },
  { id: "decisions", label: "Trade-offs" },
  { id: "outcome", label: "Outcome" },
];
function TableOfContents() {
  const [active, setActive] = useState<string>("hero");
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
        { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
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
    <nav
      aria-label="Case study sections"
      className="group/toc fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-1.5">
        {TOC_ITEMS.map((item, i) => {
          const isActive = active === item.id;
          const num = String(i + 1).padStart(2, "0");

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="flex items-center justify-end gap-3"
              >
                <span
                  className={`order-2 inline-block w-7 text-right font-mono text-xs tabular-nums transition-all duration-300 ${isActive ? "font-semibold text-primary-glow" : "text-neutral-400 group-hover/toc:text-neutral-600"
                    }`}
                >
                  {num}
                </span>
                <span
                  className={`order-1 max-w-0 overflow-hidden whitespace-nowrap text-right text-[11px] font-medium uppercase tracking-[0.14em] opacity-0 transition-all duration-500 ease-out group-hover/toc:max-w-[180px] group-hover/toc:opacity-100 ${isActive
                    ? "text-primary-glow max-w-[180px] opacity-100"
                    : "text-neutral-500"
                    }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function CaseStudyPvNXT() {
  return (
    <main className="bg-white">
      <TableOfContents />
      <Hero />
      <Before />
      <System />
      <MyRole />
      <Process />
      <Screens />
      {/* <KeyScreen /> */}
      <Decisions />
      <Outcome />
      <Next />
    </main>
  );
}
