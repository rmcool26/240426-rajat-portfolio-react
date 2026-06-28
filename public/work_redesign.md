# Work Section Redesign Plan

## Purpose
This document explains **how the homepage Work section should be redesigned** in Rajat Mishra’s live portfolio.

It is written so that any AI or developer can use it to update the existing codebase cleanly.

---

## 1) Scope
Redesign **homepage `#work` section only**.

### In scope
- work section structure
- work section content hierarchy
- filters
- cards
- mobile-first layout
- copy simplification
- data structure cleanup for work items
- theme-matched visual improvements

### Out of scope
- Hero
- About
- Experience
- Contact
- full case study page redesign
- resume redesign

The existing `/case/terranxt` page can remain as-is for now.

---

## 2) Core Problem in Current Work Section
The current Work section has good content but weak presentation logic.

### Current issues
1. **Split between “Case Studies” and “Other Work” creates confusion.**
   - It makes the portfolio feel fragmented.
   - Hiring managers do not clearly understand the full range quickly.

2. **The section does not scan well on mobile.**
   - Too much hierarchy.
   - Too much expansion/collapse logic.
   - Important work takes too many taps to discover.

3. **The current structure hides breadth.**
   - Rajat has website, web app, mobile app, GIS, enterprise, CRO, and document work.
   - But this range is not immediately visible.

4. **Accordion-heavy interaction slows scanning.**
   - For a recruiter or hiring manager, summary-first works better than reveal-first.

5. **pvNXT ecosystem can feel repetitive if every module is shown equally.**
   - Strong depth, but needs better grouping.

6. **Some work has assets, some does not.**
   - Old projects without visuals should not weaken the visual system.

---

## 3) UX Audit Conclusion
The redesign should solve one core job:

> “Within a few seconds, make it obvious that Rajat has shipped strong work across websites, web apps, mobile apps, and enterprise systems.”

### Therefore the new section must be
- mobile-first,
- summary-first,
- filter-based,
- visually clean,
- and content-light.

---

## 4) Final Redesign Direction

## Replace this
- separate “Case Studies” block
- separate “Other Work” accordion block

## With this
- **one unified Work showcase system**
- **filter chips**
- **curated default view**
- **clean card hierarchy**
- **archive for old/no-asset work**

### Final user experience
A user should land on the Work section and instantly see:
- a short heading,
- category filters,
- 6–8 high-quality work cards,
- and simple CTAs.

No unnecessary reading.
No long accordion dependency.
No card clutter.

---

## 5) Information Architecture

## 5.1 Section Order
Inside `#work`, use this order:

1. **Section intro**
2. **Quick proof strip**
3. **Filter chips**
4. **Work grid/list**
5. **Archive / earlier work**

---

## 5.2 Section Intro
Use very short copy.

### Recommended structure
- **Eyebrow:** `Selected Work`
- **Heading:** `Work that shipped.`
- **Subline:** `Websites, apps, and systems designed to be used — not just shown.`

### Optional proof strip below heading
Keep it tiny.
Example:
- `15 years`
- `25+ industries`
- `Web · App · Enterprise`

This strip should be glanceable, not decorative.

---

## 5.3 Filter Chips
### Preferred filter set
- All
- Website
- Web App
- Mobile App
- PPT / PDF / Flyer
- RMCOOL Thinking

### Behaviour
- Default selected: **All**
- On mobile: horizontal scroll chips
- On desktop: wrap or single row depending on space
- Active chip must be visually clear using the existing theme tokens

### Important rule
If `RMCOOL Thinking` does not yet have enough visual assets, keep data support ready but do not render the chip live.

---

## 6) Default Content Strategy

## 6.1 What appears in “All” by default
Show only the strongest mix of proof items.

### Recommended 8-card default set
1. pvNXT Solar Suite
2. SCADA Monitoring
3. Spade
4. IIDE
5. Operation Comfort
6. ArthaNXT
7. Retaggio Industries
8. pvNXT Field App

### Reason
This gives the best balance of:
- product depth
- enterprise credibility
- redesign proof
- website skill
- app skill
- industry range

---

## 6.2 What appears in filtered views

### Website
Show:
- Operation Comfort
- ArthaNXT
- pvNXT website
- AstonGreen
- Terranxt
- Suhora
- Retaggio Industries
- IIDE
- SRM Films
- DG Car Studio

### Web App
Show:
- pvNXT Solar Suite
- SCADA Monitoring
- Spade
- pvNXT Connect (Web)
- pvNXT Studio (Web)
- pvNXT Go (Web)
- pvNXT Atlas

### Mobile App
Show:
- pvNXT Field App
- pvNXT Connect
- pvNXT Go
- pvNXT Studio (only when proper screens are ready)

### PPT / PDF / Flyer
Show:
- DMS Property Showcase PPT
- Terranxt Pitch PPT
- Terranxt Flyer
- Proposal Design / Proposal PDF

### RMCOOL Thinking
Show only when real visuals and clean titles are available.

---

## 7) Layout Recommendation

## 7.1 Mobile-first layout
Use a **single-column vertical stack**.

Each card should follow this order:
1. image / cover
2. title row
3. one-line summary
4. 2–3 proof chips
5. CTA row

### Mobile rules
- no side-by-side split cards
- no hidden essential info
- no long text blocks
- no dense stats block inside every card

---

## 7.2 Desktop layout
Use a controlled mixed hierarchy:
- first 2 cards can have larger visual treatment
- remaining cards can sit in a clean 2-column or 3-column grid depending on design balance

### But keep this principle
Desktop may be more expressive, but mobile still defines the structure.

---

## 8) Card System

## 8.1 Card Types
Use 3 card types only.

### A. Featured Work Card
For:
- pvNXT Solar Suite
- SCADA Monitoring
- Spade
- IIDE

**Content:**
- title
- one-line summary
- 3 proof chips max
- primary CTA
- optional secondary CTA

### B. Standard Work Card
For:
- websites
- supporting app work
- supporting product modules

**Content:**
- title
- one-line summary
- 2 proof chips
- 1 or 2 CTAs max

### C. Document Card
For:
- PPTs
- PDFs
- flyers
- proposal work

**Content:**
- document type badge
- title
- one-line use case
- 1 CTA

Do not design documents as fake device mockups unless real covers exist.

---

## 8.2 Card Content Rules
### Title
Use original project name only.

### One-line summary
- max 10–14 words
- clear and outcome-oriented
- no paragraph style copy

### Proof chips
Use only useful labels like:
- Website
- Web App
- Mobile App
- Live
- Internal
- Redesign
- Scratch
- Enterprise
- GIS
- CRO

### CTA logic
Use only relevant CTA combinations:
- `Case Study`
- `Live Site`
- `Design`
- `App Link`

Do not place 4–5 links on one card.

---

## 9) Recommended Minimal Copy Bank
Use short copy like this style.

### pvNXT Solar Suite
`End-to-end solar product ecosystem across EPC, consumer, and installer workflows.`

### SCADA Monitoring
`Plant monitoring, alerts, and work orders in one enterprise dashboard.`

### Spade
`Satellite imagery marketplace that reduced procurement from weeks to days.`

### IIDE
`Lead-page redesign system that improved yearly conversions and reduced manual updates.`

### Operation Comfort
`Existing website redesigned with stronger UX clarity and cleaner decision flow.`

### ArthaNXT
`Scratch-built investment website for solar opportunity discovery and trust-building.`

### Retaggio Industries
`Corporate website for a listed jewelry manufacturing business.`

### pvNXT Field App
`Field data capture app built to remove repeat site visits.`

### pvNXT Connect
`Consumer app for solar exploration, estimation, and journey tracking.`

### pvNXT Go
`Installer tracking app for on-site updates, proof, and status visibility.`

### pvNXT Atlas
`Internal GIS QA platform for validating and correcting spatial data.`

### Terranxt
`Corporate website for a solar digitization and automation brand.`

### AstonGreen
`Website for the EPC parent company behind product usage and execution.`

### Suhora
`GIS-focused company website for data-driven spatial services.`

### SRM Films
`Production house website built for a creative services brand.`

### DG Car Studio
`Automotive services website for repairs, detailing, and vehicle deals.`

---

## 10) Image Strategy

## 10.1 For products with many screens
Do not show 8–9 separate screens inside the homepage work grid.

### Use instead
- one strong cover
- or one stitched composite graphic
- or one multi-device preview

### Reason
Homepage cards are for **selection**, not full explanation.

---

## 10.2 For old work without assets
Do not invent fake screenshots.

### Use instead
- archive list
- simple text rows
- optional tiny category tags

---

## 10.3 For documents
Use a compact document-preview style or icon-based card.

---

## 11) Theme and Visual Direction
Match the current portfolio theme.

### Must keep
- existing token-based homepage design system
- current visual quality level
- clean spacing
- premium but simple interaction feel

### Visual principles
- minimal, not empty
- professional, not flashy
- strong hierarchy, not decorative complexity
- fast scan, not storytelling overload

### Do not do
- no random gradient-heavy redesign
- no unrelated neon cards
- no over-styled glassmorphism everywhere
- no cluttered stat blocks inside every card
- no Pinterest-style masonry

---

## 12) Motion / Interaction Guidance
Keep interaction polished but lightweight.

### Keep
- subtle hover lift
- slight image fade/scale on hover
- smooth transitions using current easing style

### Reduce or remove in this section
- heavy accordion dependency
- interaction that hides important content
- motion that slows scanning

### Mobile rule
All key information must be visible without hover.

---

## 13) pvNXT Handling Rule
This is important.

### Do not
show every pvNXT sub-product as equal top-priority cards in the default “All” view.

### Do
- show **pvNXT Solar Suite** as the hero proof
- show **SCADA** as separate deep enterprise proof
- show **Field App** as mobile proof
- keep **Connect / Go / Studio / Atlas** accessible in filters

### Why
This keeps the section from feeling repetitive while preserving the true depth of the work.

---

## 14) Archive Strategy
Create a small **Earlier Work** block below the main filtered grid.

### Use it for
- MMD Cafe
- Brijbhumi
- Lastella Bakery
- Chaudhary Charan Singh School
- Lions Club Mumbai SOL
- Hind Vijay
- Nemi Enterprises

### Format
- simple text list
- or compact pill list
- or 1-line grouped archive row

Do not give these equal visual weight if no screenshots exist.

---

## 15) Recommended Data Structure Update
Use one unified data model for all work items.

```ts
type WorkItem = {
  id: string;
  title: string;
  category: 'website' | 'web-app' | 'mobile-app' | 'doc' | 'thinking';
  group?: string;
  company?: string;
  sector?: string;
  status?: 'Live' | 'Internal' | 'In Progress' | 'Concept';
  spotlight?: boolean;
  priority?: number;
  summary: string;
  proof?: string[];
  cover?: string;
  links?: {
    live?: string;
    design?: string;
    caseStudy?: string;
    app?: string;
  };
};
```

### Important
Do not keep separate visual logic for `caseStudies` and `projects` anymore.
Use one common work data source.

---

## 16) Existing Codebase Change Plan
Based on the current handoff structure, use this implementation direction.

### Files to update
- `src/content.ts`
- `src/components/portfolio/FeaturedWork.tsx`

### Preferred new component structure
- `WorkFilters.tsx`
- `WorkGrid.tsx`
- `WorkCardFeatured.tsx`
- `WorkCardStandard.tsx`
- `WorkCardDocument.tsx`
- optional `WorkArchive.tsx`

### Practical implementation rule
You may create new components, but the final output should still plug cleanly into the existing homepage and theme system.

### Optional cleanup
- stop rendering current `CaseStudyCards.tsx`
- stop rendering current `OtherWork.tsx`
- keep files only if needed for backward safety

---

## 17) Non-Negotiables for the AI / Developer
1. Redesign only the homepage Work section.
2. Keep the current site theme language intact.
3. Make the section mobile-first.
4. Unify the work system.
5. Do not invent fake metrics or fake project details.
6. Do not create random extra cards.
7. Keep copy minimal.
8. Make website, web app, mobile app, and document breadth visible.
9. Keep old/no-asset work in archive.
10. Ensure the result feels like a design-lead portfolio, not a template gallery.

---

## 18) Acceptance Checklist
The redesign is successful only if all of the following are true:

- A mobile user can understand Rajat’s work range within a few seconds.
- The work section no longer feels split or fragmented.
- The strongest 6–8 proofs appear first.
- Filters clearly reveal different work types.
- The content is minimal and readable.
- The section matches the current portfolio theme.
- No fake content is added.
- Legacy work does not visually weaken the section.
- pvNXT depth is visible without becoming repetitive.

---

## 19) Final Build Intent
This redesign should make the Work section feel like:
- a **clear product proof wall**,
- a **professional design agency level showcase**,
- and a **high-conviction hiring surface**.

The final feeling should be:
**clean, modern, readable, mobile-first, and confidently minimal.**

---

## 20) AI Implementation Brief
Use this as the final instruction if this file is passed to another AI:

> Redesign the homepage `#work` section of Rajat Mishra’s portfolio. Remove the current split between `Case Studies` and `Other Work`, and replace it with one unified, mobile-first work showcase. Keep the existing portfolio theme and token system. Use minimal copy, strong hierarchy, horizontally scrollable filter chips on mobile, and a curated default `All` view with the 8 highest-priority works. Show full breadth through filters: Website, Web App, Mobile App, PPT/PDF/Flyer, and optionally RMCOOL Thinking if assets exist. Keep old projects without screenshots in a compact archive, not the main grid. Do not invent fake content, fake metrics, or extra cards. Keep the result clean, professional, and easy to scan in 2–3 seconds per item.
