"use client";

import { useWorkspace } from "./WorkspaceProvider";

export default function ActivityBar() {
  const { setPaletteOpen } = useWorkspace();
  return (
    <div className="act">
      <button className="on" title="Explorador" aria-label="Explorador">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
      </button>
      <button onClick={() => setPaletteOpen(true)} title="Buscar (Ctrl+K)" aria-label="Buscar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
        </svg>
      </button>
      <button title="Controle de versão" aria-label="Controle de versão">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" />
          <path d="M6 9v6M9 6h4a2 2 0 012 2v1" />
        </svg>
      </button>
      <div className="sp" />
    </div>
  );
}
