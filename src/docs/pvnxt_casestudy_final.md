# FINAL PLAN — Work Page Case Study Filter + pvNXT Case Study Revamp

Project: Rajat Mishra / rmcool26 Portfolio  
Final status: Ready for Gemma / OpenCode implementation prompts  
Goal: Add a high-priority Case Study filter and revamp the pvNXT master case study so it is visual-heavy, short, clear, and not boring to read.

---

## 0. What Changed From the Previous Plan

I compared our earlier plan with the uploaded file `plan_casestudy_and_workfilter.md`.

### Kept from our earlier plan

- Final Work filter order:
  ```txt
  All → Case Study → Web App → Website → Mobile App → Decks & Docs
  ```
- Locked stats:
  ```txt
  4+ EPCs
  6+ real users
  50+ screens shipped
  10–15 min roof analysis
  FITT IIT Delhi incubated
  ```
- The case study should be the umbrella story.
- Individual module detail pages should be linked, not fully re-described.
- Strong internal links to:
  ```txt
  /work/pvnxt-studio
  /work/pvnxt-connect-web
  /work/pvnxt-go-web
  /work/proposal-design
  /work/pvnxt-field-app
  /work/scada-monitoring
  ```
- Short rmcool26 tone: clean, simple, professional, slightly cool.

### Added from uploaded draft because it improves the plan

- 60% visual / 40% text principle.
- TL;DR Snapshot section early in the page.
- Numbered case-study section rhythm inspired by the reference.
- One flagship inline deep-dive, so the master page still shows real thinking without becoming too long.
- Product cards for the other modules with “Explore full breakdown” links.
- Visual/stat-band style for outcomes.
- Stronger graphics checklist:
  - messy workflow diagram
  - ecosystem hub map
  - flagship flow diagram
  - before/after screen pair
  - product card screens
- More explicit anti-boredom rule: a skimmer should understand the case study in 30 seconds; a reader in 3–4 minutes.

### Changed from uploaded draft

The uploaded draft suggested a possible zero-`content.ts` implementation by reading existing `Case Study` tags. After inspecting the current repo, the better implementation is to update `src/content.ts` surgically because:

- `FilterKey` is defined in `src/content.ts`.
- `workItems` already use `filters: FilterKey[]`.
- `WorkGrid.tsx` already counts by `item.filters.includes(key)`.
- Adding `case-study` to the existing filter system is cleaner and less fragile than special-casing tags.

So final implementation uses:

```txt
src/content.ts
src/components/portfolio/WorkGrid.tsx
```

for the Work filter update.

---

## 1. Non-Negotiable Guardrails

Do not redo completed work:

- Cursor Phase 1 is already done.
- Tooltip Phase 2 is already done.
- Multi-page split work should not be disturbed.
- About and Experience pages have already been handled.
- Do not redesign the homepage.
- Do not change homepage Hero.
- Do not change Start Here.
- Do not change routes unless linking to an already existing route.
- Do not add dependencies.
- Do not refactor unrelated code.
- Do not touch project content unrelated to this task.

Main motive:

> The case study should not feel boring. A viewer should quickly understand what was built, what Rajat did, and why it mattered.

Preferred style:

- Clean
- Short
- Visual-heavy
- Professional but not corporate
- rmcool26 tone: calm, clear, slightly cool
- Easy for recruiters, hiring managers, and non-designers

---

## 2. Work Page Filter Final Plan

### 2.1 Final filter order

```txt
All
Case Study
Web App
Website
Mobile App
Decks & Docs
```

### 2.2 Why this order is best

1. **All** — default overview.
2. **Case Study** — highest-proof content. Recruiters and leads who want depth see it quickly.
3. **Web App** — strongest rmcool26 positioning: messy workflows → dashboards/products.
4. **Website** — shows business/client breadth.
5. **Mobile App** — supports range and field workflow capability.
6. **Decks & Docs** — useful proof, but secondary.

### 2.3 Required code changes

Update `src/content.ts`:

```ts
export type FilterKey = "all" | "case-study" | "web-app" | "website" | "mobile-app" | "ppt-pdf";
```

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

Important:

- Keep internal key `ppt-pdf`.
- Only visible label changes from `PPT/PDF` to `Decks & Docs`.

### 2.4 Projects that should receive `case-study`

Add `case-study` to these work items without removing existing filters:

```txt
pvNXT Solar Suite
SCADA Monitoring
Spade
IIDE
Operation Comfort
```

Examples:

```ts
filters: ["case-study", "web-app"]
```

```ts
filters: ["case-study", "website"]
```

### 2.5 Files allowed for Work filter step

```txt
src/content.ts
src/components/portfolio/WorkGrid.tsx
```

Do not touch other files for this step.

---

## 3. pvNXT Master Case Study Final Strategy

### Core rule

The pvNXT master case study should be an umbrella story.

It should explain:

```txt
What was the messy problem?
What system was built?
What did Rajat own?
What products shipped?
What changed after shipping?
```

It should not fully duplicate every sub-product page.

### Link vs describe decision

Final decision:

```txt
Link, do not deeply re-describe.
```

Reason:

- Keeps the master case study short.
- Avoids duplicate content.
- Lets recruiters choose their depth.
- Makes `/work/...` pages useful as supporting breakdowns.

Exception:

- One flagship product gets a short inline deep-dive inside the master case study.
- Recommended flagship: `pvNXT Studio`, because it appears to be the strongest EPC/product workflow proof.

---

## 4. Locked Case Study Stats

Use only these values:

```txt
4+ EPCs
6+ real users
50+ screens shipped
10–15 min roof analysis
FITT IIT Delhi incubated
```

Recommended display:

- Hero proof row:
  ```txt
  4+ EPCs
  6+ real users
  50+ screens shipped
  10–15 min roof analysis
  ```

- Credibility badge:
  ```txt
  FITT IIT Delhi incubated
  ```

Do not use older stats like 20+ EPCs or 1k+ users.

---

## 5. Final Case Study Layout

Design principle:

```txt
60% visual / 40% text
```

Reading goal:

```txt
Skimmer understands it in 30 seconds.
Reader finishes it in 3–4 minutes.
```

---

# 01. Hero / Overview

### Goal

Tell the viewer what this is immediately.

### Suggested content

Eyebrow:

```txt
Case Study · pvNXT Solar Suite
```

Headline:

```txt
A solar workflow system built from messy handoffs.
```

Subcopy:

```txt
I helped turn WhatsApp, Excel, manual site visits and scattered solar operations into a connected product suite across EPCs, consumers and installers.
```

Meta chips:

```txt
UI/UX Design Lead
Terranxt · 2022 — Now
Web portals + mobile apps
Live product
FITT IIT Delhi incubated
```

Proof row:

```txt
4+ EPCs
6+ real users
50+ screens shipped
10–15 min roof analysis
```

### Visual

Use existing suite/product visual if available.

Future graphic:

- Hero composite mockup with laptop/browser + small mobile screens.

---

# 02. TL;DR Snapshot

### Goal

Anti-boredom section. The user gets the whole story early.

### Layout

Four compact cards:

```txt
The mess
Solar work was split across calls, WhatsApp, Excel, manual analysis and repeated site visits.

My role
I led UX architecture, product flows, design system, handoff, QA and product demos.

What shipped
A connected suite across EPC, consumer, installer, proposal and field workflows.

Impact
4+ EPCs, 6+ real users, 50+ screens shipped, 10–15 min roof analysis, FITT IIT Delhi incubated.
```

---

# 03. The Mess Before pvNXT

### Goal

Make the pain clear without a long essay.

### Suggested copy

```txt
Before pvNXT, one solar project moved through too many disconnected places.

Leads came from calls.
Site details came through WhatsApp.
Analysis happened in separate tools.
Proposals were built manually.
Installers updated progress through photos and phone calls.

No one had one clean view of the project.
```

### Visual

Graphic #1: messy workflow diagram.

Suggested diagram:

```txt
Consumer → Sales call → Site visit → WhatsApp photos → Excel → Design team → Proposal PDF → Installer → More calls
```

Visual style:

- Slightly sketchy or tangled.
- Muted colors.
- One “messy knot” in the middle.
- But still readable and premium.

---

# 04. The Connected System

### Goal

Show what was built in one simple visual.

### Suggested intro

```txt
We built one connected suite where every role had its own workspace, but the project data stayed connected.
```

### Product cards

```txt
pvNXT Studio
For EPC teams to manage leads, roof analysis, proposals and projects.
Explore full breakdown → /work/pvnxt-studio

pvNXT Connect
For consumers to estimate, compare, request and track solar installation.
Explore full breakdown → /work/pvnxt-connect-web

pvNXT Go
For installers to receive tasks, upload proof and update progress.
Explore full breakdown → /work/pvnxt-go-web

Proposal System
For clean solar proposals generated from real project data.
Explore full breakdown → /work/proposal-design

Field App
For field teams to capture site details in one visit.
Explore full breakdown → /work/pvnxt-field-app

SCADA Monitoring
For solar plant monitoring, alerts and O&M workflows.
Explore full breakdown → /work/scada-monitoring
```

### Visual

Graphic #2: ecosystem hub map.

Suggested structure:

```txt
One project data core
├── pvNXT Studio
├── pvNXT Connect
├── pvNXT Go
├── Proposal System
├── Field App
└── SCADA / O&M
```

---

# 05. My Role

### Goal

Make Rajat’s ownership clear.

### Suggested copy

```txt
I joined early, when there was no design system, no product structure and no clean workflow.

My job was not just to make screens. I had to understand the solar process, shape the product, design the flows, support developers and keep improving the product after launch.
```

### Role bullets

```txt
Mapped EPC, consumer and installer workflows
Designed core web and mobile flows
Built reusable design system components
Created dev-ready Figma handoffs
Reviewed builds and logged UX issues
Presented product demos at IIT Delhi FITT
```

Optional compact metadata grid:

```txt
Role: UI/UX Design Lead
Team: Product + frontend + backend + EPC stakeholders
Tools: Figma, FigJam, Jira, HTML/CSS thinking
Duration: 2022 — Now
```

---

# 06. Process

### Goal

Show how Rajat works, not just what the output looked like.

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

### Visual

Graphic #3: process timeline.

```txt
Decode → Structure → Design → Ship
```

---

# 07. Product Stories / Key Screens

### Goal

Most visual section. Let the images do more work than the paragraphs.

### Recommended structure

- One flagship inline deep-dive: `pvNXT Studio`.
- Other products as compact cards with image + short copy + link.

---

## 07A. Flagship Inline Deep-Dive — pvNXT Studio

### Why Studio

Recommended as flagship because it is the strongest EPC/product workflow proof and connects to roof analysis, proposal generation and project tracking.

### Suggested copy pattern

```txt
pvNXT Studio

Problem
EPC teams were managing leads, site data, layouts and proposals across disconnected tools.

What I designed
A web portal for project intake, rooftop analysis, proposal generation and project tracking.

Why it helped
The team could move from site data to proposal inside one workflow.

Explore full breakdown → /work/pvnxt-studio
```

### Visual

Graphic #4 / existing screen:

- One large pvNXT Studio dashboard/screen.
- Optional simple user-flow diagram:

```txt
Lead → Site data → Roof analysis → Proposal → Project tracking
```

---

## 07B. Compact Product Cards

### Proposal System

```txt
Problem
Customers needed a proposal they could actually understand, not a rough cost sheet.

What I designed
A clean proposal format with system details, cost, subsidy, savings and solar impact.

Why it helped
EPCs could send a more trustworthy proposal directly from real project data.

Explore full breakdown → /work/proposal-design
```

### pvNXT Connect

```txt
Problem
Consumers had too many doubts and very little visibility after showing interest in solar.

What I designed
A consumer portal for estimate, quote, installation tracking and solar journey clarity.

Why it helped
Consumers could understand the process without chasing updates on calls.

Explore full breakdown → /work/pvnxt-connect-web
```

### pvNXT Go

```txt
Problem
Installer updates were scattered across calls, photos and WhatsApp messages.

What I designed
An installer portal for tasks, proof uploads, issue logging and live progress updates.

Why it helped
EPC teams could see progress without chasing installers manually.

Explore full breakdown → /work/pvnxt-go-web
```

### Field App

```txt
Problem
Site visits created incomplete handoffs. The design team still had to ask for missing details later.

What I designed
A field capture app for site data, rooftop details, keepouts, measurements and handoff notes.

Why it helped
One site visit could create a cleaner design handoff.

Explore full breakdown → /work/pvnxt-field-app
```

### SCADA Monitoring

```txt
Problem
O&M teams needed a clearer way to monitor plant health, alerts and work orders.

What I designed
A monitoring workflow for plant visibility, alerts, issue tracking and field actions.

Why it helped
Teams could move from reactive checking to a more visible operations flow.

Explore full breakdown → /work/scada-monitoring
```

### Visual rule

- Use one strong image per product story where assets exist.
- Avoid repeating the same image multiple times.
- If no image exists, use a clean placeholder with a TODO comment.

---

# 08. Design Decisions That Mattered

### Goal

Show thinking without making the page text-heavy.

Use 3 cards:

```txt
Role-based views instead of one common dashboard
Because consumers, EPCs and installers need different information from the same project.

Mid-fidelity before visual polish
Because the workflow was complex. Structure had to be right before UI became beautiful.

Reusable components from day one
Because one product quickly became a suite.
```

Optional fourth card if needed:

```txt
Proposal clarity over technical overload
Because consumers needed confidence, not a document full of jargon.
```

### Visual

Optional Graphic #5:

- before/after screen pair
- or mini decision cards with icons

---

# 09. Results & Learnings

### Goal

End with proof.

### Heading

```txt
From messy solar workflows to a live product suite.
```

### Copy

```txt
The suite moved from early workflow mapping to a live product ecosystem used by real teams.

4+ EPCs. 6+ real users. 50+ screens shipped. 10–15 min roof analysis. FITT IIT Delhi incubated.
```

### Stat band

```txt
4+ EPCs
6+ real users
50+ screens shipped
10–15 min roof analysis
FITT IIT Delhi incubated
```

### Learnings card

Use max 3 bullets:

```txt
Complex products become usable when roles are clear.
Mid-fidelity saves time when workflows are messy.
A design system is not decoration — it helps teams ship faster.
```

Optional final rmcool26 line:

```txt
Messy solar workflows, made usable — and shipped.
```

---

# 10. Explore Connected Work / Next

### Goal

Keep users moving into supporting proof pages.

### Suggested copy

```txt
This was not one app.
It became a product ecosystem.
```

### Links

```txt
pvNXT Studio → /work/pvnxt-studio
pvNXT Connect → /work/pvnxt-connect-web
pvNXT Go → /work/pvnxt-go-web
Proposal Design → /work/proposal-design
Field App → /work/pvnxt-field-app
SCADA Monitoring → /work/scada-monitoring
```

---

## 6. TOC / Section Navigation Final Recommendation

Current page has a right-side numeric TOC that is mostly hover-based.

Final direction:

### Desktop

Use a premium numbered sticky section nav:

```txt
01 Overview
02 Snapshot
03 Problem
04 System
05 Role
06 Process
07 Product Stories
08 Decisions
09 Results
```

Requirements:

- Labels visible without hover.
- Active section highlight.
- Subtle and premium.
- Do not cover page content.

### Mobile

Use horizontal scroll “On this page” pills near the top after the hero/snapshot.

Example:

```txt
On this page: Overview · Problem · System · Role · Process · Work · Results
```

Requirements:

- No sticky right rail on mobile.
- No horizontal page overflow.
- If active highlight is hard, keep static pills.

---

## 7. Graphics Checklist for Rajat

These can be created later. Gemma should use existing assets or clean placeholders for now.

| # | Graphic | Placement | Description |
|---|---|---|---|
| 1 | Hero product mockup | Hero | pvNXT suite overview in laptop/browser frame with small mobile screens |
| 2 | Messy workflow diagram | Problem | Tangled before-flow: calls, WhatsApp, Excel, site visit, proposal, installer handoff |
| 3 | Ecosystem hub map | System | Central pvNXT/project data core connected to Studio, Connect, Go, Proposal, Field App, SCADA |
| 4 | Flagship user-flow diagram | Product Stories / Studio | Lead → Site data → Roof analysis → Proposal → Project tracking |
| 5 | Before/after screen pair | Decisions | Old messy flow vs clean shipped flow |
| 6 | Product card screens | Product Stories | One image each for Studio, Proposal, Connect, Go, Field App, SCADA |
| 7 | Stat band | Results | Big typography numbers, built in code |

---

## 8. Implementation Sequence

Do not give Gemma everything at once if you want maximum safety.

Recommended sequence:

```txt
Prompt 0 — Audit only
Prompt 1 — Work filter update
Prompt 2 — Case study revamp
Prompt 3 — QA/build cleanup
```

---

# GEMMA PROMPTS

## Prompt 0 — Audit Only

```txt
Before doing anything, read and strictly follow any available project context files:

- pvnxt_casestudy_final.md if it exists
- pvnxt_casestudy.md if it exists
- public/rmcool26_work_summary.md if it exists
- public/work_redesign.md if it exists
- src/docs/agent.md if it exists
- airole_rmcool26portfolio.md if it exists

We are working on Rajat Mishra / rmcool26 portfolio.

Important:
Do not edit any file in this step.
This is audit/planning only.

Completed work to protect:
- Cursor Phase 1 is already done. Do not touch cursor implementation.
- Tooltip Phase 2 is already done. Do not touch tooltip implementation.
- About and Experience pages are already handled. Do not edit them.
- Do not redesign homepage.
- Do not change homepage Hero or Start Here.
- Do not change routes.
- Do not add dependencies.
- Do not refactor unrelated code.

Inspect only these files:
- src/content.ts
- src/components/portfolio/WorkGrid.tsx
- src/components/portfolio/WorkCard.tsx
- src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx
- src/pages/WorkDetail.tsx

Confirm:
1. Current work filter type/key structure.
2. Current filter list/order.
3. Which workItems exist for:
   - pvNXT Solar Suite
   - SCADA Monitoring
   - Spade
   - IIDE
   - Operation Comfort
4. Current pvNXT case study section structure.
5. Current routes for related pvNXT project detail pages.
6. Existing assets used by the pvNXT case study.

Do not edit anything.

Output only:
- Files inspected
- Current filter keys found
- Current filter order found
- Related routes found
- Current case study sections found
- Proposed exact files to edit in Prompt 1 and Prompt 2
- Any blocker or unclear item
- Confirmation that no code was changed

Stop after the audit summary.
```

---

## Prompt 1 — Work Page Case Study Filter

```txt
Before doing anything, read and strictly follow any available project context files:

- pvnxt_casestudy_final.md if it exists
- pvnxt_casestudy.md if it exists
- public/rmcool26_work_summary.md if it exists
- public/work_redesign.md if it exists
- src/docs/agent.md if it exists
- airole_rmcool26portfolio.md if it exists

We are working on Rajat Mishra / rmcool26 portfolio.

This step is ONLY for the Work page filter update.
Do not revamp the pvNXT case study yet.

Allowed files for this step only:
- src/content.ts
- src/components/portfolio/WorkGrid.tsx

If you need to edit any other file, stop and ask first.

Do not touch:
- homepage Hero
- Start Here
- About page
- Experience page
- cursor implementation
- tooltip implementation
- routes
- project copy unrelated to filters
- card visual design

Task:
Add a new “Case Study” filter to the Work grid.

Requirements:

1. Update the work filter type in src/content.ts.

Preferred final type:

export type FilterKey = "all" | "case-study" | "web-app" | "website" | "mobile-app" | "ppt-pdf";

2. Update the visible filter order in src/components/portfolio/WorkGrid.tsx.

Final visible filter order must be:
- All
- Case Study
- Web App
- Website
- Mobile App
- Decks & Docs

Expected filter definition:

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "case-study", label: "Case Study" },
  { key: "web-app", label: "Web App" },
  { key: "website", label: "Website" },
  { key: "mobile-app", label: "Mobile App" },
  { key: "ppt-pdf", label: "Decks & Docs" },
];

Important:
Keep the internal `ppt-pdf` key. Only change its visible label from `PPT/PDF` to `Decks & Docs`.

3. Add `case-study` filter to these work items in src/content.ts:
- pvNXT Solar Suite
- SCADA Monitoring
- Spade
- IIDE
- Operation Comfort

Do not remove existing filters.

Examples:
filters: ["case-study", "web-app"]
filters: ["case-study", "website"]

4. Do not change card design.
5. Do not change project copy.
6. Do not change project links.
7. Do not change status labels.
8. Do not change showInAll behavior.
9. Do not touch routes.

QA:
- All filter still works.
- Case Study appears after All.
- Case Study count is calculated correctly.
- Web App, Website, Mobile App, Decks & Docs still work.
- Mobile filter bar keeps intended horizontal scroll and does not cause page overflow.
- No TypeScript errors.

After implementation, run:

npm run build

Output summary must include:
1. Files changed
2. Exact filter order now used
3. Work items updated with case-study filter
4. Confirmation PPT/PDF visible label changed to Decks & Docs
5. Confirmation no unrelated files were edited
6. Build result
7. Any warnings, if present
```

---

## Prompt 2 — pvNXT Case Study Revamp

```txt
Before doing anything, read and strictly follow any available project context files:

- pvnxt_casestudy_final.md if it exists
- pvnxt_casestudy.md if it exists
- public/rmcool26_work_summary.md if it exists
- public/work_redesign.md if it exists
- src/docs/agent.md if it exists
- airole_rmcool26portfolio.md if it exists

We are working on Rajat Mishra / rmcool26 portfolio.

This step is ONLY for the pvNXT master case study page revamp.
The Work filter update should already be done.

Allowed file for this step only:
- src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx

If you need to edit any other file, stop and ask first.

Do not touch:
- src/content.ts
- src/components/portfolio/WorkGrid.tsx
- homepage Hero
- Start Here
- About page
- Experience page
- cursor implementation
- tooltip implementation
- routes
- unrelated work detail pages

Goal:
Revamp the pvNXT case study so it is shorter, clearer, more visual, and less boring.
A skimmer should understand the story in 30 seconds.
A reader should finish it in 3–4 minutes.
Use rmcool26 tone: clean, simple, professional, slightly cool, not corporate.

Design principle:
60% visual / 40% text.

Locked stats — use only these:
- 4+ EPCs
- 6+ real users
- 50+ screens shipped
- 10–15 min roof analysis
- FITT IIT Delhi incubated

Do not use older stats like 20+ EPCs or 1k+ users.

Final section structure:
01. Hero / Overview
02. TL;DR Snapshot
03. The Mess Before pvNXT
04. The Connected System
05. My Role
06. Process
07. Product Stories / Key Screens
08. Design Decisions That Mattered
09. Results & Learnings
10. Explore Connected Work / Next

01 Hero / Overview:
Eyebrow:
Case Study · pvNXT Solar Suite

Headline:
A solar workflow system built from messy handoffs.

Subcopy:
I helped turn WhatsApp, Excel, manual site visits and scattered solar operations into a connected product suite across EPCs, consumers and installers.

Meta chips:
- UI/UX Design Lead
- Terranxt · 2022 — Now
- Web portals + mobile apps
- Live product
- FITT IIT Delhi incubated

Hero proof row:
- 4+ EPCs
- 6+ real users
- 50+ screens shipped
- 10–15 min roof analysis

Show FITT IIT Delhi incubated as a credibility badge/chip too.

02 TL;DR Snapshot:
Add four compact cards:

The mess:
Solar work was split across calls, WhatsApp, Excel, manual analysis and repeated site visits.

My role:
I led UX architecture, product flows, design system, handoff, QA and product demos.

What shipped:
A connected suite across EPC, consumer, installer, proposal and field workflows.

Impact:
4+ EPCs, 6+ real users, 50+ screens shipped, 10–15 min roof analysis, FITT IIT Delhi incubated.

03 The Mess Before pvNXT:
Use this copy direction:
Before pvNXT, one solar project moved through too many disconnected places.
Leads came from calls.
Site details came through WhatsApp.
Analysis happened in separate tools.
Proposals were built manually.
Installers updated progress through photos and phone calls.
No one had one clean view of the project.

If no custom messy workflow graphic exists, create a clean in-code placeholder/diagram using existing styling. Do not invent external image URLs.

04 The Connected System:
Intro:
We built one connected suite where every role had its own workspace, but the project data stayed connected.

Add product cards with short copy and internal links:

pvNXT Studio:
For EPC teams to manage leads, roof analysis, proposals and projects.
Explore full breakdown → /work/pvnxt-studio

pvNXT Connect:
For consumers to estimate, compare, request and track solar installation.
Explore full breakdown → /work/pvnxt-connect-web

pvNXT Go:
For installers to receive tasks, upload proof and update progress.
Explore full breakdown → /work/pvnxt-go-web

Proposal System:
For clean solar proposals generated from real project data.
Explore full breakdown → /work/proposal-design

Field App:
For field teams to capture site details in one visit.
Explore full breakdown → /work/pvnxt-field-app

SCADA Monitoring:
For solar plant monitoring, alerts and O&M workflows.
Explore full breakdown → /work/scada-monitoring

Important:
The master case study is the umbrella story. Do not fully re-describe each product module. Use short cards and links.

05 My Role:
Use this copy:
I joined early, when there was no design system, no product structure and no clean workflow.
My job was not just to make screens. I had to understand the solar process, shape the product, design the flows, support developers and keep improving the product after launch.

Role bullets:
- Mapped EPC, consumer and installer workflows
- Designed core web and mobile flows
- Built reusable design system components
- Created dev-ready Figma handoffs
- Reviewed builds and logged UX issues
- Presented product demos at IIT Delhi FITT

Optional metadata grid:
- Role: UI/UX Design Lead
- Team: Product + frontend + backend + EPC stakeholders
- Tools: Figma, FigJam, Jira, HTML/CSS thinking
- Duration: 2022 — Now

06 Process:
Use these four steps:

01 Decode the real workflow
Sat with teams, understood how projects actually moved, and mapped the messy process.

02 Structure the system
Defined roles, permissions, data flow, screens and edge cases before high-fidelity UI.

03 Design the product
Created dashboards, forms, proposal flows, mobile screens and reusable components.

04 Ship with the team
Worked with developers, reviewed builds, tested flows and improved the product after feedback.

07 Product Stories / Key Screens:
This should be the most visual section.
Use one flagship inline deep-dive plus compact product cards.

Flagship inline deep-dive:
pvNXT Studio

Problem:
EPC teams were managing leads, site data, layouts and proposals across disconnected tools.

What I designed:
A web portal for project intake, rooftop analysis, proposal generation and project tracking.

Why it helped:
The team could move from site data to proposal inside one workflow.

Link:
Explore full breakdown → /work/pvnxt-studio

Compact cards:

Proposal System:
Problem: Customers needed a proposal they could actually understand, not a rough cost sheet.
What I designed: A clean proposal format with system details, cost, subsidy, savings and solar impact.
Why it helped: EPCs could send a more trustworthy proposal directly from real project data.
Link: /work/proposal-design

pvNXT Connect:
Problem: Consumers had too many doubts and very little visibility after showing interest in solar.
What I designed: A consumer portal for estimate, quote, installation tracking and solar journey clarity.
Why it helped: Consumers could understand the process without chasing updates on calls.
Link: /work/pvnxt-connect-web

pvNXT Go:
Problem: Installer updates were scattered across calls, photos and WhatsApp messages.
What I designed: An installer portal for tasks, proof uploads, issue logging and live progress updates.
Why it helped: EPC teams could see progress without chasing installers manually.
Link: /work/pvnxt-go-web

Field App:
Problem: Site visits created incomplete handoffs. The design team still had to ask for missing details later.
What I designed: A field capture app for site data, rooftop details, keepouts, measurements and handoff notes.
Why it helped: One site visit could create a cleaner design handoff.
Link: /work/pvnxt-field-app

SCADA Monitoring:
Problem: O&M teams needed a clearer way to monitor plant health, alerts and work orders.
What I designed: A monitoring workflow for plant visibility, alerts, issue tracking and field actions.
Why it helped: Teams could move from reactive checking to a more visible operations flow.
Link: /work/scada-monitoring

Visual rule:
- Use existing imported assets where possible.
- Use one strong image per product story where assets exist.
- Avoid repeating the same image multiple times.
- If a needed image does not exist, use a clean placeholder/TODO comment in code.
- Do not add new image files.

08 Design Decisions That Mattered:
Use 3 cards:

Role-based views instead of one common dashboard
Because consumers, EPCs and installers need different information from the same project.

Mid-fidelity before visual polish
Because the workflow was complex. Structure had to be right before UI became beautiful.

Reusable components from day one
Because one product quickly became a suite.

Optional fourth card if layout needs balance:
Proposal clarity over technical overload
Because consumers needed confidence, not a document full of jargon.

09 Results & Learnings:
Heading:
From messy solar workflows to a live product suite.

Copy:
The suite moved from early workflow mapping to a live product ecosystem used by real teams.

Stats:
- 4+ EPCs
- 6+ real users
- 50+ screens shipped
- 10–15 min roof analysis
- FITT IIT Delhi incubated

Learnings card max 3 bullets:
- Complex products become usable when roles are clear.
- Mid-fidelity saves time when workflows are messy.
- A design system is not decoration — it helps teams ship faster.

Optional final line:
Messy solar workflows, made usable — and shipped.

10 Explore Connected Work / Next:
Copy:
This was not one app.
It became a product ecosystem.

Links:
- pvNXT Studio → /work/pvnxt-studio
- pvNXT Connect → /work/pvnxt-connect-web
- pvNXT Go → /work/pvnxt-go-web
- Proposal Design → /work/proposal-design
- Field App → /work/pvnxt-field-app
- SCADA Monitoring → /work/scada-monitoring

TOC / Section Nav:
Improve the current table of contents.

Desktop:
Use a premium numbered section nav with visible labels, not hover-only labels.
Labels:
01 Overview
02 Snapshot
03 Problem
04 System
05 Role
06 Process
07 Product Stories
08 Decisions
09 Results

Requirements:
- Active section highlight if simple and safe.
- Do not cover content.
- Keep it subtle and premium.

Mobile:
Use horizontal scroll “On this page” pills near the top after Hero/Snapshot.
No fixed right rail on mobile.
No horizontal page overflow.
If active highlight is hard, static pills are okay.

Accessibility:
- Use semantic sections with ids.
- Keep link text descriptive.
- Preserve cursor data attributes only where existing interactive patterns use them.
- Do not add tooltips to static content.
- Keep text readable.

After implementation, run:

npm run build

Output summary must include:
1. Files changed
2. Case study sections updated
3. Stats used
4. Related work links added
5. TOC/nav changes made
6. Assets reused and placeholders/TODOs added, if any
7. Confirmation no unrelated files were edited
8. Build result
9. Any warnings, if present
```

---

## Prompt 3 — QA / Final Cleanup Only

```txt
Before doing anything, read and strictly follow any available project context files:

- pvnxt_casestudy_final.md if it exists
- pvnxt_casestudy.md if it exists
- public/rmcool26_work_summary.md if it exists
- public/work_redesign.md if it exists
- src/docs/agent.md if it exists
- airole_rmcool26portfolio.md if it exists

This step is QA only.
Do not redesign anything.
Do not make broad visual changes.
Do not edit unrelated files.

Check:

Work filter:
- All works.
- Case Study appears after All.
- Case Study count is correct.
- Case Study shows pvNXT Solar Suite, SCADA Monitoring, Spade, IIDE, and Operation Comfort.
- Web App, Website, Mobile App, Decks & Docs still work.
- Filter chips do not create page overflow on mobile.

pvNXT case study:
- /case/terranxt loads.
- Hero clearly explains the project.
- Stats are exactly:
  - 4+ EPCs
  - 6+ real users
  - 50+ screens shipped
  - 10–15 min roof analysis
  - FITT IIT Delhi incubated
- No older stats remain.
- Page is shorter and more scannable.
- Product links work:
  - /work/pvnxt-studio
  - /work/pvnxt-connect-web
  - /work/pvnxt-go-web
  - /work/proposal-design
  - /work/pvnxt-field-app
  - /work/scada-monitoring
- Desktop TOC/nav does not cover content.
- Mobile section nav does not cause horizontal page overflow.
- No duplicate Cursor mount was introduced.
- Tooltip implementation was not touched.

Run:

npm run build

Only fix issues directly caused by this task.
Do not fix unrelated lint or pre-existing warnings.

Output:
1. QA checks performed
2. Any fixes made
3. Files changed, if any
4. Build result
5. Anything intentionally left untouched
```

---

## 9. Final Recommendation

Use prompts in this order:

```txt
1. Prompt 0 — Audit Only
2. Prompt 1 — Work Filter
3. Send output/screenshot for review
4. Prompt 2 — pvNXT Case Study Revamp
5. Send output/screenshot for review
6. Prompt 3 — QA / Final Cleanup
```

Do not combine Prompt 1 and Prompt 2 unless you are okay with bigger changes in one pass.
