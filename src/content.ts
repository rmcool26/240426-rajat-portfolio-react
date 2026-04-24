// ============================================================
// 📝 EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// All text, links, and project data live here.
// Images live in src/assets/ — replace files with same names to swap.
// ============================================================

import profile from "@/assets/profile.jpeg";
import terranxtEpc from "@/assets/projects/terranxt-epc.png";
import solarDash1 from "@/assets/projects/solar-dash-1.png";
import solarDash2 from "@/assets/projects/solar-dash-2.png";
import locationPicker from "@/assets/projects/location-picker.png";
import stringing from "@/assets/projects/stringing.png";
import inputSystem from "@/assets/projects/input-system.png";
import iide from "@/assets/projects/iide.png";
import sarCart from "@/assets/projects/sar-cart.png";

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
    title: "I turn messy workflows into products that actually work",
    sub: "Lead UI/UX Designer & product builder. From solar EPC platforms and SCADA dashboards to GIS tools and learning products, I design end‑to‑end systems with almost zero learning curve for first‑time users.",
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
    sub: "Not a textbook 'Double Diamond'. Here is my system for turning manual chaos into scalable products.",
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
    sub: "Real products. Real users. Measurable business impact.",
    hero: {
      slug: "terranxt",
      name: "pvNXT Solar Suite",
      company: "Terranxt · 2022 — Now",
      role: "UI/UX Design Lead",
      tags: ["Enterprise SaaS", "Design System", "Design Lead"],
      description:
        "Replaced a chaotic 2-3 month manual process (PVsyst, AutoCAD, WhatsApp) with one unified ecosystem. Designed consumer, EPC, and installer portals from scratch, giving real-time visibility and slashing operations time down to 1-2 weeks.",
      cover: solarDash1,
      stats: [
        { value: "10k+", label: "Active Users" },
        { value: "15-min", label: "Roof Analysis" },
        { value: "Zero-Chaos", label: "Execution" },
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
        tags: ["B2B", "Work Order", "Alert System"],
        description:
          "Designed a first-of-its-kind SCADA dashboard. It eliminates manual plant monitoring for O&M managers with smart alerts, faulty string detection, and automated work-order assignments in one place.",
        cover: terranxtEpc,
        gallery: [terranxtEpc, stringing, inputSystem],
        stats: [
          { value: "20+", label: "EPC partners" },
          { value: "~30%", label: "Fewer tracking calls" },
        ],
      },
      {
        slug: "consumer-mobile",
        name: "pvNXT Consumer Mobile App",
        company: "Terranxt · 2024",
        role: "Solar journey in your pocket",
        tags: ["B2C Self-Serve", "Android"],
        description:
          "Designed an intuitive mobile app that lets homeowners estimate costs, check ROI, and track their solar installation journey independently, generating warm leads for the EPC team.",
        cover: locationPicker,
        gallery: [locationPicker, sarCart, solarDash2],
        stats: [
          { value: "10k+", label: "Downloads" },
          { value: "4.6★", label: "Play Store" },
          { value: "iOS+And", label: "Cross-platform" },
        ],
      },
      {
        slug: "spade",
        name: "Spade — GIS Satellite Platform",
        company: "Suhora · 2023",
        role: "Archieve imagery, AOI selection, ordering",
        tags: ["B2B Procurement", "E-commerce", "Satellite Imagery"],
        description:
          "Designed India's first self-serve platform for government agencies to purchase satellite imagery. Reduced a tedious 3-week procurement process into a fast 3-day flow with instant archive downloads.",
        cover: stringing,
        gallery: [stringing, inputSystem, terranxtEpc],
        stats: [
          { value: "Gov+Ent", label: "Customers" },
          { value: "Raster", label: "Data layers" },
        ],
      },
      {
        slug: "iide",
        name: "IIDE — Learning & Marketing",
        company: "IIDE · 2021",
        role: "Lead generation site pages redesign",
        tags: ["EdTech", "Redesign", "CRO"],
        description:
          "Led the post-COVID redesign of core marketing pages. Engineered dynamic WordPress UI components to automate course deadlines, boosting yearly lead generation by 16%.",
        cover: iide,
        gallery: [iide],
        stats: [
          { value: "+16%", label: "Lead Generation" },
          { value: "3+", label: "Intern Mentored" },
        ],
      },
      {
        slug: "dreamz",
        name: "Client Websites — Freelance",
        company: "Dreamz Merchandising Solutions · 2017",
        role: "Retaggio · Suhora · SRM Films · Make My Day Cafe",
        tags: ["Web Design", "Branding", "Multiple Brands"],
        description:
          "Designed and shipped conversion-focused marketing sites across manufacturing, geospatial, and automotive industries (Retaggio, Suhora, DG Car Studio).",
        cover: iide,
        gallery: [iide, terranxtEpc],
        stats: [
          { value: "20+", label: "Website Shipped" },
          { value: "10+", label: "Industries" },
        ],
      },
  ],

  about: {
    heading: "The cool guy behind",
    headingAccent: "the pixels",
    paragraphs: [
      "I’m a Lead UI/UX designer with almost a decade in SaaS, enterprise solar, GIS and EdTech. Most of my work lives where things are messy by default — complex workflows, multiple roles, and lots of moving parts. My job is to make that usable using FigJam → Figma → HTML/CSS",
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
    coreSkills: [
      "UX Strategy & Product Thinking",
      "Complex Workflow Optimization",
      "Information Architecture & User Flows",
      /* "Rapid Wireframing & Prototyping", */
      "Conversion Rate Optimization (CRO)",
      "Developer Handoff & Design QA",
      "Design Mentorship & Leadership",
    ],
    designTools: ["Figma", "FigJam", "Miro", "Notion", "Jira", "Trello", "Confluence"],
    techTools: ["Tailwind", "HTML/CSS", "WordPress",  "QGIS / ERDAS", "Jira/Trello", "Google Analytics"],
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
