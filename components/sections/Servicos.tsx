const SERVICOS = [
  { n: "01", h: "Desenvolvimento web", p: "Sistemas e sites completos, do modelo de dados à interface. Painéis, plataformas e aplicações sob medida." },
  { n: "02", h: "APIs & banco de dados", p: "Modelagem relacional, integrações REST, otimização de queries e serviços preparados pra crescer." },
  { n: "03", h: "Consultoria técnica", p: "Arquitetura, revisão de código, boas práticas e planejamento de migração de stack." },
];

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="cmt">// servicos.ts</div>
      <h2 className="rv">Como posso ajudar</h2>
      <div className="rv">
        {SERVICOS.map((s) => (
          <div className="svc" key={s.n}>
            <div className="n">{s.n}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
