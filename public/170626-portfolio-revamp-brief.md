# Portfolio Revamp — Build Brief

*(Condensed from the original requirements — same scope, reorganized, translated to English for clarity.)*

## Goal
Redesign and rebuild my existing portfolio (currently one long-scroll Home page + one Case Study page) into a clean, multi-page, mobile-first site that showcases my work clearly, without losing any of the requirements below.

## Current Setup
- Code is in a GitHub repo, deployed to Netlify via Git.
- 2 pages exist today: Home and Case Study.
- Reference assets to be shared separately (not in this doc): screenshots of the current Home & Case Study pages, and 5 certificate images (4× TCS, 1× KVCH–IBM).

## 1. Design Direction
- Simple, clean, minimal — the work itself should be the focus.
- Fully responsive, mobile-first: analytics show ~60% mobile / ~40% desktop traffic.

## 2. Copy & Tone
- Keep copy short, but make it hit the visitor's pain point fast — why hire this person.
- Reuse strong existing lines where they still land, e.g. "Cool guy behind the pixel," "Not just a designer, a finisher." Refine only if it sharpens the message.

## 3. Icons & Motion
- Use icons instead of plain text symbols/bullets throughout.
- Add light, purposeful icon animation / micro-interactions for polish.

## 4. Trust Signals — Certificates
- Add a certifications section for credibility: 5 total (4 from TCS, 1 from KVCH–IBM).
- Use placeholder images for now — real files will be provided after. Choose the best placement/section.

## 5. Site Structure — Single Page → Multi-Page
Split the current one-page layout into dedicated pages: Home/Hero, About, Other Work, Case Study, Resume (preview + download), Contact.

**Navigation:** a top navbar gets cluttered with this many pages — replace with a collapsible left sidebar (SaaS-app style, icon-led). Design an equivalent pattern for mobile.

**WhatsApp contact:** sticky bottom bar on mobile with a WhatsApp link; fixed floating WhatsApp button on desktop.

**Code organization:** one content file per section/page, kept in a clear folder structure so edits stay simple. Example to follow:

```
src/components/
├── homepage/
│   ├── hero/        hero.tsx, herocontent.ts
│   ├── exp/         experience.tsx, expcontent.ts
│   └── about/       about.tsx, aboutcontent.ts
├── case-study/      casestudy.tsx, casestudycontent.ts
│   ├── pvnxt/       pvnxt.tsx, pvnxtcontent.ts
│   │   ├── epc/        epc.tsx, epccontent.ts          (web app)
│   │   ├── consumer/   consumer.tsx, consumercontent.ts (web + mobile app)
│   │   └── installer/  installer.tsx, installercontent.ts (web + mobile app)
│   ├── fieldapp/    fieldapp.tsx, fieldcontent.ts     (mobile app)
│   ├── scada/       scada.tsx, scadacontent.ts        (web app)
│   └── spade/       spade.tsx, spadecontent.ts        (web app)
└── other-work/      otherwork.tsx, otherworkcontent.ts
    ├── web-saas/    iide (own dedicated page); pvnxt-epc, pvnxt-consumer,
    │                pvnxt-installer, spade, scada (each: preview card →
    │                links to its case study)
    ├── mobile-apps/ pvnxt-installer, pvnxt-fieldapp, pvnxt-consumer
    │                (each: preview card → links to case study)
    ├── websites/    retaagioindustries, srmfilms, astongreens, arthanxt,
    │                suhora, terranxt, dgcarstudio, geosolutionsindia
    │                (each: own dedicated page)
    └── other/       operationcomfort, chcss (each: own dedicated page)
```
Future projects follow the same pattern: own component + own content file, own dedicated page (or a preview card linking to a case study), as fits.

## 6. Case Study Page — Redesign
- The current floating table of contents needs a full redesign, with separate optimized navigation patterns for mobile and desktop.
- Content currently feels too long and visuals don't communicate clearly enough — mobile requires excessive scrolling. Trim and streamline; flag if the structure is missing anything a good case study should have.
- Two case studies total: SCADA (not written yet) and PVNXT (drafted, needs a revamp).
- **Open question:** PVNXT currently bundles 3 linked portals — EPC, Consumer, Installer — into a single case study. Should each become its own separate case study instead? Recommend an approach; if split, follow the folder structure in §5.
- Decide if an in-page nav menu is even needed. If not, simple "Back to portfolio" / "Next case study" links are enough — needed on both mobile and desktop.

## 7. Color Palette
- Review the current palette. If a refresh helps, go for a premium/royal feel that's still cool, calm, and easy on the eyes. If the current palette already works, leave it unchanged.

## 8. Layout — Case Study vs. Other-Work Pages
- Decide whether Case Study pages and Other-Work dedicated pages should share one layout template or have distinct ones — your call.
- Direction to consider: an e-commerce product-page pattern — multiple visuals (wireframes, workflow, UI, design system, live UI shots) shown together with key info and the live link, similar to a product gallery + "Add to cart" panel.

## 9. Image Interaction
- Click/hover-to-zoom on images, with pan support.

## 10. Microinteractions
- Hover tooltips on buttons/links so intent is always obvious, e.g. "Click to zoom," "Call Rajat Mishra," and on the WhatsApp button, "Message Rajat Mishra."

## 11. Site Protection
- Keep existing safeguards: block copy, paste, screenshots/screen-capture, right-click, and inspect-element.

## 12. Working Process
- If anything above is unclear, incomplete, or could be done better, call it out and propose a fix before building — get it right in one pass.
- Before implementing, restate your understanding of this brief and ask any clarifying questions; once confirmed, proceed.

## Role to Hold Throughout
While designing and building, act as all of:
- Senior UI/UX/CI/IA/CX designer
- UI/UX/CX QA tester & auditor
- Accessibility/WCAG/global-standards reviewer — call out and fix any gaps
- UI designer ensuring every element is purposeful and intuitive
- UX writer — all labels, buttons, and microcopy should be short, simple, kind, and guide rather than blame (assume a first-time/newbie visitor); WCAG-aligned
- A first-time user testing the result, surfacing confusion points, and fixing them
- Graphic designer — refining/generating imagery and overall visual language to match the new theme
