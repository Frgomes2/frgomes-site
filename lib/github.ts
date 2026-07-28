// Busca os repositórios públicos do GitHub no SERVIDOR, com cache.
// Roda no servidor porque usa o GITHUB_TOKEN (que nunca deve ir pro navegador).

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  homepage: string | null;
}

export async function getRepos(): Promise<Repo[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    console.error("GITHUB_USERNAME não definido no .env.local");
    return [];
  }

  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        // Só manda o Authorization se o token existir
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      // Cache: revalida a cada 1 hora (ISR). Não bate na API a cada visita.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Erro na API do GitHub:", res.status, res.statusText);
      return [];
    }

    const repos: Repo[] = await res.json();

    // Remove forks e ordena por estrelas (depois por data de atualização)
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  } catch (error) {
    console.error("Falha ao buscar repositórios:", error);
    return [];
  }
}
