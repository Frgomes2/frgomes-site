import GithubRepos from "@/components/GithubRepos";

const PROJETOS = [
  {
    idx: "01 — em produção",
    titulo: "Plataforma de RPG",
    desc: "Hub para criar e jogar mesas online: campanhas, fichas visuais, rolagem de dados e inventário sincronizado em tempo real, com painel do mestre.",
    tags: [
      { i: "devicon-php-plain colored", n: "PHP" },
      { i: "devicon-codeigniter-plain colored", n: "CodeIgniter" },
      { i: "devicon-postgresql-plain colored", n: "Postgres" },
    ],
    href: "https://frgomes.com.br/rpg",
    cta: "abrir projeto ↗",
    img: "https://i.postimg.cc/Z562jm9v/Captura-de-tela-2025-09-24-234951.png",
  },
  {
    idx: "02 — em produção",
    titulo: "Sistema Integrado",
    desc: "Painel administrativo que concentra o controle da plataforma: usuários e papéis, CRUD de conteúdo, relatórios, logs de auditoria e ações em massa.",
    tags: [
      { i: "devicon-php-plain colored", n: "PHP" },
      { i: "devicon-codeigniter-plain colored", n: "CodeIgniter" },
      { i: "devicon-postgresql-plain colored", n: "Postgres" },
    ],
    href: "#",
    cta: "ver detalhes ↗",
    img: null,
  },
  {
    idx: "03 — em desenvolvimento",
    titulo: "Este portfólio",
    desc: "Construído do zero como estudo: App Router, Server Components, integração com a API do GitHub, PostgreSQL com Prisma e painel admin próprio.",
    tags: [
      { i: "devicon-nextjs-plain", n: "Next.js" },
      { i: "devicon-typescript-plain colored", n: "TypeScript" },
      { i: "devicon-postgresql-plain colored", n: "Prisma" },
    ],
    href: "https://github.com/Frgomes2/frgomes-site",
    cta: "código no github ↗",
    img: null,
  },
];

export default function Projetos() {
  return (
    <section id="projetos">
      <div className="cmt">// projetos.json · {PROJETOS.length} registros</div>
      <h2 className="rv">Projetos</h2>
      <p className="sec-sub rv">Sistemas que estão no ar, com usuários de verdade.</p>

      {PROJETOS.map((p) => (
        <article className="pj rv" key={p.titulo}>
          <div>
            <div className="idx">{p.idx}</div>
            <h3>{p.titulo}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t.n}>
                  <i className={t.i} />
                  {t.n}
                </span>
              ))}
            </div>
            <a className="go" href={p.href} target="_blank" rel="noopener noreferrer">
              {p.cta}
            </a>
          </div>
          <div className="shot">
            {p.img ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={p.img} alt={p.titulo} />
            ) : (
              <div className="ph"><span>adicionar screenshot</span></div>
            )}
          </div>
        </article>
      ))}

      <p className="cmt" style={{ margin: "30px 0 18px" }}>
        // repositórios públicos · sincronizados da api do github
      </p>
      <GithubRepos limit={6} />
    </section>
  );
}
