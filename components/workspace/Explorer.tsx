"use client";

import { SECTIONS } from "@/lib/sections";
import { useWorkspace } from "./WorkspaceProvider";

export default function Explorer() {
  const { active } = useWorkspace();
  return (
    <aside className="side">
      <h6>Explorador</h6>
      <div className="tree">
        <div className="fold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
          FRGOMES.COM.BR
        </div>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>
            <span className="dot" style={{ background: s.dot }} />
            {s.file}
          </a>
        ))}
      </div>
      <div className="hint">
        <kbd>Ctrl</kbd> + <kbd>K</kbd> para buscar
        <br />
        {SECTIONS.length} arquivos · 0 erros
      </div>
    </aside>
  );
}
