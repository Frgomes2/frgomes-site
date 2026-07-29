import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// O middleware usa a config LEVE. A proteção de rotas está no
// callback `authorized` do auth.config.ts.
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: ["/admin/:path*"],
};
