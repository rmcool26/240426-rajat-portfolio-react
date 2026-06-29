// ============================================================
// 📝 EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// All text, links, and project data live here.
// Images live in src/assets/ — replace files with same names to swap.
// ============================================================

import profile from "@/assets/projects/rmcool26-profile.svg";
import designSystem from "@/assets/projects/rmcool26-design-system.png";
import iideCourse from "@/assets/projects/rmcool26-iide-coursepage.svg";
import rettagio from "@/assets/projects/rmcool26-freelance.svg";
import consumerMobile from "@/assets/projects/rmcool26-pvNXT-consumer-mobile.svg";
import epcStringing from "@/assets/projects/rmcool26-pvNXT-epc-stringing.png";
import pvnxtSuite from "@/assets/projects/rmcool26-pvNXT-suite-675.svg";
import epcWorkflow from "@/assets/projects/rmcool26-pvNXT-epc-workflow.png";
import epcProposal from "@/assets/projects/rmcool26-pvNXT-proposal-pdf.png";
import scada from "@/assets/projects/rmcool26-pvNXT-sacada.svg";
import scadaAlert from "@/assets/projects/rmcool26-pvNXT-sacada-alert.svg";
import sarCart from "@/assets/projects/rmcool26-spade.svg";
import fieldApp from "@/assets/projects/rmcool26-pvNXT-epc-fieldapp.svg";

export const content = {
  meta: {
    name: "Rajat Mishra",
    handle: "RMCOOL26",
    role: "UI/UX Lead · Systems Designer",
    location: "India",
    available: "Open to Senior / Lead roles",
  },

  nav: [
    /* { label: "Home", href: "#top" }, */
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Pragmatic Product & UX Designer",
    title: "I make messy workflows work.",
    sub: "Ideas to apps. Audits to fixes. I ship products that simplify real work.",
    primaryCta: { label: "View My Work", href: "#work" },
    secondaryCta: { label: "Let's Talk", href: "#contact" },
    profileImage: profile,
    badges: [
      { label: "Figjam → Jira", value: "10+ Tools Mastered", emoji: "🛠️" },
      { label: "Real users & results", value: "20+ Live Products", emoji: "🚀" },
      { label: "Shipping since 2016", value: "Hi, I'm Rajat Mishra", emoji: "👋" },
      { label: "Delivered · Audited", value: "50+ Projects", emoji: "✨" },
      { label: "Team Scaled", value: "2→12", emoji: "👥" },
      /* { label: "Design Process", value: "Your idea → My Figma → Live Product", emoji: "👥" }, */
    ],
  },

  marquee: [
    "9+ years shipping",
    "60+ projects",
    "4 mobile apps",
    "Scaled design 2 → 12",
    "~30% faster task completion",
    "Mumbai 🇮🇳",
    "Open to Senior / Lead roles",
  ],

  process: {
    heading: "How I Ship",
    sub: "No theory. No Fluff. No double diamonds. Building systems that scale and teams that ship.",
    steps: [
      { title: "Decode", desc: "Talk to real people. Understand the actual mess first.", emoji: "🔍" },
      { title: "Craft", desc: "Blueprinting systems that make technical sense, not just pretty screens.", emoji: "🎨" },
      { title: "Deliver", desc: "I don't throw files over the wall. I align with devs until it works.", emoji: "🚢" },
      /* { title: "Scale", desc: "I don't just throw designs over the wall. I review, test, and align with devs until it works.", emoji: "🚢" }, */
      { title: "Launch", desc: "Scale, track data, mentor the team, and iterate for better results.", emoji: "📈" },
    ],
  },

  featured: {
    heading: "Featured Work",
    sub: "Case studies, live projects, and the measurable impact I've delivered.",
    hero: {
      slug: "terranxt",
      name: "pvNXT Solar Suite",
      company: "Terranxt · 2022 — Now",
      role: "UI/UX Design Lead",
      tags: ["Enterprise SaaS", "Product Strategy", "Design System", "SolarTech", "Workflow Automation", "Figma · HTML/CSS · Tailwind", "Dev Handoff"],
      description: [
        `Before pvNXT Solar Suite existed, running a solar EPC business in India looked something like this: PVsyst open in one tab, AutoCAD on a second monitor, WhatsApp buzzing with updates from an installer 400km away, and a spreadsheet trying to hold it all together. A single project — from site visit to final handover — could take 2–3 months.`,

        `I joined Terranxt when there was no product, no team, and no design system. Just a problem worth solving. Over the next three years, I designed — from scratch — three interconnected portals: a Consumer portal for homeowners to self-assess and submit leads, an EPC portal for engineers to analyse, propose, and manage projects, and an Installer portal to track on-ground execution in real time.`,

        `When we took this to IIT Delhi's FITT programme — first as a Figma prototype, later as a live product — it got accepted for incubation. We've run multiple booths there since 2022. I managed the booth, ran the demos, explained the product to investors live — with nothing but a prototype and the actual problem it was solving.`
      ],
      cover: pvnxtSuite,
      stats: [
        { value: "20+", label: "EPC Organisations" },
        { value: "1k+", label: "End Users" },
        { value: "50+", label: "Screen Shipped" },
        { value: "10–15 min", label: "Site Roof analysis" },
        /* { value: "3 live portals", label: "Consumer · EPC · Installer" }, */
        /* { value: "2–3 months → 1–2 weeks", label: "Manual process to connected execution" }, */
      ],
      challenge: [
        {
          label: "Fragmented tools and teams -",
          text: "Consumers, EPCs and installers were all using different tools at different stages. Nothing was connected end‑to‑end.",
        },
        {
          label: "Slow, manual workflows -",
          text: "EPCs spent weeks on manual rooftop analysis, proposals designing, approvals and handovers, with repeated site visits and endless back‑and‑forth on WhatsApp.",
        },
        {
          label: "Zero single source of truth -",
          text: "No central view of where a project was stuck, who owned the next step, or managing installers was a nightmare of phone calls with no real-time project visibility.",
        },
        {
          label: "Building from Zero -",
          text: "As part of a 3rd-person of founding team, I had to do it all: define the product, design the experience, and help build the process to deliver it.",
        },
      ],
      caseStudyHref: "/case/terranxt",
    },
  },

  caseStudies: [
    {
      slug: "pvnxt-suite",
      name: "pvNXT Solar Suite",
      eyebrow: "Live Product · pvNXT Solar Suite",
      headline: "From spreadsheets to a full solar OS.",
      body: "Solar EPCs ran on WhatsApp and Excel. I built the system that replaced all of it — end to end.\nEPC portal. Consumer portal. Installer portal. Web + mobile. One suite. Actually used by real people.",
      cover: pvnxtSuite,
      stats: [
        { value: "20+", label: "EPCs Onboarded" },
        { value: "100+", label: "Users" },
        { value: "3+", label: "Portals" },
        { value: "IIT Delhi", label: "Icubated At" },
      ],
      badge: "IIT Delhi",
      cta: { label: "See the case study", href: "/case/terranxt" },
      isLive: true,
    },
    {
      slug: "scada-monitoring",
      name: "SCADA Monitoring",
      eyebrow: "Design in Progress · SCADA Monitoring",
      headline: "One dashboard.\nEvery plant. Every alert.",
      body: "O&M managers juggled calls, spreadsheets, and site visits just to know if a plant was running.\nThis fixes that — real-time monitoring, work orders, and field ops. Web + mobile. Multiple roles.",
      cover: scadaAlert,
      stats: [
        { value: "5", label: "Roles Covered" },
        { value: "50+", label: "Screens Designed" },
        { value: "3+", label: "Portals" },
        { value: "Web + mobile", label: "Cross Platform" },
      ],
      cta: { label: "Case study coming soon", href: "#" },
      isLive: false,
    },
  ],

  other: {
    heading: "Featured Work",
    sub: "Case studies, live projects, and the measurable impact I've delivered.",
    hero: {
      slug: "terranxt",
      name: "pvNXT Solar Suite",
      company: "Terranxt · 2022 — Now",
      role: "UI/UX Design Lead",
      tags: ["Enterprise SaaS", "Product Strategy", "Design System", "SolarTech", "Workflow Automation", "Figma · HTML/CSS · Tailwind", "Dev Handoff"],
      description: [
        `Before pvNXT Solar Suite existed, running a solar EPC business in India looked something like this: PVsyst open in one tab, AutoCAD on a second monitor, WhatsApp buzzing with updates from an installer 400km away, and a spreadsheet trying to hold it all together. A single project — from site visit to final handover — could take 2–3 months.`,

        `I joined Terranxt when there was no product, no team, and no design system. Just a problem worth solving. Over the next three years, I designed — from scratch — three interconnected portals: a Consumer portal for homeowners to self-assess and submit leads, an EPC portal for engineers to analyse, propose, and manage projects, and an Installer portal to track on-ground execution in real time.`,

        `When we took this to IIT Delhi's FITT programme — first as a Figma prototype, later as a live product — it got accepted for incubation. We've run multiple booths there since 2022. I managed the booth, ran the demos, explained the product to investors live — with nothing but a prototype and the actual problem it was solving.`
      ],
      cover: pvnxtSuite,
      stats: [
        { value: "20+", label: "EPC Organisations" },
        { value: "1k+", label: "End Users" },
        { value: "50+", label: "Screen Shipped" },
        { value: "10–15 min", label: "Site Roof analysis" },
        /* { value: "3 live portals", label: "Consumer · EPC · Installer" }, */
        /* { value: "2–3 months → 1–2 weeks", label: "Manual process to connected execution" }, */
      ],
      challenge: [
        {
          label: "Fragmented tools and teams -",
          text: "Consumers, EPCs and installers were all using different tools at different stages. Nothing was connected end‑to‑end.",
        },
        {
          label: "Slow, manual workflows -",
          text: "EPCs spent weeks on manual rooftop analysis, proposals designing, approvals and handovers, with repeated site visits and endless back‑and‑forth on WhatsApp.",
        },
        {
          label: "Zero single source of truth -",
          text: "No central view of where a project was stuck, who owned the next step, or managing installers was a nightmare of phone calls with no real-time project visibility.",
        },
        {
          label: "Building from Zero -",
          text: "As part of a 3rd-person of founding team, I had to do it all: define the product, design the experience, and help build the process to deliver it.",
        },
      ],
      caseStudyHref: "/case/terranxt",
    },
  },

  projects: [
    /* {
      slug: "scada-portal",
      name: "pvNXT SCADA Web App",
      company: "Current Live Version · Terranxt · 2025",
      role: "Real-time solar plant operations",
      tags: ["O&M Dashboard", "Work Orders", "Alert System"],
      description: "Designed a market-first centralized SCADA platform, analyzing competitor gaps and user needs.",
      cover: scada,
      gallery: [scada, scada, scada],
      stats: [
        { value: "10+", label: "Users onboarded" },
        { value: "~60%", label: "Fewer manual check-ins" },
        { value: "20+", label: "Formats supported" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Solar O&M managers lacked a single tool for multi-plant monitoring, work order assignment, and smart alerts.",
        },
        {
          label: "Action:",
          text: "Designed a real-time O&M dashboard for solar plants with inverter/string-level monitoring, alerts, work orders, and activity logs, eliminating manual monitoring and follow-ups.",
        },
        {
          label: "Result:",
          text: "Helping O&M managers with complete control, real-time insights, significantly reducing plant downtime, manual oversight, enabling faster fault detection and field work assignment without manual follow-ups.",
        },
      ],
      link: "https://scada.pvnxt.com",
    }, */
    {
      slug: "field-app",
      name: "pvNXT Field App",
      company: "Terranxt · Beta Release",
      role: "Internal EPC field tool → site-to-design in one visit",
      tags: ["Mobile", "Field Ops", "Internal Tool", "Lead Capture"],
      description:
        "A self-serve solar app for homeowners to estimate rooftop feasibility, understand cost, raise requests, and track installation progress without depending on calls or WhatsApp.  ",
      cover: fieldApp,
      gallery: [fieldApp, fieldApp, fieldApp],
      stats: [
        /* { value: "Zero Site Visits", label: "Per Lead" }, */
        { value: "Same-day", label: "Design Handoff" },
        { value: "No", label: "Paper Forms" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "EPC team visited sites with pen, paper, and a phone camera. Design team got a WhatsApp dump and still neededa second visit to fill the gaps.",
        },
        {
          label: "Action",
          text: "Built an internal mobile app for field EPCs for lead capture, roof survey, keepout marking, measurements, entry and termination points. Everything logged on-site, synced to the design team by end of day.",
        },
        {
          label: "Result",
          text: "One visit. Full data. Design team gets a complete handoff no calls, no re-visits, no guessing. Proposal out within 24 hours of site visit.",
        },
      ],
      link: "",
    },
    {
      slug: "consumer-mobile",
      name: "pvNXT Consumer Mobile App",
      company: "Terranxt · Beta Release",
      role: "Simplifying the solar decision journey",
      tags: ["B2C Self-Serve", "Mobile UI/UX"],
      description:
        "A self-serve solar app for homeowners to estimate rooftop feasibility, understand cost, raise requests, and track installation progress without depending on calls or WhatsApp.  ",
      cover: consumerMobile,
      gallery: [consumerMobile, consumerMobile, consumerMobile],
      stats: [
        { value: "10+", label: "Downloads" },
        { value: "4.6★", label: "Play Store" },
        { value: "iOS+And", label: "Live Beta" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Homeowners had no idea what solar would cost, when it will arrive, or who was tracking their order.",
        },
        {
          label: "Action",
          text: "Built a mobile app — cost estimator, ROI calculator, quote flow, live installation tracker. Full journey, one app.",
        },
        {
          label: "Result",
          text: "Consumers in control end-to-end. Generated high-quality, verified leads directly to the EPC team with fewer manual follow-ups.",
        },
      ],
      link: "https://play.google.com/store/apps/details?id=com.PvNXT&pcampaignid=web_share",
    },
    {
      slug: "spade",
      name: "Spade — Geo-Intelligence Marketplace",
      company: "Suhora · 2023",
      role: "India's leading satellite imagery marketplace",
      tags: ["B2B Procurement", "E-commerce", "Satellite Imagery"],
      description:
        "Designed India's first self-serve platform for government agencies to purchase satellite imagery. Reduced a tedious 3-week procurement process into a fast 3-day flow with instant archive downloads.",
      cover: sarCart,
      gallery: [sarCart, sarCart, sarCart],
      stats: [
        { value: "Govt + Ent", label: "B2B Customers" },
        { value: "2–3 days", label: "Procurement" },
        /* { value: "Raster", label: "Data layers" }, */
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Buying satellite imagery for govt agencies took 2–3 weeks. Manual, slow, no single platform.",
        },
        {
          label: "Action:",
          text: "Designed the end-to-end platform — browse, preview, order, download. One flow replacing weeks of back-and-forth.",
        },
        {
          label: "Result",
          text: "Procurement dropped from 2–3 weeks to 2–3 days which help agencies moved faster and by creating a new standard for the industry.",
        },
      ],
      link: "https://spade.suhora.com",
    },
    {
      slug: "iide",
      name: "IIDE — Learning & Marketing",
      company: "IIDE · 2021",
      role: "Boosting course enrollment via CRO",
      tags: ["EdTech", "Redesign", "Product Strategy", "Frontend Logic"],
      description:
        "Led the post-COVID redesign of core marketing pages. Engineered dynamic WordPress UI components to automate course deadlines, boosting yearly lead generation by 16%.",
      cover: iideCourse,
      gallery: [iideCourse, iideCourse, iideCourse],
      stats: [
        { value: "+16%", label: "Lead Conversion" },
        { value: "3 Person", label: "Team Led" },
        { value: "4+", label: "Portals managed" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Course and Marketing lead pages weren't converting. Good traffic, weak results.",
        },
        {
          label: "Action:",
          text: "Led a team of 3 juniors for day to day tasks, to implement modular design systems and custom interactions that simplified the student journey. Redesigned high-intent course landing pages, built reusable WordPress components, automated deadline updates. Implemented complex jQuery solutions for better UX.",
        },
        {
          label: "Result",
          text: "Drove a 16% increase in leads while reducing internal update time by ~30%.",
        },
      ],
      link: "https://iide.co/bachelors-in-digital-business-program/",
    },
    {
      slug: "dreamz",
      name: "DMS - Web Design & Development",
      company: "Dreamz Merchandising Solutions · Early Career Era",
      role: "Built custom solutions for Multi-industry clients",
      tags: ["Web Design", "Branding", "Multiple Brands"],
      hyper: ["Web Design11", "Branding", "Multiple Brands"],
      description: `Designed and developed fast, clean websites for manufacturing, SaaS, automotive, and consulting brands with a focus on clarity, trust, and lead generation.`,
      cover: rettagio,
      gallery: [rettagio, rettagio, rettagio],
      stats: [
        { value: "25+", label: "Website Shipped" },
        { value: "10+", label: "Industries" },
        { value: "₹10L+", label: "Managed Projects" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Before SaaS platforms, small businesses needed a web presence but had no idea where to start or who to trust.",
        },
        {
          label: "Action:",
          text: "Took each from zero → discovery, design, build, handoff. Cafes, film studios, manufacturers, satellite companies, real estate, and hospitality. Different brief every time. Same quality every time.",
        },
        {
          label: "Result:",
          text: "25+ websites shipped across 10+ industries. Some clients are still running the same sites. Few Clients: Retaggio Industries, SRM Films, MMD Cafe.",
        },
      ],
      link: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=2-2148&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2148&page-id=0%3A1&show-proto-sidebar=1",
    },
  ],

  pvnxtCases: [
    {
      slug: "workflow-mapping",
      name: "Workflow Mapping",
      company: "",
      role: "",
      tags: ["Roles", "Role-based Workflow", "Edge Cases", "Digital Flow"],
      description: "Purpose: Show that you started with process clarity, not random UI.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "My first step was to map the entire messy, manual process on a FigJam board with actual EPCs.",
        },
        {
          label: "Action:",
          text: "We didn't talk about features; we talked about pain points.",
        },
        {
          label: "Result:",
          text: "This visual map became our single source of truth.",
        },
      ],
      link: "",
    },
    {
      slug: "data-flow",
      name: "Architecting the Data Flow",
      company: "",
      role: "",
      tags: ["Input Field Mapping", "Data Dependencies"],
      description: "Purpose: Shows product thinking and complexity handling.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "With a clear workflow, I defined the system's logic.",
        },
        {
          label: "Action:",
          text: "What information is needed at each stage? Who inputs it? Who sees it?",
        },
        {
          label: "Result:",
          text: "This translated the business logic into a system blueprint, ensuring data flowed correctly between all three portals.",
        },
      ],
      link: "",
    },
    {
      slug: "mid-fidelity-screens",
      name: "Validating the Flow with Mid-Fidelity Screens",
      company: "",
      role: "",
      tags: ["User Journey", "Mid-Fidelity Prototypes", "Stakeholders Approval",],
      description: "Purpose: Shows that you validate structure before final UI.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Turning those flows into medium‑fidelity screens to validate journeys and permissions with stakeholders.",
        },
        {
          label: "Action:",
          text: "Before adding color, I built mid-fidelity prototypes focused purely on the user journey. ",
        },
        {
          label: "Result:",
          text: "I ran these by our partner EPCs in quick review meetings to validate the core logic.",
        },
        {
          label: "Result:",
          text: "This 'measure twice, cut once' approach saved us weeks of rework",
        },
      ],
      link: "",
    },
    {
      slug: "design-system",
      name: "Building the Foundation: Design System",
      company: "",
      role: "",
      tags: ["Global components", "tables", "cards", "filters", "forms", "status badges", "toasts"],
      description: "Purpose: Shows scalability and consistency.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "To build three portals fast and consistently, a design system was critical. ",
        },
        {
          label: "Result:",
          text: "This foundation allowed us to assemble new screens in minutes, not hours, and gave our brand a cohesive feel.",
        },
        {
          label: "Result:",
          text: "Building the pvNXT design system:variables, style, typography, color tokens, layout grid and reusable components in Figma for web and mobile.",
        },
      ],
      link: "",
    },
    {
      slug: "high-fidelity-ui",
      name: "Crafting the High-Fidelity Experience",
      company: "",
      role: "",
      tags: ["Color theory", "legends", "tooltip", "motion specs"],
      description: "Purpose: Shows final product quality.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "The goal: a powerful interface that felt simple. An EPC should be able to manage 10 projects as easily as one. ",
        },
        {
          label: "Result:",
          text: "Every screen was designed to make their job faster, easier, and more profitable.",
        },
        {
          label: "Result:",
          text: "Final UI for core journeys — consumer, EPC dashboard, installer app and SCADA views.",
        },
      ],
      link: "",
    },
    {
      slug: "handoff-collab",
      name: "The Perfect Handoff & Collaboration",
      company: "",
      role: "",
      tags: ["States", "interaction", "toast/info messages", "UI responses"],
      description: "Purpose: Shows final product quality.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Detailed handoff in Figma: annotating every state, interaction, loading/empty/error cases, toast/info messages, microcopy and component behaviour documented for the dev team.",
        },
        {
          label: "Result:",
          text: "I was the communication bridge, ensuring what we designed is what we shipped.",
        },
      ],
      link: "",
    },
    {
      slug: "testing-iteration",
      name: "Closing the Loop: Testing, Bugs & Iteration",
      company: "",
      role: "",
      tags: ["Testing", "Feedback", "Cross-functional collaboration", "Iteration"],
      description: "Purpose: Shows final product quality.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "During development, I coordinated with frontend and backend teams, clarified API requirements, tested builds, logged issues, assigned bugs, and helped close release gaps.",
        },
        {
          label: "Problem:",
          text: "Using feedback from real EPCs at our parent company, we continuously iterated to make the product better with every release by logging issues and tightening UX.",
        },
        {
          label: "Result:",
          text: "We ship, we test, we learn. I was actively involved in testing, logging bugs, and prioritizing fixes with the dev team.",
        },
      ],
      link: "",
    },
    {
      slug: "scaled-suite",
      name: "Scaled the suite beyond one product",
      company: "",
      role: "",
      tags: ["Scalability", "New Modules", "Integration"],
      description: "Purpose: Shows final product quality.",
      cover: sarCart,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Extended the same foundation to consumer mobile, SCADA monitoring, and future O&M integration, so new modules plug into the same system instead of becoming separate apps.",
        },
      ],
      link: "",
    },
  ],

  about: {
    eyebrow: "About",
    heading: "Not just a designer.",
    headingAccent: "A finisher.",
    paragraphs: [
      "I work where design meets reality → messy briefs, tight timelines, real constraints. Most designers hand off. I stay until it ships.",
      "There are 10,000+ designers who can make you a nice Figma file. I'm one of the few who'll also ship it to real users.",
      "A decade of building real products has taught me one thing: reduce manual chaos, speed up dev, solve real problems. Everything else is decoration.",
    ],
    stats: [
      { value: "9+", label: "Years shipping" },
      { value: "20+", label: "Live products" },
      { value: "4", label: "Designers Mentored" },
      { value: "6", label: "Developers Led" },
    ],
    highlights: [
      { label: "Systems, not screens", text: "Architect the flow, not just the frame." },
      { label: "I speak dev", text: "HTML/CSS fluent. Smoother handoffs, fewer excuses." },
      { label: "Numbers > opinions", text: "GA + user feedback drive the next decision." },
      { label: "Whiteboard → live app", text: "0-to-1 builder. Ambiguity is home." },
    ],
  },

  experience: {
    eyebrow: "Experience & Stack",
    heading: "Where I've shipped",
    headingAccent: "and how.",
    timeline: [
      {
        year: "2022 — Now",
        company: "Terranxt (pvNXT)",
        role: "UI/UX Design Lead",
        desc: "Joined as #2. Scaled team 2→12. Owned the full Solar Suite — EPC, Consumer, Installer + Mobile App. Built the pvNXT design system from zero.",
      },
      {
        year: "2021 — 2022",
        company: "IIDE",
        role: "Executive Web Designer",
        desc: "+16% lead conversion via redesigning responsive course & marketing pages. Mentored 3 junior designers. Set up the team's first design QA ritual.",
      },
      {
        year: "2019 — 2021",
        company: "Skymap Global",
        role: "Software Engineer (UI-Oriented)",
        desc: "Designed govt-grade web applications for land monitoring by working alongside SOI / ERDAS engineers. First experience shipping real apps used by govt field officers.",
      },
      {
        year: "2016 — 2019",
        company: "Dreamz Merchandising Solutions",
        role: "Junior Web Designer & Developer",
        desc: "Shipped 20+ client sites. Learned 'pixel-perfect' is a choice, not a personality. Built a strong foundation in HTML/CSS, design principles, and client communication.",
      },
    ],
    currently: {
      label: "Currently",
      role: "UI/UX Design Lead",
      company: "Terranxt · Hybrid",
      status: "Open to Senior / Lead roles",
    },
    stackGrouped: [
      { group: "Design", tools: ["Figma", "FigJam", "Miro", "Notion"] },
      { group: "Build", tools: ["Tailwind", "HTML/CSS", "WordPress"] },
      { group: "Data & Ops", tools: ["Google Analytics", "Jira", "QGIS / ERDAS"] },
    ],
    education: [
      { year: "2016 — 2019", title: "BCA", school: "Bachelor of Computer Applications" },
      { year: "2014 — 2016", title: "Diploma in IT", school: "TCS iON" },
    ],
    recognition: [
      { label: "My designed product Incubated at", value: "IIT Delhi" },
      { label: "Founding product team", value: "Terranxt · 2023" },
    ],
    hobbies: [
      { label: "Studying ancient UX at monuments", value: "🏛️" },
      { label: "Chasing local food", value: "🍜" },
      { label: "Quick on the badminton court", value: "🏸" },
    ],
  },

  contact: {
    heading: "Let's Build Something",
    headingAccent: "Cool Together",
    sub: "Open to work, freelance case studies, or got something complex? Let’s simplify it.",
    email: "rmcool26@gmail.com",
    phone: "+91 9719499553",
    linkedin: "https://www.linkedin.com/in/rmcool26/",
    whatsapp: "https://wa.me/919719499553?text=Hi%20Rajat%2C%20saw%20your%20portfolio%20—",
    resume: "/RajatMishra_Resume.pdf",
  },
};

export type Project = (typeof content.projects)[number];
export type FeaturedProject = typeof content.featured.hero;
export type CaseStudyItem = (typeof content.caseStudies)[number];


// ============================================================
// 🗂️ UNIFIED WORK GRID — content for the redesigned #work section
// workItems: 8 shown in "All" (showInAll: true) + extras per filter tab
// archiveItems: text-only Earlier Work block
// ============================================================

export type FilterKey = "all" | "website" | "web-app" | "mobile-app" | "ppt-pdf";

export type WorkAction = {
  label: string;
  href: string;
  external?: true;   // opens in new tab
  isRoute?: true;    // internal react-router Link
};

export type WorkItem = {
  slug: string;
  name: string;
  company: string;
  tagline: string;
  cover: string | null;  // null → neutral placeholder (initials on bg-muted)
  tags: string[];
  filters: FilterKey[];  // which filter tab(s) this item belongs to
  showInAll?: true;      // appears in the default "All" curated view (max 8)
  status: "live" | "wip" | "internal" | "review";
  pvnxtEcosystem?: true;
  statusLabel?: string;  // text-only pill e.g. "In Use Internally"

  // ── Homepage card CTAs (max 2 shown) ──────────────────────
  primaryAction?: WorkAction;    // "View Project" → internal page
  secondaryAction?: WorkAction;  // "Figma" → external, only if available

  // ── Internal project page detail data ─────────────────────
  projectPageHref?: string;      // "/work/:slug" or "/case/terranxt" for pvNXT Suite
  figmaLink?: string;
  liveLink?: string;
  caseNotesLink?: string;
  appLink?: string;
  whatItIs?: string;
  whatIDid?: string;
  whyItMatters?: string;

  // ── Data-only links (not rendered on card) ─────────────────
  resourceLinks?: WorkAction[];
};

export type ArchiveItem = {
  name: string;
  company: string;
  year: string;
  tags: string[];
  link?: string;
};

// ─────────────────────────────────────────────────────────────
// WORK ITEMS — 24 total
//  • 8  showInAll (default "All" grid)
//  • 6  Website extras
//  • 4  Web App extras
//  • 2  Mobile App extras
//  • 4  PPT/PDF
// ─────────────────────────────────────────────────────────────
export const workItems: WorkItem[] = [

  // ── ALL VIEW (showInAll: true) — exactly 8 curated cards ──────────────────

  {
    slug: "pvnxt-suite",
    name: "pvNXT Solar Suite",
    company: "Terranxt · 2022 — Now",
    tagline: "3 portals. 2 apps. One solar workflow.",
    cover: pvnxtSuite,
    tags: ["Web App", "Case Study", "Live"],
    filters: ["web-app"],
    showInAll: true,
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/case/terranxt",          // reuses existing case study page
    primaryAction: { label: "View Project", href: "/case/terranxt", isRoute: true },
    liveLink: "https://epc.pvnxt.com/",
    whatItIs: "A full solar OS — EPC portal, Consumer portal, and Installer portal — built from scratch over 3 years.",
    whatIDid: "Led end-to-end UX design across all 3 portals. Built the design system, ran dev handoff, and pitched at IIT Delhi.",
    whyItMatters: "Real EPC organisations use it daily. Replaced spreadsheets, WhatsApp, and manual site visits.",
  },

  {
    slug: "scada-monitoring",
    name: "SCADA Monitoring",
    company: "Terranxt · In Progress",
    tagline: "Monitoring, alerts, and work orders in one view.",
    cover: scadaAlert,
    tags: ["Web App", "Enterprise", "WIP"],
    filters: ["web-app"],
    showInAll: true,
    status: "wip",
    pvnxtEcosystem: true,
    projectPageHref: "/work/scada-monitoring",
    primaryAction: { label: "View Project", href: "/work/scada-monitoring", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4480&page-id=0%3A1",
    liveLink: "https://scada.pvnxt.com/",
    statusLabel: "Redesign in progress",
    whatItIs: "Real-time O&M dashboard for multi-plant solar monitoring, alerts, and work order management.",
    whatIDid: "Designed the full dashboard — inverter/string-level monitoring, alert system, work orders, activity logs, and multi-role access.",
    whyItMatters: "O&M managers get complete plant visibility without manual check-ins or WhatsApp threads.",
  },

  {
    slug: "spade",
    name: "Spade",
    company: "Suhora · 2023",
    tagline: "Satellite imagery buying, shortened from weeks to days.",
    cover: sarCart,
    tags: ["Web App", "GIS", "Live"],
    filters: ["web-app"],
    showInAll: true,
    status: "live",
    projectPageHref: "/work/spade",
    primaryAction: { label: "View Project", href: "/work/spade", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4478&page-id=0%3A1",
    liveLink: "https://spade.suhora.com/",
    whatItIs: "India's first self-serve satellite imagery marketplace — browse, preview, order, download.",
    whatIDid: "Designed end-to-end procurement flow for govt and enterprise buyers. Replaced a 3-week manual process.",
    whyItMatters: "Procurement dropped from 3 weeks to 2–3 days. Set a new standard for the industry.",
  },

  {
    slug: "iide",
    name: "IIDE",
    company: "IIDE · 2021",
    tagline: "Lead-page redesigns that improved yearly conversions.",
    cover: iideCourse,
    tags: ["Website", "CRO", "Live"],
    filters: ["website"],
    showInAll: true,
    status: "live",
    projectPageHref: "/work/iide",
    primaryAction: { label: "View Project", href: "/work/iide", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4472&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A4472&page-id=0%3A1&show-proto-sidebar=1",
    liveLink: "https://iide.co/bachelors-in-digital-business-program/",
    whatItIs: "Post-COVID redesign of IIDE's core marketing and course pages with dynamic WordPress components.",
    whatIDid: "Led a 3-person team. Redesigned landing pages, engineered countdown logic, improved information hierarchy.",
    whyItMatters: "+16% improvement in lead conversion. Automated deadline urgency that previously required manual updates.",
    resourceLinks: [
      { label: "IIDE Learn", href: "https://learn.iide.co/", external: true },
      { label: "IIDE Careers", href: "https://careers.iide.co/", external: true },
    ],
  },

  {
    slug: "operation-comfort",
    name: "Operation Comfort",
    company: "Independent · Redesign",
    tagline: "Assessment redesign with cleaner UX and sharper decisions.",
    cover: null,
    tags: ["Website", "Redesign", "Assessment"],
    filters: ["website"],
    showInAll: true,
    status: "live",
    projectPageHref: "/work/operation-comfort",
    primaryAction: { label: "View Project", href: "/work/operation-comfort", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=2-2148&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2148&page-id=0%3A1&show-proto-sidebar=1",
    liveLink: "https://operationcomfortcontrolllc.com/",
    caseNotesLink: "https://app.notion.com/p/rmcool26/190526-iQuinceSoft-Assessment-36851a6dbcd8806a8e20e87e70cdaf30",
    whatItIs: "Full website redesign and UX assessment for a comfort-solutions brand.",
    whatIDid: "Conducted UX audit, restructured site architecture, redesigned core pages with cleaner layouts.",
    whyItMatters: "Turned a cluttered site into a clear, trust-building web presence aligned with what the brand actually does.",
  },

  {
    slug: "arthanxt",
    name: "ArthaNXT",
    company: "ArthaNXT · Website",
    tagline: "Solar investment website built from scratch.",
    cover: null,
    tags: ["Website", "Finance", "Scratch"],
    filters: ["website"],
    showInAll: true,
    status: "live",
    projectPageHref: "/work/arthanxt",
    primaryAction: { label: "View Project", href: "/work/arthanxt", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-3152&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A3152&page-id=0%3A1&show-proto-sidebar=1",
    liveLink: "https://artha.pvnxt.com/",
    whatItIs: "Clean, trust-building website for a solar investment and financing brand.",
    whatIDid: "Designed full site from scratch — information architecture, messaging hierarchy, and visual identity.",
    whyItMatters: "First web presence for a new fintech brand in the solar space. Designed to build confidence with investors.",
  },

  {
    slug: "retaggio",
    name: "Retaggio Industries",
    company: "Dreamz · Multi-industry",
    tagline: "Corporate site for a listed jewellery manufacturer.",
    cover: rettagio,
    tags: ["Website", "Manufacturing", "Live"],
    filters: ["website"],
    showInAll: true,
    status: "live",
    projectPageHref: "/work/retaggio",
    primaryAction: { label: "View Project", href: "/work/retaggio", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4477&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A4476&page-id=0%3A1&show-proto-sidebar=1",
    liveLink: "https://retaggioindustries.com/",
    whatItIs: "Corporate website for a publicly listed multi-industry group (jewellery, manufacturing, consulting).",
    whatIDid: "Designed and delivered the full site — brand positioning, page layouts, and responsive design.",
    whyItMatters: "A clean, professional web presence for a listed company that previously had none.",
  },

  {
    slug: "pvnxt-field-app",
    name: "pvNXT Field App",
    company: "Terranxt · Beta",
    tagline: "Field capture app for same-day design handoff.",
    cover: fieldApp,
    tags: ["Mobile App", "Field Ops", "Internal"],
    filters: ["mobile-app"],
    showInAll: true,
    status: "internal",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-field-app",
    primaryAction: { label: "View Project", href: "/work/pvnxt-field-app", isRoute: true },
    statusLabel: "In Use Internally",
    whatItIs: "Internal mobile app for EPC field teams — lead capture, roof survey, keepout marking, and full handoff.",
    whatIDid: "Designed all screens and user flows for field EPCs. No paper forms, no follow-up calls.",
    whyItMatters: "One visit. Full data. Design team gets complete handoff by end of day. Proposals out in 24 hrs.",
  },

  // ── WEBSITE FILTER EXTRAS ──────────────────────────────────────────────────

  {
    slug: "pvnxt-website",
    name: "pvNXT",
    company: "Terranxt · Website",
    tagline: "Brand site for the full solar product ecosystem.",
    cover: null,
    tags: ["Website", "Solar", "Scratch"],
    filters: ["website"],
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-website",
    primaryAction: { label: "View Project", href: "/work/pvnxt-website", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-3030&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A3030&page-id=0%3A1&show-proto-sidebar=1",
    liveLink: "https://pvnxt.com/",
    whatItIs: "Brand and marketing website for the entire pvNXT solar product ecosystem.",
    whatIDid: "Designed and launched the full website — hero, product sections, ecosystem overview.",
    whyItMatters: "Unified web presence for a product family spanning 3 portals and 2 mobile apps.",
  },

  {
    slug: "astongreen",
    name: "AstonGreen",
    company: "Terranxt · EPC Brand",
    tagline: "EPC parent-brand site tied to real execution.",
    cover: null,
    tags: ["Website", "Solar", "Live"],
    filters: ["website"],
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/work/astongreen",
    primaryAction: { label: "View Project", href: "/work/astongreen", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-308&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A308&page-id=0%3A1",
    liveLink: "https://astongreens.pvnxt.com/",
    whatItIs: "Website for AstonGreen — the EPC-facing brand within the Terranxt ecosystem.",
    whatIDid: "Designed the full site connecting brand identity to the pvNXT product system.",
    whyItMatters: "Gave the EPC arm a professional web presence aligned with the broader product story.",
  },

  {
    slug: "terranxt-website",
    name: "Terranxt",
    company: "Terranxt · Corporate",
    tagline: "Solar automation company site for enterprise positioning.",
    cover: null,
    tags: ["Website", "Enterprise", "Live"],
    filters: ["website"],
    status: "live",
    projectPageHref: "/work/terranxt-website",
    primaryAction: { label: "View Project", href: "/work/terranxt-website", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4481&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A4476&page-id=0%3A1",
    liveLink: "https://terranxt.com/",
    whatItIs: "Corporate site for Terranxt — a B2B solar automation company targeting enterprise and EPC clients.",
    whatIDid: "Led design and positioning for the corporate web presence.",
    whyItMatters: "Established credibility for an early-stage company competing with established solar brands.",
  },

  {
    slug: "suhora-website",
    name: "Suhora",
    company: "Suhora · GIS",
    tagline: "GIS company site focused on spatial data services.",
    cover: null,
    tags: ["Website", "GIS", "Design"],
    filters: ["website"],
    status: "live",
    projectPageHref: "/work/suhora-website",
    primaryAction: { label: "View Project", href: "/work/suhora-website", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4478&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A4476&page-id=0%3A1",
    whatItIs: "Website for Suhora — a GIS and geospatial data company working with government and enterprise.",
    whatIDid: "Designed the core marketing site and service pages.",
    whyItMatters: "Positioned a technical GIS company as accessible and enterprise-ready.",
  },

  {
    slug: "srm-films",
    name: "SRM Films",
    company: "Dreamz · Media",
    tagline: "Production house site for ads and short films.",
    cover: null,
    tags: ["Website", "Media", "Live"],
    filters: ["website"],
    status: "live",
    projectPageHref: "/work/srm-films",
    primaryAction: { label: "View Project", href: "/work/srm-films", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4479&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A4476&page-id=0%3A1",
    liveLink: "https://srmfilms.in/",
    whatItIs: "Website for SRM Films — a production house specialising in ad films and short-form content.",
    whatIDid: "Designed the full website, portfolio layout, and brand language.",
    whyItMatters: "Clean, visual-first site that lets the work speak. No clutter.",
  },

  {
    slug: "dg-car-studio",
    name: "DG Car Studio",
    company: "Dreamz · Automotive",
    tagline: "Automotive services site for repair, paint, and sales.",
    cover: null,
    tags: ["Website", "Automotive", "Live"],
    filters: ["website"],
    status: "live",
    projectPageHref: "/work/dg-car-studio",
    primaryAction: { label: "View Project", href: "/work/dg-car-studio", isRoute: true },
    figmaLink: "https://www.figma.com/proto/Bt1zGIq7GrMNDkr5pSXkzP/rmcool26-Workspace?node-id=10-4476&viewport=532%2C188%2C0.05&t=AzZZTqfBesB3eU6V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A4476&page-id=0%3A1",
    liveLink: "https://dgcarstudio.com/",
    whatItIs: "Website for DG Car Studio covering repair, paint protection, and pre-owned car sales.",
    whatIDid: "Designed the full site — service pages, image-forward layouts, and mobile-friendly structure.",
    whyItMatters: "Helped a local business build trust online with a clean, professional presence.",
  },

  // ── WEB APP FILTER EXTRAS ──────────────────────────────────────────────────

  {
    slug: "pvnxt-connect-web",
    name: "pvNXT Connect (Web)",
    company: "Terranxt · Consumer Portal",
    tagline: "Consumer portal for cost, tracking, and solar decisions.",
    cover: null,
    tags: ["Web App", "Consumer", "Live"],
    filters: ["web-app"],
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-connect-web",
    primaryAction: { label: "View Project", href: "/work/pvnxt-connect-web", isRoute: true },
    liveLink: "https://consumer.pvnxt.com/",
    whatItIs: "Consumer-facing web portal for solar cost estimation, quote tracking, and installation progress.",
    whatIDid: "Designed the full consumer portal — estimation flow, quote views, and installation tracker.",
    whyItMatters: "Puts consumers in control without calls or WhatsApp. Direct, self-serve lead capture.",
  },

  {
    slug: "pvnxt-studio",
    name: "pvNXT Studio (Web)",
    company: "Terranxt · EPC Portal",
    tagline: "EPC portal for layouts, analysis, and proposals.",
    cover: null,
    tags: ["Web App", "EPC", "Live"],
    filters: ["web-app"],
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-studio",
    primaryAction: { label: "View Project", href: "/work/pvnxt-studio", isRoute: true },
    liveLink: "https://epc.pvnxt.com/",
    whatItIs: "EPC-facing portal for rooftop analysis, system layout, proposal generation, and project management.",
    whatIDid: "Designed all EPC workflows — CAD-like layout tools, proposal builder, and project tracker.",
    whyItMatters: "Reduced 2–3 month project cycles. EPCs go from site to proposal inside the same tool.",
  },

  {
    slug: "pvnxt-go-web",
    name: "pvNXT Go (Web)",
    company: "Terranxt · Installer Portal",
    tagline: "Installer portal for tasks, proof, and live updates.",
    cover: null,
    tags: ["Web App", "Installer", "Live"],
    filters: ["web-app"],
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-go-web",
    primaryAction: { label: "View Project", href: "/work/pvnxt-go-web", isRoute: true },
    liveLink: "https://installer.pvnxt.com/",
    whatItIs: "Installer-facing portal for task management, site proof uploads, and real-time execution tracking.",
    whatIDid: "Designed the installer workflow — task list, photo proof, issue logging, and status updates.",
    whyItMatters: "Eliminated phone-tag between EPCs and installers. Everything tracked in one view.",
  },

  {
    slug: "pvnxt-atlas",
    name: "pvNXT Atlas",
    company: "Terranxt · GIS Tool",
    tagline: "GIS QA tool for map correction and approval.",
    cover: null,
    tags: ["Web App", "GIS", "Internal"],
    filters: ["web-app"],
    status: "internal",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-atlas",
    primaryAction: { label: "View Project", href: "/work/pvnxt-atlas", isRoute: true },
    statusLabel: "In Use Internally",
    whatItIs: "Internal GIS quality assurance tool for reviewing, correcting, and approving map data.",
    whatIDid: "Designed the full QA interface — map canvas, review workflow, and approval states.",
    whyItMatters: "Brought map QA in-house. Faster turnarounds, fewer errors, less dependency on third-party tools.",
  },

  // ── MOBILE APP FILTER EXTRAS ───────────────────────────────────────────────

  {
    slug: "pvnxt-connect-mobile",
    name: "pvNXT Connect (Mobile)",
    company: "Terranxt · Consumer App",
    tagline: "Consumer app for explore, estimate, and track.",
    cover: consumerMobile,
    tags: ["Mobile App", "Consumer", "Live"],
    filters: ["mobile-app"],
    status: "live",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-connect-mobile",
    primaryAction: { label: "View Project", href: "/work/pvnxt-connect-mobile", isRoute: true },
    appLink: "https://play.google.com/store/apps/details?id=com.PvNXT&pcampaignid=web_share",
    whatItIs: "Consumer mobile app for solar exploration — cost estimator, ROI calculator, quote flow, live tracker.",
    whatIDid: "Designed all screens — onboarding, estimation, quote request, and installation tracking.",
    whyItMatters: "Consumers manage their solar journey without a single call. High-quality verified leads to EPCs.",
  },

  {
    slug: "pvnxt-go-mobile",
    name: "pvNXT Go (Mobile)",
    company: "Terranxt · Installer App",
    tagline: "Installer app for real-time field updates.",
    cover: null,
    tags: ["Mobile App", "Installer", "In Review"],
    filters: ["mobile-app"],
    status: "review",
    pvnxtEcosystem: true,
    projectPageHref: "/work/pvnxt-go-mobile",
    primaryAction: { label: "View Project", href: "/work/pvnxt-go-mobile", isRoute: true },
    statusLabel: "In Review",
    whatItIs: "Mobile app for installers to receive tasks, upload proof, and log progress from the field.",
    whatIDid: "Designed mobile-first installer UX — notifications, task flow, photo uploads, site logging.",
    whyItMatters: "Gives installers a real tool instead of WhatsApp and calls. Keeps EPCs updated in real time.",
  },

  // ── PPT/PDF FILTER ─────────────────────────────────────────────────────────

  {
    slug: "dms-property-ppt",
    name: "DMS Property Showcase",
    company: "Dreamz · Real Estate",
    tagline: "Property deck for visual sales conversations.",
    cover: null,
    tags: ["PPT/PDF", "Real Estate", "Sales"],
    filters: ["ppt-pdf"],
    status: "live",
    projectPageHref: "/work/dms-property-ppt",
    primaryAction: { label: "View Project", href: "/work/dms-property-ppt", isRoute: true },
    whatItIs: "Property showcase presentation deck designed for in-person sales and investor conversations.",
    whatIDid: "Designed the full deck — layout, visual hierarchy, property renders, and data storytelling.",
    whyItMatters: "Replaced printed brochures with a polished, slide-ready deck that works in any meeting.",
  },

  {
    slug: "terranxt-pitch-ppt",
    name: "Terranxt Pitch PPT",
    company: "Terranxt · Fundraising",
    tagline: "Pitch deck for product and business storytelling.",
    cover: null,
    tags: ["PPT/PDF", "Pitch Deck", "Startup"],
    filters: ["ppt-pdf"],
    status: "live",
    projectPageHref: "/work/terranxt-pitch-ppt",
    primaryAction: { label: "View Project", href: "/work/terranxt-pitch-ppt", isRoute: true },
    whatItIs: "Investor pitch deck used to present Terranxt's product, market, and business case.",
    whatIDid: "Designed the complete deck — narrative arc, data visualisation, and slide templates.",
    whyItMatters: "Used in real investor meetings. Helped secure early conversations and accelerator entry.",
  },

  {
    slug: "terranxt-flyer",
    name: "Terranxt Flyer",
    company: "Terranxt · Collateral",
    tagline: "Quick brand collateral for fast communication.",
    cover: null,
    tags: ["PPT/PDF", "Collateral", "Brand"],
    filters: ["ppt-pdf"],
    status: "live",
    projectPageHref: "/work/terranxt-flyer",
    primaryAction: { label: "View Project", href: "/work/terranxt-flyer", isRoute: true },
    whatItIs: "Single-page brand flyer for Terranxt used at events, booths, and investor hand-outs.",
    whatIDid: "Designed layout, messaging, and visual treatment for quick scanning and brand recall.",
    whyItMatters: "Consistently used at every IIT Delhi FITT booth since 2022.",
  },

  {
    slug: "proposal-design",
    name: "Proposal Design",
    company: "Terranxt · Sales",
    tagline: "Proposal document built for clarity and trust.",
    cover: epcProposal,
    tags: ["PPT/PDF", "Proposal", "Enterprise"],
    filters: ["ppt-pdf"],
    status: "live",
    projectPageHref: "/work/proposal-design",
    primaryAction: { label: "View Project", href: "/work/proposal-design", isRoute: true },
    whatItIs: "Solar project proposal document template for EPC organisations to send to clients.",
    whatIDid: "Designed the full proposal template — layout, data tables, system diagrams, and cover design.",
    whyItMatters: "Replaced ad-hoc Word docs. EPCs generate proposals directly from pvNXT Studio.",
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    name: "MMD Cafe",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "F&B", "Branding"],
  },
  {
    name: "Brijbhumi",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "Real Estate"],
  },
  {
    name: "Lastella Bakery",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "F&B"],
  },
  {
    name: "Chaudhary Charan Singh School",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "Education"],
  },
  {
    name: "Lions Club Mumbai SOL",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "NGO"],
  },
  {
    name: "Hind Vijay",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "Media"],
  },
  {
    name: "Nemi Enterprises",
    company: "Dreamz Merchandising Solutions",
    year: "2016–2019",
    tags: ["Website", "Manufacturing"],
  },
];

