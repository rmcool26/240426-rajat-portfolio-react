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
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
/*     { label: "Experience", href: "#experience" }, */
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Pragmatic Product Designer👋",
    title: "I make messy workflows work.",
    sub: "Ideas to apps. Audits to fixes. I ship products that simplify real work.",
    primaryCta: { label: "View My Work", href: "#work" },
    secondaryCta: { label: "Let's Talk", href: "#contact" },
    profileImage: profile,
    badges: [
      { label: "Figjam → Jira", value: "10+ Tools Mastered", emoji: "🛠️" },
      { label: "Real users & results", value: "20+ Live Products", emoji: "🚀" },
      { label: "Shipping since 2014", value: "Hi, I'm Rajat Mishra", emoji: "👋" },
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
      { title: "Scale", desc: "Launch, track data, mentor the team, and iterate for better results.", emoji: "📈" },
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
      eyebrow: "Redesign in Progress · SCADA Monitoring",
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
    {
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
      name: "Freelance Web Design",
      company: "Dreamz Group · Early Career Era",
      role: "Built custom solutions for Multi-industry clients",
      tags: ["Web Design", "Branding", "Multiple Brands"],
      hyper: ["Web Design11", "Branding", "Multiple Brands"],
      description: `Designed and developed fast, clean websites for manufacturing, SaaS, automotive, and consulting brands with a focus on clarity, trust, and lead generation.`,
      cover: rettagio,
      gallery: [rettagio, rettagio, rettagio],
      stats: [
        { value: "25+", label: "Website Shipped" },
        { value: "10+", label: "Industries" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Before SaaS platforms, small businesses needed a web presence but had no idea where to start or who to trust.",
        },
        {
          label: "Problem:",
          text: "Took each from zero → discovery, design, build, handoff. Cafes, film studios, manufacturers, satellite companies, real estate, and hospitality. Different brief every time. Same quality every time.",
        },
        {
          label: "Result:",
          text: "25+ websites shipped across 10+ industries. Some clients are still running the same sites. Few Clients: Retaggio Industries, SRM Films, MMD Cafe.",
        },
      ],
      link: "https://retaggioindustries.com/",
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
    heading: "The cool guy behind",
    headingAccent: "the pixels",
    paragraphs: [
      "I’m a pragmatic designer with ~10 years of experience, who understands code, collaborates closely with engineers, and builds systems that are simple to use, scalable to maintain, and practical to ship.",
      "My role often goes beyond Figma. Most of my work lives where things are messy by default.",
    ],
    timeline: [
      {
        year: "2022 — Now",
        company: "Terranxt (pvNXT)",
        role: "UI/UX Design Lead",
        desc: "Joined as #2. Scaled team 2→12. Owned Solar Suite end-to-end (~30% faster task completion). Built and maintain the pvNXT design system.",
      },
      {
        year: "2021 — 2022",
        company: "IIDE",
        role: "Executive Web Designer",
        desc: "Redesigned core marketing site and course pages → +16% engagement. Mentored 3 junior designers; established design QA rituals.",
      },
      {
        year: "2019 — 2021",
        company: "Skymap Global",
        role: "Software Engineer (UI-Oriented)",
        desc: "Designed GIS visualisation tools used by gov & enterprise. Translated raster data into clean dashboards alongside QGIS / ERDAS engineers.",
      },
      {
        year: "2016 — 2019",
        company: "Dreamz Merchandising Solutions",
        role: "Junior Web Developer",
        desc: "Shipped 20+ client websites and a few mobile apps. Where I learned that 'pixel-perfect' is a design choice, not a personality.",
      },
    ],
    highlights1: [
      {
        label: "System Thinking over Screen Thinking",
        text: "I don't just design screens; I architect systems. I map complex processes and identify leverage points to ensure we're building a scalable, coherent product, not just a collection of features.",
      },
      {
        label: "Design-to-Dev Collaboration",
        text: "My background in HTML/CSS and leading a dev team means I speak their language. This results in realistic designs, smoother handoffs, and a faster path from concept to code. No more 'devs couldn't build it' excuses.",
      },
      {
        label: "Data-Informed Decisions",
        text: "I use tools like Google Analytics and user feedback not to create reports, but to make decisions. I focus on metrics that matter to find out what's working, what's not, and what to build next.",
      },
      {
        label: "0-to-1 Execution",
        text: "I excel in the ambiguity of a new venture. At TerraNXT, I was part of the founding product team, helping build the platform from a whiteboard sketch to a revenue-generating product incubated at IIT Delhi.",
      },
    ],

    coreSkills: [
      "UX Strategy & Product Thinking",
      "Complex Workflow Optimization",
      "Information Architecture & User Flows",
      /* "Rapid Wireframing & Prototyping", */
      "Conversion Rate Optimization (CRO)",
      "Developer Handoff & Design QA",
      "Design Mentorship & Leadership",
    ],
    designTools: ["Figma", "FigJam", "Miro", "Notion"],
    techTools: ["Tailwind", "HTML/CSS", "WordPress", "QGIS / ERDAS", "Jira/Trello", "Google Analytics"],
    collaboration: [
      "Stakeholder Management",
      "Cross-functional Teams",
      "User-Centric Approach",
      "Agile Methodology",
      "System Thinking",
      "Product Roadmap Alignment",
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
