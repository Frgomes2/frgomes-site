import type { NextAuthConfig } from "next-auth";

// Config "leve": SEM Prisma, SEM bcrypt. Só o que o middleware precisa
// (páginas e a lógica de autorização de rotas). Roda no Edge sem problema.
export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  providers: [], // os providers ficam no auth.ts (que roda no Node)
  callbacks: {
    // Protege /admin/* aqui — assim o middleware não precisa do Prisma.
    authorized({ auth, request }) {
      const logado = !!auth?.user;
      const { pathname } = request.nextUrl;
      const naLogin = pathname === "/admin/login";

      if (pathname.startsWith("/admin")) {
        if (naLogin) return true;      // a tela de login é pública
        return logado;                 // resto do admin exige login
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
