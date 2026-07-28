import { getRepos } from "@/lib/github";
import RepoCard from "./RepoCard";

// Server Component: busca no servidor, com cache (ISR de 1h).
export default async function GithubRepos({ limit = 6 }: { limit?: number }) {
  const repos = await getRepos();

  if (repos.length === 0) {
    return (
      <div className="repo-empty">
        <span className="tdim">$ github.fetch()</span> — nenhum repositório retornado.
        Verifique GITHUB_USERNAME / GITHUB_TOKEN no .env.local
      </div>
    );
  }

  return (
    <div className="repos rv">
      {repos.slice(0, limit).map((r) => (
        <RepoCard key={r.id} repo={r} />
      ))}
    </div>
  );
}
