import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});
const cond = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cond",
});

export const metadata: Metadata = {
  title: "Flavio Raphael Gomes | Desenvolvedor Full Stack",
  description:
    "Portfólio de Flavio Raphael Gomes — desenvolvedor full stack em Cascavel, PR. Sistemas em produção com PHP, CodeIgniter e PostgreSQL.",
  openGraph: {
    title: "Flavio Raphael Gomes | Desenvolvedor Full Stack",
    description: "Portfólio, projetos e contato.",
    url: "https://frgomes.com.br/",
    siteName: "Flavio Raphael Gomes",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable} ${cond.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
