# pvNXT Case Study + Work Filter Plan

Project: Rajat Mishra / rmcool26 Portfolio  
Current goal: Make the Work page easier to scan and make the pvNXT case study more interesting, visual, short, and clear.

---

## 0. Important Context / Guardrails

Completed work should not be redone:

- Cursor Phase 1 is already done.
- Tooltip Phase 2 is already done.
- Multi-page split work should not be disturbed.
- About and Experience pages have already been handled.
- Do not redesign the whole homepage.
- Do not touch unrelated project content.
- Do not change routes unless explicitly required.
- Do not add new dependencies.

Main motive for this task:

> The case study should not feel boring to read. A viewer should quickly understand what was built, what Rajat did, and why it mattered.

Preferred style:

- Clean
- Short
- Visual-heavy
- Professional but not corporate
- rmcool26 tone: calm, clear, slightly cool
- Easy for recruiters, hiring managers, and non-designers to understand

---

## 1. Current Repo Findings

Checked files:

- `src/content.ts`
- `src/components/portfolio/WorkGrid.tsx`
- `src/pages/WorkDetail.tsx`
- `src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx`
- `public/rmcool26_work_summary.md`
- `public/work_redesign.md`

Current work filter keys:

```ts
export type FilterKey = "all" | "website" | "web-app" | "mobile-app" | "ppt-pdf";
```

Current filters in `WorkGrid.tsx`:

```txt
All
Website
Web App
Mobile App
PPT/PDF
```

Required new filter:

```txt
Case Study
```

Recommended final filter order:

```txt
All
Case Study
Web App
Website
Mobile App
Decks & Docs
```

Reason:

- `All` remains the default overview.
- `Case Study` should come immediately after All because it is the strongest proof layer.
- `Web App` comes next because Rajat’s strongest current work is enterprise/product workflows.
- `Website` shows business/client breadth.
- `Mobile App` shows capability range.
- `Decks & Docs` is useful, but secondary.

---

## 2. Work Page Filter Plan

### 2.1 Add new filter key

Update `src/content.ts`:

```ts
export type FilterKey = "all" | "case-study" | "web-app" | "website" | "mobile-app" | "ppt-pdf";
```

### 2.2 Update filter order and labels

Update `src/components/portfolio/WorkGrid.tsx`:

```ts
const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "case-study", label: "Case Study" },
  { key: "web-app", label: "Web App" },
  { key: "website", label: "Website" },
  { key: "mobile-app", label: "Mobile App" },
  { key: "ppt-pdf", label: "Decks & Docs" },
];
```

Note: Keep the internal key `ppt-pdf` to avoid wider data changes. Only change the visible label to `Decks & Docs`.

### 2.3 Add `case-study` filter to selected projects

Recommended projects for Case Study filter:

```txt
pvNXT Solar Suite
SCADA Monitoring
Spade
IIDE
Operation Comfort
```

Why these:

- `pvNXT Solar Suite` = flagship full case study.
- `SCADA Monitoring` = strong enterprise workflow proof, even if WIP.
- `Spade` = strong product/business outcome.
- `IIDE` = CRO + conversion + team leadership.
- `Operation Comfort` = UX audit/redesign case-style proof.

Example:

```ts
filters: ["case-study", "web-app"]
```

or

```ts
filters: ["case-study", "website"]
```

### 2.4 Scope for Work filter implementation

Allowed files for this part:

- `src/content.ts`
- `src/components/portfolio/WorkGrid.tsx`

Do not touch:

- Hero
- Start Here
- Nav unless absolutely required
- Footer
- Cursor
- Tooltip
- Routes
- Other pages

---

## 3. pvNXT Case Study Page Current State

Current case study file:

```txt
src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx
```

Current sections:

```txt
Hero
Before
System
My Role
Process
Screens / The Work
Decisions
Outcome
Next
Footer
```

Current TOC:

- Fixed right-side numeric navigation.
- Desktop-only.
- Labels are mostly hover-based.
- Looks cool but is not the most useful for readers.

Recommended TOC update:

- Use modern sticky pill navigation after hero.
- Visible and understandable without hover.
- Desktop: sticky horizontal nav.
- Mobile: horizontal scroll pills.
- Active section highlight if simple to preserve.

Recommended TOC labels:

```txt
Overview
Problem
System
Role
Process
Product Stories
Decisions
Outcome
```

---

## 4. Locked pvNXT Stats

Use only these stats:

```txt
4+ EPC organisations
6+ end users
50+ screens shipped
10–15 min roof analysis
FITT IIT Delhi incubated
```

Recommended display labels:

```txt
4+ EPCs
6+ real users
50+ screens shipped
10–15 min roof analysis
FITT IIT Delhi incubated
```

Use `FITT IIT Delhi incubated` as a credibility badge/chip near hero and/or outcome, not just as a normal stat.

---

## 5. Recommended pvNXT Case Study Layout

### Section 1 — Hero / Overview

Goal: In 5 seconds, user should understand what this project is.

Suggested structure:

```txt
Case Study · pvNXT Solar Suite

A solar workflow system built from messy handoffs.

I helped turn WhatsApp, Excel, manual site visits and scattered solar operations into a connected product suite across EPCs, consumers and installers.
```

Proof row:

```txt
4+ EPCs
6+ real users
50+ screens shipped
10–15 min roof analysis
```

Credibility badge:

```txt
FITT IIT Delhi incubated
```

Primary visual:

- Use a large full-suite product image/mockup.
- Existing asset likely useful: `rmcool26-pvNXT-suite.svg` or current suite visual.

---

### Section 2 — Quick Snapshot

Goal: Give a short summary before the deeper story.

Suggested content:

```txt
What it is
A connected solar product suite for EPC teams, consumers and installers.

My role
UI/UX Design Lead — product architecture, UX flows, design system, dev handoff and QA.

Why it mattered
Solar projects were running across calls, WhatsApp, Excel and repeated site visits. pvNXT brought the workflow into one system.
```

Layout:

- 3 compact cards.
- Clear labels.
- No long paragraph.

---

### Section 3 — The Mess Before pvNXT

Goal: Show the pain clearly without a long essay.

Suggested copy:

```txt
Before pvNXT, one solar project moved through too many disconnected places.

Leads came from calls.
Site details came through WhatsApp.
Analysis happened in separate tools.
Proposals were built manually.
Installers updated progress through photos and phone calls.

No one had one clean view of the project.
```

Visual needed:

Create a simple messy workflow graphic:

```txt
Consumer → Sales call → Site visit → WhatsApp photos → Excel → Design team → Proposal PDF → Installer → More calls
```

Graphic direction:

- Slightly messy but readable.
- Use light beige/neutral background if matching current page.
- Use small icons for WhatsApp, Excel, call, site visit, PDF, installer.

---

### Section 4 — What We Built / Connected System

Goal: Make the system easy to understand.

Suggested intro:

```txt
We built one connected suite where every role had its own workspace, but the project data stayed connected.
```

Cards:

```txt
pvNXT Studio
For EPC teams to manage leads, analysis, proposals and projects.
Link: /work/pvnxt-studio

pvNXT Connect
For consumers to estimate, compare, request and track solar installation.
Link: /work/pvnxt-connect-web

pvNXT Go
For installers to receive tasks, upload proof and update progress.
Link: /work/pvnxt-go-web

Proposal System
For clean solar proposals generated from real project data.
Link: /work/proposal-design
```

Optional cards if visually manageable:

```txt
pvNXT Field App
For field teams to capture site details in one visit.
Link: /work/pvnxt-field-app

SCADA Monitoring
For solar plant monitoring, alerts and O&M workflows.
Link: /work/scada-monitoring
```

Important content strategy:

- The case study should be the umbrella story.
- Do not deeply re-describe every module here.
- Use short cards and link to the individual `/work/...` pages for detail.

Visual needed:

Connected ecosystem map:

```txt
One Project Data Core
├── EPC Studio
├── Consumer Connect
├── Installer Go
├── Proposal System
├── Field App
└── SCADA / O&M
```

---

### Section 5 — My Role

Goal: Make Rajat’s ownership very clear.

Suggested copy:

```txt
I joined early, when there was no design system, no product structure and no clean workflow.

My job was not just to make screens. I had to understand the solar process, shape the product, design the flows, support developers and keep improving the product after launch.
```

Bullets:

```txt
Mapped EPC, consumer and installer workflows
Designed core web and mobile flows
Built reusable design system components
Created dev-ready Figma handoffs
Reviewed builds and logged UX issues
Presented product demos at IIT Delhi FITT
```

Keep tone confident but not over-dramatic.

---

### Section 6 — Process

Goal: Show how Rajat works without making it boring.

Use 4 steps:

```txt
01 Decode the real workflow
Sat with teams, understood how projects actually moved, and mapped the messy process.

02 Structure the system
Defined roles, permissions, data flow, screens and edge cases before high-fidelity UI.

03 Design the product
Created dashboards, forms, proposal flows, mobile screens and reusable components.

04 Ship with the team
Worked with developers, reviewed builds, tested flows and improved the product after feedback.
```

Visual needed:

- Simple 4-step process timeline.
- Could use cards or a horizontal/vertical timeline.

---

### Section 7 — Product Stories / Key Screens

Goal: This should be the most visual section.

Current tab idea is good. Improve content and links.

Recommended tabs/cards:

```txt
pvNXT Studio
Proposal System
pvNXT Connect
pvNXT Go
Field App
```

Optional if enough space:

```txt
SCADA Monitoring
pvNXT Atlas
```

For each story use the same short pattern:

```txt
Problem
What I designed
Why it helped
View detail page
```

Example 1:

```txt
pvNXT Studio

Problem
EPC teams were managing leads, site data, layouts and proposals across disconnected tools.

What I designed
A web portal for project intake, rooftop analysis, proposal generation and project tracking.

Why it helped
The team could move from site data to proposal inside one workflow.

View detailed project → /work/pvnxt-studio
```

Example 2:

```txt
Proposal System

Problem
Customers needed a proposal they could actually understand, not a rough cost sheet.

What I designed
A clean proposal format with system details, cost, subsidy, savings and solar impact.

Why it helped
EPCs could send a more trustworthy proposal directly from real project data.

View detailed project → /work/proposal-design
```

Example 3:

```txt
pvNXT Connect

Problem
Consumers had too many doubts and very little visibility after showing interest in solar.

What I designed
A consumer portal for estimate, quote, installation tracking and solar journey clarity.

Why it helped
Consumers could understand the process without chasing updates on calls.

View detailed project → /work/pvnxt-connect-web
```

Example 4:

```txt
pvNXT Go

Problem
Installer updates were scattered across calls, photos and WhatsApp messages.

What I designed
An installer portal for tasks, proof uploads, issue logging and live progress updates.

Why it helped
EPC teams could see progress without chasing installers manually.

View detailed project → /work/pvnxt-go-web
```

Example 5:

```txt
Field App

Problem
Site visits created incomplete handoffs. The design team still had to ask for missing details later.

What I designed
A field capture app for site data, rooftop details, keepouts, measurements and handoff notes.

Why it helped
One site visit could create a cleaner design handoff.

View detailed project → /work/pvnxt-field-app
```

Visual rule:

- Use one strong image per product story.
- Avoid repeating the same image 4 times.
- If a product has no image yet, keep a clean placeholder and add a clear TODO note.

---

### Section 8 — Design Decisions

Goal: Show product thinking.

Use 3 decision cards:

```txt
Role-based views instead of one common dashboard
Because consumers, EPCs and installers need different information from the same project.

Mid-fidelity before visual polish
Because the workflow was complex. Structure had to be right before UI became beautiful.

Reusable components from day one
Because one product quickly became a suite.
```

Keep this short.

---

### Section 9 — Outcome

Goal: End with real-world proof.

Suggested heading:

```txt
From messy solar workflows to a live product suite.
```

Suggested copy:

```txt
The suite moved from early workflow mapping to a live product ecosystem used by real teams.

4+ EPC organisations. 6+ real users. 50+ screens shipped. 10–15 min roof analysis. Incubated at FITT IIT Delhi.
```

Stats/cards:

```txt
4+ EPCs
6+ real users
50+ screens shipped
10–15 min roof analysis
FITT IIT Delhi incubated
```

Optional final rmcool26 line:

```txt
Messy solar workflows, made usable — and shipped.
```

---

### Section 10 — Explore Connected Work / Next

Replace or improve current “Next up” section with links to related work.

Suggested copy:

```txt
This was not one app.
It became a product ecosystem.
```

Links:

```txt
pvNXT Studio → /work/pvnxt-studio
pvNXT Connect → /work/pvnxt-connect-web
pvNXT Go → /work/pvnxt-go-web
Proposal Design → /work/proposal-design
Field App → /work/pvnxt-field-app
SCADA Monitoring → /work/scada-monitoring
```

---

## 6. Graphics / Image Checklist for Rajat

Rajat can create and add these graphics later:

### 1. Hero product mockup

Purpose: Establish product quality fast.

Should show:

- pvNXT suite overview
- Laptop/browser frame
- Maybe small mobile screens nearby

Where:

- Hero / Overview section

---

### 2. Messy workflow before pvNXT

Purpose: Make the problem visual.

Should show:

```txt
Calls → WhatsApp → Excel → AutoCAD/PVsyst → Manual proposal → Installer calls → No single status
```

Where:

- Problem section

---

### 3. Connected ecosystem map

Purpose: Explain suite architecture.

Should show:

```txt
One project data core connected to:
EPC Studio
Consumer Connect
Installer Go
Proposal System
Field App
SCADA/O&M
```

Where:

- What We Built / System section

---

### 4. Process timeline

Purpose: Explain how Rajat worked.

Should show:

```txt
Decode → Structure → Design → Ship
```

Where:

- Process section

---

### 5. Product story images

Purpose: Keep the case study visual-heavy.

Needed images:

```txt
pvNXT Studio screen
Proposal System screen/PDF
pvNXT Connect screen
pvNXT Go screen
Field App screen
Optional: SCADA Monitoring screen
```

Where:

- Product Stories / Key Screens section

---

## 7. Recommended Implementation Phases

### Phase 1 — Work filter update

Files:

- `src/content.ts`
- `src/components/portfolio/WorkGrid.tsx`

Tasks:

- Add `case-study` filter key.
- Add Case Study chip after All.
- Reorder filters.
- Rename visible `PPT/PDF` label to `Decks & Docs`.
- Add `case-study` filter to selected projects.
- Run build.

---

### Phase 2 — Case study content/layout update

File:

- `src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx`

Tasks:

- Rewrite case study structure with shorter sections.
- Update stats with locked values.
- Update TOC to modern sticky pill nav.
- Add connected product cards with internal links.
- Keep visual-heavy “Product Stories” section.
- Use existing assets where possible.
- Do not add new dependencies.
- Run build.

---

### Phase 3 — Visual replacement later

After Rajat creates graphics/images:

- Replace placeholders with final assets.
- Do not rewrite content again unless needed.

---

## 8. Exact Prompt for Gamma / Gemma / OpenCode

Use this prompt for implementation:

```txt
Before doing anything, read and strictly follow:
- src/docs/agent.md if it exists
- airole_rmcool26portfolio.md if it exists
- public/rmcool26_work_summary.md if it exists
- public/work_redesign.md if it exists

We are working on Rajat Mishra / rmcool26 portfolio.

Important context:
- Cursor Phase 1 is already done. Do not touch cursor implementation.
- Tooltip Phase 2 is already done. Do not touch tooltip implementation.
- About and Experience pages are already handled. Do not edit them.
- Do not redesign homepage.
- Do not change Hero or Start Here.
- Do not change routes unless this task explicitly requires a link to an already existing route.
- Do not add new dependencies.
- Do not refactor unrelated code.
- Do not change project content unrelated to the requested filter/case study updates.

Task has two parts:

PART 1 — Add Case Study filter to Work grid

Files allowed for Part 1:
- src/content.ts
- src/components/portfolio/WorkGrid.tsx

Requirements:
1. Add a new work filter key: case-study.
2. Final visible filter order should be:
   - All
   - Case Study
   - Web App
   - Website
   - Mobile App
   - Decks & Docs
3. Keep the existing internal ppt-pdf key if easier, but change its visible label from PPT/PDF to Decks & Docs.
4. Add case-study filter to these projects:
   - pvNXT Solar Suite
   - SCADA Monitoring
   - Spade
   - IIDE
   - Operation Comfort
5. Do not change card design unless required for the new filter to work.
6. Do not change routes.

PART 2 — Update pvNXT case study page

File allowed for Part 2:
- src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx

Goal:
Make the pvNXT case study shorter, clearer, more visual, less boring, and easier to understand.
It should explain what was built, what Rajat did, and why it mattered.
Use rmcool26 tone: clean, simple, professional, slightly cool, not corporate.

Locked stats — use only these:
- 4+ EPCs
- 6+ real users
- 50+ screens shipped
- 10–15 min roof analysis
- FITT IIT Delhi incubated

Recommended new section structure:
1. Hero / Overview
2. Quick Snapshot
3. The Mess Before pvNXT
4. What We Built / Connected System
5. My Role
6. Process
7. Product Stories / Key Screens
8. Design Decisions
9. Outcome
10. Explore Connected Work / Next

Hero copy direction:
Eyebrow: Case Study · pvNXT Solar Suite
Headline: A solar workflow system built from messy handoffs.
Subcopy: I helped turn WhatsApp, Excel, manual site visits and scattered solar operations into a connected product suite across EPCs, consumers and installers.

Hero proof row:
- 4+ EPCs
- 6+ real users
- 50+ screens shipped
- 10–15 min roof analysis

Show FITT IIT Delhi incubated as a credibility badge/chip.

Quick Snapshot content:
What it is:
A connected solar product suite for EPC teams, consumers and installers.

My role:
UI/UX Design Lead — product architecture, UX flows, design system, dev handoff and QA.

Why it mattered:
Solar projects were running across calls, WhatsApp, Excel and repeated site visits. pvNXT brought the workflow into one system.

Problem section copy direction:
Before pvNXT, one solar project moved through too many disconnected places.
Leads came from calls.
Site details came through WhatsApp.
Analysis happened in separate tools.
Proposals were built manually.
Installers updated progress through photos and phone calls.
No one had one clean view of the project.

What We Built section:
Add short connected product cards with internal links:
- pvNXT Studio → /work/pvnxt-studio
- pvNXT Connect → /work/pvnxt-connect-web
- pvNXT Go → /work/pvnxt-go-web
- Proposal System → /work/proposal-design
Optional if layout allows:
- Field App → /work/pvnxt-field-app
- SCADA Monitoring → /work/scada-monitoring

Important:
The case study is the umbrella story. Do not deeply re-describe every product module. Use short cards and link to individual /work pages.

My Role section copy:
I joined early, when there was no design system, no product structure and no clean workflow.
My job was not just to make screens. I had to understand the solar process, shape the product, design the flows, support developers and keep improving the product after launch.

Role bullets:
- Mapped EPC, consumer and installer workflows
- Designed core web and mobile flows
- Built reusable design system components
- Created dev-ready Figma handoffs
- Reviewed builds and logged UX issues
- Presented product demos at IIT Delhi FITT

Process steps:
01 Decode the real workflow
Sat with teams, understood how projects actually moved, and mapped the messy process.

02 Structure the system
Defined roles, permissions, data flow, screens and edge cases before high-fidelity UI.

03 Design the product
Created dashboards, forms, proposal flows, mobile screens and reusable components.

04 Ship with the team
Worked with developers, reviewed builds, tested flows and improved the product after feedback.

Product Stories / Key Screens:
Keep it visual-heavy. Use one strong image per story where assets exist. Avoid repeating the same image four times.
Recommended stories:
- pvNXT Studio
- Proposal System
- pvNXT Connect
- pvNXT Go
- Field App
Optional:
- SCADA Monitoring

Each product story should follow this short pattern:
- Problem
- What I designed
- Why it helped
- View detail page link

Design Decisions cards:
1. Role-based views instead of one common dashboard
Because consumers, EPCs and installers need different information from the same project.

2. Mid-fidelity before visual polish
Because the workflow was complex. Structure had to be right before UI became beautiful.

3. Reusable components from day one
Because one product quickly became a suite.

Outcome section:
Heading: From messy solar workflows to a live product suite.
Copy: The suite moved from early workflow mapping to a live product ecosystem used by real teams.
Stats: 4+ EPCs, 6+ real users, 50+ screens shipped, 10–15 min roof analysis, FITT IIT Delhi incubated.
Optional final line: Messy solar workflows, made usable — and shipped.

Explore Connected Work / Next section:
Use links to:
- /work/pvnxt-studio
- /work/pvnxt-connect-web
- /work/pvnxt-go-web
- /work/proposal-design
- /work/pvnxt-field-app
- /work/scada-monitoring

TOC update:
Replace or improve current right-side hover-only numeric TOC with a more useful modern sticky section nav.
Recommended labels:
- Overview
- Problem
- System
- Role
- Process
- Product Stories
- Decisions
- Outcome

TOC behavior:
- Desktop: sticky horizontal pills or compact sticky nav.
- Mobile: horizontal scroll pills.
- Labels must be visible without hover.
- Keep active section highlight only if simple and safe.

Visual / placeholder guidance:
Use existing assets where available. If a needed graphic does not exist, add a clean placeholder/TODO comment in code but do not invent fake images.
Needed future graphics:
1. Hero product mockup
2. Messy workflow before pvNXT
3. Connected ecosystem map
4. Decode → Structure → Design → Ship process timeline
5. One product image each for Studio, Proposal, Connect, Go, Field App

Do not touch:
- cursor implementation
- tooltip implementation
- homepage Hero
- Start Here section
- About page
- Experience page
- Footer/Nav unless absolutely required
- routes
- unrelated work item content

After implementation:
- Run npm run build.
- Do not fix unrelated lint issues.

Output summary must include:
1. Files changed
2. Work filter changes made
3. Case study sections updated
4. Stats used
5. Links added to related work pages
6. Build result
7. Anything intentionally left untouched
```

---

## 9. QA Checklist After Implementation

### Work filter QA

Check:

- `All` works.
- `Case Study` appears after All.
- `Case Study` count is correct.
- `Web App`, `Website`, `Mobile App`, `Decks & Docs` still work.
- No horizontal overflow on mobile filter chips.
- No card route breaks.

### Case study QA

Check `/case/terranxt`:

- Hero clearly explains the project.
- Stats are exactly the locked values.
- FITT IIT Delhi incubated is visible.
- Content is shorter and easier to scan.
- Product stories link correctly to:
  - `/work/pvnxt-studio`
  - `/work/pvnxt-connect-web`
  - `/work/pvnxt-go-web`
  - `/work/proposal-design`
  - `/work/pvnxt-field-app`
  - `/work/scada-monitoring`
- TOC works on desktop.
- TOC does not break mobile.
- No horizontal overflow.
- Build passes.

---

## 10. Final Recommendation

Do the work in this order:

1. Add Work page Case Study filter first.
2. Then update the pvNXT case study layout/content.
3. Keep current project detail pages as supporting pages.
4. Do not rewrite every `/work/...` page right now.
5. Add final custom graphics later after layout is approved.
