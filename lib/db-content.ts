import { prisma } from "@/lib/prisma";

// Usamos uma linha única (id = 1) para as configurações do site e o "Sobre".
const ID = 1;

export async function getConfig() {
  return prisma.configSite.findUnique({ where: { id: ID } });
}

export async function upsertConfig(data: {
  titulo?: string;
  descricao?: string;
  fotoUrl?: string;
  capaUrl?: string;
  githubUsername?: string;
}) {
  return prisma.configSite.upsert({
    where: { id: ID },
    update: data,
    create: { id: ID, ...data },
  });
}

export async function getSobre() {
  return prisma.sobre.findUnique({ where: { id: ID } });
}

export async function upsertSobre(conteudo: string) {
  return prisma.sobre.upsert({
    where: { id: ID },
    update: { conteudo },
    create: { id: ID, conteudo },
  });
}
