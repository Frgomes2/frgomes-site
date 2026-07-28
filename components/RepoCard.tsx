import type { Repo } from "@/lib/github";

// Mapa simples: linguagem -> classe de ícone colorido (Devicon).
// Se a linguagem não estiver aqui, cai num ícone genérico.
const LANG_ICON: Record<string, string> = {
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  PHP: "devicon-php-plain colored",
  Python: "devicon-python-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  Ruby: "devicon-ruby-plain colored",
  Shell: "devicon-bash-plain colored",
  Java: "devicon-java-plain colored",
  "C#": "devicon-csharp-plain colored",
  Vue: "devicon-vuejs-plain colored",
  Go: "devicon-go-original-wordmark colored",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function RepoCard({ repo }: { repo: Repo }) {
  const icon = repo.language ? LANG_ICON[repo.language] : null;

  return (
    <article className="card reveal">
      <div className="lang">
        {icon ? <i className={icon} /> : <span className="sq" />}
        {repo.language ?? "Repositório"}
      </div>
      <h3>{repo.name}</h3>
      <p>{repo.description ?? "Sem descrição."}</p>
      <div className="tech">
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        <span>{formatDate(repo.updated_at)}</span>
      </div>
      <div className="repo-links">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          Ver no GitHub →
        </a>
        {repo.homepage ? (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
            Demo ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
