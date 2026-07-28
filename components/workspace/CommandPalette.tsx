"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { useWorkspace } from "./WorkspaceProvider";

type Item = { label: string; hint: string; href: string };

const EXTRA: Item[] = [
  { label: "github.com/Frgomes2", hint: "abrir", href: "https://github.com/Frgomes2" },
  { label: "linkedin", hint: "abrir", href: "https://www.linkedin.com/in/flavio-raphael-gomes-405847182/" },
  { label: "enviar email", hint: "contato", href: "mailto:flavio.raphael@msn.com" },
];

export default function CommandPalette() {
  const { paletteOpen, setPaletteOpen } = useWorkspace();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(
    () => [...SECTIONS.map((s) => ({ label: s.file, hint: "ir para", href: "#" + s.id })), ...EXTRA],
    []
  );
  const shown = useMemo(
    () => items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase())),
    [items, q]
  );

  useEffect(() => {
    if (paletteOpen) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [paletteOpen]);

  const go = (item?: Item) => {
    if (!item) return;
    setPaletteOpen(false);
    if (item.href.startsWith("#")) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(item.href, "_blank", "noopener");
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, shown.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter") { e.preventDefault(); go(shown[sel]); }
  };

  if (!paletteOpen) return null;

  return (
    <div className="pal open" onClick={(e) => e.target === e.currentTarget && setPaletteOpen(false)}>
      <div className="box">
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
          onKeyDown={onKey}
          placeholder="Ir para…  (digite e Enter)"
          autoComplete="off"
        />
        <div className="list">
          {shown.map((it, i) => (
            <button
              key={it.label}
              className={`it ${i === sel ? "sel" : ""}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => go(it)}
            >
              {it.label}
              <em>{it.hint}</em>
            </button>
          ))}
          {shown.length === 0 && <div className="it">nenhum resultado</div>}
        </div>
      </div>
    </div>
  );
}
