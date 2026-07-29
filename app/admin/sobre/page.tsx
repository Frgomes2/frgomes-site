import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSobre, upsertSobre } from "@/lib/db-content";

export const metadata = { title: "Sobre — Admin" };

export default async function SobreAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const sobre = await getSobre();

  async function salvar(formData: FormData) {
    "use server";
    const conteudo = (formData.get("conteudo") as string)?.trim() ?? "";
    await upsertSobre(conteudo);
    revalidatePath("/");
    redirect("/admin/sobre?ok=1");
  }

  return (
    <div className="admin-wrap">
      <Link href="/admin" className="admin-back">← voltar ao painel</Link>
      <header className="admin-top">
        <div>
          <div className="admin-eyebrow">// admin/sobre</div>
          <h1>Aba Sobre</h1>
        </div>
      </header>

      {ok ? <div className="admin-ok">Salvo com sucesso.</div> : null}

      <form action={salvar} className="admin-form">
        <label>
          Conteúdo
          <textarea
            name="conteudo"
            rows={10}
            defaultValue={sobre?.conteudo ?? ""}
            placeholder="Escreva sobre você. Separe parágrafos com uma linha em branco."
          />
          <small>Cada parágrafo (separado por linha em branco) vira um bloco no site.</small>
        </label>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
