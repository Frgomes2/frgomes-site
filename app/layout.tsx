import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import RevealManager from "@/components/RevealManager";

const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Flavio Raphael Gomes | Desenvolvedor Full Stack",
  description:
    "Portfólio de Flavio Raphael Gomes — desenvolvedor full stack em Cascavel, PR. Projetos, serviços e contato.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark" className={`${fira.variable} ${inter.variable}`}>
      <head>
        {/* Logos coloridos das tecnologias (Devicon) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <RevealManager />
        {children}
      </body>
    </html>
  );
}
