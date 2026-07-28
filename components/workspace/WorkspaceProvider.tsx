"use client";

import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from "react";
import { SECTIONS } from "@/lib/sections";

type Theme = "dark" | "light";

type Ctx = {
  active: string;
  theme: Theme;
  toggleTheme: () => void;
  termOpen: boolean;
  setTermOpen: (v: boolean) => void;
  toggleTerm: () => void;
  panelTab: "term" | "prob" | "out";
  setPanelTab: (t: "term" | "prob" | "out") => void;
  paletteOpen: boolean;
  setPaletteOpen: (v: boolean) => void;
};

const WorkspaceCtx = createContext<Ctx | null>(null);

export function useWorkspace() {
  const ctx = useContext(WorkspaceCtx);
  if (!ctx) throw new Error("useWorkspace precisa estar dentro de <WorkspaceProvider>");
  return ctx;
}

export default function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [theme, setTheme] = useState<Theme>("dark");
  const [termOpen, setTermOpen] = useState(false);
  const [panelTab, setPanelTab] = useState<"term" | "prob" | "out">("term");
  const [paletteOpen, setPaletteOpen] = useState(false);

  // aplica tema no <html>
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // classe que reserva espaço para o painel inferior
  useEffect(() => {
    document.documentElement.classList.toggle("term-open", termOpen);
  }, [termOpen]);

  // seção ativa conforme o scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-70px 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // atalhos: Ctrl+K (paleta) e Ctrl+` (painel)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setTermOpen((v) => !v);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // abre o painel automaticamente depois que a página carrega
  useEffect(() => {
    const t = setTimeout(() => setTermOpen(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  const toggleTerm = useCallback(() => setTermOpen((v) => !v), []);

  const value = useMemo(
    () => ({ active, theme, toggleTheme, termOpen, setTermOpen, toggleTerm, panelTab, setPanelTab, paletteOpen, setPaletteOpen }),
    [active, theme, toggleTheme, termOpen, toggleTerm, panelTab, paletteOpen]
  );

  return <WorkspaceCtx.Provider value={value}>{children}</WorkspaceCtx.Provider>;
}
