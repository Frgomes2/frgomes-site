import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getConfig, upsertConfig } from "@/lib/db-content";

export const metadata = { title: "Perfil — Admin" };

export default async function PerfilPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const config = await getConfig();

  async function salvar(formData: FormData) {
    "use server";
    const titulo = (formData.get("titulo") as string)?.trim() ?? "";
    const descricao = (formData.get("descricao") as string)?.trim() ?? "";
    await upsertConfig({ titulo, descricao });
    revalidatePath("/"); // atualiza o site público
    redirect("/admin/perfil?ok=1");
  }

  return (
    <div className="admin-wrap">
      <Link href="/admin" className="admin-back">← voltar ao painel</Link>
      <header className="admin-top">
        <div>
          <div className="admin-eyebrow">// admin/perfil</div>
          <h1>Perfil</h1>
        </div>
      </header>

      {ok ? <div className="admin-ok">Salvo com sucesso.</div> : null}

      <form action={salvar} className="admin-form">
        <label>
          Cargo / título
          <input
            type="text"
            name="titulo"
            defaultValue={config?.titulo ?? ""}
            placeholder="Ex.: Desenvolvedor full-stack · Cascavel, PR"
          />
          <small>Aparece como a chamada logo abaixo do seu nome, no topo.</small>
        </label>

        <label>
          Bio
          <textarea
            name="descricao"
            rows={4}
            defaultValue={config?.descricao ?? ""}
            placeholder="Uma frase ou duas sobre o que você faz."
          />
          <small>Texto de apresentação do topo do site.</small>
        </label>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
