// Fonte única de verdade das "abas/arquivos" do workspace.
export type SectionMeta = {
  id: string;
  file: string;
  lang: string;
  crumb: string;
  dot: string; // cor do "tipo de arquivo"
};

export const SECTIONS: SectionMeta[] = [
  { id: "index",    file: "index.tsx",     lang: "TypeScript React", crumb: "Hero",     dot: "var(--sx-fn)"  },
  { id: "sobre",    file: "sobre.md",      lang: "Markdown",         crumb: "Sobre",    dot: "var(--fg2)"    },
  { id: "projetos", file: "projetos.json", lang: "JSON",             crumb: "Projetos", dot: "var(--sx-num)" },
  { id: "servicos", file: "servicos.ts",   lang: "TypeScript",       crumb: "Serviços", dot: "var(--sx-key)" },
  { id: "contato",  file: "contato.ts",    lang: "TypeScript",       crumb: "Contato",  dot: "var(--acc)"    },
];
