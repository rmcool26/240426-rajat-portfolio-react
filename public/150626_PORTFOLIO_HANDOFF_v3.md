# 🧾 PROJECT HANDOFF (v3 — FINAL, includes full UI/Design System) — Rajat Mishra Portfolio (RMCOOL26)

> **Purpose:** Give this file + the project ZIP to any AI or developer for a **redesign**. It documents (1) exactly what is live on screen today on both pages, (2) every piece of real content/copy and where it lives in code, (3) the special interactive features that give the site its personality, (4) the **complete current visual design system** — colors, typography, spacing, buttons, shadows, motion/animation — across all THREE design systems that currently exist in this codebase, and (5) everything that's built but unused, with known issues flagged.
>
> **v3 changelog:** v2 covered content (Parts A–E) accurately but Part F ("Visual/Brand Identity") was only a high-level summary. v3 replaces it with a full design-token reference (exact HSL values, typography scale per element, spacing/radius system, exact button specs, exact animation/spring configs) and adds **Part L**, new findings from a final cross-check: a **third design system** found inside the standalone resume HTML (different purple, different type system), extra bio/skills/education content not present anywhere else, a live website URL not referenced on the site itself, and a couple of small data discrepancies between the resume and the site.

**Owner:** Rajat Mishra (RMCOOL26) · UI/UX Lead & Systems Designer
**Repo:** https://github.com/rmcool26/130626-rmcool26-portfolio.git

---

# PART A — LIVE WALKTHROUGH: Homepage (`/`)

Single scrolling page. Sections in render order, each annotated with **where its content lives in code**.

### A1. Nav (sticky, floating pill)
- Logo: **"RM" (indigo) + "COOL" (dark) + "26" (grey)** → hardcoded text in `Nav.tsx` (not from `content.ts`)
- Links: **About · Work · Experience** → `content.nav` (4th item "Contact" also in array but render only shows what's in `content.nav`; "Home" entry is commented out)
- Right side: Theme toggle (sun/moon) + **"Download Resume"** button → `content.contact.resume` (`/RajatMishra_Resume.pdf`)
- *Source:* `Nav.tsx` + `content.nav` + `content.contact.resume`

### A2. Hero (id="top")
- Pill tooltip trigger: **"Pragmatic Product & UX Designer"** (hover/click reveals: *"I design clear, practical systems that balance user needs, business goals, and technical constraints."*) → text hardcoded in `Hero.tsx`, but visually styled like `hero.eyebrow`
- Headline: **"The cool guy who `makes messy` workflows work"** (the words "makes messy" highlighted in primary/indigo) → partly hardcoded in `Hero.tsx` ("The cool guy who" / "workflows work" are literal strings; only the middle "makes messy" + sub line below come from data)
- Sub: **"Ideas to apps. Audits to fixes. I ship products that simplify real work."** → `content.hero.sub`
- Buttons: **"View My Work →"** (`#work`) and **"Let's Talk"** (`#contact`) → `content.hero.primaryCta` / `secondaryCta` (rendered via `MagneticButton`)
- Center: circular profile photo → `content.hero.profileImage` (`rmcool26-profile.svg`)
- 5 floating stat badges around photo → `content.hero.badges`:
  1. 🛠️ **"10+ Tools Mastered"** — "Figjam → Jira"
  2. 🚀 **"20+ Live Products"** — "Real users & results"
  3. 👋 **"Hi, I'm Rajat Mishra"** — "Shipping since 2016"
  4. ✨ **"50+ Projects"** — "Delivered · Audited"
  5. 👥 **"2→12"** — "Team Scaled"
- *Source:* `Hero.tsx` + `StatBadges.tsx` + `content.hero`

### A3. About (id="about")
- Eyebrow: **"About"** → `content.about.eyebrow`
- Heading: **"Not just a designer. `A finisher.`"** (accent on "A finisher.") → `content.about.heading` + `headingAccent`
- 3 paragraphs (work-where-design-meets-reality / 10,000+ designers / decade of building) → `content.about.paragraphs`
- Stat strip: **9+ Years shipping · 20+ Live products · 4 Designers Mentored · 6 Developers Led** → `content.about.stats`
- 4 highlight cards: **"Systems, not screens"** / **"I speak dev"** / **"Numbers > opinions"** / **"Whiteboard → live app"** (each with 1-line subtitle) → `content.about.highlights`
- *Source:* `About.tsx` + `content.about`

### A4. Featured Work (id="work")
Wrapper section. Eyebrow **"Selected Work"** (hardcoded in `FeaturedWork.tsx`) → heading **"Featured Work"** + sub **"Case studies, live projects, and the measurable impact I've delivered."** → these two come from `content.featured.heading` / `content.featured.sub` (top-level fields — ⚠️ note: the giant `content.featured.hero` object is **separate and NOT used**, see Part I).

**A4.1 — Case Study Cards** (`CaseStudyCards.tsx`, eyebrow **"Case Studies"** hardcoded, data = `content.caseStudies`):

1. **pvNXT Solar Suite** — badge **"Live Product · pvNXT Solar Suite"** (green dot)
   - Headline: **"From spreadsheets to a full solar OS."**
   - Body: *"Solar EPCs ran on WhatsApp and Excel. I built the system that replaced all of it — end to end. EPC portal. Consumer portal. Installer portal. Web + mobile. One suite. Actually used by real people."*
   - Cover image: `rmcool26-pvNXT-suite-675.svg` (the laptop/tablet/phone/FigJam collage)
   - Stats: **20+ EPCs Onboarded · 100+ Users · 3+ Portals · IIT Delhi Incubated At**
   - Button: **"See the case study →"** → links to `/case/terranxt` (Part B)

2. **SCADA Monitoring** — badge **"Design in Progress · SCADA Monitoring"** (amber dot)
   - Headline: **"One dashboard. Every plant. Every alert."**
   - Body: *"O&M managers juggled calls, spreadsheets, and site visits just to know if a plant was running. This fixes that — real-time monitoring, work orders, and field ops. Web + mobile. Multiple roles."*
   - Cover image: `rmcool26-pvNXT-sacada-alert.svg` (tablet dashboard mockup)
   - Stats: **5 Roles Covered · 50+ Screens Designed · 3+ Portals · Web + mobile Cross Platform**
   - Button (dashed, non-clickable): **"Case study coming soon"**

**A4.2 — Other Work** (`OtherWork.tsx`, eyebrow **"Other Work"** hardcoded, data = `content.projects`, an accordion list — **first item open by default**):

1. **pvNXT Field App** *(open by default)* — Terranxt · Beta Release
   - Subtitle: "Internal EPC field tool → site-to-design in one visit"
   - Tags shown: Mobile · Field Ops · Internal Tool · Lead Capture
   - Problem / Action / Result text (3 bullets) — full text in Part C
   - Animated stats (counts up from 0): **1 Visit · Same-day · No** (Per Lead / Design Handoff / Paper Forms)
   - Image panel (right side, 3D tilt-on-hover): `rmcool26-pvNXT-epc-fieldapp.svg` (a collage graphic of multiple phone mockups)
   - Bottom: tag pills + **"In Use Internally"** badge (no external link)

2. **pvNXT Consumer Mobile App** *(collapsed)* — Terranxt · Beta Release — "Simplifying the solar decision journey" — tags: B2C Self-Serve, Mobile UI/UX

3. **Spade — Geo-Intelligence Marketplace** *(collapsed)* — Suhora · 2023 — "India's leading satellite imagery marketplace" — tags: B2B Procurement, E-commerce, Satellite Imagery

4. **IIDE — Learning & Marketing** *(collapsed)* — IIDE · 2021 — "Boosting course enrollment via CRO" — tags: EdTech, Redesign, Product Strategy, Frontend Logic

5. **DMS - Web Design & Development** *(collapsed)* — Dreamz Merchandising Solutions · Early Career Era — "Built custom solutions for Multi-industry clients" — tags: Web Design, Branding, Multiple Brands

Each, when expanded, shows: Problem/Action/Result bullets → animated stat numbers (`CountUp` component) → tag pills → "Visit Site ↗" link (or "In Use Internally" if no link) → cover image with tilt effect. **Full Problem/Action/Result text + stats + links for all 5 are in Part C.**

- *Source:* `FeaturedWork.tsx` + `CaseStudyCards.tsx` + `OtherWork.tsx` + `content.featured.{heading,sub}` + `content.caseStudies` + `content.projects`

### A5. Design Process — "How I Ship"
- Eyebrow: **"Design Process"** (hardcoded) → Heading **"How I Ship"** + sub **"No theory. No Fluff. No double diamonds. Building systems that scale and teams that ship."** → `content.process.heading` / `.sub`
- 4 numbered steps with emoji + connecting line that fills on scroll:
  1. 🔍 **Decode** — "Talk to real people. Understand the actual mess first."
  2. 🎨 **Craft** — "Blueprinting systems that make technical sense, not just pretty screens."
  3. 🚢 **Deliver** — "I don't throw files over the wall. I align with devs until it works."
  4. 📈 **Launch** — "Scale, track data, mentor the team, and iterate for better results."
- *Source:* `DesignProcess.tsx` + `content.process`

### A6. Experience & Stack (id="experience")
- Eyebrow **"Experience & Stack"** → Heading **"Where I've shipped `and how.`"** → `content.experience.{eyebrow,heading,headingAccent}`
- **Left — Career timeline** (4 jobs, with year/role/company/description):
  1. 2022 — Now · Terranxt (pvNXT) · UI/UX Design Lead
  2. 2021 — 2022 · IIDE · Executive Web Designer
  3. 2019 — 2021 · Skymap Global · Software Engineer (UI-Oriented)
  4. 2016 — 2019 · Dreamz Merchandising Solutions · Junior Web Designer & Developer
  *(Full descriptions in Part C2)*
- **Right — 3 cards only** (NOT 4 — Education and Hobbies cards exist in code but are **commented out**, not rendered):
  1. **"Currently"** card (with pulsing "Live" badge) — UI/UX Design Lead, Terranxt · Hybrid, "Open to Senior / Lead roles"
  2. **"The Stack"** — Design: Figma, FigJam, Miro, Notion / Build: Tailwind, HTML/CSS, WordPress / Data & Ops: Google Analytics, Jira, QGIS / ERDAS
  3. **"Recognition"** — "My designed product Incubated at → IIT Delhi" / "Founding product team → Terranxt · 2023"
- *Source:* `Experience.tsx` + `content.experience` (note: `experience.education` and `experience.hobbies` fields exist in data but their JSX blocks are commented out)

### A7. Contact (id="contact")
- Heading: **"Let's Build Something `Cool Together`"** → `content.contact.heading` + `headingAccent`
- Sub: **"Open to work, freelance case studies, or got something complex? Let's simplify it."** → `content.contact.sub`
- 3 buttons: **"Email Me"** (primary, indigo) · **"LinkedIn"** (dark/secondary) · **"Resume"** (ghost/outline) → `content.contact.{email,linkedin,resume}`
- Closing line: **"Or just say hi at rmcool26@gmail.com — I actually reply."**
- *Source:* `Contact.tsx` + `content.contact`

### A8. Footer
- **"RMCOOL26 · © 2026 Rajat Mishra"**
- **"Designed & coded with ❤️ by Rajat Mishra from India"**
- Links: **LinkedIn · Email · Back to top ↑**
- *Source:* `Footer.tsx` + `content.contact` + `content.meta`

### A9. Global / persistent elements (not a "section", visible everywhere on `/`)
- Custom cursor (desktop) — see Part E
- Top scroll-progress bar (indigo, 2px) — see Part E
- Mobile sticky bottom bar: **"Email Me"** + **"LinkedIn"** buttons (mobile only) → `MobileRecruiterBar.tsx` + `content.contact`

---

# PART B — LIVE WALKTHROUGH: Case Study Page (`/case/terranxt`)

> **CRITICAL:** This entire page is **one 1065-line component** (`src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx`). **Every word of copy below is hardcoded directly in this file as JSX/strings — none of it comes from `content.ts`.** It also uses its **own visual system** (see Part F.7), different from the homepage's lavender/indigo tokens: flat dark (`#111111` / `#0D0D0D` / `#0A0A0A`), light grey (`#F5F5F7` / `#F8F8F8`), and white sections, with `indigo-400/500/600` accents and `neutral-*` greys.

Sections alternate dark/light/grey for rhythm. A **sticky right-side Table of Contents** (desktop only, `lg:block`) tracks scroll position and highlights the active section — 8 numbered items (01–08): Overview · The Problem · The System · My Role · How I Work · The Work · Trade-offs · Outcome.

### B0. Page-level
- "← Back to portfolio" link → `/`
- `Cursor`, `ScrollProgress`, and `Footer` (same shared components as homepage) are also rendered on this page
- `Contact` component is imported but **commented out** — this page has **no contact form/section**
- Page force-scrolls to top on mount (so deep-linking always lands on Overview)

### B1. Hero (`bg-[#0D0D0D]`, id="hero")
- Eyebrow: **"Case Study · UI/UX Design Lead · Terranxt · 2022 — Now"** (indigo-400)
- H1: **"pvNXT Solar Suite"**
- Subhead (large): **"Manual solar operations, turned into a live product ecosystem incubated at IIT Delhi."**
- Tagline: **"Enterprise SaaS · 3 web portals · 2 mobile apps · Live in production."**
- 4-stat impact strip (border-top divider):
  - **5+** — EPCs onboarded
  - **50+** — Users enrolled
  - **2–3 wks** — Current project cycle
  - **IIT Delhi** — FITT incubated

### B2. The Problem (`bg-[#F5F5F7]`, id="before")
- Eyebrow: **"The Problem"**
- H2: **"Before pvNXT, running a solar EPC project looked like this."**
- Left column — 5 bullet points:
  - Proposals stitched across WhatsApp and Excel
  - Site analysis split between AutoCAD, PVsyst and spreadsheets
  - Installer updates came through calls, photos and voice notes
  - No single place to see status, owner or blocker for a project
  - There was no product. No team. No process. Just the problem.
- Right column — big stat: **"2–3 mo"** / "Average project cycle"
- Closing statement (large, semibold): **"A 3-week job was taking 2–3 months. Manual. Invisible. Broken. Expensive."** followed by (muted): **"I joined as employee #2 to turn that chaos into a product."**

### B3. The System (`bg-white`, id="system")
- Eyebrow: **"The System"**
- H2 (centered): **"3 portals. 2 apps. 1 connected reality."**
- Sub (centered): **"Not one app. A full ecosystem where every role sees exactly what they need, and nothing they don't."**
- 3 portal cards (icon + name + platform tag + 4 bullet checklist each):
  1. **EPC Portal** (Web) — icon: Briefcase
     - Leads & proposals · RFP bidding · Installer assignment · Project + O&M tracking
  2. **Consumer Portal** (Web + Mobile) — icon: Users
     - Solar feasibility · ROI calculator · Live install tracking · Plant monitoring
  3. **Installer Portal** (Web + Mobile) — icon: HardHat
     - Site assignment · Rooftop analysis · Daily progress · Work orders & status
- Closing line (center, icon = Network): **"Everything connected. Real-time. Role-based."**
- Small italic note below: **"EPC mobile app is currently in design."**

### B4. My Role (`bg-[#111111]`, id="role")
- Eyebrow (muted/grey): **"My Role"**
- H2: **"I was employee #2."** / (grey line) **"No design team. No system. No process."**
- Sub: **"I didn't just design screens. I owned the path to shipping."**
- 6 checklist chips (2-column grid, each with a checkmark icon):
  1. Stakeholder research with real EPCs
  2. Full UX architecture across 5 products
  3. Design system from scratch, used by devs daily
  4. Annotated dev handoffs, flow-by-flow
  5. Hired and led a 5-person dev squad
  6. Live booth demos at IIT Delhi FITT to investors
- Closing (large, bold, white): **"From first sketch to final ship — I owned it."**

### B5. How I Work (`bg-white`, id="process")
- Eyebrow: **"How I Work"**
- H2: **"Whiteboard → Working product, in 4 steps."**
- 4 step cards (large faded step-number "01–04" in background, hover lift effect):
  1. **Decode** — "Sat with real EPCs. Walked through their actual work. Mapped every manual step on FigJam. Pain points became the product brief."
  2. **Architect** — "Mid-fidelity first. Always. Mapped roles, permissions, data flow and edge cases before touching hi-fi. No pixel-pushing until the system made sense."
  3. **Build with devs** — "Annotated Figma handoff — flows, edge states, dev-ready components. Sat with developers till every screen made sense to them."
  4. **Ship & scale** — "QA, iteration, edge cases. Then scaled it to SCADA monitoring with one suite, multiple roles."

> ⚠️ Note: These 4 steps (Decode/Architect/Build with devs/Ship & scale) are **different text from** the homepage's "How I Ship" steps (Decode/Craft/Deliver/Launch from `content.process`). Two separate 4-step narratives exist — intentional or not, flag for the owner.

### B6. The Work (`bg-[#F8F8F8]`, id="screens") — **interactive tabbed section with sticky header**
- Sticky header bar (becomes sticky/blurred on scroll): eyebrow **"The Work"** + (desktop only, italic, with sparkle icon) **"The cool guy behind the pixels."**
- Underline-style tab strip, 4 tabs (each shows a Monitor/Smartphone icon + name + platform tag):
  1. **EPC Dashboard** (Web) — *default active tab*
  2. **Proposal Report** (PDF)
  3. **Consumer Portal** (Web + App)
  4. **Installer App** (Web + App)
  *(A 5th tab "SCADA Monitoring" exists in code but is commented out/disabled)*

For each tab, the content area shows: a large headline, a body paragraph, 4 chip tags, a right-side "What this replaced" card (with a rose-colored note), and **one full image below (opens in the ZoomableImage lightbox on click)**.

**Tab 1 — EPC Dashboard:**
- Headline: **"One screen replaces 4 tools."**
- Body: *"EPC teams manage their entire pipeline here — leads, proposals, RFP bidding, installer assignment, project tracking, and O&M. Before this, all of it lived across WhatsApp, Excel, and phone calls."*
- Chips: Lead-to-handover pipeline · Installer assignment & tracking · O&M dashboard + alerts · Real-time project visibility
- "What this replaced": **"WhatsApp + Excel + AutoCAD + Phone calls"** — note: *"Manual. Invisible. Broken."*
- Image: `rmcool26-pvNXT-epc-all.svg`

**Tab 2 — Proposal Report:**
- Headline: **"A proposal Customer actually understand."**
- Body: *"EPCs generate this report from the portal after details site analysis. Customer didn't know what they were agreeing to so it explains the problem, roof potential, expected generation, cost, subsidy, savings and environmental impact in one clean PDF."*
- Chips: Consumer-ready proposal · Cost + subsidy clarity · Generation estimate · PDF + portal sharing
- "What this replaced": **"Excel cost sheet + Manual site images + WhatsApp forwards + Follow-up calls + The consumer still had one question: 'Kitna lagega, subsidy kitni milegi, aur fayda kya hoga?'"** — note: *"Manual. Confusing. Hard to trust."*
- Image: `rmcool26-pvNXT-epc-proposal.svg`

**Tab 3 — Consumer Portal:**
- Headline: **"The full solar journey, finally clear."**
- Body: *"From feasibility to live monitoring — built for homeowners who just want to know what's happening with their rooftop. No jargon, no spreadsheets, no calls to the EPC."*
- Chips: Solar feasibility check · ROI calculator · Live install tracking · Plant monitoring
- "What this replaced": **"Phone calls + PDF quotes + No visibility"** — note: *"Customers chasing updates."*
- Image: `rmcool26-pvNXT-consumer-all.svg`

**Tab 4 — Installer App:**
- Headline: **"Built for rooftops, not desks."**
- Body: *"Site assignment, rooftop analysis, daily progress capture. Designed for installers working in the sun with one hand on a ladder — large tap targets, offline-first, photo-led."*
- Chips: Site assignment · Rooftop analysis · Daily progress capture · Work orders & status
- "What this replaced": **"Paper checklists + WhatsApp photos"** — note: *"Lost in chat threads."*
- Image: `rmcool26-pvNXT-installer-all.svg`

- **Bottom stats strip** (same for all tabs): **3 Web portals · 2 Mobile apps · 1 Proposal flow · 5 Products shipped · 1 Connected system**

### B7. Trade-offs (`bg-white`, id="decisions")
- Eyebrow: **"Trade-offs"**
- H2: **"Two calls that changed the product."**
- 2 cards:
  1. **"Why role-based, not one-size-fits-all"** (icon: Layers)
     - Body: *"EPC, Installer, and Consumer all touch the same project. But they should never see each other's data."*
     - Result: **"One login. Three realities. Fewer support calls. Zero access confusion."**
  2. **"Why mid-fidelity first, always"** (icon: Wrench)
     - Body: *"A polished UI in Week 1 looks great and gets the wrong feedback. 'This flow doesn't match how we work' is easier to hear when you're looking at boxes — not beautiful screens."*
     - Result: **"Stakeholder validation before pixel-perfection. Every time."**

### B8. Outcome (`bg-[#0A0A0A]`, id="outcome")
- Eyebrow (muted): **"Outcome"**
- H2: **"From a FigJam board to a live product used by real solar companies every day."**
- 4-stat row (repeats Hero stats, one has a GraduationCap icon): **5+ EPCs onboarded · 50+ Users enrolled · 2–3 wks Down from 2–3 mo · IIT Delhi FITT incubated**
- Italic paragraph: *"We presented at IIT Delhi FITT with nothing but a Figma prototype and a real problem worth solving. Today, it's a live platform. Real companies. Real data. Real solar installations tracked end-to-end. That's the metric I care about."*
- Bold line: **"The cool guy behind `the pixels` that actually shipped."** (animated entrance)
- "Visit:" links → **Consumer** (`consumer.pvnxt.com`) · **EPC** (`epc.pvnxt.com`) · **Installer** (`installer.pvnxt.com`)

### B9. Next (`bg-white`, plain footer-style strip before the real Footer)
- "Next up →" / **"SCADA Solar Monitoring"** + badge **"Redesign in progress"**
- Button: **"← Back to all work"** → `/`

---

# PART C — Full Text for "Other Work" Accordion Items (Homepage A4.2)

1. **pvNXT Field App** — Terranxt · Beta Release · "Internal EPC field tool → site-to-design in one visit"
   - Problem: *"EPC team visited sites with pen, paper, and a phone camera. Design team got a WhatsApp dump and still needed a second visit to fill the gaps."*
   - Action: *"Built an internal mobile app for field EPCs for lead capture, roof survey, keepout marking, measurements, entry and termination points. Everything logged on-site, synced to the design team by end of day."*
   - Result: *"One visit. Full data. Design team gets a complete handoff — no calls, no re-visits, no guessing. Proposal out within 24 hours of site visit."*
   - Stats: 1 Visit (Per Lead) · Same-day (Design Handoff) · No (Paper Forms)
   - Tags: Mobile, Field Ops, Internal Tool, Lead Capture · No external link ("In Use Internally")

2. **pvNXT Consumer Mobile App** — Terranxt · Beta Release · "Simplifying the solar decision journey"
   - Description: *"A self-serve solar app for homeowners to estimate rooftop feasibility, understand cost, raise requests, and track installation progress without depending on calls or WhatsApp."*
   - Problem: *"Homeowners had no idea what solar would cost, when it will arrive, or who was tracking their order."*
   - Action: *"Built a mobile app — cost estimator, ROI calculator, quote flow, live installation tracker. Full journey, one app."*
   - Result: *"Consumers in control end-to-end. Generated high-quality, verified leads directly to the EPC team with fewer manual follow-ups."*
   - Stats: 10+ (Downloads) · 4.6★ (Play Store) · iOS+And (Live Beta)
   - Tags: B2C Self-Serve, Mobile UI/UX · Link: Play Store listing (`com.PvNXT`)

3. **Spade — Geo-Intelligence Marketplace** — Suhora · 2023 · "India's leading satellite imagery marketplace"
   - Description: *"Designed India's first self-serve platform for government agencies to purchase satellite imagery. Reduced a tedious 3-week procurement process into a fast 3-day flow with instant archive downloads."*
   - Problem: *"Buying satellite imagery for govt agencies took 2–3 weeks. Manual, slow, no single platform."*
   - Action: *"Designed the end-to-end platform — browse, preview, order, download. One flow replacing weeks of back-and-forth."*
   - Result: *"Procurement dropped from 2–3 weeks to 2–3 days, helping agencies move faster and creating a new standard for the industry."*
   - Stats: Govt + Ent (B2B Customers) · 2–3 days (Procurement)
   - Tags: B2B Procurement, E-commerce, Satellite Imagery · Link: `spade.suhora.com`

4. **IIDE — Learning & Marketing** — IIDE · 2021 · "Boosting course enrollment via CRO"
   - Description: *"Led the post-COVID redesign of core marketing pages. Engineered dynamic WordPress UI components to automate course deadlines, boosting yearly lead generation by 16%."*
   - Problem: *"Course and Marketing lead pages weren't converting. Good traffic, weak results."*
   - Action: *"Led a team of 3 juniors for day-to-day tasks to implement modular design systems and custom interactions that simplified the student journey. Redesigned high-intent course landing pages, built reusable WordPress components, automated deadline updates. Implemented complex jQuery solutions for better UX."*
   - Result: *"Drove a 16% increase in leads while reducing internal update time by ~30%."*
   - Stats: +16% (Lead Conversion) · 3 Person (Team Led) · 4+ (Portals managed)
   - Tags: EdTech, Redesign, Product Strategy, Frontend Logic · Link: `iide.co/bachelors-in-digital-business-program`

5. **DMS - Web Design & Development** — Dreamz Merchandising Solutions · Early Career Era · "Built custom solutions for Multi-industry clients"
   - Description: *"Designed and developed fast, clean websites for manufacturing, SaaS, automotive, and consulting brands with a focus on clarity, trust, and lead generation."*
   - Problem 1: *"Before SaaS platforms, small businesses needed a web presence but had no idea where to start or who to trust."*
   - Problem 2: *"Took each from zero → discovery, design, build, handoff. Cafes, film studios, manufacturers, satellite companies, real estate, and hospitality. Different brief every time. Same quality every time."*
   - Result: *"25+ websites shipped across 10+ industries. Some clients are still running the same sites. Few Clients: Retaggio Industries, SRM Films, MMD Cafe."*
   - Stats: 25+ (Website Shipped) · 10+ (Industries) · ₹10L+ (Managed Projects)
   - Tags: Web Design, Branding, Multiple Brands · Link: `retaggioindustries.com`

---

# PART C2 — Full Career Timeline Text (Homepage A6)

1. **2022 — Now · Terranxt (pvNXT) · UI/UX Design Lead** — "Joined as #2. Scaled team 2→12. Owned the full Solar Suite — EPC, Consumer, Installer + Mobile App. Built the pvNXT design system from zero."
2. **2021 — 2022 · IIDE · Executive Web Designer** — "+16% lead conversion via redesigning responsive course & marketing pages. Mentored 3 junior designers. Set up the team's first design QA ritual."
3. **2019 — 2021 · Skymap Global · Software Engineer (UI-Oriented)** — "Designed govt-grade web applications for land monitoring by working alongside SOI / ERDAS engineers. First experience shipping real apps used by govt field officers."
4. **2016 — 2019 · Dreamz Merchandising Solutions · Junior Web Designer & Developer** — "Shipped 20+ client sites. Learned 'pixel-perfect' is a choice, not a personality. Built a strong foundation in HTML/CSS, design principles, and client communication."

---

# PART D — Identity / Meta (used across both pages)

| Field | Value |
|---|---|
| Name | **Rajat Mishra** |
| Handle | RMCOOL26 |
| Role | UI/UX Lead · Systems Designer |
| Location | India (Mumbai 🇮🇳) |
| Email | `rmcool26@gmail.com` |
| Phone | `+91 9719499553` |
| LinkedIn | `https://www.linkedin.com/in/rmcool26/` |
| WhatsApp link | `https://wa.me/919719499553?text=...` |
| Resume | `/RajatMishra_Resume.pdf` (also `RajatMishra_Resume_2p.html` exists in repo) |
| **Live site URL** | `rmcool26.netlify.app` *(found inside the resume's contact row — NOT printed anywhere on the live site itself; see Part L)* |

---

# PART E — Special Interactive Features (the "signature" pieces — preserve or thoughtfully reinterpret)

1. **Custom Cursor** (`Cursor.tsx`) — replaces mouse on desktop; inner dot (12px, `bg-foreground`) + outer ring (36px, `border border-foreground/40`), both `mix-blend-mode: difference`. Springs: dot position `damping:28, stiffness:380, mass:0.4`; on hover, dot scales to `0.4`/opacity `0.5` (spring `stiffness:300, damping:22`) and ring scales to `1.8`/opacity `1` (spring `stiffness:200, damping:22`). Expands on hover of `[data-cursor="hover"]`/links/buttons; shows a small pill **label** (`bg-foreground text-background`, `text-[11px] uppercase tracking-wider`, fade/scale in `duration:0.18` ease `[0.22,1,0.36,1]`) if hovered element has `data-cursor-label="..."` (used heavily by ZoomableImage: "Click to zoom", "Drag", "Zoom in/out"). Auto-disabled on touch (`matchMedia("(hover: none)")`).

2. **Site Guards** (`SiteGuards.tsx` + `lib/siteGuards.ts`) — anti-copy/right-click/devtools deterrent. **Currently disabled** (commented out in `App.tsx`), but fully implemented + tested. Adds `site-guards-active` class driving CSS in `index.css`. Exceptions for inputs and `[data-allow-copy]`.

3. **Magnetic Buttons** (`MagneticButton.tsx`) — buttons that follow the cursor within a radius. Exact spec: `h-12` (48px), `rounded-full`, `px-6`, `gap-2`, `text-sm font-medium`. Spring `{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }`; outer wrapper moves by `(mouseOffset × strength)` (default `strength = 0.3`), inner content (icon+label) moves at `0.4×` that for a layered-parallax feel. 4 variants — see Part F.4 for exact colors. Used for all major CTAs (Hero, Contact).

4. **Zoomable Image / Lightbox** (`CaseStudy/ZoomableImage.tsx`) — click thumbnail → full-screen modal (`bg-black/90 backdrop-blur-sm`); click image to zoom **2.4×** (`ZOOM = 2.4`, `transition: transform 0.28s ease-out`); drag to pan when zoomed via pointer events; Escape/click-outside/X-button to close; body scroll locked while open; cursor labels change contextually ("Click to zoom" → "Click to zoom in" → "Drag" / "Drag / click out" → "Zoom in"/"Zoom out"). Used in the case study page's "The Work" tabs.

5. **Scroll Progress Bar** (`ScrollProgress.tsx`) — `fixed top-0`, `h-[2px]`, `bg-accent`, `origin-left`, `scaleX` driven by `scrollYProgress` through `useSpring({ stiffness: 120, damping: 20 })`. On both `/` and `/case/terranxt`.

6. **Lenis Smooth Scroll** — initialized in `Index.tsx` only (homepage), `duration: 1.1`, custom easing curve. **Not present on `/case/terranxt`** (that page uses native scroll + IntersectionObserver for its TOC).

7. **3D Tilt-on-Hover Image Panels** (`OtherWork.tsx` `ShowcasePanel`) — project cover images tilt in 3D based on mouse position: `rotateX = -py * 4deg`, `rotateY = px * 4deg` (where `px`/`py` are mouse position −0.5 to 0.5 within the panel), applied via `perspective(1100px) rotateX(...) rotateY(...)`, `transition-transform duration-300 ease-out`. Resets to 0,0 on mouse leave.

8. **Animated Count-Up Stats** (`OtherWork.tsx` `CountUp`) — when a stat number (e.g. "25+", "4.6") scrolls into view (`useInView`, `amount: 0.6`, once), it animates from 0 up to its value over **1200ms** with cubic ease-out (`1 - (1-t)^3`), formatting: values ≥10 round to integer, values <10 keep 1 decimal (trailing `.0` stripped), then snaps to the exact label (preserving any `+`/`★`/text suffix).

9. **Floating Stat Badges** (`StatBadges.tsx`) — 5 badges positioned absolutely around the Hero photo at fixed `top/left/right/bottom` percentage offsets (desktop only, `hidden md:block`). Entrance: `opacity/scale(0.6→1)/y(20→0)`, delay `0.6 + i*0.12`, duration `0.6`, ease `[0.22,1,0.36,1]`. Continuous float loop: `y: [0, -8, 0]`, duration `4 + i*0.4`, `repeat: Infinity`, `ease: "easeInOut"`. Hover: `scale: 1.08, y: -4`. On mobile, collapses to a wrapped row of small pills below the photo.

10. **Theme Toggle** (`ThemeToggle.tsx`) — `h-10 w-10` circular button (`border border-border`, `bg-background/60`, `backdrop-blur`), sun/moon icon (`lucide-react`, `h-4 w-4`). Defaults to **light** (`dark = false` on first load unless `localStorage.theme === "dark"`), persists to `localStorage` (`theme` key), toggles `.dark` class on `<html>` which flips all HSL CSS variable tokens (Part F.2).

11. **Mobile Recruiter Bar** (`MobileRecruiterBar.tsx`) — `fixed inset-x-0 bottom-0`, `bg-background/95 backdrop-blur-xl`, border-top, custom drop shadow `0_-8px_30px_-12px_hsl(224_47%_11%/0.2)`, padding-bottom respects `env(safe-area-inset-bottom)`. Two `min-h-11` flex-1 buttons: "Email Me" (`bg-primary text-primary-foreground`, `rounded-full`, `shadow-soft`) and "LinkedIn" (`border border-border bg-card`, hover → `border-primary text-primary`). Both `active:scale-[0.98]` on tap. Has `data-allow-copy` so Site Guards won't block interaction. Global in `App.tsx`, mobile only (`md:hidden`).

12. **Animated Nav w/ Active-Section Pill** (`Nav.tsx`) — `fixed top-4`, `max-w-6xl`, `rounded-full border border-border`, `px-4 py-2.5`. Becomes `bg-background/85 shadow-soft backdrop-blur-xl` after `scrollY > 20` (vs. default `bg-background/70 backdrop-blur-md`). Tracks scroll to highlight current section (`#top/#about/#work/#experience/#contact`, using `scrollY + 140` as the probe point) with a Framer Motion shared-element pill (`layoutId="nav-active"`, `bg-secondary rounded-full`, spring `stiffness:380, damping:30`). Mobile hamburger (`Menu`/`X` icons) opens a `.glass` full-width dropdown panel (`rounded-3xl p-6`) with `font-display text-2xl` nav links.

13. **Sticky Table of Contents w/ Scroll-Spy** (`CaseStudyPvNXT.tsx` `TableOfContents`) — **only on `/case/terranxt`**, `fixed right-6 top-1/2 -translate-y-1/2`, desktop-only (`lg:block`), 8 numbered section links (01–08, `font-mono text-xs tabular-nums`), uses `IntersectionObserver` (`rootMargin: "-30% 0px -50% 0px"`) to pick the section with highest intersection ratio as active. On hover/active, label text expands from `max-w-0 opacity-0` to `max-w-[180px] opacity-100` over `duration-500 ease-out`; active number/label turn `text-primary-glow`.

14. **Sticky Tab Header w/ Underline Indicator** (`CaseStudyPvNXT.tsx` "The Work" section) — tab bar (`sticky top-0 z-30`) becomes `bg-[#F8F8F8]/85 backdrop-blur-md` on scroll; active tab gets an animated underline (`absolute inset-x-3 -bottom-px h-[2px]`, `scale-x-100` vs `scale-x-0`, `duration-300`, color `bg-neutral-900` active / `bg-neutral-300` inactive); icon switches between `Monitor`/`Smartphone` based on platform; tab content cross-fades (`opacity/y(12→0)`, `duration:0.45`, ease `[0.22,1,0.36,1]`) on tab change.

---

# PART F — COMPLETE DESIGN SYSTEM / UI THEME REFERENCE

> **There are THREE separate, unconnected design systems in this codebase.** A redesign should pick ONE (or deliberately bridge them). Each is documented in full below.

## F.1 — Homepage System (`/`) — Token-Based, Light/Dark Themeable

This is the "main" system: semantic CSS variables in `src/index.css` (HSL format), consumed via Tailwind theme extension in `tailwind.config.ts`. Switching `.dark` on `<html>` re-points every token.

### F.1.a — Color Tokens (exact values from `index.css`)

**Light mode (`:root`)** — "Figma lavender + indigo":

| Token | HSL value | Approx. hex / description |
|---|---|---|
| `--background` | `0 0% 100%` | `#FFFFFF` (pure white) |
| `--foreground` | `224 47% 11%` | dark navy ink (same family as footer navy) |
| `--card` / `--popover` | `0 0% 100%` | white |
| `--primary` / `--accent` | `244 75% 59%` | **`#4F46E5`** — Indigo (brand color) |
| `--primary-foreground` / `--accent-foreground` | `0 0% 100%` | white |
| `--primary-glow` / `--accent-glow` | `244 90% 70%` | lighter, brighter indigo (used for glows/gradients/active states) |
| `--secondary` | `234 30% 95%` | very light lavender |
| `--muted` | `234 22% 95%` | very light lavender-grey |
| `--muted-foreground` | `224 12% 42%` | medium slate-blue grey |
| `--destructive` | `0 84% 60%` | red (shadcn default-style) |
| `--border` / `--input` | `234 22% 90%` | light lavender-grey |
| `--ring` | `244 75% 59%` | = primary indigo |
| `--hero-bg` | `234 33% 94%` | **`#E8E9F5`** — soft lavender (Hero + Contact section backgrounds) |
| `--footer-bg` | `222 47% 11%` | **`#0F1729`** — dark navy (Footer background) |
| `--footer-fg` | `0 0% 100%` | white |
| `--radius` | `1rem` (16px) | base corner radius |

**Dark mode (`.dark`)**:

| Token | HSL value | Description |
|---|---|---|
| `--background` | `222 47% 6%` | near-black navy |
| `--foreground` | `234 33% 96%` | near-white lavender |
| `--card` / `--popover` | `222 40% 9%` | dark navy card surface |
| `--primary` / `--accent` | `244 90% 70%` | brighter indigo/violet |
| `--primary-foreground` / `--accent-foreground` | `222 47% 6%` | near-black |
| `--primary-glow` / `--accent-glow` | `244 100% 78%` | even brighter violet |
| `--secondary` / `--muted` | `222 30% 14%` | dark slate |
| `--muted-foreground` | `234 15% 65%` | mid grey-lavender |
| `--destructive` | `0 70% 55%` | red |
| `--border` / `--input` | `222 25% 18%` | dark slate border |
| `--ring` | `244 90% 70%` | bright indigo |
| `--hero-bg` | `222 47% 8%` | near-black navy |
| `--footer-bg` | `222 60% 4%` | almost-pure-black navy |
| `--footer-fg` | `234 33% 96%` | near-white |

> Also present (shadcn sidebar tokens, currently **unused** since no sidebar component is in the portfolio): `--sidebar-*` (background/foreground/primary/accent/border/ring) — both light & dark variants exist, standard shadcn defaults.

### F.1.b — Gradients, Shadows & Effects (exact CSS)

```css
--gradient-hero (light): linear-gradient(180deg, hsl(234 40% 95%) 0%, hsl(234 33% 92%) 100%)
--gradient-hero (dark):  linear-gradient(180deg, hsl(222 50% 8%) 0%, hsl(222 47% 6%) 100%)

--gradient-mesh (light): 3 radial blobs —
  at 20% 20%: hsl(var(--accent)/0.18)
  at 80% 0%:  hsl(280 80% 70% / 0.14)   (purple)
  at 70% 80%: hsl(190 80% 70% / 0.14)   (cyan)
--gradient-mesh (dark): same positions, opacities 0.30 / 0.22 / 0.20

--shadow-glow (light):    0 20px 60px -20px hsl(var(--accent) / 0.4)
--shadow-glow (dark):     0 20px 80px -20px hsl(var(--accent) / 0.6)
--shadow-elegant (light): 0 30px 80px -30px hsl(224 47% 11% / 0.18)
--shadow-elegant (dark):  0 30px 80px -30px hsl(0 0% 0% / 0.6)
--shadow-soft (light):    0 8px 30px -10px hsl(224 47% 11% / 0.1)
--shadow-soft (dark):     0 8px 30px -10px hsl(0 0% 0% / 0.4)

--transition-smooth: cubic-bezier(0.22, 1, 0.36, 1)   ← the site's signature ease curve, used everywhere
```

**Utility classes** (`@layer utilities` in `index.css`):
- `.font-display` → `font-family: 'Space Grotesk', system-ui, sans-serif; letter-spacing: -0.03em`
- `.text-balance` → `text-wrap: balance`
- `.bg-hero` → `background-color: hsl(var(--hero-bg))` — used by Hero & Contact sections
- `.bg-footer` → `background-color: hsl(var(--footer-bg)); color: hsl(var(--footer-fg))` — used by Footer
- `.glass` → `backdrop-blur-xl bg-background/70 border border-border/50` — used once, for the mobile nav dropdown
- `.shadow-glow` / `.shadow-elegant` / `.shadow-soft` → map to the CSS vars above. `shadow-glow` used only on MagneticButton primary hover; `shadow-elegant` used on the Hero profile photo ring; `shadow-soft` used very widely (cards, nav, badges, buttons)
- `.gradient-mesh` and `.noise` are **defined but never used anywhere in the current UI** — free to repurpose. (`.noise` = a 4%-opacity SVG fractal-noise texture overlay via `::before`; `.gradient-mesh` = the 3-blob radial gradient above)

### F.1.c — Typography

**Fonts** (Google Fonts, `@import` at top of `index.css`):
- **Inter** (400/500/600/700) — body font (`font-sans`, default)
- **Space Grotesk** (400/500/600/700) — display/heading font, applied via `.font-display` (`letter-spacing: -0.03em`)

**Body defaults:** `bg-background text-foreground font-sans antialiased`, plus `font-feature-settings: "ss01", "cv11"` (stylistic alternates), `scroll-behavior: smooth` on `<html>`, `::selection { bg-accent text-accent-foreground }`.

**Heading scale actually used (homepage), all with `.font-display`:**

| Element | Classes | Effective size |
|---|---|---|
| Hero H1 | `font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-balance` | fluid 40px → 80px |
| About / Contact H2 | `font-display text-4xl font-bold tracking-tight md:text-6xl` (About also has `leading-tight`) | 36px → 60px |
| Design Process / Experience H2 | `font-display text-4xl font-bold tracking-tight md:text-5xl` | 36px → 48px |
| CaseStudyCard headline (H3) | `font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl` | 30px → 36px |
| OtherWork row title (H3) | `font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl` | 24px → 30px → 36px |
| Nav logo | `font-display text-base font-bold tracking-tight` | 16px |
| Mobile nav links | `font-display text-2xl` | 24px |
| About highlight card title | `font-display text-base font-bold` | 16px |
| Stat values (About, OtherWork, Hero badges) | `font-display text-2xl font-bold` (often `md:text-3xl`) | 24px → 30px |

**Recurring text patterns:**
- **Eyebrow/label** (every section): `text-sm font-medium uppercase tracking-widest text-primary` (e.g. "About", "Selected Work", "Design Process", "Experience & Stack", "Contact")
- **Body/paragraph copy:** `text-base text-muted-foreground md:text-lg` (often with `leading-relaxed`)
- **Small caption/uppercase labels** (stat labels, tags): `text-[10px]` to `text-xs`, `uppercase tracking-wider`, `text-muted-foreground`

### F.1.d — Spacing, Layout & Radius

- **Container:** Tailwind `container` — `center: true`, `padding: 1.5rem`, `2xl` breakpoint at `1400px`. Used for all homepage sections.
- **Section vertical rhythm:** virtually every section uses `py-24 md:py-32` (96px → 128px).
- **Border radius scale** (overridden via `--radius: 1rem`):
  - `rounded-lg` = `var(--radius)` = **16px**
  - `rounded-md` = `calc(var(--radius) - 4px)` = **12px**
  - `rounded-sm` = `calc(var(--radius) - 8px)` = **8px**
  - Tailwind defaults still apply for `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` — these are the **most commonly used** for cards (`rounded-2xl`), big panels/mobile nav (`rounded-3xl`), and pills/buttons/badges (`rounded-full`)
- **Standard border:** `border border-border` on nearly every card/panel/pill.
- **Standard card pattern:** `rounded-2xl border border-border bg-card p-5 shadow-soft`, hover → `hover:-translate-y-1 hover:border-primary` (seen in About highlight cards, Experience right-rail cards, Decisions cards on case study page).

### F.1.e — Tailwind Custom Keyframes & Animations (`tailwind.config.ts`)

| Name | Keyframes | Animation (duration/timing) | Where used |
|---|---|---|---|
| `marquee` | `translateX(0)` → `translateX(-50%)` | `40s linear infinite` | `Marquee.tsx` (component built, currently **unused/commented out**) |
| `float` | `translateY(0)` ↔ `translateY(-12px)` (at 50%) | `6s ease-in-out infinite` | Hero's glow ring behind the profile photo |
| `float-slow` | `translateY(0)` ↔ `translateY(-18px)` | `8s ease-in-out infinite` | defined, not currently applied in custom components (available for reuse) |
| `pulse-glow` | `box-shadow` ring expands from `0 0 0 0 accent/0.4` to `0 0 0 20px accent/0` | `2s ease-in-out infinite` | defined; the "Live" badge in Experience uses a similar hand-rolled `animate-ping` instead, not this keyframe — available for reuse |
| `fade-in` | `opacity 0→1`, `translateY(10px→0)` | `0.5s ease-out` | available utility (Radix/shadcn components use similar patterns) |
| `scale-in` | `opacity 0→1`, `scale(0.95→1)` | `0.3s ease-out` | available utility |
| `accordion-down` / `accordion-up` | height `0` ↔ `var(--radix-accordion-content-height)` | `0.2s ease-out` | shadcn Accordion primitive (not the custom OtherWork/CaseStudyAccordion, which use Framer Motion instead) |

### F.1.f — Framer Motion Patterns (homepage)

- **Standard section entrance:** `initial={{opacity:0, y:20-40}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{once:true, amount:0.2-0.4}}`, `transition={{duration:0.4-0.7}}` — sometimes staggered via `delay: index * 0.05–0.15`.
- **Signature ease curve:** `[0.22, 1, 0.36, 1]` (a custom "ease-out-expo"-like curve) — used for badge entrances, accordion expand/collapse, image cross-fades, cursor label fade.
- **Hero profile decorative ring:** continuous `rotate: 360`, `duration: 40, repeat: Infinity, ease: "linear"`.
- **Nav active-pill:** shared layout animation `layoutId="nav-active"`, spring `{stiffness:380, damping:30}`.
- **OtherWork accordion:** `AnimatePresence` + `height: 0→"auto"`, `opacity 0→1`, `duration:0.5`, ease `[0.22,1,0.36,1]`; gallery image cross-fade `opacity/scale(1.04→1)`, `duration:0.4`.
- **DesignProcess connector line:** `useScroll`/`useTransform` ties a horizontal line's `width` (`0%`→`100%`) to scroll progress between `"start 80%"` and `"end 30%"` of the section.

---

## F.2 — Resume HTML System (`RajatMishra_Resume_2p.html`) — A THIRD, Different Palette

> **New in v3.** This standalone HTML file (US-Letter page-sized, print-oriented, `.page { width: 8.5in; height: 11in }`) defines its **own CSS variables, completely independent of `index.css`** — and uses a **different purple** than the main site.

| Token | Value | Notes |
|---|---|---|
| `--ink` | `#0F0F1A` | near-black text |
| `--ink-2` | `#3A3A4A` | secondary dark text |
| `--muted` | `#7A7A8C` | grey for meta/labels |
| `--line` | `#ECEAF4` | hairline border / divider |
| `--primary` | `#6C5CE7` | **violet/purple — different from the site's `#4F46E5` indigo** |
| `--primary-soft` | `#EFEAFE` | very light violet (used for skill-tag backgrounds with `#E0D8FB` border) |
| `--paper` | `#FFFFFF` | card/page background |
| page background | `#F2F1F7` | light lavender-grey behind the "paper" |

- Font: **Inter** only (no Space Grotesk / display font in the resume).
- Name styling: `.name { font-size: 32px; font-weight: 800; letter-spacing: -1.1px }`, with an `<em>` span colored `var(--primary)` for emphasis (non-italic, just color).
- "Live" status pill: green dot (`#22c55e`) + soft glow (`box-shadow: 0 0 0 3px rgba(34,197,94,.18)`).
- Skill/feature tags (`.feat`): `font-size: 11.5px`, `background: var(--primary-soft)`, `border: 1px solid #E0D8FB`, `padding: 3px 9px`, pill-shaped.
- Section labels: `font-size: 10px`, `letter-spacing: .14em`, `uppercase`, `color: var(--muted)`.

**Redesign implication:** if the redesigner wants visual consistency between the live site and the downloadable resume, either (a) restyle the resume to match the site's indigo `#4F46E5` + Space Grotesk/Inter pairing, or (b) treat the resume's violet `#6C5CE7` + pure-Inter look as a deliberate "print/PDF" sub-brand. Either is reasonable — just flag the current mismatch to the owner.

---

## F.3 — Exact Button & Interactive-Element Specs

### MagneticButton variants (`MagneticButton.tsx`) — base: `h-12 rounded-full px-6 gap-2 text-sm font-medium`, spring `{stiffness:200, damping:15, mass:0.3}`

| Variant | Classes | Visual result | Used for |
|---|---|---|---|
| `primary` | `bg-primary text-primary-foreground hover:shadow-glow` | solid indigo pill, white text, glows on hover | Hero "View My Work", Contact "Email Me" |
| `secondary` | `bg-foreground text-background hover:opacity-90` | solid dark pill (inverts in dark mode), fades slightly on hover | Contact "LinkedIn" |
| `ghost` | `border border-border bg-background/60 backdrop-blur hover:bg-secondary text-foreground` | translucent outlined pill | Hero "Let's Talk", Contact "Resume" |
| `none` | `bg-background/60 backdrop-blur` | translucent, no border | (available, not currently used) |

### Other buttons/links

| Element | Classes | Notes |
|---|---|---|
| Nav "Download Resume" (desktop) | `h-10 rounded-full bg-foreground text-background px-4 text-sm font-medium hover:scale-105` | inverts in dark mode |
| Nav mobile menu toggle | `h-10 w-10 rounded-full border border-border` grid-centered `Menu`/`X` icon | |
| Theme toggle | `h-10 w-10 rounded-full border border-border bg-background/60 backdrop-blur hover:bg-secondary` | Sun/Moon icon, `h-4 w-4` |
| CaseStudyCard CTA (live) | `rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:bg-primary hover:gap-5`, arrow icon rotates `45°` on hover | "See the case study" |
| CaseStudyCard CTA (not live) | `rounded-full border-2 border-dashed border-border bg-background/40 px-7 py-4 text-sm text-muted-foreground cursor-default` | "Case study coming soon" |
| OtherWork "Visit Site" link | plain text+icon, `text-sm font-medium text-foreground hover:text-primary` (no button background) | |
| OtherWork "In Use Internally" badge | `rounded-full border border-dashed border-border bg-background/40 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground` | |
| ZoomableImage modal buttons (close / zoom toggle) | `rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20`, close = `p-2.5`, zoom toggle = `px-4 py-2 text-xs uppercase tracking-wider` | always white-on-black regardless of theme (modal is fixed `bg-black/90`) |
| MobileRecruiterBar buttons | `min-h-11 flex-1 rounded-full text-sm font-semibold`, primary = `bg-primary text-primary-foreground shadow-soft`, secondary = `border border-border bg-card hover:border-primary hover:text-primary`; both `active:scale-[0.98]` | |
| Stack/tool tag pills (Experience, AboutCombined) | `rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium hover:-translate-y-0.5 hover:border-primary hover:text-primary` | |

---

## F.4 — Case Study Page System (`/case/terranxt`) — Flat, NOT Using CSS Variable Tokens

This page **hardcodes its own palette directly in Tailwind arbitrary values**, independent of `index.css` tokens, and **does not use the `.font-display` (Space Grotesk) class on any heading** — so its typography is pure Inter, unlike the homepage.

- **Section backgrounds:** `bg-[#111111]` (dark) / `bg-[#0D0D0D]` (darker) / `bg-[#0A0A0A]` (deepest) / `bg-[#F5F5F7]` (grey) / `bg-[#F8F8F8]` (softgrey) / `bg-white`
- **Accent:** `indigo-400` (eyebrows on dark bg), `indigo-500`/`indigo-600` (icons/links/chip text on light bg), `rose-50`/`rose-700` (negative "what this replaced" callouts)
- **Text greys:** `neutral-100` through `neutral-900` depending on bg
- **Eyebrow style:** `text-[11px] font-semibold uppercase tracking-[0.22em]` (vs homepage's `text-sm tracking-widest`)
- **Heading style (no font-display):** H1 = `text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl`; section H2s = `text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl` (plain Inter, bold)
- **Layout:** custom `max-w-[1200px]` wrapper (not Tailwind's `container`), `px-6`, vertical padding `py-24 md:py-28 lg:py-32`
- **Motion:** consistent `fadeUp` (`hidden:{opacity:0,y:24}` → `show:{opacity:1,y:0, duration:0.6, ease:[0.22,1,0.36,1]}`) + `stagger` (`staggerChildren:0.08`) variants applied per-section via `whileInView`
- **Cards:** `rounded-2xl border border-neutral-200 bg-white p-7`, hover → `-translate-y-1 border-indigo-300 shadow-lg`
- **Icon chips:** `h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600` (Lucide icons inside)

**Redesign implication:** if the goal is one unified design language, this case-study-specific palette either needs to be (a) ported into the main token system (e.g. map `#111111`→`background` in a "dark section" variant, `indigo-400/500/600`→`primary`/`primary-glow`), or (b) the main site's tokens extended to cover this "editorial/dark" mode too, **and** a decision made on whether case-study headings should adopt `.font-display` (Space Grotesk) to match the homepage. Right now these are two unrelated systems living in the same codebase, and a third (resume, F.2) makes it three total.

---

# PART G — Technical File Map

```
src/
├── content.ts          ← Homepage data (Part A content). NOT used by /case/terranxt.
├── App.tsx              ← Router: "/" → Index, "/case/terranxt" → CaseStudyPvNXT, "*" → NotFound
├── index.css            ← HSL token system (homepage only, see F.1)
├── pages/
│   ├── Index.tsx                    ← Homepage section assembly (Part A)
│   ├── CaseStudy.tsx                ← ☠️ DEAD — unused generic page, not routed
│   └── NotFound.tsx                 ← 404
├── components/portfolio/
│   ├── Nav.tsx, Hero.tsx, About.tsx, FeaturedWork.tsx, CaseStudyCards.tsx,
│   │   OtherWork.tsx, DesignProcess.tsx, Experience.tsx, Contact.tsx, Footer.tsx
│   │   → all LIVE, all homepage (Part A)
│   ├── StatBadges.tsx, MagneticButton.tsx, Cursor.tsx, ScrollProgress.tsx,
│   │   ThemeToggle.tsx, MobileRecruiterBar.tsx, SiteGuards.tsx
│   │   → all LIVE, shared/global (Part E)
│   ├── AboutCombined.tsx     ← ☠️ DEAD (imported, commented out in Index.tsx) — also BROKEN (see Part L)
│   ├── Marquee.tsx            ← ☠️ DEAD (imported, commented out; content.marquee unused)
│   ├── ProjectModal.tsx       ← ☠️ DEAD (not imported anywhere)
│   ├── CaseStudyAccordion.tsx ← ☠️ DEAD (only used by dead pages/CaseStudy.tsx)
│   ├── RajatMishra_Resume_2p.html ← standalone print resume, OWN design system (F.2)
│   └── CaseStudy/
│       ├── CaseStudyPvNXT.tsx  ← ⭐ LIVE — entire /case/terranxt page (Part B). 1065 lines,
│       │                          fully self-contained copy + its own design system (F.4).
│       ├── ZoomableImage.tsx   ← LIVE (used inside CaseStudyPvNXT "The Work" tabs)
│       └── KeyScreen.tsx       ← ☠️ DEAD (imported in CaseStudyPvNXT but usage commented out, twice)
├── lib/utils.ts, lib/siteGuards.ts   ← helpers (siteGuards used by SiteGuards.tsx)
├── hooks/use-mobile.tsx, use-toast.ts
├── components/ui/*       ← full shadcn/ui library — keep as primitives for redesign
└── assets/projects/*     ← see Part H for full image map
```

### G.1 — Build/Tooling Notes (for whoever sets up the redesign environment)
- **Stack confirmed:** React 18.3 + TypeScript + Vite 5 (`@vitejs/plugin-react-swc`) + Tailwind 3.4 + `tailwindcss-animate`. Path alias `@/* → ./src/*` (both `vite.config.ts` and `tsconfig`).
- **Animation/UX libs in use:** `framer-motion` ^12, `lenis` ^1.3 (smooth scroll), `lucide-react` (icons), `react-router-dom` ^6.
- **shadcn/ui ecosystem installed but mostly unused by the portfolio itself** (available as primitives if the redesign wants them): all `@radix-ui/react-*` primitives, `cmdk`, `vaul`, `react-hook-form` + `zod` + `@hookform/resolvers`, `react-day-picker`, `embla-carousel-react`, `recharts`, `sonner` (toast), `next-themes`, `input-otp`, `react-resizable-panels`. None of these appear to be actively used by any live `components/portfolio/*` file — they're just part of the shadcn template that ships by default. `sonner`/`Toaster` are mounted in `App.tsx` but nothing currently triggers a toast.
- **Dev tooling:** ESLint 9, Vitest 3 (+ `@testing-library/react`, `jsdom`), Playwright, and a full Storybook 10 setup (`npm run storybook`) — Storybook stories exist mainly for shadcn `ui/` primitives, not custom portfolio sections.
- **`lovable-tagger`** dev plugin present — a Lovable.dev-specific Vite plugin (adds component tags in dev mode); harmless to keep or remove.
- **`index.html`** sets: `<title>Rajat Mishra — aka the cool guy behind the pixels.</title>`, a meta description (*"Hey there! I'm Rajat — or as the internet knows me, rmcool26. A designer who loves clean UI, creative food, and making the complex feel like a breeze."*), and an `og:title` matching the page title. No `og:image`, `og:description`, `twitter:card`, or favicon-link beyond defaults — worth adding for a redesign's SEO/social-share polish.

---

# PART H — Image Asset Map (fully verified)

## H.1 — LIVE images (used, keep these filenames/paths for easy owner replacement)
| File | Used in | Where exactly |
|---|---|---|
| `rmcool26-profile.svg` | Homepage Hero | `content.hero.profileImage` — circular profile photo |
| `rmcool26-pvNXT-suite-675.svg` | Homepage A4.1 | `content.caseStudies[0].cover` — "pvNXT Solar Suite" card image |
| `rmcool26-pvNXT-sacada-alert.svg` | Homepage A4.1 | `content.caseStudies[1].cover` — "SCADA Monitoring" card image |
| `rmcool26-pvNXT-epc-fieldapp.svg` | Homepage A4.2 | `content.projects[0]` (Field App) cover + gallery |
| `rmcool26-pvNXT-consumer-mobile.svg` | Homepage A4.2 | `content.projects[1]` (Consumer Mobile) cover + gallery |
| `rmcool26-spade.svg` | Homepage A4.2 | `content.projects[2]` (Spade) cover + gallery |
| `rmcool26-iide-coursepage.svg` | Homepage A4.2 | `content.projects[3]` (IIDE) cover + gallery |
| `rmcool26-freelance.svg` | Homepage A4.2 | `content.projects[4]` (DMS) cover + gallery |
| `rmcool26-pvNXT-epc-all.svg` | Case Study B6 Tab 1 | "EPC Dashboard" tab image |
| `rmcool26-pvNXT-epc-proposal.svg` | Case Study B6 Tab 2 | "Proposal Report" tab image |
| `rmcool26-pvNXT-consumer-all.svg` | Case Study B6 Tab 3 | "Consumer Portal" tab image |
| `rmcool26-pvNXT-installer-all.svg` | Case Study B6 Tab 4 | "Installer App" tab image |

## H.2 — Imported but DEAD (referenced in `content.ts` import statements, but the variable is never placed into any live field)
| File | Imported as | Why dead |
|---|---|---|
| `rmcool26-design-system.png` (⚠️ doesn't exist — actual file is `rmcool26-desing-system.png`, typo) | `designSystem` | Imported, never used. Filename typo too. |
| `rmcool26-pvNXT-epc-stringing.png` | `epcStringing` | Imported, never used |
| `rmcool26-pvNXT-epc-workflow.png` | `epcWorkflow` | Imported, never used |
| `rmcool26-pvNXT-proposal-pdf.png` | `epcProposal` (in `content.ts`) | Imported, never used — **note: a DIFFERENT file also named `epcProposal` IS used, but imported separately inside `CaseStudyPvNXT.tsx` from `rmcool26-pvNXT-epc-proposal.svg`. Same variable name, two different source files — confusing, recommend renaming.** |
| `rmcool26-pvNXT-sacada.svg` | `scada` | Only referenced inside a commented-out project block and inside the dead `content.pvnxtCases` array |

## H.3 — Completely unreferenced files on disk (not imported anywhere, candidates for cleanup or repurposing)
`case 1.svg`, `test_image.svg`, `rmcool26-desing-system.png`, `rmcool26-iide-coursepage.png`, `rmcool26-linkedin-banner.png`, `rmcool26-profile-116.png`, `rmcool26-profile-116.svg`, `rmcool26-profile-156.svg`, `rmcool26-profile.jpeg`, `rmcool26-pvNXT-suite.png`, `rmcool26-pvNXT-suite.svg`, `rmcool26-rettagio.svg`, `rmcool26-sar-cart.png`, `rmcool26-signature.svg`

---

# PART I — UNUSED CONTENT RESERVOIR (exists in `content.ts`, NOT shown anywhere on the live site)

> These are real pieces of writing already done by the owner. They are **not** part of the live experience today (Parts A/B above are complete without them), but they're **good raw material** — especially for a redesigned/expanded case study page, since some of this is *more detailed* than what's currently live. Flag to the owner: keep, repurpose, or delete.

### I.1 — `content.featured.hero` (huge object, only referenced by dead `pages/CaseStudy.tsx`)
A longer, narrative version of the pvNXT story, different in tone/detail from Part B:
- 3-paragraph origin story (PVsyst/AutoCAD/WhatsApp/spreadsheet chaos → joining with no product/team/design system → built 3 portals from scratch → IIT Delhi FITT booth/demos since 2022, full text preserved in `content.ts`)
- Stats: **20+ EPC Organisations · 1k+ End Users · 50+ Screens Shipped · 10–15 min Site Roof analysis** (different numbers from Part B's 5+/50+/2-3wks!)
- 4 "challenge" bullet points: Fragmented tools and teams / Slow, manual workflows / Zero single source of truth / Building from Zero

### I.2 — `content.other` (exact duplicate of `content.featured`, completely unused anywhere — recommend deleting entirely)

### I.3 — `content.pvnxtCases` (8-step design-process narrative, only used by dead `CaseStudyAccordion.tsx` via dead `pages/CaseStudy.tsx`)
Each step has tags + Problem/Action/Result text (all currently use the Spade SVG as a placeholder cover):
1. **Workflow Mapping** — FigJam mapping with real EPCs, pain-points-first
2. **Architecting the Data Flow** — input/data dependency mapping across 3 portals
3. **Validating the Flow with Mid-Fidelity Screens** — journey validation before color
4. **Building the Foundation: Design System** — variables/components/tokens in Figma
5. **Crafting the High-Fidelity Experience** — final UI for all roles
6. **The Perfect Handoff & Collaboration** — annotated states/microcopy for devs
7. **Closing the Loop: Testing, Bugs & Iteration** — QA + iteration with real EPC feedback
8. **Scaled the suite beyond one product** — extended to consumer mobile + SCADA + future O&M

> Note overlap with Part B5 ("How I Work" 4 steps) — this 8-step version is a more granular breakdown of the same journey, written for a different (accordion/gallery) format.

### I.4 — `content.marquee` (7 short strings, `Marquee.tsx` component exists but is commented out)
"9+ years shipping" · "60+ projects" · "4 mobile apps" · "Scaled design 2 → 12" · "~30% faster task completion" · "Mumbai 🇮🇳" · "Open to Senior / Lead roles"

### I.5 — `content.experience.education` (commented out in `Experience.tsx`)
- 2016–2019: BCA (Bachelor of Computer Applications)
- 2014–2016: Diploma in IT — TCS iON

> ⚠️ See Part L.3 — the **resume HTML has a richer, 4-entry education list** that supersedes this 2-entry version.

### I.6 — `content.experience.hobbies` (commented out in `Experience.tsx`)
- 🏛️ "Studying ancient UX at monuments"
- 🍜 "Chasing local food"
- 🏸 "Quick on the badminton court"

### I.7 — Dead `pages/CaseStudy.tsx` page itself (not routed, but has its OWN additional hardcoded narrative not duplicated elsewhere)
- "The Challenge" intro paragraph (PVsyst/AutoCAD/WhatsApp narrative, slightly different wording than I.1)
- "My Role" bullet list (Consumer portal experience / EPC dashboard & roof analysis / Installer assignment & tracking / O&M-SCADA workflows / Design system / Dev handoff — listed twice, a duplication bug)
- "Key Product Decisions" → "Role-based experience" (per-role bullet list) + "Design for handoff, not just presentation" (status-pattern narrative: pending/approved/rejected/assigned/in progress/completed/failed/delayed/alert/fault)
- "Outcome" → 3 result cards: **"Revolutionized Efficiency"** (2 weeks → under 15 minutes), **"Accelerated Timelines"** (2-3 months → 1-2 weeks), **"Business & Personal Growth"** (investment + IIT Delhi incubation + designer→product-leader growth)
- Sticky sidebar with "Visit:" links to consumer/epc/installer.pvnxt.com (same links as Part B8, but presented differently)

### I.8 — `KeyScreen.tsx` (433 lines, imported into `CaseStudyPvNXT.tsx` but commented out both times) — an alternative "key screens" gallery layout was built but never enabled. Worth a quick look if the redesign wants a different way to showcase screens than the current tab system.

### I.9 — `ProjectModal.tsx` (152 lines, not imported anywhere) — a modal component for showing project details with prev/next navigation; fully built but unused.

---

# PART J — Known Issues / Cleanup Candidates (consolidated)

1. **THREE unrelated design systems** coexist: homepage's HSL-token theme (F.1, indigo `#4F46E5` + Space Grotesk/Inter), the case-study page's hardcoded flat palette (F.4, indigo-400/500/600 + pure Inter, no font-display), and the resume HTML's own palette (F.2, violet `#6C5CE7` + pure Inter). A unified redesign should pick one approach for at least the two web pages, and ideally extend it to the resume too.
2. **Two unrelated content systems**: homepage content lives in `content.ts`; case-study page content is hardcoded JSX strings inside `CaseStudyPvNXT.tsx`. For a non-technical owner to edit easily later, case-study copy should probably move into `content.ts` (or a sibling `caseStudyContent.ts`) too.
3. **`content.featured.hero` + `content.other` (its exact duplicate) + `content.pvnxtCases`** = large amounts of dead data (~250+ lines) with a richer/different pvNXT narrative (different stats: 20+/1k+/50+/10-15min vs. live 5+/50+/2-3wks). Decide: merge into the live case study, or delete.
4. **Two different "How I Work/Ship" 4-step narratives** exist (Decode/Craft/Deliver/Launch on homepage vs. Decode/Architect/Build with devs/Ship & scale on case study) — likely fine as-is (different pages, different framing) but flag for owner awareness.
5. **Dead components**: `pages/CaseStudy.tsx`, `CaseStudyAccordion.tsx`, `KeyScreen.tsx`, `ProjectModal.tsx`, `AboutCombined.tsx`, `Marquee.tsx` — none are rendered. Either remove or repurpose (some, like `KeyScreen`/`ProjectModal`, are fully-built alternative UIs that could be revived). **`AboutCombined.tsx` is additionally broken** — see Part L.5.
6. **`experience.education` and `experience.hobbies`** — data exists, JSX commented out. Decide whether to bring back (and if so, prefer the richer resume version of education — Part L.3).
7. **Filename typo**: `content.ts` imports `rmcool26-design-system.png`, actual file on disk is `rmcool26-desing-system.png` (and unused either way).
8. **Variable name collision**: two different image files both imported as `epcProposal` (one dead in `content.ts`, one live in `CaseStudyPvNXT.tsx`) — confusing for future edits.
9. **14 image files on disk are completely unreferenced** (Part H.3) — cleanup candidates, or repurpose as new placeholders.
10. `App.tsx` imports the same case-study component twice under two names (`TerranxtCaseStudy` and `CaseStudyPvNXT`) — harmless but redundant.
11. SiteGuards fully built but disabled — re-enable only if owner wants anti-copy protection back.
12. **`.font-display` (Space Grotesk) is used on every homepage heading but on NO heading on `/case/terranxt`** — the case study page is pure Inter. If brand consistency matters, decide whether case-study headings should adopt Space Grotesk too.
13. `.gradient-mesh` and `.noise` utility classes are fully defined in `index.css` but **used nowhere** — either remove or use them to add visual texture in the redesign.
14. **Live URL `rmcool26.netlify.app`** (found in the resume) is not displayed/linked anywhere on the site itself — minor, but worth adding to Contact/Footer if the owner wants people to find the canonical URL.
15. The README mentions "Embla Carousel (project preview slider)" as part of the stack — **no carousel is actually used anywhere** in the live portfolio; `embla-carousel-react` is just an installed-but-unused shadcn dependency. README is slightly aspirational/outdated here.

---

# PART K — Instructions for the Redesigning AI

1. **Treat Part A and Part B as the ground truth for "what content must appear somewhere in the new design."** These are the two pages real visitors see today.
2. **Reuse all copy verbatim** (or lightly polish if asked) — this is real career/project information written by the owner. Do not invent new bios/projects/numbers.
3. **Part I (unused reservoir) and Part L (resume-only content) are optional bonus material** — particularly I.1 (richer pvNXT origin story with different stats), I.3 (8-step process breakdown), and L.2–L.4 (resume's skills taxonomy, 4-entry education, "I solve complex problems through design & systems thinking" tagline) could enrich a redesigned site/case-study/about section if more depth is wanted. Otherwise safe to drop.
4. **Preserve or thoughtfully reinterpret all 14 features in Part E** — these are the site's personality (custom cursor, magnetic buttons, zoomable lightbox, count-up stats, 3D tilt panels, scroll-spy TOC, etc.), with **exact specs given** (spring constants, durations, easing curves, sizes) so they can be faithfully ported into a new visual skin. A fresh visual design should still feel this interactive/premium unless told to simplify.
5. **Decide on ONE visual system** using Part F as the reference palette: F.1 is the most complete/flexible (token-based, light+dark, has a defined type scale and spacing system) and is the recommended base. Either extend it to cover the case-study page's needs (F.4) and optionally the resume (F.2), or vice versa — but unify all three into one coherent brand. If keeping indigo as the brand color, `#4F46E5` (site) is the more "official" one since it's used in two of the three systems' broad strokes (vs. the resume's one-off violet `#6C5CE7`).
6. **For images**: generate placeholders matching the descriptions in Part H.1 (12 live images), keep the same filenames/import paths in code so the owner can drop in real files later without touching code. Feel free to also repurpose/rename the dead images in H.2/H.3 if useful, but document any renames.
7. **Clean up Part J's issues** where reasonable (dead components/routes, duplicate data, the filename typo, the `epcProposal` naming collision, broken `AboutCombined`) unless the owner wants a minimal-diff redesign.
8. **Keep Vite + React + TypeScript + Tailwind**, and consolidate content into a content-file approach (ideally one file, or `content.ts` + a clearly-named `caseStudyContent.ts`) so future text edits stay easy for a non-technical owner.
9. **Typography decision point:** the homepage uses Space Grotesk for all headings (`.font-display`) while the case study page uses plain Inter for everything. Pick one approach for the unified redesign and apply it consistently across both pages (and optionally the resume).

---

# PART L — Additional Findings from Final Cross-Check (v3)

> These are things discovered during the v3 pass that weren't captured in v2 — beyond the design-system details already folded into Part F.

### L.1 — A live deployed URL exists: `rmcool26.netlify.app`
This is printed in the resume's contact row (alongside email/phone/LinkedIn) but is **not shown anywhere on the portfolio site itself** (not in Nav, Footer, or Contact). If this is the canonical live URL, consider surfacing it (e.g. footer, or an "open in new tab" link) in the redesign — useful for sharing/SEO.

### L.2 — Resume has a richer personal tagline not used on the site
The resume's hero reads: **"Hi, I'm Rajat — I solve complex problems through design & systems thinking."** with the supporting line: *"UI/UX Lead with 9+ years turning manual chaos into automated clarity. Currently leading design at Terranxt — joined as #2, scaled the team to 12."* This is a punchier alternative framing to the site's current Hero copy and could be a candidate headline/sub for a redesigned Hero.

### L.3 — Resume has a more detailed, 4-entry Education section (vs. site's commented-out 2-entry version)
1. **Tutedude** — Advanced UI UX Designing, Advanced UX research (2025 – Ongoing)
2. **KVCH (IBM)** — Industrial Training (Jan 2019 – Jun 2019)
3. **Mangalayatan University** — Bachelor of Computer Applications (BCA) (2016 — 2019)
4. **Tata Consultancy Services** — Diploma in IT, Designing, Web Programming, Application & Advanced Programming (2014 — 2016)

> Note: item 3's university name ("Mangalayatan University") doesn't appear anywhere else in the codebase — `content.ts`'s commented-out education list just says "BCA (Bachelor of Computer Applications)" with no institution name. If education is re-added to the site, this resume version is the more complete source.

### L.4 — Resume has a granular Skills taxonomy not present in `content.ts`
Three groups, more detailed than the site's `experience.stackGrouped`:
- **UX & Product:** Design Systems · UX Research · Information Architecture · Prototyping · Mentoring · Design Ops · Stakeholder Management
- **UI & Visual:** UI Design · Hi-fi Prototyping · Interaction Design · Motion Specs · Accessibility · Dev Handoff · QA Partnership
- **Tools & Tech:** Figma · FigJam · Framer · Webflow · Notion · Jira · Miro · Zeplin · HTML · CSS · Tailwind · QGIS · ERDAS

> Note: this list includes tools (**Framer, Webflow, Zeplin**) not mentioned anywhere on the live site's "The Stack" card.

### L.5 — `AboutCombined.tsx` is not just unused — it's **broken** (would crash if re-enabled as-is)
It references `about.designTools`, `about.techTools`, `about.coreSkills`, `about.highlights1`, and `about.collaboration` — **none of these fields exist in `content.ts`**. (It does correctly use `about.timeline`, which exists as a near-duplicate of `experience.timeline`.) If anyone considers reviving this component, these fields need to be added to `content.ts` first — and Part L.4's skills taxonomy above would be good source material for `designTools`/`techTools`/`coreSkills`.

### L.6 — Small stat discrepancy between resume and site for the IIDE role
- **Site** (`content.experience.timeline[1]` and `content.projects[3]`): *"+16% lead conversion"*
- **Resume:** *"+40% engagement"*

Both describe the same IIDE role (2021–2022) but with different metrics/numbers. Flag to the owner to confirm which figure is accurate before using either in the redesign.

### L.7 — Resume frames the pvNXT case study slightly differently (Problem / Role / Outcome, one paragraph each)
A condensed, single-screen version of the case study exists in the resume:
- **Problem:** *"Solar consumers, EPC partners, and installers were juggling three disconnected portals plus spreadsheets and WhatsApp — handoffs broke daily and no one trusted the data."*
- **Role:** *"Led end-to-end design — research with engineers and field teams, IA and flows, design system from scratch, hi-fi UI, motion specs, dev handoff and post-launch QA."*
- **Outcome:** *"One unified Solar Suite across web and mobile. Tasks complete ~30% faster. Design system now powers 3+ live products and a team that grew from 2 to 12. Incubated at FITT IIT Delhi."* — plus a 4th stat not seen elsewhere: **"3 live portals — Consumer · EPC · Installer"**.

> The **"~30% faster task completion"** figure also appears in the dead `content.marquee` (Part I.4) but nowhere on the live site's visible text — could be a good stat to surface in a redesigned Outcome section.

### L.8 — "Now" closing statement from the resume (could inform a redesigned Contact/closing section)
*"Currently leading design at Terranxt and open to work at product-led companies — especially complex SaaS, enterprise tools, or anything where design has to fight for clarity. Best way to reach me is email or LinkedIn."*

---

*End of v3 (final) handoff. Supersedes v1 and v2 — those can be discarded.*
