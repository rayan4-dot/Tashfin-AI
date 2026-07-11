"use client";

import { useEffect, useRef, useState } from "react";

const SCENARIOS = [
  {
    id: 1,
    label: "CMI Payment Gateway",
    prompt: '"dir lia routing CMI payment gate f nodejs..."',
    tab: "cmi_gateway.ts",
    badge: "🔒 Offline Local LLM",
    lines: [
      { text: "// CMI Payment Gateway – Tashfin AI Sovereign Boilerplate", cls: "text-gray-500" },
      { text: 'import { CMIGateway } from "@atlas/fintech-ma";', cls: "text-pink-400" },
      { text: 'import { getSovereignKey } from "@/lib/vault";', cls: "text-pink-400" },
      { text: "", cls: "" },
      { text: "const gateway = new CMIGateway({", cls: "text-gray-300" },
      { text: '  merchantId: "CMI_908_MA",', cls: "text-amber-300" },
      { text: "  storeKey: getSovereignKey(),", cls: "text-gray-300" },
      { text: '  endpoint: "https://cmi.ma/v1/payment",', cls: "text-amber-300" },
      { text: '  mode: "offline-sovereign",', cls: "text-amber-300" },
      { text: "});", cls: "text-gray-300" },
      { text: "", cls: "" },
      { text: "export async function handleCheckout(payload: CMIPayload) {", cls: "text-blue-300" },
      { text: "  // ✅ Zero data leaves Moroccan territory", cls: "text-emerald-500" },
      { text: "  return gateway.processTransaction(payload);", cls: "text-gray-300" },
      { text: "}", cls: "text-gray-300" },
    ],
  },
  {
    id: 2,
    label: "FastAPI + PostgreSQL",
    prompt: '"kthb code FastAPI connect PostgreSQL local..."',
    tab: "db_router.py",
    badge: "🛡️ Air-Gapped: Zero Hops",
    lines: [
      { text: "# Tashfin AI – FastAPI + PostgreSQL Sovereign Boilerplate", cls: "text-gray-500" },
      { text: "from fastapi import FastAPI, Depends", cls: "text-pink-400" },
      { text: "from sqlalchemy.orm import Session", cls: "text-pink-400" },
      { text: "from .database import get_local_db, engine", cls: "text-pink-400" },
      { text: "", cls: "" },
      { text: 'app = FastAPI(title="Sovereign Core API")', cls: "text-blue-300" },
      { text: "", cls: "" },
      { text: "@app.get('/api/v1/users')", cls: "text-amber-300" },
      { text: "async def get_users(db: Session = Depends(get_local_db)):", cls: "text-blue-300" },
      { text: "    # ✅ Executes on Casablanca datacenter node only", cls: "text-emerald-500" },
      { text: '    return db.execute("SELECT * FROM users_ma").fetchall()', cls: "text-gray-300" },
    ],
  },
  {
    id: 3,
    label: "Auth + JWT Local",
    prompt: '"sweb lia auth system b JWT f TypeScript..."',
    tab: "auth.service.ts",
    badge: "🔐 Fully Sandboxed",
    lines: [
      { text: "// Tashfin AI – Sovereign JWT Auth Boilerplate", cls: "text-gray-500" },
      { text: 'import jwt from "jsonwebtoken";', cls: "text-pink-400" },
      { text: 'import { getSovereignSecret } from "@/vault";', cls: "text-pink-400" },
      { text: "", cls: "" },
      { text: "export function signToken(userId: string): string {", cls: "text-blue-300" },
      { text: "  // ✅ Secret never leaves local sovereign vault", cls: "text-emerald-500" },
      { text: "  return jwt.sign(", cls: "text-gray-300" },
      { text: '    { sub: userId, iss: "atlas-ma" },', cls: "text-amber-300" },
      { text: "    getSovereignSecret(),", cls: "text-gray-300" },
      { text: '    { expiresIn: "8h", algorithm: "RS256" }', cls: "text-amber-300" },
      { text: "  );", cls: "text-gray-300" },
      { text: "}", cls: "text-gray-300" },
    ],
  },
];

export default function IdeDemo() {
  const [active, setActive] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<typeof SCENARIOS[0]["lines"]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scenario = SCENARIOS[active];

  useEffect(() => {
    setDisplayedLines([]);
    setLineIdx(0);
  }, [active]);

  useEffect(() => {
    if (lineIdx >= scenario.lines.length) return;
    timerRef.current = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, scenario.lines[lineIdx]]);
      setLineIdx((i) => i + 1);
    }, lineIdx === 0 ? 300 : 60);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [lineIdx, active, scenario.lines]);

  return (
    <div className="w-full rounded-xl border overflow-hidden glow-both"
      style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>

      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] font-mono border-t-2 px-3 py-1 rounded-t text-gray-300"
          style={{ borderColor: "var(--orange)", background: "var(--bg-card)" }}>
          {scenario.tab}
        </span>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
          style={{ color: "var(--blue)", background: "rgba(0,210,255,0.08)", borderColor: "rgba(0,210,255,0.2)" }}>
          {scenario.badge}
        </span>
      </div>

      {/* Code area */}
      <div className="p-5 font-mono text-xs leading-relaxed min-h-[220px]">
        {displayedLines.map((line, i) => (
          <div key={i} className={line.cls || "text-gray-400"}>
            {line.text || "\u00a0"}
          </div>
        ))}
        {lineIdx < scenario.lines.length && (
          <div className="cursor text-gray-300" />
        )}
      </div>

      {/* Status bar */}
      <div className="px-5 pb-3 flex items-center gap-2 text-[10px] font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-gray-500">Security Engine: <strong className="text-gray-300">Sandboxed</strong></span>
        <span className="ml-auto" style={{ color: "var(--orange)" }}>CNDP 09-08 Compliant</span>
      </div>

      {/* Prompt buttons */}
      <div className="border-t px-4 pb-4 pt-3 flex flex-col gap-2"
        style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
          Prompt Atlas (Darija / Language code-switching)
        </span>
        <div className="grid grid-cols-3 gap-2">
          {SCENARIOS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(idx)}
              className="text-left text-[10px] font-mono rounded-lg p-2.5 border transition-all cursor-pointer"
              style={{
                borderColor: active === idx ? "rgba(0,210,255,0.4)" : "var(--border)",
                background: active === idx ? "rgba(0,210,255,0.07)" : "var(--bg-card)",
                color: active === idx ? "var(--blue)" : "#6b7280",
              }}
            >
              <span className="font-bold block mb-0.5 text-[9px] uppercase tracking-wide"
                style={{ color: active === idx ? "var(--blue)" : "#9ca3af" }}>
                {s.label}
              </span>
              {s.prompt.slice(0, 32)}…
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
