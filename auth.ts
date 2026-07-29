import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { authConfig } from "@/auth.config";

// Config completa = base leve + o provider de credenciais (que usa Prisma/bcrypt).
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "E-mail", type: "email" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const senha = credentials?.senha as string | undefined;
        if (!email || !senha) return null;

        const usuario = await prisma.usuario.findUnique({ where: { email } });
        if (!usuario) return null;

        const ok = await bcrypt.compare(senha, usuario.senhaHash);
        if (!ok) return null;

        return { id: String(usuario.id), name: usuario.nome, email: usuario.email };
      },
    }),
  ],
});
