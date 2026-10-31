/**
 * CaseStudyPvNXTv2.tsx
 * pvNXT Solar Suite case study, calm layout (preview route: /case/terranxt-v2).
 * Same facts as CaseStudyPvNXT.tsx, restructured and tightened.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Cursor } from "../Cursor";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { ScrollProgress } from "../ScrollProgress";
import { ZoomableImage } from "./ZoomableImage";
import {
  Callout,
  CaseBody,
  CaseHero,
  CaseSummary,
  Cards,
  Compare,
  Decision,
  RelatedCase,
  Sec,
  Shot,
  Stats,
  Sub,
  Ticks,
  Tiles,
  Why,
  useCaseStudyPage,
} from "./calm/CaseLayout";
import suiteFull from "@/assets/projects/rmcool26-pvNXT-suite.svg";
import epcAll from "@/assets/projects/rmcool26-pvNXT-epc-all.svg";
import consumerAll from "@/assets/projects/rmcool26-pvNXT-consumer-all.svg";
import installerAll from "@/assets/projects/rmcool26-pvNXT-installer-all.svg";
import epcProposal from "@/assets/projects/rmcool26-pvNXT-epc-proposal.svg";
import fieldApp from "@/assets/projects/rmcool26-pvNXT-epc-fieldapp.svg";
import scada from "@/assets/projects/rmcool26-pvNXT-sacada.svg";
import workflow from "@/assets/projects/rmcool26-pvNXT-epc-workflow.png";
import { content } from "@/content";
import helpHome from "@/assets/projects/pvnxt-help/after-home.jpg";

const TOC = [
  { id: "context", label: "Context" },
  { id: "problem", label: "The problem" },
  { id: "role", label: "My role" },
  { id: "decisions", label: "Key decisions" },
  { id: "products", label: "What shipped" },
  { id: "outcome", label: "Outcome" },
  { id: "learned", label: "What I learned" },
];

function ProjectFlow() {
  const steps = [
    { who: "Lead", how: "Phone call" },
    { who: "Site details", how: "WhatsApp" },
    { who: "Roof analysis", how: "PVsyst, AutoCAD, Excel" },
    { who: "Proposal", how: "Built by hand" },
    { who: "Installer updates", how: "Phone calls" },
  ];
  return (
    <figure className="!my-8 rounded-2xl border border-border bg-muted/50 p-5 md:p-6" aria-label="How one solar project moved before pvNXT">
      <ol className="grid gap-2 sm:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.who} className="relative rounded-xl border border-border bg-card p-3">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")} · {s.who}
            </span>
            <span className="mt-1 block text-sm font-semibold text-foreground">{s.how}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-xl border border-dashed border-primary/50 px-4 py-3 text-sm font-semibold text-primary">
        Result: no one had one clean view of the project, and a single project took 2–3 months.
      </p>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        Before: five steps, five different places, and the project status lived in people's heads.
      </figcaption>
    </figure>
  );
}

type Story = {
  name: string;
  who: string;
  img: string;
  problem: string;
  designed: string;
  helped: string;
  href: string;
};

const STORIES: Story[] = [
  {
    name: "pvNXT Studio",
    who: "EPC teams · web",
    img: epcAll,
    problem: "Leads, site data, layouts and proposals lived in different tools.",
    designed: "One portal for project intake, rooftop analysis, proposals and project tracking.",
    helped: "The team goes from site data to a proposal inside one workflow.",
    href: "/work/pvnxt-studio",
  },
  {
    name: "Proposal system",
    who: "EPC teams → customers · PDF",
    img: epcProposal,
    problem: "Customers got a rough cost sheet they couldn't really understand.",
    designed: "A clean proposal with system details, cost, subsidy, savings and solar impact.",
    helped: "EPCs send a proposal people trust, generated from real project data.",
    href: "/work/proposal-design",
  },
  {
    name: "pvNXT Connect",
    who: "Homeowners and businesses · web + app",
    img: consumerAll,
    problem: "After showing interest, consumers had lots of doubts and no visibility.",
    designed: "A portal to get an estimate, compare quotes, request installation and track it.",
    helped: "Consumers understand where they are without chasing updates on calls.",
    href: "/work/pvnxt-connect-web",
  },
  {
    name: "pvNXT Go",
    who: "Installers · web + app",
    img: installerAll,
    problem: "Installers reported by WhatsApp or phone, so EPC teams chased every site.",
    designed: "Assigned tasks with daily photo and status updates.",
    helped: "EPC teams see on-ground progress without calling anyone.",
    href: "/work/pvnxt-go-web",
  },
  {
    name: "Field app",
    who: "Site survey teams · mobile",
    img: fieldApp,
    problem: "Site visits left gaps, so designers had to ask for missing details later.",
    designed: "One app to capture site data, rooftop details, keep-outs, measurements and notes.",
    helped: "One site visit gives the design team a complete handoff.",
    href: "/work/pvnxt-field-app",
  },
  {
    name: "SCADA monitoring",
    who: "Plant owners and O&M teams · web + mobile",
    img: scada,
    problem: "O&M teams had no clear way to watch plant health, alerts and work orders.",
    designed: "A monitoring flow for plant status, alerts, issue tracking and field actions.",
    helped: "Teams move from checking on things to seeing problems as they happen.",
    href: "/work/scada-monitoring",
  },
];

function StoryRow({ s }: { s: Story }) {
  return (
    <article className="!mt-6 grid gap-5 rounded-3xl border border-border bg-card p-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] sm:p-5">
      <ZoomableImage src={s.img} alt={`${s.name} screens`} className="aspect-[4/3] self-start" />
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{s.who}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-foreground">{s.name}</h3>
        <dl className="mt-3 space-y-2.5 text-[15px] leading-relaxed">
          {[
            ["Problem", s.problem],
            ["Design", s.designed],
            ["Result", s.helped],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="inline text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{k} </dt>
              <dd className="inline text-foreground/80">{v}</dd>
            </div>
          ))}
        </dl>
        <Link
          to={s.href}
          data-cursor="hover"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Full breakdown <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudyPvNXTv2() {
  useCaseStudyPage("pvNXT Solar Suite — Case Study · Rajat Mishra");

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Cursor />
      <ScrollProgress />
      <Nav />

      <CaseHero
        eyebrow="Case study · pvNXT Solar Suite · 2022 — now"
        title="pvNXT: one connected product suite for rooftop solar, built from scratch."
        lede="Solar projects in India ran on calls, WhatsApp, Excel and repeat site visits. I helped turn that into a suite where every role has its own portal, and everyone works from the same project data."
        meta={[
          { label: "My role", value: "UI/UX Design Lead. Research, workflows, product naming, UI, handoff, QA and demos." },
          { label: "Team", value: "Part of a three-person founding team at Terranxt, with the developers." },
          { label: "Platforms", value: "Web portals and mobile apps, for India and the UAE." },
          { label: "Status", value: "Live product. Incubated at FITT, IIT Delhi." },
        ]}
        visual={
          <figure className="overflow-hidden rounded-t-3xl border border-b-0 border-border bg-card shadow-elegant">
            <img src={suiteFull} alt="Screens from across the pvNXT suite: EPC portal, consumer portal, installer app and proposals." className="block w-full" />
          </figure>
        }
      />

      <CaseSummary
        items={[
          { label: "The problem", body: "One solar project moved through calls, WhatsApp, Excel and separate design tools. Nobody had the full picture, and a project took 2–3 months." },
          { label: "What I did", body: "Mapped the real workflow with EPC teams, named and structured the product family, designed the portals and apps, and stayed with the build through handoff, QA and demos." },
          { label: "Where it is now", body: "Live and in use by 4+ EPCs. Roof analysis takes 10–15 minutes instead of a site visit. Incubated at FITT, IIT Delhi." },
        ]}
      />

      <CaseBody toc={TOC}>
        {/* 01 */}
        <Sec id="context" num="01" label="Context" title="Rooftop solar has four very different people in one project.">
          <p>
            A homeowner or business asks for solar. An EPC (the solar company) sells it, designs it and runs the project. An
            installer team builds it on site. After that, an O&amp;M team keeps the plant running. Each of them needs
            something different from the same project.
          </p>
          <Tiles
            items={[
              { title: "pvNXT Studio", body: "EPC teams: leads, roof analysis, proposals, projects" },
              { title: "pvNXT Connect", body: "Homeowners and businesses: estimate, compare, track" },
              { title: "pvNXT Go", body: "Installers: tasks, photo proof, daily progress" },
              { title: "Proposal system", body: "Clear proposals from real project data" },
              { title: "Field app", body: "Site details captured in one visit" },
              { title: "SCADA", body: "Plant health, alerts and O&M work orders" },
            ]}
          />
          <p className="text-[15px] text-muted-foreground">
            <b className="text-foreground">Quick decode:</b> EPC = engineering, procurement and construction company. O&amp;M
            = operations and maintenance. SCADA = the system that monitors a plant's health and alerts.
          </p>
        </Sec>

        {/* 02 */}
        <Sec id="problem" num="02" label="The problem" title="One project moved through too many disconnected places.">
          <p>
            Before pvNXT, running a solar EPC business meant PVsyst in one tab, AutoCAD on a second screen, WhatsApp
            buzzing with updates from an installer 400 km away, and a spreadsheet trying to hold it all together.
          </p>
          <ProjectFlow />
          <Ticks
            items={[
              "Consumers had to call or message just to learn if solar was feasible and what it would cost.",
              "EPC teams repeated site visits and rebuilt the same analysis and proposals by hand.",
              "Managers couldn't see where a project was stuck or who owned the next step.",
            ]}
          />
        </Sec>

        {/* 03 */}
        <Sec id="role" num="03" label="My role" title="I connected the users, the design and the build.">
          <p>
            I joined when there was no product, no design system and no fixed workflow. Just a real operations problem. As
            part of the founding team, I worked on every step from the first workshop to the live product.
          </p>
          <Why
            rows={[
              { k: "Discover", v: "Sat with real EPC teams to see how solar work actually happened, then mapped the flow in FigJam." },
              { k: "Structure", v: "Defined inputs, data flow, roles, permissions and edge cases before any UI. Named and structured the product family: Studio, Connect, Go and the tools around them." },
              { k: "Design", v: "Mid-fidelity screens for review, then high-fidelity, dev-ready Figma files. In the early phase I also built the UI in HTML, CSS and Bootstrap." },
              { k: "Ship", v: "Led developer handoff, coordinated API needs, tested builds, managed fixes and ran product demos at FITT, IIT Delhi." },
            ]}
          />
          <Shot
            src={workflow}
            alt="FigJam map of the EPC portal: verification, then a lead board split into own leads, RFP bids, won bids and subscribed leads, plus installer board and training."
            caption="The EPC portal mapped in FigJam before any screen was drawn: verification first, then every lead type and what the EPC does next."
          />
        </Sec>

        {/* 04 */}
        <Sec id="decisions" num="04" label="Key decisions" title="The calls that shaped the suite, and why.">
          <Decision n={1} title="Separate views for each role, not one shared dashboard">
            <Why
              rows={[
                { k: "The problem", v: "A consumer, an EPC and an installer look at the same project but need different things from it. One dashboard would show everyone everything." },
                { k: "The decision", v: "Each role gets its own workspace on shared project data. Consumers see status, estimates and progress. EPCs see leads, analysis, proposals and assignments. Installers see their tasks and daily updates. O&M sees alerts, faults and work orders." },
              ]}
            />
          </Decision>
          <Decision n={2} title="Mid-fidelity first, polish later">
            <Why
              rows={[
                { k: "Why", v: "The workflow was complex and still changing. Getting the structure right in grey boxes was faster than reworking polished screens." },
              ]}
            />
          </Decision>
          <Decision n={3} title="Reusable components from day one">
            <Why
              rows={[
                { k: "Why", v: "One product quickly became a suite. A shared set of components kept six products consistent and let developers build faster." },
                { k: "Many states", v: "Projects can be pending, approved, rejected, assigned, in progress, completed, delayed or in fault. I designed one set of status, validation, empty and error patterns so every portal shows them the same way." },
              ]}
            />
          </Decision>
          <Decision n={4} title="A proposal people can understand, not a technical report">
            <Why
              rows={[
                { k: "Why", v: "Consumers need confidence to say yes. The proposal leads with cost, subsidy and savings, and keeps the engineering detail behind it." },
              ]}
            />
          </Decision>
        </Sec>

        {/* 05 */}
        <Sec id="products" num="05" label="What shipped" title="Six products, one project record underneath.">
          <p>Each product solves one role's problem. Open any of them for the full breakdown.</p>
          {STORIES.map((s) => (
            <StoryRow key={s.name} s={s} />
          ))}
        </Sec>

        {/* 06 */}
        <Sec id="outcome" num="06" label="Outcome" title="From scattered workflows to a live product suite.">
          <Stats
            items={[
              { value: "4+", label: "EPCs using it" },
              { value: "6+", label: "real users" },
              { value: "50+", label: "screens shipped" },
              { value: "10–15 min", label: "roof analysis" },
            ]}
          />
          <Compare
            rows={[
              { k: "Roof analysis", before: "Site visits, 1–2 days", after: "10–15 minutes, remotely" },
              { k: "Proposals", before: "Built by hand, as rough cost sheets", after: "Generated from project data" },
              { k: "Installer progress", before: "Phone calls and WhatsApp", after: "Daily photo and status updates" },
              { k: "Consumer updates", before: "Chase the EPC on calls", after: "Track estimate, quote and install" },
              { k: "Project view", before: "Nobody had the full picture", after: "Every role sees its part of one record" },
            ]}
          />
          <Callout label="Recognition">
            <p>
              We took pvNXT to IIT Delhi's FITT programme, first as a Figma prototype and later as a live product, and it was
              accepted for incubation. I've run our booth there since 2022: managing it, giving demos and explaining the
              product to investors live.
            </p>
          </Callout>
        </Sec>

        {/* 07 */}
        <Sec id="learned" num="07" label="What I learned" title="Three things I'll take to the next product.">
          <Cards
            cols={3}
            items={[
              { title: "Clear roles make complex products usable", body: "Most of the confusion went away once each person only saw their part of the project." },
              { title: "Mid-fidelity saves time", body: "When the workflow is messy, grey boxes get you to the right structure before polish slows you down." },
              { title: "A design system is a delivery tool", body: "It isn't decoration. Shared components are what let a small team ship six products." },
            ]}
          />
          <Sub>Want more detail?</Sub>
          <p>
            Research artefacts, workflows, wireframes, the design system and QA notes are{" "}
            <a href={`mailto:${content.contact.email}`} className="font-semibold text-primary hover:underline">
              available on request
            </a>
            .
          </p>
        </Sec>
      </CaseBody>

      <RelatedCase
        eyebrow="pvNXT Help · 2026"
        title="One calm help centre for all six portals."
        body="How I turned three long PDF guides into 58 short web guides, so users could get unstuck without messaging the team."
        href="/case/pvnxt-help"
        cover={helpHome}
      />
      <Footer />
    </main>
  );
}
