"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";
import Modal from "@/components/Modal";

const IdeDemo = dynamic(() => import("@/components/IdeDemo"), { ssr: false });
const ComplianceChecker = dynamic(() => import("@/components/ComplianceChecker"), { ssr: false });

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ onDownload, onEnterprise }: { onDownload: () => void; onEnterprise: () => void }) {
  return (
    <nav className="sticky top-0 z-40 border-b"
         style={{ background: "rgba(14,14,16,0.85)", borderColor: "var(--border)", backdropFilter: "blur(14px)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 rounded-lg p-px glow-both"
               style={{ background: "linear-gradient(135deg, var(--orange), var(--blue))" }}>
            <div className="w-full h-full rounded-[7px] flex items-center justify-center"
                 style={{ background: "var(--bg-base)" }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                   style={{ color: "var(--orange)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 16L20 12L16 8M8 8L4 12L8 16M12 5L10 19" />
              </svg>
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-base leading-none text-white">Tashfin AI</div>
            <div className="text-[9px] tracking-widest font-mono mt-0.5" style={{ color: "var(--orange)" }}>SOVEREIGN IDE</div>
          </div>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-gray-400">
          <a href="#moat" className="hover:text-white transition-colors">Sovereignty Moat</a>
          <a href="#features" className="hover:text-white transition-colors">Localized Mesh</a>
          <a href="#compliance" className="hover:text-white transition-colors">CNDP Audit</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#procurement" className="hover:text-white transition-colors">Procurement</a>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono"
               style={{ background: "rgba(74,222,128,0.07)", borderColor: "rgba(74,222,128,0.2)", color: "#4ade80" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Rabat Node Live
          </div>
          <button onClick={onEnterprise}
                  className="text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer hover:-translate-y-0.5 duration-200 glow-orange"
                  style={{ background: "linear-gradient(135deg, var(--orange), #f59e0b)", color: "white" }}>
            Request Pilot
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onDownload, onEnterprise }: { onDownload: () => void; onEnterprise: () => void }) {
  return (
    <header className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-24 mesh-bg">

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 animate-ambient"
           style={{ background: "radial-gradient(circle, rgba(0,210,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-[300px] right-0 w-[500px] h-[500px] rounded-full pointer-events-none translate-x-1/3 animate-ambient"
           style={{ background: "radial-gradient(circle, rgba(255,140,0,0.08) 0%, transparent 70%)", filter: "blur(80px)", animationDelay: "-4s" }} />

      <div className="relative grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">

        {/* Copy */}
        <div className="xl:col-span-6 flex flex-col gap-6 animate-fade-up">

          <div className="inline-flex items-center gap-2 w-max px-3 py-1.5 rounded-full border text-xs font-mono font-semibold"
               style={{ background: "rgba(255,140,0,0.08)", borderColor: "rgba(255,140,0,0.25)", color: "var(--orange)" }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            100% Moroccan Data Sovereign Technology
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.05] tracking-tight text-white">
            The First Made-In-Morocco AI IDE.{" "}
            <span className="block mt-1"
                  style={{ background: "linear-gradient(135deg, var(--orange), #f59e0b, var(--blue))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              100% Secure. 100% Sovereign.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
            Keep your intellectual property within national borders. Runs entirely{" "}
            <strong className="text-white">offline (air-gapped)</strong> or on private Moroccan cloud infrastructure—fully compliant with{" "}
            <strong className="underline underline-offset-4 decoration-dotted" style={{ color: "var(--blue)" }}>CNDP Law 09-08</strong>{" "}
            and GDPR regulations.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={onDownload}
                    className="flex items-center justify-center gap-2.5 font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    style={{ background: "white", color: "var(--bg-base)" }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Free Beta (Offline)
            </button>
            <button onClick={onEnterprise}
                    className="flex items-center justify-center gap-2.5 font-bold px-6 py-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer glow-blue"
                    style={{ border: "1px solid var(--border)", background: "var(--bg-card)", color: "white" }}>
              Request Enterprise Pilot
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 text-[11px] font-mono text-gray-500 mt-2">
            {[
              { dot: "var(--orange)", text: "CNDP Law 09-08 Registered" },
              { dot: "var(--blue)", text: "GDPR Article 28 Compliant" },
              { dot: "#4ade80", text: "Air-Gapped / Zero Cloud Leakage" },
            ].map(({ dot, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* IDE Demo */}
        <div className="xl:col-span-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <IdeDemo />
        </div>
      </div>
    </header>
  );
}

// ─── WHY SOVEREIGN SECTION ────────────────────────────────────────────────────
function WhySovereign({ onEnterprise }: { onEnterprise: () => void }) {
  return (
    <section id="moat" className="border-t border-b py-24 relative"
             style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            The Sovereign Data Moat
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Foreign tools silently route your proprietary source code to overseas server clusters on every keystroke. For Moroccan banks, state agencies, and nearshoring firms handling EU client data, this is a direct compliance liability.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Foreign card */}
            <div className="rounded-xl border p-8 flex flex-col gap-6 hover:border-rose-500/30 transition-colors"
                 style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-max border"
                   style={{ background: "rgba(239,68,68,0.07)", borderColor: "rgba(239,68,68,0.25)", color: "#f87171" }}>
                <CrossIcon /> Foreign AI Tools (Cursor, Copilot, ChatGPT)
              </div>
              <ul className="flex flex-col gap-4 text-[14px] text-gray-400">
                {[
                  { title: "US Server Routing", body: "Proprietary banking core schemas, client database structures, and API keys are transmitted to foreign data centers on every autocomplete request." },
                  { title: "CNDP Law 09-08 Violation", body: "Direct breach of Articles 43–44 concerning cross-border transfers of personal identifiable data. CNDP can impose fines up to 200,000 DH and suspend processing authorization." },
                  { title: "No Air-Gap Capability", body: "Refuses to launch without active internet — locking out secure corporate dev environments, regulated bank networks, and government workstations entirely." },
                  { title: "GDPR Article 44-49 Risk", body: "For nearshoring firms: routing EU-client source code to US servers terminates your GDPR Article 28 Data Processor compliance standing. Expect contract termination." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 text-rose-500 shrink-0"><CrossIcon /></span>
                    <span><strong className="text-gray-200">{title}:</strong> {body}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t text-[11px] font-mono"
                   style={{ borderColor: "var(--border)", color: "#f87171" }}>
                * Leaves your company exposed to CNDP fines, DGSSI sanctions, and immediate nearshoring contract terminations.
              </div>
            </div>

            {/* Atlas card */}
            <div className="rounded-xl border p-8 flex flex-col gap-6 glow-blue hover:border-cyan-400/50 transition-all duration-300 relative"
                 style={{ borderColor: "rgba(0,210,255,0.3)", background: "var(--bg-card)" }}>
              <div className="absolute top-0 right-8 -translate-y-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                   style={{ background: "var(--blue)", color: "var(--bg-base)" }}>
                Recommended
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-max border"
                   style={{ background: "rgba(0,210,255,0.07)", borderColor: "rgba(0,210,255,0.25)", color: "var(--blue)" }}>
                <CheckIcon /> Tashfin AI IDE (Fully Sovereign)
              </div>
              <ul className="flex flex-col gap-4 text-[14px] text-gray-300">
                {[
                  { title: "100% On-Premise Execution", body: "Deploy local model instances within your air-gapped corporate servers. Zero data ever leaves your hardware perimeter. Provably verifiable." },
                  { title: "Private Moroccan Cloud Nodes", body: "Opt for high-speed computation on dedicated regional nodes in Casablanca, Rabat, and Marrakech — strictly bound by Moroccan law and CNDP bilateral agreements." },
                  { title: "Certified CNDP Compliance", body: "Standard documentation provided to satisfy CNDP notification audits, Data Protection Officer reviews, and EU-nearshoring data isolation agreements out-of-the-box." },
                  { title: "Air-Gapped First Architecture", body: "Designed from the ground up for fully disconnected environments. Works on ONCF trains, regulated bank dev networks, and government intranets with zero configuration." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-500 shrink-0"><CheckIcon /></span>
                    <span><strong className="text-gray-100">{title}:</strong> {body}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t text-[11px] font-mono"
                   style={{ borderColor: "var(--border)", color: "var(--blue)" }}>
                * Safeguards your nearshoring IP agreements and guarantees zero leakage of national data assets.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      accent: "var(--orange)",
      accentBg: "rgba(255,140,0,0.08)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-3.536 4.978 4.978 0 011.414-3.536m0 0L8.464 8.464" />
        </svg>
      ),
      title: "Offline-First Autonomy",
      body: "Full AI code intelligence with zero internet dependency. Code during ONCF commutes, inside air-gapped bank dev environments, or through regional outages. Powered entirely by your local hardware mesh.",
    },
    {
      accent: "var(--blue)",
      accentBg: "rgba(0,210,255,0.08)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Darija & Language Native Mesh",
      body: (
        <>
          Communicate naturally with your editor using Moroccan code-switching:{" "}
          <code className="text-xs px-1.5 py-0.5 rounded font-mono"
                style={{ background: "rgba(255,140,0,0.15)", color: "var(--orange)" }}>
            dir lia routing CMI f nodejs
          </code>{" "}
          outputs production-ready, technically correct English source code instantly.
        </>
      ),
    },
    {
      accent: "var(--orange)",
      accentBg: "rgba(255,140,0,0.08)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Moroccan FinTech Boilerplates",
      body: "One-click project scaffolds pre-configured for CMI payment rails, Wafacash cash-collection APIs, national SMS gateways (IAM/Maroc Telecom), Bank Al-Maghrib reporting schemas, and DGSSI-compliant authentication flows.",
    },
    {
      accent: "var(--blue)",
      accentBg: "rgba(0,210,255,0.08)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
      title: "Local Ollama & Private Server Integration",
      body: "Native integration with local Ollama instances or private servers hosted inside Morocco. Switch models (Llama, Mistral, Gemma) without touching a single cloud endpoint.",
    },
    {
      accent: "var(--orange)",
      accentBg: "rgba(255,140,0,0.08)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "CNDP Audit Export",
      body: "Generate ready-to-submit CNDP Law 09-08 data processing declarations directly from your IDE. One-click compliance reports for your DPO, legal team, or enterprise clients.",
    },
    {
      accent: "var(--blue)",
      accentBg: "rgba(0,210,255,0.08)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Enterprise SSO / Active Directory",
      body: "Native LDAP, Active Directory, and SSO integration for banks and government institutions with existing identity infrastructure. No passwords stored outside your internal network.",
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
          Tailored for Moroccan Engineering
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Developer experiences built around local infrastructure constraints, regional languages, and Moroccan financial rails.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 80}>
            <div className="rounded-xl border p-7 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300 h-full"
                 style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center border shrink-0"
                   style={{ background: f.accentBg, borderColor: `${f.accent}33`, color: f.accent }}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── COMPLIANCE SECTION ────────────────────────────────────────────────────────
function ComplianceSection({ onEnterprise }: { onEnterprise: () => void }) {
  return (
    <section id="compliance" className="border-t border-b py-24"
             style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
            Is Your Dev Stack CNDP Compliant?
          </h2>
          <p className="text-gray-400 text-base mb-5 leading-relaxed">
            Moroccan Law 09-08 mandates strict controls on the compilation, storage, and transfer of customer data. When developers feed raw source code—containing schema layouts, encryption configurations, or private API keys—to foreign commercial LLMs, serious regulatory violations occur.
          </p>
          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            Use our compliance tool to instantly assess your organization's legal risk exposure and discover how sovereign local model deployment fully eliminates this liability.
          </p>
          <div className="flex items-center gap-4 p-4 rounded-xl border"
               style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                 style={{ background: "rgba(0,210,255,0.1)", border: "1px solid rgba(0,210,255,0.2)", color: "var(--blue)" }}>
              ICE
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Enterprise pilot authorizations are registered using your corporate ICE identifier. Standard CNDP compliance certificates are provided for regulatory audits, DPO sign-offs, and EU client review requirements.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <ComplianceChecker onRequestPilot={onEnterprise} />
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function Pricing({ onDownload, onEnterprise }: { onDownload: () => void; onEnterprise: () => void }) {
  const tiers = [
    {
      name: "Community",
      price: "0 DH",
      period: "Free Forever",
      desc: "For students (1337, YouCode, engineering schools) and independent developers experimenting with sovereign local AI.",
      accent: null,
      features: [
        { ok: true, text: "100% offline execution" },
        { ok: true, text: "Local laptop hardware utilization" },
        { ok: true, text: "Standard autocomplete & chat" },
        { ok: true, text: "Darija/Language code-switching" },
        { ok: false, text: "Hybrid cloud GPU acceleration" },
        { ok: false, text: "Priority model updates" },
      ],
      cta: "Download Free (Offline)",
      action: onDownload,
    },
    {
      name: "Pro Cloud",
      price: "69 DH",
      period: "/ Month",
      desc: "For professional freelancers requiring blazing-fast computation on local Moroccan cloud infrastructure.",
      accent: "var(--orange)",
      badge: "Most Popular",
      features: [
        { ok: true, text: "Everything in Community" },
        { ok: true, text: "Hybrid cloud GPU acceleration" },
        { ok: true, text: "Casablanca / Rabat regional nodes" },
        { ok: true, text: "Larger context window (128K)" },
        { ok: true, text: "Priority model updates" },
        { ok: false, text: "On-premise enterprise deployment" },
      ],
      cta: "Subscribe Pro",
      action: onDownload,
    },
    {
      name: "Sovereign Enterprise",
      price: "B2B Quote",
      period: "Billed Annually",
      desc: "For banks, nearshoring firms, and state agencies needing custom compliance integration and on-premise deployment.",
      accent: null,
      features: [
        { ok: true, text: "Air-gapped on-premise deployment" },
        { ok: true, text: "Custom fine-tuned local models" },
        { ok: true, text: "Signed CNDP compliance certification" },
        { ok: true, text: "Enterprise SSO / Active Directory" },
        { ok: true, text: "Dedicated Casablanca support team" },
        { ok: true, text: "SLA with 99.9% uptime guarantee" },
      ],
      cta: "Contact Sales / Request Pilot",
      action: onEnterprise,
    },
  ];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Flexible Pricing Tiers</h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Sovereign, secure coding capabilities scaled to fit developers, freelancers, and enterprises across Morocco.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <ScrollReveal key={tier.name} delay={i * 100}>
            <div className={`rounded-xl border p-8 flex flex-col justify-between h-full relative transition-all duration-300 hover:-translate-y-1 ${tier.accent ? "glow-orange" : ""}`}
                 style={{
                   borderColor: tier.accent ? `rgba(255,140,0,0.35)` : "var(--border)",
                   background: "var(--bg-card)",
                 }}>
              {tier.badge && (
                <div className="absolute top-0 right-8 -translate-y-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                     style={{ background: "var(--orange)", color: "white" }}>
                  {tier.badge}
                </div>
              )}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest block mb-2"
                      style={{ color: tier.accent ?? "#6b7280" }}>
                  {tier.name}
                </span>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-3xl font-extrabold text-white font-display">{tier.price}</span>
                  <span className="text-sm font-mono text-gray-500">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-[13px] mb-6 leading-relaxed">{tier.desc}</p>
                <div className="border-t my-5" style={{ borderColor: "var(--border)" }} />
                <ul className="flex flex-col gap-3">
                  {tier.features.map(({ ok, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-sm"
                        style={{ color: ok ? "#d1d5db" : "#4b5563" }}>
                      <span style={{ color: ok ? "#4ade80" : "#374151" }}>
                        {ok ? <CheckIcon /> : <CrossIcon />}
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={tier.action}
                      className="w-full mt-8 font-bold py-3.5 rounded-xl border transition-all cursor-pointer hover:brightness-110"
                      style={tier.accent
                        ? { background: `linear-gradient(135deg, var(--orange), #f59e0b)`, color: "white", border: "none" }
                        : { background: "var(--bg-surface)", color: "white", borderColor: "var(--border)" }
                      }>
                {tier.cta}
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── PROCUREMENT ──────────────────────────────────────────────────────────────
function Procurement({ onDownload, onEnterprise }: { onDownload: () => void; onEnterprise: () => void }) {
  return (
    <section id="procurement" className="border-t py-20"
             style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            Local Moroccan B2B Procurement & Secure Checkout
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We eliminate international payment complexity with payment pathways built for Moroccan institutional and individual realities.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* B2B */}
            <div className="rounded-xl border p-8 flex flex-col justify-between hover:border-orange-500/20 transition-colors"
                 style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
              <div>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center border mb-4 shrink-0"
                     style={{ background: "rgba(255,140,0,0.08)", borderColor: "rgba(255,140,0,0.2)", color: "var(--orange)" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Corporate Invoicing & Wire Transfer</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  For banks, nearshoring firms, and state agencies — receive a legally compliant corporate invoice (Facture) meeting all Moroccan accounting standards.
                </p>
                <ul className="flex flex-col gap-2 text-xs font-mono text-gray-500">
                  {[
                    "Identifiant Commun de l'Entreprise (ICE) inclusive",
                    "Facture conforme for local fiscal deductions",
                    "Payment via direct bank wire (Virement bancaire)",
                    "Multi-year enterprise contracts available",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--orange)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onEnterprise}
                      className="w-full mt-6 font-bold py-2.5 rounded-lg border text-xs uppercase tracking-wider transition-colors cursor-pointer hover:brightness-110"
                      style={{ borderColor: "var(--border)", background: "var(--bg-surface)", color: "white" }}>
                Initiate B2B Invoice Flow
              </button>
            </div>

            {/* B2C Cash */}
            <div className="rounded-xl border p-8 flex flex-col justify-between hover:border-blue-500/20 transition-colors"
                 style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
              <div>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center border mb-4 shrink-0"
                     style={{ background: "rgba(0,210,255,0.08)", borderColor: "rgba(0,210,255,0.2)", color: "var(--blue)" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Local Cash Branch Checkout</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  For freelancers and independent developers — generate a payment code online and pay at any recognized local cash collection branch. No card required.
                </p>
                <ul className="flex flex-col gap-2 text-xs font-mono text-gray-500">
                  {[
                    "Wafacash — nationwide branch network",
                    "Cash Plus — 2,000+ collection points",
                    "CMI local card integration (Visa/Maestro MA)",
                    "Instant subscription activation on payment",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--blue)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onDownload}
                      className="w-full mt-6 font-bold py-2.5 rounded-lg border text-xs uppercase tracking-wider transition-colors cursor-pointer hover:brightness-110"
                      style={{ borderColor: "var(--border)", background: "var(--bg-surface)", color: "white" }}>
                Subscribe via Cash Collection
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t py-10 text-xs text-gray-600"
            style={{ borderColor: "var(--border-soft)", background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-sm text-white">Tashfin AI IDE</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>© 2026 Sovereign AI Technologies. Made in Morocco 🇲🇦</span>
        </div>
        <div className="flex gap-6">
          {["Sovereignty", "CNDP Audit", "Pricing", "Procurement"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-gray-400 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
function DownloadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <Modal id="download-modal" title="Download Tashfin AI Beta" isOpen={isOpen}
           onClose={() => { onClose(); setTimeout(() => setDone(false), 300); }}>
      {!done ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dl-email" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
            <input id="dl-email" type="email" required placeholder="you@domain.ma" className="field" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dl-os" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">OS / Architecture</label>
            <select id="dl-os" className="field">
              <option>macOS (M1 / M2 / M3 Apple Silicon)</option>
              <option>macOS (Intel Core)</option>
              <option>Windows 10/11 x64</option>
              <option>Linux x64 (AppImage / .deb)</option>
            </select>
          </div>
          <div className="text-xs p-3 rounded-lg border leading-relaxed"
               style={{ background: "rgba(0,210,255,0.06)", borderColor: "rgba(0,210,255,0.18)", color: "var(--blue)" }}>
            <strong>Hardware Note:</strong> For best offline AI speeds, we recommend Apple Silicon (M1+) or a PC with 16GB+ RAM running Ollama locally.
          </div>
          <button type="submit"
                  className="w-full font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm transition-all cursor-pointer glow-orange"
                  style={{ background: "linear-gradient(135deg, var(--orange), #f59e0b)", color: "white" }}>
            Start Download
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center gap-4 py-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border animate-bounce"
               style={{ background: "rgba(74,222,128,0.08)", borderColor: "rgba(74,222,128,0.25)", color: "#4ade80" }}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-display font-bold text-white text-lg">Download Triggered!</h4>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            <strong className="text-white">atlas-ai-ide-v1.0.0-beta</strong> is queued in your download manager. Welcome to sovereign coding.
          </p>
          <button onClick={onClose} className="text-xs cursor-pointer" style={{ color: "var(--blue)" }}>Close window</button>
        </div>
      )}
    </Modal>
  );
}

function EnterpriseModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <Modal id="enterprise-modal" title="Request Corporate Pilot" isOpen={isOpen}
           onClose={() => { onClose(); setTimeout(() => setDone(false), 300); }}>
      {!done ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ep-company" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Company Name</label>
              <input id="ep-company" type="text" required placeholder="e.g. Attijariwafa Bank" className="field" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ep-ice" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">ICE (15 digits)</label>
              <input id="ep-ice" type="text" required placeholder="000000000000000" pattern="[0-9]{15}" className="field" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ep-email" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Professional Email</label>
              <input id="ep-email" type="email" required placeholder="cto@company.ma" className="field" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ep-seats" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Developer Seats</label>
              <select id="ep-seats" className="field">
                <option>10 – 50 developers</option>
                <option>50 – 200 developers</option>
                <option>200+ developers</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="ep-deploy" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Preferred Deployment</label>
            <select id="ep-deploy" className="field">
              <option>Fully Air-Gapped On-Premise (No cloud)</option>
              <option>Private Moroccan Cloud (Dedicated server)</option>
            </select>
          </div>
          <div className="text-xs p-3 rounded-lg border leading-relaxed"
               style={{ background: "rgba(255,140,0,0.06)", borderColor: "rgba(255,140,0,0.18)", color: "var(--orange)" }}>
            <strong>Compliance Notice:</strong> Tashfin AI provides custom data processing agreements satisfying CNDP Law 09-08 notification requirements.
          </div>
          <button type="submit"
                  className="w-full font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm transition-all cursor-pointer glow-blue"
                  style={{ background: "var(--blue)", color: "var(--bg-base)" }}>
            Request Pilot Deployment
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center gap-4 py-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border animate-bounce"
               style={{ background: "rgba(74,222,128,0.08)", borderColor: "rgba(74,222,128,0.25)", color: "#4ade80" }}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-display font-bold text-white text-lg">Pilot Request Registered!</h4>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            An integration engineer from our <strong className="text-white">Casablanca office</strong> will contact you within 24 business hours to finalize the sandbox VM deployment.
          </p>
          <button onClick={onClose} className="text-xs cursor-pointer" style={{ color: "var(--blue)" }}>Close window</button>
        </div>
      )}
    </Modal>
  );
}

// ─── ROOT PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [enterpriseOpen, setEnterpriseOpen] = useState(false);

  return (
    <>
      <Navbar onDownload={() => setDownloadOpen(true)} onEnterprise={() => setEnterpriseOpen(true)} />
      <main>
        <Hero onDownload={() => setDownloadOpen(true)} onEnterprise={() => setEnterpriseOpen(true)} />
        <WhySovereign onEnterprise={() => setEnterpriseOpen(true)} />
        <Features />
        <ComplianceSection onEnterprise={() => setEnterpriseOpen(true)} />
        <Pricing onDownload={() => setDownloadOpen(true)} onEnterprise={() => setEnterpriseOpen(true)} />
        <Procurement onDownload={() => setDownloadOpen(true)} onEnterprise={() => setEnterpriseOpen(true)} />
      </main>
      <Footer />

      <DownloadModal isOpen={downloadOpen} onClose={() => setDownloadOpen(false)} />
      <EnterpriseModal isOpen={enterpriseOpen} onClose={() => setEnterpriseOpen(false)} />
    </>
  );
}
