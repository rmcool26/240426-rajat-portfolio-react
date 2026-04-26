// ============================================================
// 📝 EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// All text, links, and project data live here.
// Images live in src/assets/ — replace files with same names to swap.
// ============================================================

import profile from "@/assets/projects/rmcool26-profile.svg";
import designSystem from "@/assets/projects/rmcool26-design-system.png";
import iideCourse from "@/assets/projects/rmcool26-iide-coursepage.png";
import rettagio from "@/assets/projects/rmcool26-freelance.svg";
import consumerMobile from "@/assets/projects/rmcool26-pvNXT-consumer-mobile.svg";
import epcStringing from "@/assets/projects/rmcool26-pvNXT-epc-stringing.png";
import epcWorkflow from "@/assets/projects/rmcool26-pvNXT-epc-workflow.png";
import epcProposal from "@/assets/projects/rmcool26-pvNXT-proposal-pdf.png";
import scada from "@/assets/projects/rmcool26-pvNXT-sacada.svg";
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
    { label: "Home", href: "#top" },
    { label: "Projects", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Hi, I'm Rajat 👋",
    title: "I make messy workflows work.",
    sub: "As a Product Design Lead, I don’t design to impress trends. I design to reduce confusion, save time, and make someone’s workday a little easier.",
    primaryCta: { label: "View My Work", href: "#work" },
    secondaryCta: { label: "Let's Talk", href: "#contact" },
    profileImage: profile,
    badges: [
      { label: "Tools", value: "10+", emoji: "🛠️" },
      { label: "Live Products", value: "5+", emoji: "🚀" },
      { label: "Years", value: "9+", emoji: "⏳" },
      { label: "Projects", value: "50+", emoji: "✨" },
      { label: "Team Scaled", value: "2→12", emoji: "👥" },
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
    heading: "My Design Process",
    sub: "Not a textbook 'Double Diamond'. My job is to make ideas real using rmcool's design process (i.e FigJam → Figma → Developer Handoff → QA partnership → Iteration) that turns manual chaos into scalable products",
    steps: [
      { title: "Decode the reality", desc: "Stakeholder interviews, user research, competitive teardowns.", emoji: "🔍" },
      { title: "Break down the system", desc: "Wireframes, prototypes, usability tests with real users.", emoji: "🧪" },
      { title: "Design for clarity", desc: "High-fidelity UI, design systems, motion specs.", emoji: "🎨" },
      { title: "Build with dev alignment", desc: "Dev handoff, QA partnership, design tickets I write myself.", emoji: "🚢" },
      { title: "Scale the system", desc: "Measure, iterate, mentor the team to ship faster.", emoji: "📈" },
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
      ],
      cover: epcStringing,
      stats: [
        { value: "20+", label: "Active users" },
        { value: "50+", label: "Screen Shipped" },
        { value: "90%", label: "Project Turnaround" },
        { value: "10–15 min", label: "Site Roof analysis" },
        { value: "3 live portals", label: "Consumer · EPC · Installer" },
        { value: "2–3 months → 1–2 weeks", label: "Manual process to connected execution" },
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
      slug: "epc-portal",
      name: "EPC Portal Workflow",
      tagline: "Solar installation tracking that EPCs actually use.",
      description:
        "EPC partners juggled spreadsheets and WhatsApp to track installations. I mapped the full journey, designed a single workflow board with milestone gating, and automated handoffs.",
      cover: terranxtEpc,
      gallery: [terranxtEpc, stringing, inputSystem],
      tags: ["B2B", "Workflow", "Enterprise"],
      stats: [
        { value: "25+", label: "EPC Partners" },
        { value: "~50%", label: "Fewer tracking calls" },
      ],
    },
    {
      slug: "consumer-mobile",
      name: "Consumer Mobile App",
      tagline: "Solar generation in your pocket. iOS + Android.",
      description:
        "Solar consumers wanted real-time generation data without opening a laptop. Designed live generation, savings tracker, service requests, and a location-aware onboarding.",
      cover: locationPicker,
      gallery: [locationPicker, sarCart, solarDash2],
      tags: ["Mobile", "iOS", "Android"],
      stats: [
        { value: "30k+", label: "Active users" },
        { value: "4.6★", label: "Play Store rating" },
      ],
    },
    {
      slug: "iide",
      name: "IIDE Lead Gen Site",
      tagline: "EdTech site rebuild that actually converted.",
      description:
        "High traffic, low course enrolment — the site looked good but didn't convert. Rewrote IA, redesigned course pages, A/B tested CTAs, partnered with growth on every section.",
      cover: iide,
      gallery: [iide],
      tags: ["EdTech", "Marketing", "CRO"],
      stats: [
        { value: "+16%", label: "Engagement lift" },
        { value: "↑", label: "Qualified leads" },
      ],
    }, */

    /* {
        slug: "terranxt-suite",
        name: "pvNXT Solar Suite",
        company: "Terranxt · 2022",
        role: "Consumer · EPC · Installer portals",
        tags: ["Enterprise SaaS", "Design System", "UI/UX/IA/CI"],
        description:
          "Unified three fragmented portals (Consumer, EPC, Installer) into one Solar Suite. Built the design system from scratch, sat with solar engineers to learn the domain, and shipped end-to-end across web and mobile.",
        cover: solarDash1,
        gallery: [solarDash1, solarDash2, inputSystem, locationPicker, stringing],
        stats: [
          { value: "30%", label: "Faster task completion" },
          { value: "3", label: "Portals unified" },
          { value: "30k+", label: "Active users" },
        ],
        featuredCaseStudy: true,
        caseStudyHref: "/case/terranxt",
      }, */
    {
      slug: "scada-portal",
      name: "pvNXT SCADA Web App",
      company: "Terranxt · 2025",
      role: "Real-time solar plant operations",
      tags: ["O&M Dashboard", "Work Orders", "Alert System"],
      description: "Designed a market-first centralized SCADA platform, analyzing competitor gaps and user needs.",
      cover: scada,
      gallery: [scada, scada, scada],
      stats: [
        { value: "20+", label: "EPC partners" },
        { value: "~30%", label: "Fewer tracking calls" },
        { value: "20+", label: "Screens designed" },
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
      company: "Terranxt · 2024",
      role: "Solar journey in your pocket",
      tags: ["B2C Self-Serve", "Android"],
      description:
        "A self-serve solar app for homeowners to estimate rooftop feasibility, understand cost, raise requests, and track installation progress without depending on calls or WhatsApp.  ",
      cover: consumerMobile,
      gallery: [consumerMobile, consumerMobile, consumerMobile],
      stats: [
        { value: "10+", label: "Downloads" },
        { value: "4.6★", label: "Play Store" },
        { value: "iOS+And", label: "Cross-platform" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "The solar journey for homeowners was confusing, slow, and lacked transparency.",
        },
        {
          label: "Action",
          text: "Designed an intuitive mobile app that lets homeowners estimate costs, check ROI, quote generation, and real-time installation tracking.",
        },
        {
          label: "Result",
          text: "Empowered consumers and streamlined the lead-to-installation funnel for the business and generating warm leads for the EPC team.",
        },
      ],
      link: "https://play.google.com/store/apps/details?id=com.PvNXT&pcampaignid=web_share",
    },
    {
      slug: "spade",
      name: "Spade — GIS Satellite Platform",
      company: "Suhora · 2023",
      role: "Archive imagery, live tasking, and satellite data procurement",
      tags: ["B2B Procurement", "E-commerce", "Satellite Imagery"],
      description:
        "Designed India's first self-serve platform for government agencies to purchase satellite imagery. Reduced a tedious 3-week procurement process into a fast 3-day flow with instant archive downloads.",
      cover: sarCart,
      gallery: [sarCart, sarCart, sarCart],
      stats: [
        { value: "Gov+Ent", label: "Customers" },
        { value: "Raster", label: "Data layers" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "The process for government agencies to purchase satellite imagery was a 2-3 week ordeal.",
        },
        {
          label: "Action:",
          text: "Designed 'Spade', India's first platform for satellite imagery marketplace where agencies can discover, preview, purchase, and download archive/new imagery.",
        },
        {
          label: "Result",
          text: "Reducing procurement timelines from weeks to just 2-3 days which improves decision-making and operational efficiency by creating a new standard for the industry.",
        },
      ],
      link: "https://spade.suhora.com",
    },
    {
      slug: "iide",
      name: "IIDE — Learning & Marketing",
      company: "IIDE · 2021",
      role: "Lead generation sites and learning platforms",
      tags: ["EdTech", "Redesign", "CRO"],
      description:
        "Led the post-COVID redesign of core marketing pages. Engineered dynamic WordPress UI components to automate course deadlines, boosting yearly lead generation by 16%.",
      cover: iideCourse,
      gallery: [iideCourse, iideCourse, iideCourse],
      stats: [
        { value: "+16%", label: "Lead Generation" },
        { value: "3+", label: "Intern Mentored" },
        { value: "4+", label: "Portals managed" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "Existing WordPress lead pages needed a higher conversion rate.",
        },
        {
          label: "Action:",
          text: "Led a team of 3+ interns for day to day tasks, redesigned high-intent course landing pages, built reusable WordPress components, automated deadline updates. Implemented complex jQuery solutions for better UX.",
        },
        {
          label: "Result",
          text: "Achieved a 16% YoY increase in lead generation and significantly reduced the page editing time for the marketing team.",
        },
      ],
      link: "https://iide.co/bachelors-in-digital-business-program/",
    },
    {
      slug: "dreamz",
      name: "Client Websites — Freelance",
      company: "DMS · 2017",
      role: "Retaggio · SRM Films · MMD Cafe",
      tags: ["Web Design", "Branding", "Multiple Brands"],
      hyper: ["Web Design", "Branding", "Multiple Brands"],
      description: `Designed and developed fast, clean websites for manufacturing, SaaS, automotive, and consulting brands with a focus on clarity, trust, and lead generation.`,
      cover: rettagio,
      gallery: [rettagio, rettagio, rettagio],
      stats: [
        { value: "25+", label: "Website Shipped" },
        { value: "10+", label: "Industries" },
      ],
      highlights: [
        {
          /* label: "Problem:", */
          text: "Before SaaS platforms, there were businesses that needed a proper web presence — fast. I built websites for a cookware manufacturer, jewellery manufacturer, satellite tech companies, film production houses, and cafes.",
        },
        {
          /* label: "Problem:", */
          text: "Each one had a different brief, a different audience, and a different definition of done. The common thread: responsive, clean, and actually representative of the brand.",
        },
        {
          /* label: "Problem:", */
          text: "Led each project from discovery to delivery — understanding client goals, competitive research, designing in Figma, building in WordPress or HTML/CSS, and handing off with proper documentation. Managed ₹10L+ worth of projects with consistent quality and timelines.",
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
      tags: ["Roles", "States", "Edge Cases", "Data Flow"],
      description: "",
      cover: scada,
      gallery: [],
      stats: [
        { value: "20+", label: "EPC partners" },
      ],
      highlights: [
        {
          label: "Problem:",
          text: "My first step was to map the entire messy, manual process on a FigJam board with actual EPCs.  ",
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
  ],

  about: {
    heading: "The cool guy behind",
    headingAccent: "the pixels",
    paragraphs: [
      "I’m a Lead UI/UX designer with ~10 years of experience, but my role often goes beyond Figma. Most of my work lives where things are messy by default — owning problems end-to-end, complex workflows, multiple roles, connecting the dots between business, technology, and user experience.",
      "I don’t chase trends. If a design reduces confusion, saves time or makes someone’s job easier, that’s a win.",
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
        year: "2019 — 2020",
        company: "Skymap Global",
        role: "Software Engineer (UI-Oriented)",
        desc: "Designed GIS visualisation tools used by gov & enterprise. Translated raster data into clean dashboards alongside QGIS / ERDAS engineers.",
      },
      {
        year: "2016 — 2018",
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
    sub: "Open to Senior / Lead UX roles, freelance case studies, or got something complex? Let’s simplify it.",
    email: "rmcool26@gmail.com",
    phone: "+91 9719499553",
    linkedin: "https://www.linkedin.com/in/rmcool26/",
    whatsapp: "https://wa.me/919719499553?text=Hi%20Rajat%2C%20saw%20your%20portfolio%20—",
    resume: "/RajatMishra_Resume.pdf",
  },
};

export type Project = (typeof content.projects)[number];
export type FeaturedProject = typeof content.featured.hero;
