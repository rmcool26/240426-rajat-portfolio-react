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
    title: "I solve complex problems through design & systems thinking",
    sub: "UI/UX Lead with 9+ years turning manual chaos into automated clarity. Currently leading design at Terranxt — joined as #3, scaled the team to 12.",
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
    sub: "From founder's rambling on a call to developer pushing to prod — here's how I turn ambiguity into shipped product.",
    steps: [
      { title: "Discover", desc: "Stakeholder interviews, user research, competitive teardowns.", emoji: "🔍" },
      { title: "Validate", desc: "Wireframes, prototypes, usability tests with real users.", emoji: "🧪" },
      { title: "Design", desc: "High-fidelity UI, design systems, motion specs.", emoji: "🎨" },
      { title: "Deliver", desc: "Dev handoff, QA partnership, design tickets I write myself.", emoji: "🚢" },
      { title: "Scale", desc: "Measure, iterate, mentor the team to ship faster.", emoji: "📈" },
    ],
  },

  featured: {
    heading: "Featured Work",
    sub: "Real products. Real users. Real metrics.",
    hero: {
      slug: "terranxt",
      name: "Terranxt Solar Suite",
      company: "pvNXT · 2023 — Now",
      role: "UI/UX Design Lead",
      tags: ["Enterprise SaaS", "Design System", "Mobile + Web"],
      description:
        "Unified three fragmented portals (Consumer, EPC, Installer) into a single Solar Suite. Built the design system from scratch, sat with solar engineers to learn the domain, and shipped end-to-end across web and mobile.",
      cover: solarDash1,
      stats: [
        { value: "30k+", label: "Active Users" },
        { value: "100+", label: "EPC Partners" },
        { value: "30%", label: "Faster Task Completion" },
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

    {
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
      },
      {
        slug: "consumer-mobile",
        name: "pvNXT Consumer Mobile App",
        company: "Terranxt · 2024",
        role: "Solar journey in your pocket",
        tags: ["Mobile", "Android"],
        description:
          "Solar consumers wanted real-time generation data without opening a laptop. Designed live generation, savings tracker, service requests, and a location-aware onboarding.",
        cover: locationPicker,
        gallery: [locationPicker, sarCart, solarDash2],
        stats: [
          { value: "30k+", label: "Downloads" },
          { value: "4.6★", label: "Play Store" },
          { value: "iOS+And", label: "Cross-platform" },
        ],
      },
      {
        slug: "scada-portal",
        name: "Terranxt SCADA Monitoring",
        company: "Terranxt · 2025",
        role: "Real-time solar plant operations",
        tags: ["B2B", "Workflow", "Data viz"],
        description:
          "EPC partners juggled spreadsheets and WhatsApp to track installations. Mapped the full journey, designed a single workflow board with milestone gating, and automated handoffs.",
        cover: terranxtEpc,
        gallery: [terranxtEpc, stringing, inputSystem],
        stats: [
          { value: "100+", label: "EPC partners" },
          { value: "~50%", label: "Fewer tracking calls" },
        ],
      },
      {
        slug: "spade",
        name: "Spade — GIS Satellite Platform",
        company: "Suhora · 2023",
        role: "SAR imagery, AOI selection, ordering",
        tags: ["GIS", "Data viz", "Enterprise"],
        description:
          "Designed satellite imagery + raster data tools used by government and enterprise teams. Translated dense GIS workflows into clean dashboards built alongside QGIS / ERDAS engineers.",
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
        tags: ["EdTech", "Marketing", "CRO"],
        description:
          "High traffic, low course enrolment — the site looked good but didn't convert. Rewrote IA, redesigned course pages, A/B tested CTAs, partnered with growth on every section.",
        cover: iide,
        gallery: [iide],
        stats: [
          { value: "+40%", label: "Engagement" },
          { value: "↑", label: "Qualified leads" },
        ],
      },
      {
        slug: "dreamz",
        name: "Client Websites — Freelance",
        company: "Dreamz Merchandising Solutions · 2017",
        role: "Retaggio · Suhora · SRM Films · Make My Day Cafe",
        tags: ["Web", "Branding", "Freelance"],
        description:
          "Shipped 20+ client websites and a few mobile apps across SMB, hospitality, and creative agencies. Where I learned 'pixel-perfect' is a design choice, not a personality.",
        cover: iide,
        gallery: [iide, terranxtEpc],
        stats: [
          { value: "20+", label: "Websites shipped" },
          { value: "5+", label: "Industries" },
        ],
      },
  ],

  about: {
    heading: "The cool guy behind",
    headingAccent: "the pixels",
    paragraphs: [
      "I'm a UI/UX Lead with 9+ years across SaaS, mobile apps, GIS, EdTech, and enterprise tools. I'm comfortable from FigJam → Figma → HTML/CSS and I work best in ambiguity — early-stage products, complex domains, teams where design needs to do more than make things pretty.",
      "I write enough HTML/CSS to keep my Figma honest, and enough QA tickets to keep my devs happy. Built the Terranxt team from solo to 12.",
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
      "User Research & Usability Testing",
      "Information Architecture & User Flows",
      "Wireframing & Prototyping (Figma)",
      "Conversion Rate Optimization (CRO)",
      "Developer Handoff & Design QA",
      "Stakeholder Management & Team Leadership",
    ],
    designTools: ["Figma", "FigJam", "Miro", "Notion", "Jira", "Trello", "Confluence"],
    techTools: ["HTML", "CSS", "Tailwind", "WordPress",  "QGIS", "ERDAS", "Google Analytics", "Google Workspace"],
    collaboration: [
      "Cross-functional teams",
      "Stakeholder management",
      "Dev handoff",
      "QA partnership",
      "Design mentoring",
    ],
  },

  contact: {
    heading: "Let's Build Something Cool Together",
    sub: "Open to Senior / Lead UX roles, freelance case studies, or just a chai chat about design systems.",
    email: "rmcool26@gmail.com",
    phone: "+91 9719499553",
    linkedin: "https://www.linkedin.com/in/rajat-mishra-design",
    whatsapp: "https://wa.me/919719499553?text=Hi%20Rajat%2C%20saw%20your%20portfolio%20—",
    resume: "/RajatMishra_Resume.pdf",
  },
};

export type Project = (typeof content.projects)[number];
export type FeaturedProject = typeof content.featured.hero;
