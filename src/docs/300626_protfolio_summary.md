# 300626 Portfolio Summary

## 1. Executive Summary
The portfolio codebase is a modern, responsive Vite + React + TypeScript web application styled with Tailwind CSS and animated using Framer Motion. The data layer is completely centralized in `src/content.ts`, driving dynamic rendering across the homepage sections and reusable project detail views. It features a robust design system relying on CSS custom properties for theming, smooth scrolling via Lenis, and sophisticated micro-interactions.

## 2. Current App Overview
- **Overall Stack:** React (Vite), TypeScript, Tailwind CSS, Framer Motion, React Router DOM, Lucide React (icons), Sonner/Toaster (notifications).
- **Routing:** Centralized in `App.tsx` using `react-router-dom` with a `BrowserRouter`.
- **Main Pages:** `Index.tsx` (Homepage), `WorkDetail.tsx` (Generic Project Page), `CaseStudy.tsx` (Legacy Case Study component), `CaseStudyPvNXT.tsx` (Active custom case study).
- **Shared Components:** `Cursor`, `ScrollProgress`, `ThemeToggle`, `SiteGuards`, `MagneticButton`, `ZoomableImage`, `WorkCard`.
- **Content/Data Files:** `src/content.ts` acts as the single source of truth for all copy, work items, and stats.
- **Styles:** `src/index.css` defines the HSL-based design system, custom utilities (`.glass`, `.shadow-glow`, `.bg-hero`), and dark mode tokens.
- **Assets:** Primarily stored in `src/assets/projects/` as highly optimized SVGs and some PNGs/JPEGs.
- **Utilities:** Site protection logic (`SiteGuards.tsx`, `siteGuards.ts`).

## 3. Route Map
| Route Path | Component Rendered | Status | Type | Source File |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `<Index />` | Active | Primary | `src/App.tsx` |
| `/case/terranxt` | `<CaseStudyPvNXT />` | Active | Custom Case Study | `src/App.tsx` |
| `/work/:slug` | `<WorkDetail />` | Active | Reusable Detail Page | `src/App.tsx` |
| `*` | `<NotFound />` | Active | Fallback | `src/App.tsx` |

## 4. Page-by-Page Walkthrough
- **Homepage (`Index.tsx`)**: Entry point with `Lenis` smooth scrolling. Renders `Hero`, `FeaturedWork`, `DesignProcess`, `Experience`, `About`, `Marquee`, and `Contact`.
- **Work Section (`FeaturedWork.tsx` & `WorkGrid.tsx`)**: Displays filtered portfolio cards with live count badges and a unified grid layout.
- **Project Detail Pages (`WorkDetail.tsx`)**: A dynamic, reusable template rendering data from `workItems` based on `:slug`. Features a hero header, split-layout overview (What it is, What I did, Why it matters), floating metadata sidebar, and a masonry gallery of zoomable images.
- **Case Study Page (`CaseStudyPvNXT.tsx`)**: The dedicated deep-dive for the pvNXT Solar Suite, containing custom accordion components (`CaseStudyAccordion`), complex rich text, and bespoke outcome highlights.
- **Contact / Footer Flows**: Handled by `Contact.tsx` and `Footer.tsx`. Uses smooth scrolling anchor links and `mailto:` schemas.
- **Mobile Recruiter Bar (`MobileRecruiterBar.tsx`)**: A sticky bottom action bar appearing on mobile devices to easily download resume, email, or view LinkedIn.
- **Theme Toggle (`ThemeToggle.tsx`)**: Floating action button switching between light/dark themes by toggling the `dark` class on the `<html>` element and syncing with `localStorage`.
- **Sticky / Floating UI**: Includes the custom `Cursor` and `ScrollProgress` bar fixed at the top of the viewport.

## 5. Section-by-Section Content Audit
### Hero (`Hero.tsx`)
- **Eyebrow:** "UI/UX Design Lead · Systems Thinking"
- **Visible Heading:** "The cool guy who makes messy workflows work." (split across two lines)
- **Subheading/Copy:** "Ideas to apps. Audits to fixes. I ship products that simplify real work."
- **Stats (Micro-proof):** "9+ years · 20+ live products · teams scaled 2→12"
- **Badges:** Desktop floats ("IIT Delhi · FITT", "Incubated Product", "End-to-end Shipped"), Mobile shows as a horizontal scrolling strip.
- **CTAs:** "See my work" (anchors to `#work`), "Contact me" (anchors to `#contact`).
- **Source:** `src/content.ts` (`hero` object) and `Hero.tsx`.

### Featured Work (`FeaturedWork.tsx`)
- **Visible Heading:** "Featured Work"
- **Subheading:** "Websites, apps, and systems designed to be used — not just shown."
- **Stats:** Live count badges on filters (All: 24, Website: 6, Web App: 4, Mobile App: 2, PPT/PDF: 4)
- **Source:** `src/content.ts` (`workItems`).

### Design Process (`DesignProcess.tsx`)
- **Heading:** "How I turn chaos into clarity."
- **Copy:** 4 steps (Understand, Architect, Design, Handoff) linked by a responsive connector line.
- **Source:** `src/content.ts` (`process` object).

### Experience & Stack (`Experience.tsx`)
- **Heading:** "Where I've shipped and how."
- **Timeline:** 4 roles (Terranxt, IIDE, Skymap Global, Dreamz).
- **Stack:** Grouped by Design, Build, and Data & Ops.
- **Recognition:** IIT Delhi incubation note.
- **Source:** `src/content.ts` (`experience` object).

### About (`About.tsx`)
- **Heading:** "Not just a designer. A finisher."
- **Copy:** Strong stance on being a 0-to-1 builder who ships.
- **Stats:** "9+ years shipping", "20+ live products", "4 Designers Mentored", "6 Developers Led".
- **Source:** `src/content.ts` (`about` object).

### Contact (`Contact.tsx`)
- **Heading:** "Let's Build Something Cool Together"
- **CTAs:** Email Me, LinkedIn, Resume (Magnetic Buttons).
- **Source:** `src/content.ts` (`contact` object).

## 6. Work Section Final Architecture
- **Current Filter List:** All, Website, Web App, Mobile App, PPT/PDF.
- **Default 'All' Behavior:** Shows a curated list of exactly 8 items (`showInAll: true`).
- **Expand/Collapse Behavior:** If on the 'All' tab, a "View all work (+N)" button expands to show all 24 projects. Clicking "Show less" collapses back to 8. Filter tabs automatically show all relevant items without pagination.
- **Earlier Work Block:** Currently commented out/hidden in `FeaturedWork.tsx` to reduce clutter.
- **Card CTA Logic:** Primary action acts as an internal `react-router` link (View Project). Secondary action is an external `Figma` link (if provided in `content.ts`).
- **Internal-First Flow:** All items now direct users to internal project pages (`/work/:slug` or `/case/terranxt`) rather than directly bouncing them to external live sites.
- **Card Placeholders:** Items without a `cover` image fallback to a neutral `CoverPlaceholder` rendering initials.

## 7. Project Detail Page System
- **Reusable Structure (`WorkDetail.tsx`)**: A dynamic template that fetches data from `workItems` via the URL `:slug`.
- **Fields Used**: `name`, `company`, `role` (fallback to `tagline`), `tags`, `whatItIs`, `whatIDid`, `whyItMatters`, `status`, `detailVisual` (falls back to `cover`), `detailImages`, `liveLink`, `figmaLink`, `caseNotesLink`, `appLink`.
- **`/case/terranxt` Override**: The "pvNXT Solar Suite" item explicitly routes to `/case/terranxt` instead of a standard `:slug` to leverage the custom deep-dive component.
- **Zoom/Pan**: Integrated via the `ZoomableImage.tsx` component for all gallery items.
- **Tooltip/Cursor**: Implements `data-cursor-label` for enhanced interactive feedback on hovering links and zoomable images.

## 8. Hero Audit
- **Visible Content:** Highly polished layout with eyebrow, headline, subheading, and micro-proof line.
- **Badges/Stat System:** "IIT Delhi · FITT" and "Incubated Product".
- **Mobile Treatment:** Badges render as a seamlessly scrolling marquee strip below the CTA buttons. Padded layout prevents edge collisions.
- **Desktop Treatment:** Badges float with ambient up/down drift animations, anchored relative to the main copy block.
- **Motion/Animation Behavior:** 
  - Subheading features a staggered word fade-in.
  - "messy workflows" features a one-time sweep underline.
  - Primary button pulses gently (`animate-pulse-glow`).
- **Strengths:** Strong hiring-manager hook, immediate trust signals, flawless responsive adaptation, extremely premium feel.
- **Exact Source Files:** `src/components/portfolio/Hero.tsx`, `src/components/portfolio/StatBadges.tsx`, `src/index.css`.

## 9. Design System / Theme Reference
- **Color System:** Fully HSL token-based, mapped via CSS variables.
- **CSS Variables:** `--background`, `--foreground`, `--primary`, `--primary-glow`, `--muted`, `--accent`, `--border`, etc.
- **Shadows:** `--shadow-glow` (for glowing elements), `--shadow-elegant` (deep, soft dropshadows), `--shadow-soft`.
- **Border Radius:** Default `--radius` is 1rem (16px).
- **Typography:** Display (`Space Grotesk`), Sans (`Inter`).
- **Buttons:** `MagneticButton.tsx` handles primary (solid glow) and secondary (outline) variants.
- **Dark Mode Behavior:** Controlled via the `.dark` class on `<html>`, toggling the entire CSS variable suite.

## 10. Motion / Interaction Audit
- **Hover States:** `.group` classes used extensively to rotate arrows, expand borders, and scale images (`hover:scale-[1.03]`).
- **Cursor Behavior:** The custom `Cursor.tsx` provides a magnetic follower that snaps and expands on clickable elements, supporting contextual tooltips via `data-cursor-label`.
- **Scroll Progress:** `ScrollProgress.tsx` creates a fixed top progress bar bound to the window scroll.
- **Theme Toggle:** Simple sun/moon icon swap with a backdrop blur.
- **Zoomable Image:** Clicking an image opens a full-screen overlay; clicking again zooms to 2.4x; dragging pans the zoomed image.

## 11. Link Inventory
| Link Type | Example / Usage |
| :--- | :--- |
| Internal Routes | `/work/scada-monitoring`, `/case/terranxt`, `/#contact` |
| External Live Sites | `https://scada.pvnxt.com`, `https://spade.suhora.com/` |
| Figma Links | Interactive prototypes linked via `figmaLink` field |
| App Links | Google Play Store links (e.g., pvNXT Consumer Mobile App) |
| Notion Notes | Case study drafts linked via `caseNotesLink` |
| Social / Contact | `rmcool26@gmail.com`, LinkedIn URL, `/RajatMishra_Resume.pdf` |

## 12. Asset Inventory
- **Used Assets:** `pvnxtSuite`, `scadaAlert`, `sarCart`, `iideCard`, `comfortCard`, `arthaCard`, `rettagioCard`, `fieldApp`.
- **Placeholder Assets:** Used fallback logic (`CoverPlaceholder`) for missing assets in `workItems`.
- **Hero Image:** `rmcool26-profile.jpeg` (rendered circular with border).
- **Current Needs:** Many `detailImages` arrays in `workItems` are empty or reuse the `cover` image. Supplying dedicated screenshots per project is needed.

## 13. File Responsibility Map
- **Routing:** `App.tsx`
- **Data/Content Source:** `src/content.ts`
- **Design System / Tokens:** `src/index.css`
- **Homepage Structure:** `src/pages/Index.tsx`
- **Generic Project Pages:** `src/pages/WorkDetail.tsx`
- **Hero & Trust Signals:** `Hero.tsx`, `StatBadges.tsx`
- **Portfolio Grid:** `WorkGrid.tsx`, `WorkCard.tsx`
- **Global Interactions:** `Cursor.tsx`, `MobileRecruiterBar.tsx`, `SiteGuards.tsx`

## 14. Typos / Issues / Cleanup Opportunities
- **Legacy Files:** `src/pages/CaseStudy.tsx` is an older, hardcoded version of the case study. It should be removed eventually as `CaseStudyPvNXT.tsx` is the active file.
- **Commented Code:** `<EarlierWork />` and `<SiteGuards />` are currently commented out in their respective rendering flows.
- **Unused Assets:** Many SVGs in `src/assets/projects/` are large and currently unreferenced.
- **Cleanup:** We can safely remove `CaseStudy.tsx` and unused imports across components.

## 15. Active vs Legacy Code
### CURRENT ACTIVE / LIVE
- `App.tsx`, `Index.tsx`, `WorkDetail.tsx`, `CaseStudyPvNXT.tsx`.
- All components inside `src/components/portfolio/` (except `EarlierWork.tsx` which is inactive but imported).
- `content.ts` (the entire data structure is active).

### LEGACY / UNUSED / SAFE TO CLEAN LATER
- `src/pages/CaseStudy.tsx` (Replaced by `CaseStudyPvNXT.tsx`).
- `src/components/portfolio/EarlierWork.tsx` (Component is intact but invocation is commented out).
- `src/components/portfolio/SiteGuards.tsx` (Commented out in `App.tsx` to allow right-clicks/copying).

## 16. Final Notes
The portfolio is in an extremely healthy, production-ready state. The architecture efficiently separates data (`content.ts`) from presentation (`WorkGrid`, `WorkDetail`). The recent hero polish pass successfully modernized the first impression while adhering to strict brand tone guidelines. Future efforts should focus strictly on asset generation for the project detail galleries rather than structural refactoring.
