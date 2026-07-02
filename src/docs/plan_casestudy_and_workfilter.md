# Plan — Work Page "Case Study" Filter + pvNXT Case Study Revamp (DRAFT v1)

Status: DRAFT — needs Rajat's answers before it becomes the final Gemma prompt.
Reference studied: friend's iGOT Karmayogi case study (numbered sections, visual-heavy, deep-dive style).

---

## PART 1 — Work Page: New "Case Study" Filter

### Recommended filter order (left to right)

```text
All → Case Study → Web App → Website → Mobile App → Decks & Docs
```

Why this priority:

1. **All** — default, always first.
2. **Case Study** — highest-proof content. Recruiters/leads who land on /work
   want depth, not just thumbnails. Deepest work deserves slot #2.
3. **Web App** — Rajat's core positioning ("messy workflows → dashboards/products",
   current pvNXT role). Differentiated work goes before commodity work.
4. **Website** — more items (8) but less differentiated than web apps.
5. **Mobile App** — smaller set, supporting proof.
6. **Decks & Docs** — supporting material, last.

(Alternative: Website before Web App if pure count order preferred — not recommended,
priority should follow positioning, not count.)

### Filter mechanics (to verify in code)

- Current filters are type/category based (likely from `src/content.ts`).
- "Case Study" is NOT a type — it cuts across types (e.g. pvNXT Solar Suite is
  Web App + Case Study). The pvNXT card already shows a `Case Study` tag.
- Two possible implementations:
  - **A (preferred, zero content.ts edit):** filter logic checks existing
    `Case Study` tag on projects inside WorkGrid/FeaturedWork.
  - **B (fallback):** add a `hasCaseStudy: true` flag in `src/content.ts` —
    surgical, only if tags are inconsistent. Needs explicit approval since
    content.ts is restricted.
- Chip must show correct count badge like others (e.g. `Case Study 1`).
- Keep existing tablist accessibility (role="tablist", aria-selected) intact.

Likely files: `src/components/portfolio/WorkGrid.tsx`, `src/components/portfolio/FeaturedWork.tsx`
(+ `src/content.ts` only if option B approved).

---

## PART 2 — Case Study Page Revamp (pvNXT Solar Suite master case study)

### 2.1 Proposed layout (section by section)

Design principle: **60% visual / 40% text.** Every section = one visual + few lines.
A skimmer should "get it" in 30 seconds; a reader in 3–4 minutes.

```text
01  HERO
    - Project name + one-liner ("3 portals. 2 apps. One solar workflow.")
    - Meta chips: Role · Timeline · Platform · Status (Live)
    - Big hero visual (ecosystem mockup composite)

02  TL;DR SNAPSHOT CARD  ← new, anti-boredom weapon
    - 4 tiny blocks: The mess → My role → What shipped → Impact numbers
    - Reader gets the whole story in 30 seconds, then decides to scroll

03  OVERVIEW & MY ROLE
    - 3–4 short lines max + compact grid: Role / Team / Tools / Duration
    - (same idea as friend's reference, but shorter)

04  THE MESS (Problem)
    - 2–3 lines + one "messy workflow" diagram (GRAPHIC #1)

05  THE ECOSYSTEM (Solution space)
    - One hub diagram: 3 portals + 2 apps around a pvNXT core (GRAPHIC #2)
    - 1 line per product, no paragraphs

06  PRODUCT DEEP-DIVE CARDS  ← answers the sub-page question
    - One flagship product gets a short inline deep-dive (screens + flow)
    - Other products = compact cards: 1 image + 2–3 lines + link
      "Explore full breakdown →" to /work/pvnxt-studio etc.
    - DO NOT re-describe products fully here (see 2.3)

07  DESIGN DECISIONS THAT MATTERED
    - 3–4 visual pairs: screen/before-after + one-line caption each
    - Captions do the talking, not paragraphs

08  RESULTS & LEARNINGS
    - Big stat band (typography, like friend's 13.5M+ / 50%)
    - "Takeaways" card: 3 short bullets max

09  NEXT PROJECT / CTA
    - Existing CTA pattern, keep consistent
```

### 2.2 Table of Contents — recommendation: modernize

- **Desktop:** slim sticky side rail with numbered sections (01–08),
  active-section highlight while scrolling, subtle progress indicator.
- **Mobile:** collapsed "On this page" pill/dropdown near top (no sticky rail).
- Add tiny "≈ 4 min read" hint near TOC.
- Numbered-section style (01., 02.) matches the friend's reference and looks premium.
- Final call pending: need to SEE current TOC first (screenshot needed).

### 2.3 Sub-pages (/work/pvnxt-studio, /work/pvnxt-go-web, /work/pvnxt-connect-web, /work/proposal-design)

Recommendation: **LINK, don't re-describe.**

Why:
- Re-describing = duplicate content, longer page, more boring (against the goal).
- Linking keeps the master case study short and drives deeper navigation
  (recruiter chooses their own depth — good UX).
- Each product card in section 06: image + 2–3 line hook + link to its page.
- Exception: ONE flagship product gets a short inline deep-dive on the master
  page (like friend's "Deep dive: Learn hub") so the case study still shows
  real design thinking without clicking away.
- Flagship candidate: pvNXT Studio (assumed most impressive) — NEEDS CONFIRMATION.

Cannot verify localhost URLs from Arena — need screenshots or file contents to
confirm what those 4 pages already say (avoid contradicting them).

### 2.4 Content tone rules (for when copy is written)

- rmcool26 voice: short, simple, kind, confident, slightly playful.
- Max 2–3 short paragraphs per section; prefer bullets and captions.
- Numbers over adjectives ("3 portals, 2 apps" > "comprehensive suite").
- No corporate filler, no AI-sounding lines.
- Every visual gets a one-line human caption.

### 2.5 Graphics Rajat will create (described, with placement)

| # | Graphic | Placement | Description |
|---|---------|-----------|-------------|
| 1 | Messy workflow diagram | Section 04 | Tangled "before" flow: Excel + WhatsApp + email + calls arrows crossing, slightly hand-drawn/sketchy style, muted colors, one red knot in the middle |
| 2 | Ecosystem hub map | Section 05 | Central pvNXT node, 5 satellite nodes (3 portals + 2 apps), thin connector lines, each node = icon + name, clean flat style (like friend's hexagon hub but in rmcool26 visual language) |
| 3 | Flagship user-flow diagram | Section 06 (inline deep-dive) | Simplified journey flow of the flagship product, 5–7 steps max, left-to-right, real labels |
| 4 | Before/after screen pair | Section 07 | Old messy screen vs shipped clean screen, side by side with a subtle divider |
| 5 | Product card screens | Section 06 cards | One hero screen per product (Studio, Go, Connect, Proposal Design) in device frame |
| 6 | Stat band | Section 08 | No image needed — big typography numbers (build in code) |
| 7 | (Optional) 20–30s screen recording | Section 06 | Flagship product walkthrough, muted autoplay-on-view or click-to-play |

---

## OPEN QUESTIONS (blocking final plan)

1. Scope: only pvNXT Solar Suite master case study, or a reusable case-study
   layout for future projects too?
2. Need current case study page: screenshot(s) or CaseStudyPvNXT.tsx content
   (Arena workspace has no project source; localhost links unreachable).
3. Need the 4 sub-pages' current content (screenshots or the two
   src/docs/webapp-*.md files) to finalize link-vs-describe.
4. content.ts surgical edit allowed if the Case Study filter can't be done
   via existing tags?
5. Flagship product for inline deep-dive: pvNXT Studio? Or another?

---

## SEQUENCE AFTER APPROVAL

1. Rajat answers open questions + uploads current page screenshots/files.
2. Finalize layout + TOC decision.
3. Write full rmcool26-tone copy for every section (separate md for review).
4. Rajat approves copy + creates graphics from descriptions above.
5. Then two separate, scoped Gemma prompts:
   - Prompt A: Work page Case Study filter (small, safe).
   - Prompt B: Case study page revamp (bigger, with locked layout+copy).
6. npm run build + mobile/desktop QA after each.
