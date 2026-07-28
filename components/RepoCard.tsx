import type { Repo } from "@/lib/github";

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
  Vue: "devicon-vuejs-plain colored",
  Go: "devicon-go-original-wordmark colored",
};

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function RepoCard({ repo }: { repo: Repo }) {
  const icon = repo.language ? LANG_ICON[repo.language] : null;
  return (
    <a className="repo" href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="repo-h">
        {icon ? <i className={icon} /> : <span className="dot" style={{ background: "var(--fg3)" }} />}
        <strong>{repo.name}</strong>
        <span className="repo-star">★ {repo.stargazers_count}</span>
      </div>
      <p>{repo.description ?? "Sem descrição."}</p>
      <div className="repo-f">
        <span>{repo.language ?? "—"}</span>
        <span>atualizado em {fmt(repo.updated_at)}</span>
      </div>
    </a>
  );
}
