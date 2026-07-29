import { auth, signOut } from "@/auth";

export const metadata = { title: "Dashboard — Admin" };

export default async function AdminDashboard() {
  const session = await auth();

  return (
    <div className="admin-wrap">
      <header className="admin-top">
        <div>
          <div className="admin-eyebrow">// admin</div>
          <h1>Painel</h1>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/admin/login" });
          }}
        >
          <button className="admin-out" type="submit">sair</button>
        </form>
      </header>

      <p className="admin-hello">
        Logado como <b>{session?.user?.name ?? session?.user?.email}</b>.
      </p>

      <div className="admin-grid">
        <div className="admin-card"><h3>Perfil</h3><p>Nome, bio, foto e capa. <span>(fase 4)</span></p></div>
        <div className="admin-card"><h3>Sobre</h3><p>Editar o conteúdo da aba. <span>(fase 4)</span></p></div>
        <div className="admin-card"><h3>Competências</h3><p>CRUD de skills. <span>(fase 5)</span></p></div>
        <div className="admin-card"><h3>Projetos</h3><p>Manuais + destaque de repos. <span>(fase 5)</span></p></div>
      </div>
    </div>
  );
}
