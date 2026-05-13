'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// ─── Replace these with your actual imported images ───────────────────────────
// import epcWeb from "@/assets/epc-dashboard.png";
// import consumerWeb from "@/assets/consumer-web.png";
// import consumerMobile from "@/assets/consumer-mobile.png";
// import installerMobile from "@/assets/installer-mobile.png";
// import scadaWeb from "@/assets/scada-web.png";

// Placeholder strings — swap with your real imports above
const epcWeb = '';
const consumerWeb = '';
const consumerMobile = '';
const installerWeb = '';
const installerMobile = '';
const scadaWeb = '';
// ─────────────────────────────────────────────────────────────────────────────

console.log("This is test run");
// ── Reuse your existing animation variants ────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};
// ─────────────────────────────────────────────────────────────────────────────

// ── Portal data ───────────────────────────────────────────────────────────────
const portals = [
    {
        id: 'epc',
        label: 'EPC Dashboard',
        type: 'Web',
        headline: 'One screen replaces 4 tools.',
        description:
            'EPC teams manage their entire pipeline here — leads, proposals, RFP bidding, installer assignment, project tracking, and O&M. Before this, all of it lived across WhatsApp, Excel, and phone calls.',
        features: [
            'Lead-to-handover pipeline',
            'Installer assignment & tracking',
            'O&M dashboard + alerts',
            'Real-time project visibility',
        ],
        replaced: 'WhatsApp + Excel + AutoCAD + Phone calls',
        screens: {
            web: epcWeb,
            mobile: null,
        },
    },
    {
        id: 'consumer',
        label: 'Consumer Portal',
        type: 'Web + Mobile',
        headline: 'The full solar journey — in one place.',
        description:
            'From checking feasibility to watching their plant generate power — consumers finally have visibility. The ROI calculator alone replaced 3 sales calls per lead.',
        features: [
            'Solar feasibility & ROI calculator',
            'Quote flow & approval tracking',
            'Live installation progress',
            'Plant monitoring & reports',
        ],
        replaced: 'Back-and-forth sales calls + manual quote PDFs',
        screens: {
            web: consumerWeb,
            mobile: consumerMobile,
        },
    },
    {
        id: 'installer',
        label: 'Installer App',
        type: 'Web + Mobile',
        headline: 'Built for people who work on rooftops.',
        description:
            'Installers get their job assignment, rooftop analysis tools, daily progress updates, and work orders — all on mobile. No laptop. No office. Just the job and the app.',
        features: [
            'Job assignment & briefing',
            'Rooftop analysis workflow',
            'Daily progress & photo upload',
            'Work order management',
        ],
        replaced: 'WhatsApp instructions + handwritten site notes',
        screens: {
            web: installerWeb,
            mobile: installerMobile,
        },
    },
    {
        id: 'scada',
        label: 'SCADA Monitoring',
        type: 'Web',
        headline: 'O&M teams finally have one place to look.',
        description:
            'Real-time inverter data, fault detection, work orders, and field team coordination — all live. O&M managers went from daily site calls to a single dashboard.',
        features: [
            'Live inverter & generation data',
            'Fault detection & alert system',
            'Work order assignment',
            'Multi-plant overview',
        ],
        replaced: 'Daily site visits + phone calls + spreadsheet logs',
        screens: {
            web: scadaWeb,
            mobile: null,
        },
    },
] as const;

// ── Device mockups ─────────────────────────────────────────────────────────────

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative w-full">
            {/* Screen bezel */}
            <div className="relative mx-auto w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 shadow-2xl">
                {/* Notch bar */}
                <div className="flex items-center gap-1.5 bg-neutral-800 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400 opacity-80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 opacity-80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 opacity-80" />
                    <div className="mx-auto h-5 w-1/2 rounded-sm bg-neutral-700 text-center text-[9px] leading-5 text-neutral-500">
                        pvnxt.com
                    </div>
                </div>
                {/* Screen content */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                    {src ? (
                        <img
                            src={src}
                            alt={alt}
                            className="h-full w-full object-cover object-top"
                        />
                    ) : (
                        <ScreenPlaceholder label={alt} />
                    )}
                </div>
            </div>
            {/* Base */}
            <div className="mx-auto mt-0.5 h-3 w-1/2 rounded-b-lg bg-neutral-200" />
            <div className="mx-auto h-1 w-2/3 rounded-b-lg bg-neutral-300" />
        </div>
    );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative mx-auto w-full max-w-[180px] flex-shrink-0">
            {/* Phone shell */}
            <div className="relative overflow-hidden rounded-[28px] border-[3px] border-neutral-800 bg-neutral-900 shadow-2xl">
                {/* Status bar */}
                <div className="flex items-center justify-between bg-neutral-900 px-4 py-2">
                    <span className="text-[8px] text-white/60">9:41</span>
                    <div className="h-3 w-14 rounded-full bg-neutral-800" />
                    <div className="flex gap-1">
                        <span className="text-[8px] text-white/60">●●●</span>
                    </div>
                </div>
                {/* Screen */}
                <div className="aspect-[9/19] w-full overflow-hidden bg-neutral-100">
                    {src ? (
                        <img
                            src={src}
                            alt={alt}
                            className="h-full w-full object-cover object-top"
                        />
                    ) : (
                        <ScreenPlaceholder label={alt} small />
                    )}
                </div>
                {/* Home indicator */}
                <div className="flex justify-center bg-neutral-900 py-2">
                    <div className="h-1 w-12 rounded-full bg-neutral-600" />
                </div>
            </div>
        </div>
    );
}

function ScreenPlaceholder({
    label,
    small,
}: {
    label: string;
    small?: boolean;
}) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 text-center">
            <div
                className={`flex items-center justify-center rounded-xl bg-primary/10 ${small ? 'h-8 w-8' : 'h-12 w-12'
                    }`}
            >
                <svg
                    className={`text-primary ${small ? 'h-4 w-4' : 'h-6 w-6'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            </div>
            {!small && (
                <p className="text-xs font-medium text-neutral-500">
                    Add your screenshot here
                    <br />
                    <span className="font-normal text-neutral-400">{label}</span>
                </p>
            )}
        </div>
    );
}

// ── Main component ─────────────────────────────────────────────────────────────
export function KeyScreen() {
    const [active, setActive] = useState<(typeof portals)[number]['id']>('epc');
    const portal = portals.find((p) => p.id === active)!;
    const hasBoth =
        portal.screens.web && portal.screens.mobile !== null
            ? true
            : portal.type === 'Web + Mobile';
    const isMobileOnly = portal.type === 'Mobile';

    return (
        <section id="screens" className="bg-[#F8F8F8] py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.p

                        className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
                    >
                        The Work
                    </motion.p>
                    <motion.h2

                        className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl"
                    >
                        What it actually looks like.
                    </motion.h2>
                    <motion.p

                        className="mt-4 max-w-xl text-base text-neutral-500"
                    >
                        3 web portals. 2 mobile apps. Every screen built from stakeholder
                        interviews — not assumptions.
                    </motion.p>
                </motion.div>

                {/* Tab switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 flex flex-wrap gap-2"
                >
                    {portals.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActive(p.id)}
                            className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${active === p.id
                                    ? 'bg-neutral-900 text-white shadow-lg'
                                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                                }`}
                        >
                            {p.label}
                            <span
                                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors ${active === p.id
                                        ? 'bg-primary text-white'
                                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'
                                    }`}
                            >
                                {p.type === 'Web + Mobile' ? 'Web+App' : p.type}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* Content panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="mt-8"
                    >
                        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                            {/* Screen showcase area */}
                            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 md:p-12">
                                {hasBoth ? (
                                    // Web + Mobile side by side
                                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:gap-12">
                                        <div className="flex-1">
                                            <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-neutral-400">
                                                Web
                                            </p>
                                            <LaptopMockup
                                                src={portal.screens.web ?? ''}
                                                alt={`${portal.label} web`}
                                            />
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-neutral-400">
                                                Mobile
                                            </p>
                                            <PhoneMockup
                                                src={portal.screens.mobile ?? ''}
                                                alt={`${portal.label} mobile`}
                                            />
                                        </div>
                                    </div>
                                ) : isMobileOnly ? (
                                    // Mobile only — centered phone
                                    <div className="flex justify-center">
                                        <div className="w-full max-w-xs">
                                            <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-neutral-400">
                                                Mobile App
                                            </p>
                                            <div className="mx-auto max-w-[220px]">
                                                <PhoneMockup
                                                    src={portal.screens.mobile ?? ''}
                                                    alt={`${portal.label} mobile`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Web only — full laptop
                                    <LaptopMockup
                                        src={portal.screens.web ?? ''}
                                        alt={`${portal.label} web`}
                                    />
                                )}
                            </div>

                            {/* Details row */}
                            <div className="grid gap-0 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
                                {/* Headline + description */}
                                <div className="col-span-2 p-8">
                                    <h3 className="text-xl font-bold text-neutral-900">
                                        {portal.headline}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                                        {portal.description}
                                    </p>

                                    {/* Feature pills */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {portal.features.map((f) => (
                                            <span
                                                key={f}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* "What this replaced" */}
                                <div className="p-8">
                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                        What this replaced
                                    </p>
                                    <p className="text-sm font-medium leading-snug text-neutral-700">
                                        {portal.replaced}
                                    </p>
                                    <div className="mt-4 rounded-xl border border-dashed border-red-200 bg-red-50 px-4 py-3">
                                        <p className="text-[11px] leading-relaxed text-red-500">
                                            Manual. Invisible. Broken.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Portal count summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 flex flex-wrap gap-6 text-sm text-neutral-500"
                >
                    {[
                        { n: '3', label: 'Web portals' },
                        { n: '2', label: 'Mobile apps' },
                        { n: '5', label: 'Products shipped' },
                        { n: '1', label: 'Connected system' },
                    ].map(({ n, label }) => (
                        <div key={label} className="flex items-baseline gap-1.5">
                            <span className="text-lg font-bold text-neutral-900">{n}</span>
                            <span>{label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

    );
}
