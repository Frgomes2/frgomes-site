const DEPS = [
  { icon: "devicon-php-plain colored", name: "php", v: "^8.0" },
  { icon: "devicon-codeigniter-plain colored", name: "codeigniter", v: "^4.0" },
  { icon: "devicon-python-plain colored", name: "python", v: "^3.11" },
  { icon: "devicon-postgresql-plain colored", name: "postgresql", v: "^15" },
  { icon: "devicon-mysql-plain colored", name: "mysql", v: "^8.0" },
  { icon: "devicon-javascript-plain colored", name: "javascript", v: "es2022" },
  { icon: "devicon-git-plain colored", name: "git", v: "^2.4" },
  { icon: "devicon-linux-plain colored", name: "linux", v: "daily" },
];

const DEV_DEPS = [
  { icon: "devicon-nextjs-plain", name: "next", v: "^16.0" },
  { icon: "devicon-react-original colored", name: "react", v: "^19.0" },
  { icon: "devicon-typescript-plain colored", name: "typescript", v: "^5.0" },
  { icon: "devicon-tailwindcss-original colored", name: "tailwindcss", v: "^4.0" },
];

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="cmt"># sobre.md</div>
      <h2 className="rv">Quem sou</h2>
      <div className="md rv">
        <p>
          Trabalho o ciclo completo de um produto:{" "}
          <b>modelagem de dados, regra de negócio, interface e deploy</b>. Não gosto
          de entregar tela bonita com banco mal pensado — pra mim as duas pontas contam.
        </p>
        <p>
          Meu terreno hoje é PHP com CodeIgniter, Python e PostgreSQL, com sistemas
          rodando em produção — incluindo uma plataforma de RPG com estado
          sincronizado em tempo real.
        </p>

        <div className="h"><span>##</span> agora</div>
        <p>
          Migrando para o ecossistema moderno de JavaScript.{" "}
          <b>Este site é o projeto de estudo</b>: Next.js do zero, com banco
          PostgreSQL, autenticação e painel administrativo próprio.
        </p>

        <div className="h"><span>##</span> dependencies</div>
        <div className="deps">
          {DEPS.map((d) => (
            <div className="row" key={d.name}>
              <i className={d.icon} />
              {d.name}
              <span className="v">{d.v}</span>
            </div>
          ))}
        </div>

        <div className="h">
          <span>##</span> devDependencies{" "}
          <span style={{ color: "var(--fg3)" }}>— aprendendo</span>
        </div>
        <div className="deps">
          {DEV_DEPS.map((d) => (
            <div className="row new" key={d.name}>
              <i className={d.icon} />
              {d.name}
              <span className="v">{d.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
