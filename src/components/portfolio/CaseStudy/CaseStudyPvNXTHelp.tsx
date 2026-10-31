/**
 * CaseStudyPvNXTHelp.tsx
 * pvNXT Help case study, route: /case/pvnxt-help
 */
import { Cursor } from "../Cursor";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { ScrollProgress } from "../ScrollProgress";
import {
  BeforeAfter,
  BrowserFrame,
  Callout,
  CaseBody,
  CaseHero,
  CaseSummary,
  Cards,
  Compare,
  Decision,
  PhoneFrame,
  RelatedCase,
  Rules,
  Sec,
  Shot,
  ShotGrid,
  Stats,
  Sub,
  Ticks,
  Tiles,
  Why,
  useCaseStudyPage,
} from "./calm/CaseLayout";
import suiteCover from "@/assets/projects/rmcool26-pvNXT-suite-675.svg";

const imgs = import.meta.glob("@/assets/projects/pvnxt-help/*.jpg", { eager: true, import: "default" }) as Record<
  string,
  string
>;
const img = (name: string) => imgs[`/src/assets/projects/pvnxt-help/${name}.jpg`];

const TOC = [
  { id: "context", label: "Context" },
  { id: "problem", label: "The problem" },
  { id: "why", label: "Why before beta" },
  { id: "research", label: "Research" },
  { id: "principles", label: "Principles" },
  { id: "explore", label: "Exploring directions" },
  { id: "decisions", label: "Key decisions" },
  { id: "final", label: "Final design" },
  { id: "quality", label: "Testing" },
  { id: "result", label: "How it helps" },
  { id: "ai", label: "Working with AI" },
  { id: "learned", label: "What I learned" },
];

function SupportFlow() {
  return (
    <figure className="!my-8 rounded-2xl border border-border bg-muted/50 p-5 md:p-6" aria-label="How support worked before">
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">A user gets stuck</span>
          <span className="mt-1 block font-display font-bold text-foreground">"How do I add my own customer?"</span>
        </div>
        <span className="hidden h-px w-10 bg-primary md:block" aria-hidden="true" />
        <div className="flex flex-col gap-2">
          {["WhatsApp", "Email", "Phone call", "Support form inside the portal"].map((c) => (
            <span key={c} className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground">
              {c}
            </span>
          ))}
        </div>
        <span className="hidden h-px w-10 bg-primary md:block" aria-hidden="true" />
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">The team answers</span>
          <span className="mt-1 block font-display font-bold text-primary">The same answer, again, by hand.</span>
        </div>
      </div>
      <figcaption className="mt-5 text-sm text-muted-foreground">
        Before: every route ends with a person typing an answer they have typed before.
      </figcaption>
    </figure>
  );
}

function AiLoop() {
  const steps = [
    { b: "Options", s: "Three designs, desktop and mobile" },
    { b: "Review", s: "I pick, merge or reject, with reasons" },
    { b: "Build", s: "Only after I approve" },
    { b: "Test", s: "Automated checks, then my walkthrough" },
  ];
  return (
    <ol className="!my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((st, i) => (
        <li key={st.b} className="rounded-2xl border border-border bg-card p-4">
          <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
          <b className="mt-1 block font-display font-bold text-foreground">{st.b}</b>
          <span className="mt-1 block text-sm text-muted-foreground">{st.s}</span>
        </li>
      ))}
    </ol>
  );
}

export default function CaseStudyPvNXTHelp() {
  useCaseStudyPage("pvNXT Help — Case Study · Rajat Mishra");

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Cursor />
      <ScrollProgress />
      <Nav />

      <CaseHero
        eyebrow="Case study · Product design · 2026"
        title="pvNXT Help: one calm place to get unstuck, across six solar portals."
        lede="Before the pvNXT beta, every question from a user ended up as a WhatsApp message, an email or a phone call. I designed a single help centre so people can find the answer themselves, in a minute, on any device, and still reach a person when they need one."
        meta={[
          { label: "My role", value: "Product designer. I did the research, set the direction and made every design call, using AI (Claude) to build and test." },
          { label: "Team", value: "Me, with the pvNXT team for content and product facts." },
          { label: "When", value: "October 2026, before the beta launch." },
          { label: "Status", value: "Built, tested and ready to go live as help.pvnxt.com." },
        ]}
        visual={
          <div className="relative pr-0 sm:pr-24 md:pr-32">
            <BrowserFrame
              src={img("after-home")}
              url="help.pvnxt.com"
              alt="pvNXT Help home page: one search box, then tiles for Studio, Go, Connect, SCADA, Atlas, Artha and Account and billing."
            />
            <PhoneFrame
              src={img("m-article")}
              alt="A pvNXT Help guide on a phone: numbered steps with a real screenshot."
              className="absolute -bottom-6 right-0 hidden w-[150px] sm:block md:w-[190px]"
            />
          </div>
        }
      />

      <CaseSummary
        items={[
          { label: "The problem", body: "Six portals, one small support team, and no place to look things up. Help lived in long Word and PDF guides, so most questions came in by WhatsApp, email or phone." },
          { label: "What I did", body: "Turned three long user guides into 58 short web guides, designed a calm search-first help site for every portal, and added a route to a real person on every page." },
          { label: "Where it is now", body: "Ready for beta. No usage numbers yet, so I set up what we will measure from the first week instead of guessing." },
        ]}
      />

      <CaseBody toc={TOC}>
        {/* 01 */}
        <Sec id="context" num="01" label="Context" title="pvNXT is a set of portals for going solar.">
          <p>
            Terranxt builds pvNXT, a suite that connects everyone in a rooftop solar project. A homeowner asks for solar, a
            solar company designs it, an installer builds it and a monitoring team looks after it. Each group gets its own
            portal and its own mobile app. Users are in India and the UAE.
          </p>
          <Tiles
            items={[
              { title: "Studio", body: "Solar companies, designers and sales teams" },
              { title: "Go", body: "Installers and ground teams" },
              { title: "Connect", body: "Homeowners and business owners" },
              { title: "SCADA", body: "Plant owners and O&M teams" },
              { title: "Atlas", body: "3D roof models, inside Studio and Connect" },
              { title: "Artha", body: "Investors backing solar projects" },
            ]}
          />
          <p>
            These are very different people. A designer sits at a desk with a big screen. An installer is on a roof with a
            phone and patchy signal. A homeowner is doing this for the first time and is worried about money. Whatever I
            built had to work for all of them.
          </p>
        </Sec>

        {/* 02 */}
        <Sec id="problem" num="02" label="The problem" title="Every question became a message to the team.">
          <p>
            Before this project, there was no place where users could look up how to do something. When someone got stuck,
            they had four options, and all four led to a person on the team.
          </p>
          <SupportFlow />
          <p>
            The answers did exist. They were in step-by-step user guides for Studio, Go and Connect, written as Word
            documents and shared as PDFs. The Studio guide alone is 35 pages. The guides were accurate, but hard to use when
            you are stuck:
          </p>
          <Ticks
            items={[
              "You can't search across them, or even know which file to open.",
              "They are hard to read on a phone, which is where installers and homeowners are.",
              "You can't link someone to one step, so support had to retype it.",
              "They were only in English, and had no hours or contacts for the UAE.",
              "Screenshots showed real customer details.",
            ]}
          />
          <BeforeAfter
            label="Guide before and after"
            before={{
              src: img("before-pdf"),
              alt: "A page from the 35-page Studio PDF guide, with long paragraphs and large screenshots.",
              caption: (
                <>
                  <b className="text-foreground">Before.</b> Page 11 of 35 in the Studio PDF. (I blurred the screenshots here
                  because they show customer details.)
                </>
              ),
            }}
            after={{
              src: img("after-article"),
              alt: "The same task as a web guide: a topic list on the left, five numbered steps and blurred screenshots.",
              caption: (
                <>
                  <b className="text-foreground">After.</b> The same task, "Add your own customer", as one short web guide
                  with its own link, five steps and blurred screenshots.
                </>
              ),
            }}
          />
        </Sec>

        {/* 03 */}
        <Sec id="why" num="03" label="Why now" title="Why help had to exist before the beta, not after.">
          <p>A help centre was already part of the pvNXT suite plan. My case for building it before the beta came down to four things:</p>
          <Cards
            items={[
              { title: "The beta brings new people at once", body: "Lots of first-time users join in the same few weeks. Without self-help, every one of their questions lands on the same small team." },
              { title: "Beta is when people get stuck most", body: "New screens and changing steps mean more questions. Good help keeps people moving instead of giving up." },
              { title: "Feedback needs a clean signal", body: "If support is busy repeating basics, it's hard to see the real problems in the product. Help absorbs the basics so the real issues stand out." },
              { title: "Guides will change every week", body: "The product will change during beta. All the help content lives in one data file, so the team can fix a step without a redesign." },
            ]}
          />
        </Sec>

        {/* 04 */}
        <Sec id="research" num="04" label="Research" title="What I looked at before drawing anything.">
          <Sub>1. The content we already had</Sub>
          <p>
            I read the Studio, Go and Connect user guides end to end, plus the pvNXT features sheet. I split them into single
            tasks, each one answering one question someone would actually ask, like "Quote on a Bid Board project" or
            "Verify your installer account". That gave me the real shape of the site before any layout.
          </p>
          <Stats
            items={[
              { value: "3", label: "long guides, read in full" },
              { value: "58", label: "short guides now" },
              { value: "63", label: "real screenshots, details blurred" },
              { value: "17", label: "walkthrough videos mapped to guides" },
            ]}
          />
          <Sub>2. Help centres people already know</Sub>
          <p>
            I studied Google Help, Microsoft Support and the Indian Income Tax portal. These serve huge, mixed audiences, and
            their patterns are familiar to our users. What I took from them:
          </p>
          <Ticks
            items={[
              <><b className="text-foreground">Google Help:</b> one big search box first, then products. People come with a question, not a menu in mind.</>,
              <><b className="text-foreground">Microsoft Support:</b> short articles with numbered steps, a "Was this helpful?" check and a clear way to contact a person.</>,
              <><b className="text-foreground">Income Tax portal:</b> plain words for people who aren't experts, and help that sits next to the task.</>,
            ]}
          />
          <Sub>3. The moments people are in</Sub>
          <p>I wrote down who arrives at help, and in what state. This shaped tone and layout more than any visual reference.</p>
          <Tiles
            accent
            items={[
              { title: "Mid-task and blocked", body: 'A designer can\'t find "Generate panel layout". Needs the exact step in under a minute.' },
              { title: "On a roof, on a phone", body: "An installer needs to update a checklist with one hand and weak signal. Needs big targets and light pages." },
              { title: "Worried about money", body: "A homeowner wants to know what happens after they pay. Needs calm, plain words and a person to call." },
              { title: "Not sure which portal", body: 'Someone has a link from their solar company and doesn\'t know what "Connect" is. Needs a simple "which one is mine".' },
            ]}
          />
        </Sec>

        {/* 05 */}
        <Sec id="principles" num="05" label="Principles" title="Four rules I set, and used to make every call.">
          <Rules
            items={[
              { title: "Answer first.", body: "The first thing on every page helps you find an answer. Not a banner, not a tour." },
              { title: "Show the real screen.", body: "Real screenshots of pvNXT with personal details blurred. No stock images in guides." },
              { title: "Calm over clever.", body: "People arrive stressed. Quiet layout, one accent colour, small motion only." },
              { title: "A person is always one tap away.", body: "Self-help should never feel like a wall between you and the team." },
            ]}
          />
        </Sec>

        {/* 06 */}
        <Sec id="explore" num="06" label="Exploring directions" title="Three bold directions first. Then I chose the quiet one.">
          <p>
            For every page I made three options for desktop and mobile, reviewed them, and only then built. For the home page
            I started wide on purpose, to see what each idea would cost.
          </p>
          <ShotGrid
            items={[
              { src: img("dir-1"), alt: "Direction 1: answer-first home with a large headline and a search preview.", caption: <><b className="text-foreground">1. Answer first.</b> Search with a live preview. Strong, but a lot of marketing for a help page.</> },
              { src: img("dir-2"), alt: "Direction 2: help organised as a project lifecycle.", caption: <><b className="text-foreground">2. Project lifecycle.</b> Help shown as the steps of a solar project. Nice story, but people come with one question, not a whole journey.</> },
              { src: img("dir-3"), alt: "Direction 3: a dark console-style help page.", caption: <><b className="text-foreground">3. Console.</b> Dark and techy. It looked good, but felt like a product to learn, not a place to get help.</> },
            ]}
          />
          <Callout label="The call">
            <p>
              All three were louder than the problem needed. Someone stuck mid-task wants a search box and their portal,
              nothing else. So I went minimal: one question, one search, the portals underneath. Then I made three minimal
              versions and picked the plainest.
            </p>
          </Callout>
          <Shot
            src={img("after-home")}
            alt="Final home: a question, a search box and seven portal tiles."
            caption="Final home. One question, one search, every portal one click away. A soft moving dot texture behind the search is the only motion."
          />
        </Sec>

        {/* 07 */}
        <Sec id="decisions" num="07" label="Key decisions" title="The calls that shaped it, with the before, the after and the why.">
          <p>Like a good error message redesign, each change below starts with what was wrong for the user, not with how it looks.</p>

          <Decision n={1} title="Guide pages: none of the three options was right on its own">
            <ShotGrid
              items={[
                { src: img("guide-a"), alt: "Guide option A: docs-style with three columns.", caption: <><b className="text-foreground">A. Docs, three columns.</b> Easy to jump around, but busy.</> },
                { src: img("guide-b"), alt: "Guide option B: one focused reading column.", caption: <><b className="text-foreground">B. One focused column.</b> Easiest to read, but you lose your place in the topic.</> },
                { src: img("guide-c"), alt: "Guide option C: a do-along checklist.", caption: <><b className="text-foreground">C. Do-along checklist.</b> Fun, but ticking boxes adds work for a one-time task.</> },
              ]}
            />
            <Why
              rows={[
                { k: "Why", v: 'People read one guide, then usually need the next step. So the final guide keeps A\'s topic list on the left and B\'s single reading column, and drops C\'s checkboxes. Each guide ends with a "Next guide" card and a "Was this helpful?" check.' },
              ]}
            />
          </Decision>

          <Decision n={2} title={'"Mobile apps" was not a portal, so I removed it'}>
            <BeforeAfter
              label="Home tiles before and after"
              before={{ src: img("before-home-tiles"), alt: "Before: eight tiles including Mobile apps and Account.", caption: <><b className="text-foreground">Before.</b> "Mobile apps" sat next to the portals as if it were one.</> }}
              after={{ src: img("after-home"), alt: "After: seven tiles, ending with Account and billing.", caption: <><b className="text-foreground">After.</b> Seven tiles. Every portal has its own app, so the app link now lives on each portal's page.</> }}
            />
            <Why
              rows={[
                { k: "The problem", v: 'Every portal has an Android and iOS app. A "Mobile apps" tile made people ask: which app? Mine, or a different one?' },
                { k: "The fix", v: 'Each portal page now says "Get the Studio app · Android and iOS" right under its title. "Account" became "Account & billing", because billing questions were the gap I found when I checked the content.' },
              ]}
            />
          </Decision>

          <Decision n={3} title="Sign in: I got it wrong first, and fixed it">
            <Shot
              src={img("after-signin")}
              alt="Sign in page: enter your email first, then a code or password, or continue with Google, Microsoft or Apple."
              caption="Final sign in. Email first, then a one-time code or password, or Google, Microsoft or Apple."
            />
            <Why
              rows={[
                { k: "Before", v: 'My first version had a "Create account" option, like most help sites.' },
                { k: "What I learned", v: "The pvNXT team told me there is no sign-up on help. Accounts are made inside each portal, and one email belongs to one portal." },
                { k: "The fix", v: "No sign-up at all. You type your email and the site knows your portal. Signing in only adds extras, like saved guides and your support requests. All help stays open without it." },
              ]}
            />
          </Decision>

          <Decision n={4} title="The footer became the place to reach a person">
            <BeforeAfter
              label="Footer before and after"
              before={{ src: img("before-footer"), alt: "Before: a single thin line with copyright and three links.", caption: <><b className="text-foreground">Before.</b> One thin line. If you scrolled to the bottom looking for help, there was nothing.</> }}
              after={{ src: img("after-footer"), alt: "After: a dark footer with hours, phone and email, plus columns for portals, help, contact and company.", caption: <><b className="text-foreground">After.</b> Hours for India and the UAE, phone and email under the brand, then a plain "Contact us" column.</> }}
            />
            <Why
              rows={[
                { k: "The problem", v: "The bottom of a page is where people look when they have given up searching. It had no way to reach anyone." },
                { k: "What I cut", v: 'One option added a big "Need a person?" banner above the footer. I removed it. The same three contact routes were already in the footer and in the assistant, and a third copy only adds noise.' },
                { k: "Words", v: 'I changed casual labels to how real support teams talk: "Chat on WhatsApp", "Raise a support request", "Call support".' },
              ]}
            />
          </Decision>

          <Decision n={5} title={'"Ask us" answers only from our guides, and hands off to a person'}>
            <Shot
              src={img("after-chat")}
              alt="The Ask pvNXT Help panel: suggested questions, a text box and WhatsApp, Email and Raise a request links."
              caption="The assistant suggests common questions and always shows how to reach a person."
            />
            <Why
              rows={[
                { k: "The risk", v: "A chatbot that makes things up is worse than no chatbot, especially about payments or approvals." },
                { k: "The design", v: "It only answers from the pvNXT guides and links the guide it used. If it can't help, it says so and offers WhatsApp, email or a support request. Those three links never leave the panel." },
              ]}
            />
          </Decision>

          <Decision n={6} title="Built for India and the UAE from day one">
            <Why
              rows={[
                { k: "Language", v: "A switcher in the header for English, Hindi and Arabic. In Arabic the whole layout flips right to left. Portal names stay in English so they match the apps." },
                { k: "Time", v: "Support hours are shown in both India time (IST) and UAE time (GST), so nobody has to do the maths." },
                { k: "Screens", v: "Every page was checked at phone width, because installers and homeowners mostly use phones." },
              ]}
            />
          </Decision>

          <Decision n={7} title="Videos belong next to the steps, not on their own">
            <Shot
              src={img("after-videos")}
              alt="Videos page with walkthroughs grouped by portal."
              caption="Videos are grouped by portal, and each one also shows up on the guide it explains."
            />
            <Why
              rows={[
                { k: "Why", v: 'Some people learn by watching. But a separate video library makes you search twice. So each of the 17 walkthroughs is linked from its matching guide, and the videos page is just a second way in. Ones not recorded yet say "Coming soon" honestly.' },
                { k: "What I removed", v: "I tried videos that play on hover. In practice they were distracting and heavy on mobile data, so they went." },
              ]}
            />
          </Decision>
        </Sec>

        {/* 08 */}
        <Sec id="final" num="08" label="Final design" title="Eleven pages, one calm system.">
          <p>
            Home, portal pages, guides, search, videos, service status, contact, sign in, "My help", all guides and a helpful
            404. Same header, same type, one teal accent from the Terranxt brand.
          </p>
          <ShotGrid
            cols={2}
            items={[
              { src: img("after-portal"), alt: "Studio help page with topics in a list.", caption: "Portal page: topics in the order you use the product." },
              { src: img("after-search"), alt: "Search results for password with filters by portal.", caption: "Search: a plain list, filtered by portal." },
              { src: img("after-guides"), alt: "All guides page.", caption: "All guides, with a filter for each portal." },
              { src: img("after-status"), alt: "Service status page.", caption: 'Service status, so "is it me or the portal?" has an answer.' },
            ]}
          />
          <div className="!my-8 grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { n: "m-home", alt: "Home on a phone.", c: "Home" },
              { n: "m-portal", alt: "Go portal help on a phone.", c: "Go portal" },
              { n: "m-article", alt: "A guide on a phone.", c: "A guide" },
            ].map((p) => (
              <figure key={p.n}>
                <PhoneFrame src={img(p.n)} alt={p.alt} className="rounded-[1.25rem] border-4 sm:rounded-[2rem] sm:border-[6px]" />
                <figcaption className="mt-2 text-center text-sm text-muted-foreground">{p.c}</figcaption>
              </figure>
            ))}
          </div>
        </Sec>

        {/* 09 */}
        <Sec id="quality" num="09" label="Testing" title="I didn't call it done until it passed.">
          <p>After every round I ran automated checks in a real browser, then walked through the main journeys by hand. On the final build:</p>
          <Stats
            items={[
              { value: "0", label: "accessibility issues found by axe-core" },
              { value: "0", label: "broken links, out of 132 checked" },
              { value: "0", label: "script errors across all pages" },
              { value: "390px", label: "phone width with no sideways scroll" },
            ]}
          />
          <p>
            The journeys I tested end to end: find a guide from search, go from a portal to a guide to the next guide, ask the
            assistant and reach a person, sign in with email, switch to Arabic and back, and land on a broken link. Motion
            stops for people who turn on "reduce motion".
          </p>
        </Sec>

        {/* 10 */}
        <Sec id="result" num="10" label="How it helps" title="What changes for users, support and the portals.">
          <Compare
            rows={[
              { k: "Finding an answer", before: "Message the team and wait", after: "Search, follow a few steps, done" },
              { k: "Guides", before: "Three long PDFs, English only", after: "58 short pages with links, in 3 languages" },
              { k: "On a phone", before: "Zoom into a PDF", after: "Built for phones first" },
              { k: "Reaching a person", before: "Four separate routes, no single place to find them", after: "Same three routes on every page, with hours for India and UAE" },
              { k: "Updating help", before: "Edit and re-share a document", after: "Edit one data file, live everywhere" },
            ]}
          />
          <p>
            <b className="text-foreground">For the portals,</b> each one gets a help page it can link to from inside the
            product: from an empty state, an error or the support form. That's the next step I'd push for, because the best
            help is the one that shows up where you got stuck.
          </p>
          <Callout label="No numbers yet, on purpose">
            <p>The site launches with the beta, so I won't claim results it hasn't earned. Instead I'll track these from week one:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Searches that return nothing, to find missing guides.</li>
              <li>"Was this helpful?" votes, to find guides that need rewriting.</li>
              <li>Support requests per portal, compared to before.</li>
              <li>Video views per guide, to see where people need to watch, not read.</li>
            </ul>
          </Callout>
        </Sec>

        {/* 11 */}
        <Sec id="ai" num="11" label="Working with AI" title="I directed. The AI built and tested. I checked every step.">
          <p>I used Claude as my build partner. I kept the decisions; it did the heavy lifting. Every page went through the same loop:</p>
          <AiLoop />
          <p>The value I added was judgement. A few examples of where I said no:</p>
          <Ticks
            items={[
              "A dark mode showed up that I never asked for. I locked the site to light, to match the brand.",
              "I couldn't follow a written explanation of motion, so I asked for a live demo I could feel, and chose from that.",
              "Hover videos looked impressive in a mockup and bad in use. They were removed.",
              'I made a separate "stage" copy for experiments, so the live code was never touched until I approved.',
              "Nothing was invented. Anything we didn't know stayed marked as a placeholder, and four drafted billing answers are flagged for the team to confirm before launch.",
            ]}
          />
        </Sec>

        {/* 12 */}
        <Sec id="learned" num="12" label="What I learned" title="Three things I'll take to the next project.">
          <Cards
            cols={3}
            items={[
              { title: "Content is the design", body: "Splitting 3 guides into 58 tasks did more for users than any layout choice. I'll start with the content audit next time too." },
              { title: "Ask the team early", body: "I assumed sign-up and a separate apps section. Both were wrong. One short conversation with the people who run the product saved two rebuilds." },
              { title: "Remove more than you add", body: "The big wins were cuts: the loud directions, hover videos, the CTA banner, the fake portal. Calm is a decision you keep making." },
            ]}
          />
        </Sec>
      </CaseBody>

      <RelatedCase
        eyebrow="pvNXT Solar Suite · 2022 — now"
        title="The six portals this help centre serves."
        body="How Studio, Connect, Go and the rest of the suite went from WhatsApp and Excel to one connected product."
        href="/case/terranxt-v2"
        cover={suiteCover}
      />
      <Footer />
    </main>
  );
}
