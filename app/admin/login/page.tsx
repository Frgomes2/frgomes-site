import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Login — Admin" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const { erro } = await searchParams;

  // Server Action: processa o formulário no servidor
  async function entrar(formData: FormData) {
    "use server";
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;
    try {
      await signIn("credentials", { email, senha, redirectTo: "/admin" });
    } catch (e) {
      // o próprio signIn lança um "redirect" em caso de sucesso — deixa passar
      if ((e as Error).message === "NEXT_REDIRECT") throw e;
      redirect("/admin/login?erro=1");
    }
  }

  return (
    <div className="login-wrap">
      <form action={entrar} className="login-card">
        <div className="login-head">
          <span className="login-dot" />
          <span>auth.login()</span>
        </div>
        <h1>Área administrativa</h1>
        <p className="login-sub">Acesso restrito ao autor.</p>

        {erro ? <div className="login-err">E-mail ou senha inválidos.</div> : null}

        <label>
          E-mail
          <input type="email" name="email" required autoComplete="username" />
        </label>
        <label>
          Senha
          <input type="password" name="senha" required autoComplete="current-password" />
        </label>
        <button type="submit">Entrar →</button>
      </form>
    </div>
  );
}
