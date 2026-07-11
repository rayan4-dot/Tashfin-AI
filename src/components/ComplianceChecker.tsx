"use client";

import { useState } from "react";

const RISK_MATRIX: Record<string, Record<string, Record<string, { level: string; color: string; bg: string; border: string; text: string }>>> = {
  bank: {
    foreign: {
      strict:   { level: "CRITICAL", color: "#f87171", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.25)", text: "Catastrophic. Your banking core schemas and client PII are routed to US server clusters on every keystroke. This directly violates CNDP Law 09-08 Articles 43–44 and exposes your CTO to personal administrative sanctions of up to 200,000 DH. GDPR Article 44-49 violations risk your nearshore contracts immediately." },
      moderate: { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. Even metadata and telemetry logs leaking to foreign clouds violate Bank Al-Maghrib circulars on data residency. A CNDP audit would flag this configuration immediately." },
      none:     { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Using only sandbox data limits PII exposure, but the foreign AI connection itself is a compliance surface. Any accidental commit of real credentials would be catastrophic." },
    },
    hybrid: {
      strict:   { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. EU-hosted servers still fall outside Moroccan sovereign territory. CNDP Law 09-08 requires data to remain within national borders or jurisdictions with equivalent protection. EU West (Azure/AWS) does not meet the CNDP bilateral equivalency threshold." },
      moderate: { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Metadata on EU clouds creates grey-area compliance. Recommended to switch to private Moroccan cloud to eliminate exposure entirely." },
      none:     { level: "LOW",      color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "Low risk. Sandbox-only with EU hosting is borderline acceptable, but sovereign deployment eliminates all uncertainty." },
    },
    local: {
      strict:   { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant. On-premise execution with strict PII handling is the gold standard for Moroccan financial institutions. You meet CNDP Law 09-08, Bank Al-Maghrib directives, and EU-GDPR data transfer requirements simultaneously." },
      moderate: { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant. Sovereign deployment with moderate data sensitivity is clean. Well done." },
      none:     { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant. You are operating in full sovereign mode." },
    },
  },
  nearshore: {
    foreign: {
      strict:   { level: "CRITICAL", color: "#f87171", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.25)", text: "CRITICAL. Foreign AI tools expose your EU clients' source code to US jurisdiction. This terminates your nearshoring contract liability protection under GDPR Article 28 (Data Processor obligations) and directly violates your client SLAs. Expect immediate contract termination if discovered." },
      moderate: { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. Even development metadata (schema names, endpoint paths) of EU clients is proprietary. Routing to foreign servers breaches NDA obligations typical in nearshoring agreements." },
      none:     { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Even with sandbox data, the foreign server connection is a compliance surface that EU client auditors will flag." },
    },
    hybrid: {
      strict:   { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. EU-region servers still involve third-party data processors outside your client's approved subprocessor list. GDPR Article 28(3) violations apply." },
      moderate: { level: "LOW",      color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "Manageable. EU West hosting is within GDPR territory, but you must maintain a valid subprocessor agreement. Tashfin AI's sovereign cloud eliminates this overhead entirely." },
      none:     { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Clean. EU hosting with sandbox data is defensible, though sovereign-first is always preferred." },
    },
    local: {
      strict:   { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant. On-premise deployment with Tashfin AI gives you an auditable data residency story that satisfies both EU client DPOs and CNDP." },
      moderate: { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant." },
      none:     { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant." },
    },
  },
  sme: {
    foreign: {
      strict:   { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. If your SaaS product handles Moroccan citizen data (CIN, financial data, health records), routing code to foreign AI violates CNDP Law 09-08. CNDP can issue fines and suspend your data processing authorization." },
      moderate: { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Metadata exposure is a grey area. Switching to Tashfin AI's free Community tier eliminates all risk with zero cost." },
      none:     { level: "LOW",      color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "Low risk. Pure sandbox development with foreign AI is defensible, but the Atlas Community tier is free — no reason not to switch." },
    },
    hybrid: {
      strict:   { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Consider moving to sovereign deployment as you scale." },
      moderate: { level: "LOW",      color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "Low risk. Clean for now, but sovereign is cleaner." },
      none:     { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Very low risk." },
    },
    local: {
      strict:   { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant. Excellent practices for a growing Moroccan SaaS company." },
      moderate: { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant." },
      none:     { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant." },
    },
  },
  gov: {
    foreign: {
      strict:   { level: "CRITICAL", color: "#f87171", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.25)", text: "CRITICAL. Public entity source code and state data routed to foreign servers is a national security violation. This falls under DGSSI (Direction Générale de la Sécurité des Systèmes d'Information) directives on critical infrastructure protection. Immediate remediation required." },
      moderate: { level: "CRITICAL", color: "#f87171", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.25)", text: "CRITICAL. Even metadata from government systems is classified under national security frameworks. Foreign AI tools are categorically prohibited for public institutions." },
      none:     { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. Government institutions must use pre-approved, sovereign tooling regardless of data sensitivity level." },
    },
    hybrid: {
      strict:   { level: "HIGH",     color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.25)", text: "High risk. EU hosting for government workloads violates state sovereignty requirements. Tashfin AI on-premise is the only compliant path." },
      moderate: { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Non-sensitive government metadata on EU servers is borderline. Sovereign deployment is mandatory for compliance certification." },
      none:     { level: "MODERATE", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.25)", text: "Moderate risk. Policy-level sovereign requirement regardless of data content." },
    },
    local: {
      strict:   { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant and meets DGSSI critical infrastructure requirements. This is the correct and only sanctioned configuration." },
      moderate: { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant." },
      none:     { level: "SOVEREIGN", color: "#4ade80", bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.25)", text: "✅ Fully compliant." },
    },
  },
};

export default function ComplianceChecker({ onRequestPilot }: { onRequestPilot: () => void }) {
  const [org, setOrg] = useState("bank");
  const [host, setHost] = useState("foreign");
  const [data, setData] = useState("strict");
  const [result, setResult] = useState<typeof RISK_MATRIX["bank"]["foreign"]["strict"] | null>(null);

  function runAudit() {
    const r = RISK_MATRIX[org]?.[host]?.[data];
    if (r) setResult(r);
  }

  return (
    <div className="rounded-xl border overflow-hidden"
         style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>

      <div className="px-6 py-4 border-b" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
        <h3 className="font-display font-bold text-lg text-white">CNDP Law 09-08 &amp; GDPR Risk Checker</h3>
        <p className="text-xs text-gray-500 mt-0.5">Instant compliance liability assessment for your AI tool stack.</p>
      </div>

      <div className="p-6 flex flex-col gap-5">
        {/* Q1 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            1. Organization Category
          </label>
          <select className="field" value={org} onChange={(e) => { setOrg(e.target.value); setResult(null); }}>
            <option value="bank">Moroccan Bank / FinTech / Insurer</option>
            <option value="nearshore">Nearshore Agency / Tech Outsourcing (EU Clients)</option>
            <option value="sme">Moroccan SME / Independent SaaS Startup</option>
            <option value="gov">Public Entity / Government Institution</option>
          </select>
        </div>

        {/* Q2 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            2. Current AI Model Deployment
          </label>
          <select className="field" value={host} onChange={(e) => { setHost(e.target.value); setResult(null); }}>
            <option value="foreign">Foreign Public Clouds (Cursor / Copilot / US Clusters)</option>
            <option value="hybrid">European Regional Servers (Azure EU / AWS eu-west)</option>
            <option value="local">Sovereign On-Premise / Private Moroccan Cloud</option>
          </select>
        </div>

        {/* Q3 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            3. Data Sensitivity
          </label>
          <select className="field" value={data} onChange={(e) => { setData(e.target.value); setResult(null); }}>
            <option value="strict">Strict – Bank details, PII, credentials, API keys</option>
            <option value="moderate">Moderate – Metadata, telemetry, schema names</option>
            <option value="none">Low – Only offline mocks / sandbox data</option>
          </select>
        </div>

        <button
          onClick={runAudit}
          className="w-full font-bold py-3.5 rounded-lg uppercase tracking-wider text-sm transition-all cursor-pointer"
          style={{ background: "var(--blue)", color: "var(--bg-base)" }}
        >
          Run Compliance Audit
        </button>

        {/* Result */}
        {result && (
          <div className="rounded-lg border p-4 flex flex-col gap-3 transition-all"
               style={{ background: result.bg, borderColor: result.border }}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Audit Result</span>
              <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded border"
                    style={{ color: result.color, borderColor: result.border, background: "rgba(0,0,0,0.2)" }}>
                {result.level}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">{result.text}</p>
            <div className="flex items-center justify-between border-t pt-3"
                 style={{ borderColor: result.border }}>
              <span className="text-[11px] text-gray-500">Suggested Action:</span>
              <button
                onClick={onRequestPilot}
                className="text-xs font-bold transition-colors cursor-pointer"
                style={{ color: "var(--blue)" }}
              >
                Get Mitigation Plan →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
