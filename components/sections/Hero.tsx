export default function Hero() {
  return (
    <section id="index">
      <div className="cmt">// desenvolvedor full-stack · cascavel, paraná</div>
      <h1 className="rv">
        Flavio Raphael
        <br />
        <span className="a">Gomes</span>
      </h1>
      <p className="role rv">
        Construo o que não aparece — modelo de dados, back-end, painéis — e a
        interface que faz tudo parecer simples.
      </p>
      <p className="lead rv">
        Sistemas em produção com PHP, CodeIgniter e PostgreSQL. Hoje migrando meu
        stack para o ecossistema moderno de JavaScript.
      </p>
      <div className="decl rv">
        <span className="k">const</span> <span className="f">dev</span> = {"{"}
        <br />
        &nbsp;&nbsp;<span className="f">base</span>: [<span className="s">&apos;PHP&apos;</span>,{" "}
        <span className="s">&apos;Python&apos;</span>, <span className="s">&apos;PostgreSQL&apos;</span>],
        <br />
        &nbsp;&nbsp;<span className="f">aprendendo</span>: [<span className="s">&apos;Next.js&apos;</span>,{" "}
        <span className="s">&apos;TypeScript&apos;</span>],
        <br />
        &nbsp;&nbsp;<span className="f">emProducao</span>: <span className="n">2</span>,{" "}
        <span className="c">// RPG + Sistema Integrado</span>
        <br />
        &nbsp;&nbsp;<span className="f">local</span>: <span className="s">&apos;Cascavel — PR&apos;</span>
        <br />
        {"};"}
      </div>
      <div className="acts rv">
        <a href="#projetos" className="btn btn-p">ver projetos →</a>
        <a href="#contato" className="btn btn-g">contato</a>
      </div>
    </section>
  );
}
