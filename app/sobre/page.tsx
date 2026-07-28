import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre — Flávio Gomes',
  description: 'Trajetória, competências e stack de Flávio Gomes.',
};

export default function SobrePage() {
  const competencias = ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'];

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Sobre</h1>

      <div className="mt-8 space-y-4 text-lg text-neutral-700">
        <p>
          Sou desenvolvedor… (edite este texto). Na Fase 4 este conteúdo passará
          a vir do banco de dados, editável pelo painel admin.
        </p>
        <p>
          Aqui você conta sua trajetória, o que gosta de construir e para onde
          quer ir.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-semibold">Competências</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {competencias.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}