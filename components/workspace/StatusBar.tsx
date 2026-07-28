"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { useWorkspace } from "./WorkspaceProvider";

export default function StatusBar() {
  const { active, theme, toggleTheme, toggleTerm, setTermOpen, setPanelTab } = useWorkspace();
  const [line, setLine] = useState(1);
  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0];

  useEffect(() => {
    const onScroll = () => setLine(Math.floor(window.scrollY / 26) + 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="status">
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" />
          <path d="M6 9v6M9 6h4a2 2 0 012 2v1" />
        </svg>
        main
      </span>
      <span
        className="hide"
        style={{ cursor: "pointer" }}
        onClick={() => { setTermOpen(true); setPanelTab("prob"); }}
      >
        ⚠ 2 ✕ 0
      </span>
      <span className="hide">Ln {line}, Col 1</span>
      <div className="sp" />
      <span className="hide">UTF-8</span>
      <span className="hide">Cascavel, PR</span>
      <span>{current.lang}</span>
      <button className="btn-t" onClick={toggleTerm}>terminal</button>
      <button className="btn-t" onClick={toggleTheme}>{theme === "dark" ? "claro" : "escuro"}</button>
    </div>
  );
}
