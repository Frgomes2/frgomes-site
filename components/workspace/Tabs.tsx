"use client";

import { SECTIONS } from "@/lib/sections";
import { useWorkspace } from "./WorkspaceProvider";

export default function Tabs() {
  const { active } = useWorkspace();
  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0];

  return (
    <>
      <div className="tabs">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>
            <span className="dot" style={{ background: s.dot }} />
            {s.file}
            <span className="x">×</span>
          </a>
        ))}
      </div>
      <div className="crumb">
        frgomes.com.br › <b>{current.file}</b> › <b>{current.crumb}</b>
      </div>
    </>
  );
}
