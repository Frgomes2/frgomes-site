import { getRepos } from "@/lib/github";
import RepoCard from "./RepoCard";

// Server Component: busca os repos no servidor e renderiza os cards.
// Como não tem "use client", o fetch acontece no servidor, com cache.
export default async function GithubRepos({ limit = 6 }: { limit?: number }) {
  const repos = await getRepos();

  if (repos.length === 0) {
    return (
      <div className="gh-note reveal" style={{ marginTop: "18px" }}>
        <span className="green">$ github.fetch()</span> — nenhum repositório
        encontrado no momento. Verifique o usuário/token no .env.local.
      </div>
    );
  }

  return (
    <div className="cards">
      {repos.slice(0, limit).map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
