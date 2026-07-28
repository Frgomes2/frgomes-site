import Constellation from "./Constellation";
import CodeBlock from "./CodeBlock";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Constellation />
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow reveal">// desenvolvedor full-stack · cascavel, pr</span>
          <h1 className="reveal">
            Flavio Raphael
            <br />
            <span className="g">Gomes.</span>
          </h1>
          <p className="role reveal">
            Transformo ideias em produtos web — do banco de dados à interface.
          </p>
          <p className="lead reveal">
            Código limpo, arquiteturas escaláveis e experiências que funcionam.
            Atualmente migrando meu stack para o ecossistema moderno de JavaScript.
          </p>
          <div className="cta-row reveal">
            <a href="#portfolio" className="btn btn-primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn btn-ghost">
              Contato
            </a>
          </div>
        </div>
        <CodeBlock />
      </div>
    </header>
  );
}
