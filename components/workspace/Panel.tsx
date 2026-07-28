"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useWorkspace } from "./WorkspaceProvider";

type Line = { html: string; cls?: string };

// ---- roteiro que roda sozinho (conta a história do Flavio) ----
const SCRIPT: { cmd: string; out: Line[] }[] = [
  {
    cmd: "whoami",
    out: [
      { html: "Flavio Raphael Gomes · desenvolvedor full-stack", cls: "tok" },
      { html: "Cascavel, Paraná · disponível para projetos", cls: "tdim" },
    ],
  },
  {
    cmd: "git log --oneline -4",
    out: [
      { html: '<span class="twarn">a3f9c21</span> feat: painel administrativo (fase 4)' },
      { html: '<span class="twarn">7e1b04d</span> feat: banco postgres + prisma' },
      { html: '<span class="twarn">c4d8a90</span> feat: portfólio automático via github api' },
      { html: '<span class="twarn">1b2f6ee</span> feat: estrutura base em next.js' },
    ],
  },
  {
    cmd: 'psql -c "select nome, anos from stack order by anos desc limit 4"',
    out: [
      { html: "&nbsp;    nome     | anos ", cls: "tdim" },
      { html: "&nbsp;-------------+------", cls: "tdim" },
      { html: "&nbsp; PHP         |    4 " },
      { html: "&nbsp; PostgreSQL  |    4 " },
      { html: "&nbsp; CodeIgniter |    3 " },
      { html: "&nbsp; Next.js     |    1 " },
      { html: "(4 registros)", cls: "tdim" },
    ],
  },
  {
    cmd: "curl -s api.github.com/users/Frgomes2",
    out: [
      { html: "{", cls: "tdim" },
      { html: '&nbsp;&nbsp;<span class="tkey">"login"</span>: <span class="tstr">"Frgomes2"</span>,' },
      { html: '&nbsp;&nbsp;<span class="tkey">"location"</span>: <span class="tstr">"Cascavel, BR"</span>,' },
      { html: '&nbsp;&nbsp;<span class="tkey">"hireable"</span>: <span class="tok">true</span>' },
      { html: "}", cls: "tdim" },
    ],
  },
  {
    cmd: "npm run dev",
    out: [
      { html: "&nbsp;", cls: "tdim" },
      { html: '&nbsp;&nbsp;<span class="tok">▲</span> Next.js 16.2 <span class="tdim">(turbopack)</span>' },
      { html: '&nbsp;&nbsp;- Local:   <span class="tstr">http://localhost:3000</span>' },
      { html: "&nbsp;", cls: "tdim" },
      { html: '<span class="tok">✓</span> Ready in 412ms', cls: "tok" },
    ],
  },
];

export default function Panel() {
  const { termOpen, setTermOpen, panelTab, setPanelTab, toggleTheme } = useWorkspace();
  const [lines, setLines] = useState<Line[]>([]);
  const [typed, setTyped] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [auto, setAuto] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoRef = useRef(true);

  useEffect(() => { autoRef.current = auto; }, [auto]);

  // rola pro fim a cada nova linha
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, typed]);

  // ---- autoplay ----
  useEffect(() => {
    if (!termOpen) return;
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = async () => {
      while (!cancelled && autoRef.current) {
        for (const step of SCRIPT) {
          if (cancelled || !autoRef.current) return;
          await sleep(700);
          // digita o comando caractere a caractere
          for (let i = 1; i <= step.cmd.length; i++) {
            if (cancelled || !autoRef.current) return;
            setTyped(step.cmd.slice(0, i));
            await sleep(reduced ? 0 : 26 + Math.random() * 32);
          }
          if (cancelled || !autoRef.current) return;
          setTyped(null);
          setLines((prev) => [...prev, { html: `<span class="tprompt">➤</span> <span class="tpath">~/frgomes</span> <span class="tcmd">${step.cmd}</span>` }]);
          await sleep(320);
          for (const l of step.out) {
            if (cancelled || !autoRef.current) return;
            setLines((prev) => [...prev, l]);
            await sleep(reduced ? 0 : 70);
          }
          await sleep(2100);
        }
        if (cancelled || !autoRef.current) return;
        await sleep(1200);
        setLines([]);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [termOpen]);

  const push = useCallback((ls: Line[]) => setLines((prev) => [...prev, ...ls]), []);

  const stopAuto = useCallback(() => {
    if (!autoRef.current) return;
    autoRef.current = false;
    setAuto(false);
    setTyped(null);
    push([
      { html: "&nbsp;" },
      { html: '-- modo interativo -- digite <span class="tok">help</span> para ver os comandos', cls: "tdim" },
    ]);
  }, [push]);

  // ---- comandos interativos ----
  const exec = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    push([{ html: `<span class="tprompt">➤</span> <span class="tpath">~/frgomes</span> <span class="tcmd">${raw}</span>` }]);
    if (!cmd) return;

    const scrollTo = (id: string) =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    const table: Record<string, () => Line[]> = {
      help: () => [
        { html: "comandos disponíveis:", cls: "tdim" },
        { html: '&nbsp; <span class="tok">whoami</span>     quem sou eu' },
        { html: '&nbsp; <span class="tok">stack</span>      tecnologias que uso' },
        { html: '&nbsp; <span class="tok">projetos</span>   sistemas em produção' },
        { html: '&nbsp; <span class="tok">contato</span>    como falar comigo' },
        { html: '&nbsp; <span class="tok">github</span>     abre meu perfil' },
        { html: '&nbsp; <span class="tok">tema</span>       alterna claro/escuro' },
        { html: '&nbsp; <span class="tok">matrix</span>     ¯\\_(ツ)_/¯' },
        { html: '&nbsp; <span class="tok">clear</span>      limpa o terminal' },
      ],
      whoami: () => [
        { html: "Flavio Raphael Gomes · full-stack developer", cls: "tok" },
        { html: "Construo o que não aparece: modelo de dados, back-end e painéis.", cls: "tdim" },
      ],
      stack: () => [
        { html: '<span class="tkey">base</span>       PHP · CodeIgniter · Python · PostgreSQL · MySQL' },
        { html: '<span class="tkey">front</span>      JavaScript · HTML · CSS · Bootstrap · jQuery' },
        { html: '<span class="tkey">tools</span>      Git · Linux · Docker' },
        { html: '<span class="tkey">aprendendo</span> Next.js · React · TypeScript · Tailwind', cls: "tok" },
      ],
      projetos: () => {
        scrollTo("projetos");
        return [
          { html: '<span class="twarn">01</span> Plataforma de RPG      <span class="tdim">php · codeigniter · postgres</span>' },
          { html: '<span class="twarn">02</span> Sistema Integrado      <span class="tdim">php · codeigniter · postgres</span>' },
          { html: '<span class="twarn">03</span> Este portfólio         <span class="tdim">next.js · typescript · prisma</span>' },
          { html: "↳ rolando até a seção...", cls: "tdim" },
        ];
      },
      contato: () => {
        scrollTo("contato");
        return [
          { html: 'email     <span class="tstr">flavio.raphael@msn.com</span>' },
          { html: 'telefone  <span class="tstr">+55 (45) 99824-2585</span>' },
          { html: 'local     <span class="tstr">Cascavel, PR</span>' },
        ];
      },
      github: () => {
        window.open("https://github.com/Frgomes2", "_blank", "noopener");
        return [{ html: "abrindo github.com/Frgomes2 ...", cls: "tdim" }];
      },
      tema: () => {
        toggleTheme();
        return [{ html: "tema alternado" }];
      },
      matrix: () => {
        const r: Line[] = [];
        for (let i = 0; i < 5; i++) {
          let l = "";
          for (let j = 0; j < 52; j++) l += Math.random() > 0.5 ? "1" : "0";
          r.push({ html: `<span class="tok">${l}</span>` });
        }
        r.push({ html: "acorde, Neo...", cls: "tdim" });
        return r;
      },
      clear: () => { setLines([]); return []; },
      sudo: () => [{ html: "permissão negada: você não está na lista de sudoers. 😈", cls: "twarn" }],
    };
    table.about = table.whoami;
    table.sobre = table.whoami;
    table.ls = table.projetos;
    table.theme = table.tema;

    const fn = table[cmd];
    if (fn) push(fn());
    else push([{ html: `comando não encontrado: <span class="twarn">${raw}</span> · digite <span class="tok">help</span>` }]);
  };

  return (
    <div className="panel">
      <div className="ptabs">
        <button className={panelTab === "term" ? "on" : ""} onClick={() => setPanelTab("term")}>Terminal</button>
        <button className={panelTab === "prob" ? "on" : ""} onClick={() => setPanelTab("prob")}>
          Problemas <span className="badge">2</span>
        </button>
        <button className={panelTab === "out" ? "on" : ""} onClick={() => setPanelTab("out")}>Saída</button>
        <div className="sp" />
        <button className="ic" onClick={() => setTermOpen(false)} title="Fechar painel (Ctrl+`)">▼</button>
      </div>

      <div className="pbody" ref={bodyRef}>
        {/* TERMINAL */}
        <div className={`pane ${panelTab === "term" ? "on" : ""}`} onClick={() => { stopAuto(); inputRef.current?.focus(); }}>
          {lines.map((l, i) => (
            <div key={i} className={`tline ${l.cls ?? ""}`} dangerouslySetInnerHTML={{ __html: l.html }} />
          ))}
          {typed !== null ? (
            <div className="tline">
              <span className="tprompt">➤</span> <span className="tpath">~/frgomes</span>{" "}
              <span className="tcmd">{typed}</span>
              <span className="tcur" />
            </div>
          ) : (
            <div className="tline">
              <span className="tprompt">➤</span> <span className="tpath">~/frgomes</span>{" "}
              <input
                ref={inputRef}
                className="tin"
                value={value}
                spellCheck={false}
                autoComplete="off"
                aria-label="terminal"
                onChange={(e) => setValue(e.target.value)}
                onFocus={stopAuto}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { stopAuto(); exec(value); setValue(""); }
                }}
              />
            </div>
          )}
        </div>

        {/* PROBLEMAS */}
        <div className={`pane ${panelTab === "prob" ? "on" : ""}`}>
          <div className="prob">
            <span className="ico twarn">⚠</span>
            <div>
              <b>screenshot ausente</b> em <span className="tstr">projetos[1].imagem</span>
              <div className="loc">projetos.json · linha 24</div>
            </div>
          </div>
          <div className="prob">
            <span className="ico tkey">ⓘ</span>
            <div>
              <b>migração em andamento</b>: stack legado → TypeScript
              <div className="loc">sobre.md · linha 12</div>
            </div>
          </div>
          <div className="prob" style={{ borderTop: "1px solid var(--rule)", marginTop: 8, paddingTop: 12 }}>
            <span className="ico tok">✓</span>
            <div><b>0 erros</b> <span className="tdim">· 2 avisos · build passando</span></div>
          </div>
        </div>

        {/* SAÍDA */}
        <div className={`pane ${panelTab === "out" ? "on" : ""}`}>
          <div className="tline tdim">&gt; next build</div>
          <div className="tline">&nbsp;</div>
          <div className="tline"><span className="tok">✓</span> Compiled successfully</div>
          <div className="tline"><span className="tok">✓</span> Linting and checking validity of types</div>
          <div className="tline"><span className="tok">✓</span> Collecting page data</div>
          <div className="tline">&nbsp;</div>
          <div className="tline tdim">Route (app)                    Size     First Load</div>
          <div className="tline tdim">┌ ○ /                            5.4 kB      112 kB</div>
          <div className="tline tdim">├ ○ /sobre                       1.8 kB      108 kB</div>
          <div className="tline tdim">├ ● /portfolio          <span className="tstr">ISR 1h</span>   3.1 kB      110 kB</div>
          <div className="tline tdim">└ ○ /contato                     1.2 kB      107 kB</div>
          <div className="tline">&nbsp;</div>
          <div className="tline"><span className="tdim">○  (Static)</span>   prerenderizado</div>
          <div className="tline"><span className="tdim">●  (ISR)</span>      revalidado a cada 1h</div>
        </div>
      </div>
    </div>
  );
}
