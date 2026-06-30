# Web App Projects — Understanding Summary

This file captures what each web/enterprise/SaaS app project was about, what problem it solved, what Rajat handled, and what outcome it created. This is the detailed understanding file before converting the content into the project-detail page format.

> Note: pvNXT Atlas is intentionally excluded as requested.

---

## 1. pvNXT SCADA Monitoring

### What the project was
pvNXT SCADA Monitoring is a web-based solar plant monitoring and O&M platform for existing solar plants. It helps teams connect plants, monitor inverter/string-level performance, track alerts, assign work orders, and maintain plant activity logs.

### Who was suffering
The product was designed around multiple real operating roles:

- **EPC Manager:** Managing many plants and manually checking performance every morning. If one plant goes offline, the client may call first because the manager does not get the issue early enough.
- **Plant Owner:** Has invested heavily in solar but only receives scattered screenshots or WhatsApp updates, without clear generation, savings, or issue visibility.
- **Field Technician:** Gets calls like “go check what happened” without checklist, issue history, or previous maintenance context.
- **Admin / Finance / O&M Owner:** Has a small engineering team and many plants to report on. Monthly reporting takes manual effort, and late issue discovery affects reputation.

### What was happening
Solar O&M teams often depend on scattered monitoring tools, manual checks, phone calls, WhatsApp updates, and delayed site visits. For large plant portfolios, identifying the exact inverter/string issue and assigning it to the right person becomes slow and operationally heavy.

### What Rajat did
Rajat designed the web product experience after studying the monitoring and O&M workflow. He worked through competitor analysis, problem mapping, user suffering, approach, outcome, differentiation, scope phasing, and user-role clarity.

The product flow was structured around practical O&M needs:

- Plant-level monitoring
- Inverter and string-level visibility
- Alert system
- Work order assignment
- Activity logs
- Multi-plant management
- Predictive O&M and audits
- Reporting visibility for EPC/O&M teams

The web version was handed to development. The mobile version is currently on hold and should not be highlighted publicly until screens/status are ready.

### Why it matters
This project shows Rajat’s ability to design a serious enterprise dashboard where the goal is not visual decoration, but faster diagnosis, cleaner operations, fewer manual follow-ups, and better accountability across plant operations.

### Outcome
The platform is being used for audits and by Aston Greens EPC teams. Feedback has been positive, and new requirements or flow improvements are updated in Figma and handed over to the development team.

### Asset placeholder
`pvnxtScadaDetail.svg`

---

## 2. pvNXT Solar Suite

### What the project was
pvNXT Solar Suite is a connected solar product ecosystem that turns a manual EPC workflow into a live product journey. It connects homeowners, EPC teams, and installers across one solar workflow.

The suite includes:

- **pvNXT Studio** — EPC portal for design, shadow analysis, proposal, report, and BOQ generation.
- **pvNXT Connect** — Consumer portal/app for homeowners to explore solar feasibility, ROI, order status, and monitoring.
- **pvNXT Go** — Installer portal/app for site assignment, rooftop analysis, progress tracking, photo verification, and field execution.

pvNXT Atlas is excluded from this draft as requested.

### What was happening
Before pvNXT, running a solar EPC project could take 2–3 months and involved manual communication, PDF quotes, phone calls, WhatsApp updates, repeated site coordination, and limited visibility across the journey.

A 3-week job could feel like 2–3 months because the process was manual, invisible, and spread across disconnected tools.

### What Rajat did
Rajat helped turn the product from early sketches and rough workflows into a shipped ecosystem. He named and structured the portals, clarified the user journeys, and designed experiences for different roles:

- Homeowners who want to understand rooftop solar without jargon.
- EPC teams who need to design, analyze, quote, and generate reports faster.
- Installers who need mobile-first task execution, photo proof, and status updates from the field.

The suite was shaped around the idea of replacing manual EPC work with a connected product flow.

### Why it matters
This project shows Rajat’s strongest product-design range: ecosystem thinking, role-based flows, enterprise tools, consumer simplicity, installer field usability, and real-world solar operations in one connected system.

### Outcome
The ecosystem moved from a FigJam/whiteboard board to a live product used by real solar companies every day. It helped reduce a manual solar workflow from months of friction toward a more structured and faster execution flow.

### Asset placeholder
`pvnxtSuiteDetail.svg`

### Missing / optional data
- Confirm exact metrics to display: 5+ active users/teams? 50+ projects? 2–3 weeks? IIT Delhi/FITT incubation?
- Confirm whether the generic portfolio detail page should update the existing `/case/terranxt` deep-dive or only the `workItems` card/content.
- Add final Figma links if needed for each module.

---

## 2A. pvNXT Studio — EPC Portal

### What the product was
pvNXT Studio is the EPC creation workspace where solar teams can create rooftop layouts, run shadow analysis, generate proposals, reports, and BOQs.

### What it replaced
It replaced a scattered EPC workflow involving manual design coordination, PDF quotes, repeated calculations, and disconnected proposal/report generation.

### What Rajat did
Rajat designed the EPC-facing experience around creation and decision-making. The name “Studio” fits because the portal is where solar projects are designed, analyzed, and packaged.

Whenever new requirements or changes come from live usage, Rajat updates the Figma flows and hands them over to the development team. This iterative handoff process applies across the pvNXT portals.

### Outcome
The portal is currently used by **4 EPCs**. Feedback has been positive, and the product continues to evolve through Figma-based updates and development handoffs.

### Asset placeholder
`pvnxtStudioDetail.svg`

---

## 2B. pvNXT Connect — Consumer Portal

### What the product was
pvNXT Connect is the consumer-facing solar experience for homeowners interested in installing solar. It helps users understand feasibility, estimate cost/ROI, check order status, and follow their solar journey.

### What it replaced
It replaced phone calls, PDF quotes, and limited visibility where customers had to chase updates from EPC teams.

### What Rajat did
Rajat designed the homeowner flow to make solar easier to understand without jargon. The name “Connect” fits because it bridges users and EPCs.

### Outcome
The app has been used by **4 customers**, with **2 active customer journeys currently running**. Customers can more easily track their solar order/status instead of depending on repeated calls or unclear updates.

### Asset placeholder
`pvnxtConnectDetail.svg`

---

## 2C. pvNXT Go — Installer Portal/App

### What the product was
pvNXT Go is the field execution experience for installers working on rooftops. It supports site assignment, rooftop analysis, daily progress updates, photo proof, work orders, and status tracking.

### What it replaced
It replaced paper checklists, WhatsApp photos, chat-thread confusion, delayed field updates, and unclear delay reasons.

### What Rajat did
Rajat designed the installer experience for real ground conditions: large tap targets, photo-led updates, quick task status capture, and clear reason capture when work is delayed.

### Outcome
EPC teams get a clearer picture of site progress, while installers can quickly report what was done today and explain delays caused by weather, human issues, or site conditions.

### Asset placeholder
`pvnxtGoDetail.svg`

---

## 3. Spade

### What the project was
Spade is a satellite imagery marketplace by Suhora where users and government agencies can discover, preview, purchase, and download satellite imagery.

### What was happening
Buying satellite imagery was traditionally slow and process-heavy. Agencies like Survey of India and other users could spend 2–3 weeks getting imagery through manual procurement flows.

There was no India-first self-serve platform where users could easily explore archive imagery, request fresh imagery, and manage purchase/download flows.

### What Rajat did
Rajat designed the web app experience around shortening the procurement flow. The product makes archive imagery quickly accessible and helps users request live/new imagery in a cleaner, structured buying flow.

### Why it matters
This project shows Rajat’s ability to turn a highly specialized enterprise/GIS workflow into a more usable self-serve product.

### Outcome
The procurement journey was shortened from weeks to days: archive imagery could be accessed quickly, while new imagery could be delivered in roughly 2–3 days instead of 2–3 weeks.

### Asset placeholder
`spadeDetail.svg`

### Missing / optional data
- Add exact user roles if available: Government Buyer, Enterprise User, GIS Analyst, Admin, etc.
- Add exact internal module names if needed.
