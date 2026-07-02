# 020726 Arena — rmcool26 Portfolio Chat Summary

This file summarizes the current working context so a new Arena chat can resume safely without re-reading the long conversation.

---

## 0. Current Resume Point

Resume from here:

```text
Homepage mobile-only Hero badge fix.
```

The user reverted the last broad homepage visual-regression prompts because they made the desktop/overall design worse. The current requested fix is **very narrow**:

```text
Only mobile Hero portrait/stat badge layout should be fixed.
Desktop/web layout must remain unchanged.
```

Required mobile behavior:

```text
Portrait centered
↓
Single “Hi, I’m Rajat Mishra” badge directly below the portrait
↓
All other proof/stat badges in a clean 2x2 grid
```

Do not redesign the homepage again. Do not change desktop. Do not touch other pages.

---

## 1. Project / User Context

User: **Rajat Mishra** / **rmcool26**

Role/context:

- UI/UX Designer
- Design Head / UI/UX Design Lead
- Programmatic designer direction
- Wants to be able to design, code, fix, and ship websites/apps end-to-end
- Portfolio should feel clean, premium, minimal, slightly cool, and memorable

Core brand/personality:

```text
rmcool26 = calm under complexity, sharp with pixels, focused on shipping.
```

Key phrases used:

```text
The cool guy behind the pixels.
The cool guy who makes messy workflows work.
Messy workflows made usable.
Design intent → shipped code.
Not just a designer. A finisher.
Cool work. Real problems. Shipped interfaces.
```

Tone required:

- Short
- Simple
- Kind
- User-friendly
- Confident but not arrogant
- Slightly playful
- Sounds like Rajat is speaking
- Not generic corporate copy
- Not AI-like

---

## 2. Global AI / Agent Role File Created

A role file was created in this Arena workspace:

```text
airole_rmcool26portfolio.md
```

Future Gemma/OpenCode prompts should include:

```text
Before doing anything, read and strictly follow:
- src/docs/agent.md
- airole_rmcool26portfolio.md
```

The file defines the assistant role as:

1. Experienced UI/UX/CI/IA/CX designer
2. Experienced UI/UX/CI/IA/CX tester and auditor
3. Accessibility/WCAG/global design standards reviewer
4. UI designer checking every element’s purpose, hierarchy, fit, and usability
5. Content writer for short, simple, kind, user-friendly copy
6. First-time/newbie user tester
7. Graphic designer for imagery, patterns, and look/feel

Important rules from that file:

- Rajat/rmcool26 portfolio should feel clean, premium, useful, and slightly cool.
- Every page should be understandable by non-designers too.
- Avoid hidden important information.
- Avoid over-corporate wording.
- Avoid emoji icons in premium UI if real icons are available.
- Use existing icon libraries only; do not add new dependencies.
- Prefer small, safe changes page by page.

---

## 3. Main Development Guardrails

Always tell Gemma/OpenCode:

```text
Before doing anything, read and strictly follow:
- src/docs/agent.md
- airole_rmcool26portfolio.md
```

Core rule:

```text
Do not change anything I did not explicitly ask you to change.
```

General restrictions unless specifically approved:

- Do not redo completed cursor work.
- Do not redo tooltip work.
- Do not touch project details/case studies unless explicitly asked.
- Do not touch website/webapp docs unless explicitly asked.
- Do not touch `src/content.ts` unless a very specific surgical fix is approved.
- Do not refactor unrelated code.
- Do not change routes unless the task is a routing/link fix.
- Do not add new dependencies.
- Run `npm run build` after implementation.
- Do not fix unrelated lint issues.

---

## 4. Known Architecture / Important Files

Project stack from previous context:

```text
Vite + React + TypeScript + Tailwind CSS + Framer Motion
```

Important files/paths:

```text
src/App.tsx
src/pages/Index.tsx
src/pages/About.tsx
src/pages/Work.tsx
src/pages/Process.tsx
src/pages/Experience.tsx
src/pages/ContactPage.tsx
src/pages/WorkDetail.tsx
src/components/portfolio/Hero.tsx
src/components/portfolio/StatBadges.tsx
src/components/portfolio/Nav.tsx
src/components/portfolio/Footer.tsx
src/components/portfolio/CTA.tsx
src/components/portfolio/FeaturedWork.tsx
src/components/portfolio/WorkGrid.tsx
src/components/portfolio/WorkCard.tsx
src/components/portfolio/Contact.tsx
src/components/portfolio/Cursor.tsx
src/content.ts
src/docs/agent.md
```

Project detail/case study caution:

```text
Do not touch src/pages/WorkDetail.tsx unless specifically fixing links or WorkDetail behavior.
Do not touch src/components/portfolio/CaseStudy/CaseStudyPvNXT.tsx unless explicitly approved.
```

Docs in project:

```text
src/docs/agent.md
src/docs/150626_PORTFOLIO_HANDOFF_v3.md
src/docs/170626-portfolio-revamp-brief.md
src/docs/300626_protfolio_summary.md
src/docs/webapp-project-detail-content.md
src/docs/webapp-projects-understanding-summary.md
src/docs/website-project-detail-content.md
src/docs/website-projects-understanding-summary.md
src/docs/work_redesign.md
```

---

## 5. Completed Before This Chat

From previous chat summary:

### Cursor Phase 1 — Done

File changed earlier:

```text
src/components/portfolio/Cursor.tsx
```

Completed behavior:

- RMCool Signal Cursor
- Small dot + soft halo/ring
- Hover halo expands subtly
- Tooltip dark glass pill
- Disabled on touch/mobile
- Reduced-motion support
- No duplicate cursor mounts found
- Build passed

### Tooltip Phase 2 — Done

Tooltip labels added to many components:

```text
src/components/portfolio/Nav.tsx
src/components/portfolio/Hero.tsx
src/components/portfolio/ThemeToggle.tsx
src/components/portfolio/WorkCard.tsx
src/components/portfolio/WorkGrid.tsx
src/pages/WorkDetail.tsx
src/components/portfolio/CaseStudy/ZoomableImage.tsx
src/components/portfolio/Contact.tsx
src/components/portfolio/Footer.tsx
```

Do not redo.

### Website/Web App content drafts — Done

Files exist in `src/docs/` for website and web app content. Do not redo unless explicitly requested.

---

## 6. Phase 3 Motion Audit Done

The chat started with:

```text
Phase 3 — Subtle Motion Polish Audit Only
```

Outcome:

- Audit accepted.
- No code changes made in Arena because actual project source was not present in Arena workspace.
- A focused verification pass could not inspect source because workspace only had the uploaded summary at that time.
- No Phase 4 motion implementation was justified without source verification.

Motion audit recommendations kept for future:

- Watch WorkCard wrapper vs inner CTA tooltip conflicts.
- Watch MagneticButton + tooltip + hover overload.
- Check reduced motion in WorkCard/MagneticButton/WorkDetail/ZoomableImage later.
- No large motion redesign.

---

## 7. About / Why Me Content Direction

User wanted About to be short, simple, recruiter-friendly, and explain rmcool26.

Final preferred direction:

```text
The cool guy behind the pixels.
```

About page structure recommendation:

```text
Nav
About / Why Me hero
rmcool26 decoded card
Why Rajat value cards
Stats
CTA
Footer
```

Recommended About copy direction:

```text
ABOUT RAJAT

The cool guy behind the pixels.

I’m Rajat Mishra — a UI/UX Designer, Design Head and programmatic designer who turns messy workflows into clean, shipped digital products.

I design websites, dashboards and web apps with business clarity, usable flows and frontend-ready thinking.

There are thousands of designers who can make a good-looking screen. I like staying with the problem until it becomes simple, useful and ready to move forward.
```

rmcool26 card:

```text
rmcool26 decoded

The cool guy behind the pixels — my personal design signature: calm under complexity, sharp with pixels, and focused on finishing what matters.
```

Why Rajat cards:

```text
Messy workflows, made simple
I turn confusing business processes into clear flows, screens and decisions.

Business-first UX
I connect user needs, business goals and real constraints before jumping into screens.

Clean UI with intent
I design interfaces that feel premium, usable and calm — not noisy or over-designed.

Design that can ship
I think beyond Figma: responsiveness, handoff, frontend feasibility and final execution.
```

Status:

- About plan and Gemma implementation prompt were provided.
- User later referred to About as already revamped/handled.
- Visual confirmation was not clearly received in this chat because uploaded screenshots were mixed.
- If resuming, verify `/about` visually if needed, but do not redo without user asking.

---

## 8. Multi-Page Split

The one-page homepage was split into separate pages.

Created/used routes:

```text
/              Home
/about         About
/work          Work
/process       Process
/experience    Experience
/contact       Contact
/work/:slug    Project details
```

Gemma implementation summary said files changed:

```text
src/components/portfolio/CTA.tsx
src/pages/About.tsx
src/pages/Work.tsx
src/pages/Process.tsx
src/pages/Experience.tsx
src/pages/ContactPage.tsx
src/pages/Index.tsx
src/App.tsx
src/components/portfolio/Nav.tsx
src/content.ts
```

Important: Gemma modified `src/content.ts` even though earlier it was restricted. Be careful in future.

### Blank Page Bug After Split

Problem:

```text
localhost showed blank page
```

Cause found:

```text
src/components/portfolio/Nav.tsx used useEffect but only imported useState.
```

Fix:

```ts
import { useEffect, useState } from "react";
```

Build passed after fix.

---

## 9. Page-Specific CTA System

A reusable CTA component exists/was created:

```text
src/components/portfolio/CTA.tsx
```

General rmcool26 CTA theme:

```text
Got a messy workflow? Let’s make it cool.

Send the brief — I’ll help turn it into something clean, usable and shippable.
```

Preferred contact buttons:

```text
Email Me
LinkedIn
Download Resume
```

Do not add WhatsApp unless user provides public `wa.me` link.

Page-specific CTA copies discussed:

### Home

```text
Messy workflow? Cool. Let’s make it work.

Start with the work, the story, or just say hi — I’ll help turn the rough idea into something clear and usable.
```

Later this was replaced conceptually by the Start Here section.

### About

```text
Think I can help untangle your workflow?

If you need someone who can simplify the mess, design the flow, and stay close until it ships — let’s talk.
```

Buttons:

```text
View Work
Email Me
LinkedIn
```

### Work

```text
Seen enough proof?
Let’s talk about yours.

Bring the messy brief — I’ll help shape it into a clean, usable product story.
```

Buttons:

```text
Email Me
LinkedIn
Download Resume
```

### Process

```text
Have a messy flow that needs a clear path?

I can help decode the problem, craft the experience, and prepare the design for real execution.
```

### Experience

```text
Need senior design thinking without the drama?

I bring 15+ years of UI/UX, product and frontend-aware design thinking to teams that want clarity, momentum and cleaner execution.
```

Buttons:

```text
Download Resume
LinkedIn
Email Me
```

### Contact

```text
Got a messy workflow? Let’s make it cool.

Send the brief — I’ll help turn it into something clean, usable and shippable.
```

---

## 10. Experience Page — Done / Approved

Experience page was audited, implementation prompt given, screenshot checked after implementation.

Approved visible state:

Hero:

```text
EXPERIENCE & STACK
Where I’ve shipped and how.

15+ years across UI/UX, websites, dashboards and product workflows — with frontend-aware thinking that helps designs move from Figma to real use.
```

Proof chips:

```text
15+ years in UI/UX
Design Lead
Websites + web apps
Frontend-aware design
```

Timeline copy was improved and accepted.

Current card:

```text
CURRENTLY
UI/UX Design Lead
Terranxt · Hybrid

Leading design for pvNXT products across solar workflows, dashboards and mobile experiences.

Open to senior / lead roles
```

Stack kept:

```text
Figma, FigJam, Miro, Notion
Tailwind, HTML/CSS, WordPress
Google Analytics, Jira, QGIS / ERDAS
```

CTA approved:

```text
Need senior design thinking without the drama?

I bring 15+ years of UI/UX, product and frontend-aware design thinking to teams that want clarity, momentum and cleaner execution.
```

Buttons:

```text
Download Resume
LinkedIn
Email Me
```

Optional micro-polish left for later:

- Rename `RECOGNITION` to `RECOGNITION SIGNALS`
- Slightly improve recognition row wording
- Add `Process` nav link globally if route exists and safe

No urgent changes required.

---

## 11. Contact Page — Audited, Implementation Prompt Provided, Final Status Not Fully Confirmed

Contact audit found:

- Contact page had duplicate CTA sections:
  - `<Contact />`
  - `<CTA />`
- Top Contact hero already had Email / LinkedIn / Resume.
- Bottom generic CTA was repetitive.

Recommended structure:

```text
Nav
Contact Hero
What you can send me section
Footer
```

Hero copy recommended:

```text
CONTACT

Let’s build something cool together.

Got a messy workflow, product idea, website, or dashboard that needs clarity? Send it over — I’ll help make it clean, usable and shippable.
```

Buttons:

```text
Email Me
LinkedIn
Resume / Download Resume
```

Email reassurance:

```text
Or just say hi at rmcool26@gmail.com — I actually reply.
```

“What you can send me” cards:

```text
A messy workflow
Too many steps, screens or decisions? I can help simplify the flow.

A website or landing page
If your site looks okay but does not explain, guide or convert well.

A dashboard or web app
For clearer UX, cleaner UI and product flows users can actually follow.

A role or collaboration
For senior UI/UX thinking, design leadership or frontend-aware execution.
```

Implementation prompt was given with allowed files:

```text
src/pages/ContactPage.tsx
src/components/portfolio/Contact.tsx
```

Status:

- Final Contact implementation was not clearly confirmed in screenshots because uploads were mixed.
- If resuming after homepage mobile fix, verify `/contact` visually.

---

## 12. Work Page — Audited, Implementation Prompt Provided, Status Unclear

Work page audit found:

What worked:

- Premium grid/cards
- Good project variety
- Filter accessibility already had `role="tablist"`, `aria-selected`, `aria-label`
- Entire card wrapped in Link while inner CTA visual only — avoids nested links
- Cursor label only on outer card — avoids tooltip flicker
- CTA strong

Weak points:

- `/work` reused `FeaturedWork`, felt like homepage section
- Heading `Featured Work` generic
- Main title was `h2`, no page `h1`
- Filter bar lacked helper label
- “View all work +count” label sounded like a link, not an on-page expansion
- `PPT/PDF` label felt file-extension-like

Recommended Work page copy:

```text
CASE STUDIES & PROOF

Cool work. Real problems. Shipped interfaces.

Websites, dashboards, and apps designed to be used — not just shown.
```

Filter helper:

```text
Filter by type
```

Filter label rename if possible without `src/content.ts`:

```text
PPT/PDF -> Decks & Docs
```

Show-all labels:

```text
Collapsed: Show all projects / Show all 21 projects
Expanded: Show fewer projects
```

CTA should remain:

```text
Seen enough proof?
Let’s talk about yours.

Bring the messy brief — I’ll help shape it into a clean, usable product story.
```

Implementation prompt was given with allowed files:

```text
src/pages/Work.tsx
src/components/portfolio/FeaturedWork.tsx
src/components/portfolio/WorkGrid.tsx
```

Status:

- Implementation status unclear. The screenshot shown before/around this still displayed `Featured Work`, so likely the Work polish may still be pending.
- Do not assume it is done unless user confirms.

---

## 13. Link Audit / Old Anchor Fixes

After multi-page split, old one-page anchors caused broken redirects.

Examples:

```text
Back to Work / All Work on WorkDetail went to /#work or homepage #work.
Hero View Work still used #work.
```

Gemma audit/fix completed:

Changed files:

```text
src/pages/WorkDetail.tsx
src/components/portfolio/Footer.tsx
```

Fixed:

```text
src/pages/WorkDetail.tsx:
  to="/#work" -> to="/work"  (3 occurrences)

src/components/portfolio/Footer.tsx:
  href="#top" -> button with window.scrollTo({ top: 0, behavior: "smooth" })
```

Build passed.

Remaining found at that time:

```text
src/content.ts:
  primaryCta.href = "#work"
  secondaryCta.href = "#contact"
```

Because Hero pulled CTA hrefs from `src/content.ts`, Hero buttons were still anchors.

A surgical prompt was provided to allow only this change in `src/content.ts`:

```text
primaryCta.href: "#work" -> "/work"
secondaryCta.href: "#contact" -> "/contact"
```

Status:

- The surgical fix prompt was given.
- Later screenshots show Hero buttons labeled `View Work` and `About Rajat`, suggesting additional homepage changes happened, but route clicks should still be manually verified.

Manual link tests still recommended:

```text
/ Hero View Work -> /work
/ Hero About Rajat -> /about
/work/:slug Back to Work -> /work
/work/:slug All Work -> /work
Footer Back to top scrolls current route
Email mailto works
LinkedIn external works
Resume opens/downloads
```

---

## 14. Homepage Revamp

Homepage is the current active area.

User priority:

```text
Homepage is where users land.
They judge in 3–4 seconds and can close in 1 second.
Hero must increase curiosity about Rajat/rmcool26.
```

### Homepage Audit Outcome

What worked:

- Strong visual hero
- Strong headline:

```text
The cool guy who makes messy workflows work
```

- Premium aesthetic
- Nav clean
- lucide-react available/used

Weak points:

- Bottom CTA repeated Hero idea
- Hero subtext too abstract
- Rajat name not visibly paired enough with portrait
- rmcool26 not explained on homepage
- Mobile view critical and was breaking
- Emojis/symbols in stat badges needed real icons

### Approved Homepage Direction

Keep H1:

```text
The cool guy who makes messy workflows work
```

Preferred eyebrow:

```text
UI/UX Design Lead · Programmatic Designer
```

But current visible mobile/desktop still showed:

```text
Pragmatic Product & UX Designer
```

This is acceptable unless user asks to change.

Approved subtext:

```text
I design websites, dashboards and web apps that turn messy workflows into clean, usable products — and I stay close until they ship.
```

One screenshot after revert showed older/alternate subtext:

```text
Ideas to apps. Audits to fixes. I design websites, dashboards and web apps that simplify real work and stay close until they ship.
```

Do not change copy again unless user asks.

rmcool26 micro-line:

```text
rmcool26 = calm under complexity, sharp with pixels, focused on shipping.
```

Hero buttons:

```text
View Work -> /work
About Rajat -> /about
```

Photo/name requirement:

```text
Rajat Mishra’s name must remain visible with/near the portrait.
Do not remove it.
```

Name badge copy:

```text
Hi, I’m Rajat Mishra
UI/UX Design Lead · rmcool26
```

### Start Here Section

Duplicate bottom CTA replaced by Start Here hub.

Heading:

```text
Not sure where to start?
```

Subtext:

```text
Pick what matters right now.
```

Cards:

```text
See the proof
Websites, dashboards and apps I’ve shaped from messy briefs to usable products.
View Work -> /work

Know the guy
A quick read on Rajat Mishra, rmcool26 and why I care about finishing well.
About Rajat -> /about

Start a conversation
Got a workflow, website or product idea that needs clarity? Send it over.
Contact Me -> /contact
```

Real icons required. No emojis.

---

## 15. Homepage Regression / Revert Context

After homepage broad implementation, mobile looked better conceptually but had issues:

1. Rajat badge duplicated/cluttered.
2. Floating badges around portrait broke on mobile.
3. Desktop got visually flattened / junior-looking after broad mobile fix prompts.

The user said:

```text
meine last do prompt k changes revert kar diye
```

Meaning: last two broad homepage visual fix prompts were reverted.

Current desired fix is now extremely focused:

```text
Only mobile Hero badge layout.
No desktop changes.
No Start Here changes.
No copy changes.
```

---

## 16. Current Active Bug / Next Task

From latest screenshot/mobile:

- Mobile Hero currently shows text/buttons/portrait.
- The photo is centered.
- Small proof badges are still crowded/overlapping around portrait.
- Rajat name badge needs to sit below portrait.
- Other stat/proof badges should be in a 2x2 grid below the name badge.

User’s exact current requirement:

```text
ismein main h rajat mishra wale kaa position mere photo k nich rahega
baaki ko 2k grid mein divide karo 2by2 mein dikhega mobile mein
aur yee changes sirf aur sirf mobile k liye h
baki sab jagaha sahi h
```

Translated implementation target:

```text
Mobile only:
- Rajat Mishra badge below photo
- All other badges in 2x2 grid
- Desktop unchanged
```

Allowed files for the next prompt:

```text
src/components/portfolio/Hero.tsx
src/components/portfolio/StatBadges.tsx
```

Do not edit:

```text
src/pages/Index.tsx
src/content.ts
src/components/portfolio/CTA.tsx
src/components/portfolio/Nav.tsx
src/components/portfolio/Footer.tsx
any other page/component
routes
cursor/tooltip implementation
project content
```

---

## 17. Exact Next Prompt To Give Gemma

Use this prompt in the next chat/session if continuing the current active fix:

```text
Before doing anything, read and strictly follow:
- src/docs/agent.md
- airole_rmcool26portfolio.md

We are working on Rajat Mishra / rmcool26 portfolio.

Important:
The last two broader homepage visual prompts caused regression and were reverted.
Do not redo those changes.
Do not redesign the homepage.
Do not change desktop layout.
Do not change tablet/desktop hero composition.
Do not change copy.
Do not change Start Here section.
Do not change routes.
Do not touch cursor or tooltip implementation.

Task:
Fix ONLY the mobile layout of the Hero portrait/stat badges.

Target page:
- /

Current mobile issue:
The small badges around Rajat’s photo are overlapping/crowded on mobile.
The Rajat Mishra name badge should sit clearly below the photo.
The remaining proof/stat badges should appear in a clean 2x2 grid on mobile.

Required mobile behavior:
1. Rajat portrait remains centered.
2. “Hi, I’m Rajat Mishra” badge appears directly below the portrait.
3. The Rajat name badge must not overlap badly, clip, or sit off-edge.
4. All other stat/proof badges should appear below the name badge in a 2-column by 2-row grid on mobile.
5. No horizontal scrolling.
6. No badge clipping.
7. No duplicate Rajat name badge.
8. Desktop layout must remain unchanged.

Allowed files:
- src/components/portfolio/Hero.tsx
- src/components/portfolio/StatBadges.tsx

Do not edit any other file.
If you need to edit another file, stop and ask first.

Strictly do not edit:
- src/pages/Index.tsx
- src/content.ts
- src/components/portfolio/CTA.tsx
- src/components/portfolio/Nav.tsx
- src/components/portfolio/Footer.tsx
- any other page/component
- routes
- cursor implementation
- tooltip implementation
- project content

Do not change:
- Hero headline
- Hero subtext
- Hero CTA labels or links
- rmcool26 micro-line
- Start Here cards
- desktop floating badge layout
- icons
- numbers/metrics
- portrait image

Implementation guidance:

1. Inspect current Hero.tsx and StatBadges.tsx.

2. Identify the Rajat identity/name badge:
Copy likely:
Hi, I’m Rajat Mishra
UI/UX Design Lead · rmcool26

3. Mobile layout only:
Use responsive Tailwind classes or existing responsive logic so that below the desktop breakpoint:
- desktop absolute/floating positions are disabled or hidden for mobile
- mobile version becomes stacked/contained

Mobile order should be:
- portrait
- Rajat name badge
- 2x2 proof badge grid

4. Proof badge grid:
The proof/stat badges excluding Rajat name badge should render as:
- grid
- grid-cols-2
- gap small but readable
- width within viewport
- max width appropriate for mobile
- centered under portrait/name badge

5. Rajat name badge:
- Place directly below portrait.
- Center align.
- Keep it readable.
- Give enough margin-top or negative margin only if visually safe.
- Do not let it overflow viewport.
- Do not duplicate it.

6. Desktop:
Do not change desktop visual positions.
If desktop currently uses absolute/floating badges, keep them exactly as-is.
Only add/adjust mobile-specific classes/markup.
Use breakpoint classes like hidden md:block / md:hidden carefully if needed.

7. Accessibility:
- Keep icons decorative if text already explains badges.
- Do not add tooltips to static badges.
- Preserve existing data-cursor/data-cursor-label on interactive elements.
- Ensure text stays readable.

8. QA:
Test mobile widths:
- 320px
- 360px
- 390px

Expected:
- no horizontal scroll
- portrait centered
- Rajat name badge below portrait
- remaining badges in 2x2 grid
- desktop unchanged

After fix:
- Run npm run build.

Output:
1. Files changed
2. What mobile-only change was made
3. Confirmation desktop layout was not changed
4. Confirmation Rajat name badge is below portrait on mobile
5. Confirmation other badges are 2x2 grid on mobile
6. Build result
7. Anything intentionally left untouched

Stop after implementation summary.
```

---

## 18. Important Visual QA Expected After Next Fix

Mobile should look like:

```text
Hero text
View Work / About Rajat buttons
Portrait
Hi, I’m Rajat Mishra
UI/UX Design Lead · rmcool26
[10+ Tools] [20+ Live Products]
[50+ Projects] [2→12 Team Scaled]
Start Here cards
Footer
```

No duplicate Rajat badge.
No badges clipped around portrait.
No horizontal scroll.
Desktop unchanged.

---

## 19. Common Gemma Failure Modes Observed

Gemma/OpenCode has previously:

- Modified `src/content.ts` despite restrictions.
- Made broad layout changes when only small changes were needed.
- Flattened the desktop hero while trying to fix mobile.
- Got stuck in internal error loops in previous sessions.

If Gemma starts changing more than allowed, stop it and say:

```text
Stop. This task is mobile-only. Do not change desktop, copy, routes, Start Here, or other pages.
```

If Gemma says it needs another file:

```text
Stop and report why that file is needed before editing.
```

---

## 20. Build / Warnings Notes

Known build status across the project:

- `npm run build` passed after multiple changes.
- Known warning about old Browserslist/caniuse-lite data is not a blocker.
- Some chunks may be large due to assets; not a blocker.
- Lint has pre-existing unrelated issues; do not fix unless asked.

---

## 21. Suggested Next Sequence After Mobile Badge Fix

After the current mobile Hero badge fix is completed and visually approved:

1. Verify homepage desktop + mobile.
2. Verify Hero routes:
   - View Work -> `/work`
   - About Rajat -> `/about`
3. Verify WorkDetail back links:
   - Back to Work -> `/work`
   - All Work -> `/work`
4. Verify Contact page final state, because implementation was not clearly confirmed.
5. Verify Work page polish status. It may still be pending.
6. Consider adding Process nav link if `/process` exists and nav safely supports it without `src/content.ts` edits.

---

## 22. Short Resume Message For New Chat

If starting a new chat, paste this:

```text
Read and use 020726arena_rmcool26_chatsummary.md as the current project context.
We are resuming rmcool26 portfolio work.
Do not redo completed work.
Cursor Phase 1 and Tooltip Phase 2 are done.
About and Experience have been handled.
Current active task: Homepage mobile-only Hero badge fix.
The last two broad homepage visual prompts were reverted.
Do not redesign homepage.
Do not change desktop.
Only fix mobile Hero portrait/stat badge layout:
- Rajat name badge below photo
- other proof badges in 2x2 grid
- no duplicate badge
- no horizontal overflow
Allowed files only: Hero.tsx and StatBadges.tsx.
Return safe plan/prompt or proceed only after approval.
```
