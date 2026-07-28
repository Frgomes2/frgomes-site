import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GithubRepos from "@/components/GithubRepos";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* SOBRE */}
      <section className="block" id="sobre">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">// sobre</span>
            <h2>Quem sou</h2>
          </div>
          <div className="about-grid">
            <div className="reveal">
              <p>
                Desenvolvedor full-stack apaixonado por transformar ideias em realidade
                digital. Trabalho o ciclo completo — modelagem de dados, back-end,
                interface e deploy.
              </p>
              <p>
                Hoje meu terreno é PHP/CodeIgniter, Python e PostgreSQL, com projetos
                rodando em produção. Estou construindo este site como projeto de
                aprendizado profundo do stack moderno: Next.js, React e TypeScript.
              </p>
            </div>
            <div className="reveal">
              <div className="skillcat">
                <h4>frontend</h4>
                <div className="chips">
                  <span className="chip"><i className="devicon-html5-plain colored" />HTML</span>
                  <span className="chip"><i className="devicon-css3-plain colored" />CSS</span>
                  <span className="chip"><i className="devicon-javascript-plain colored" />JavaScript</span>
                  <span className="chip"><i className="devicon-jquery-plain colored" />jQuery</span>
                  <span className="chip"><i className="devicon-bootstrap-plain colored" />Bootstrap</span>
                </div>
              </div>
              <div className="skillcat">
                <h4>backend</h4>
                <div className="chips">
                  <span className="chip"><i className="devicon-php-plain colored" />PHP</span>
                  <span className="chip"><i className="devicon-codeigniter-plain colored" />CodeIgniter</span>
                  <span className="chip"><i className="devicon-rails-plain colored" />Ruby on Rails</span>
                  <span className="chip"><i className="devicon-python-plain colored" />Python</span>
                </div>
              </div>
              <div className="skillcat">
                <h4>dados &amp; tools</h4>
                <div className="chips">
                  <span className="chip"><i className="devicon-mysql-plain colored" />MySQL</span>
                  <span className="chip"><i className="devicon-postgresql-plain colored" />PostgreSQL</span>
                  <span className="chip"><i className="devicon-git-plain colored" />Git</span>
                </div>
              </div>
              <div className="skillcat">
                <h4>aprendendo</h4>
                <div className="chips">
                  <span className="chip learn"><i className="devicon-nextjs-plain" />Next.js</span>
                  <span className="chip learn"><i className="devicon-react-original colored" />React</span>
                  <span className="chip learn"><i className="devicon-typescript-plain colored" />TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className="block" id="portfolio">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">// portfólio</span>
            <h2>Projetos</h2>
            <p>Alguns dos meus trabalhos em produção.</p>
          </div>

          {/* Projetos em destaque (manuais) */}
          <div className="cards">
            <article className="card reveal">
              <div className="lang"><span className="sq" />PHP · CodeIgniter</div>
              <h3>Plataforma de RPG</h3>
              <p>
                Hub completo para criar e jogar mesas de RPG online: campanhas, fichas
                visuais, rolagem de dados e inventário em tempo real, com painel do mestre.
              </p>
              <div className="tech">
                <span><i className="devicon-php-plain colored" />PHP</span>
                <span><i className="devicon-codeigniter-plain colored" />CodeIgniter</span>
                <span><i className="devicon-railway-plain" />Railway</span>
                <span><i className="devicon-postgresql-plain colored" />Postgres</span>
              </div>
            </article>
            <article className="card reveal">
              <div className="lang"><span className="sq" />PHP · CodeIgniter</div>
              <h3>SI — Sistema Integrado</h3>
              <p>
                Painel admin com controle da plataforma: usuários e papéis, CRUD de
                conteúdo, relatórios e logs de auditoria. Filtros avançados e ações em massa.
              </p>
              <div className="tech">
                <span><i className="devicon-php-plain colored" />PHP</span>
                <span><i className="devicon-codeigniter-plain colored" />CodeIgniter</span>
                <span><i className="devicon-railway-plain" />Railway</span>
                <span><i className="devicon-postgresql-plain colored" />Postgres</span>
              </div>
            </article>
          </div>

          {/* Repositórios do GitHub (automático) */}
          <p className="gh-sub reveal">// direto do github · @Frgomes2</p>
          <GithubRepos limit={6} />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="block" id="servicos">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">// serviços</span>
            <h2>Como posso ajudar</h2>
          </div>
          <div className="svc">
            <div className="item reveal">
              <div className="num">01</div>
              <h3>Desenvolvimento web</h3>
              <p>Sites e sistemas completos, do back-end à interface.</p>
            </div>
            <div className="item reveal">
              <div className="num">02</div>
              <h3>APIs &amp; bancos de dados</h3>
              <p>Integrações, modelagem e serviços escaláveis.</p>
            </div>
            <div className="item reveal">
              <div className="num">03</div>
              <h3>Consultoria técnica</h3>
              <p>Arquitetura, revisão de código e boas práticas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="block" id="contato">
        <div className="wrap">
          <div className="contact-card reveal">
            <span className="eyebrow">// contato</span>
            <h2>Vamos construir algo?</h2>
            <p>Disponível para novos projetos e colaborações.</p>
            <a href="mailto:flavio.raphael@msn.com" className="btn btn-primary">
              Enviar mensagem
            </a>
            <div className="contact-details">
              <a href="mailto:flavio.raphael@msn.com">flavio.raphael@msn.com</a>
              <a href="tel:+5545998242585">+55 (45) 99824-2585</a>
              <a href="#">Cascavel, PR</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
