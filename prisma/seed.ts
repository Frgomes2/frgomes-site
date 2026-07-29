// Cria (ou atualiza) o usuário administrador a partir de variáveis do .env.local.
// Rodar com: npx tsx prisma/seed.ts
import { PrismaClient } from "../lib/generated/prisma/client";
import bcrypt from "bcryptjs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const senha = process.env.ADMIN_PASSWORD;
  const nome = process.env.ADMIN_NOME ?? "Flavio Raphael Gomes";

  if (!email || !senha) {
    throw new Error("Defina ADMIN_EMAIL e ADMIN_PASSWORD no .env.local antes de rodar o seed.");
  }

  const senhaHash = await bcrypt.hash(senha, 12);

  const usuario = await prisma.usuario.upsert({
    where: { email },
    update: { senhaHash, nome },
    create: { email, senhaHash, nome },
  });

  console.log(`✓ Usuário admin pronto: ${usuario.email} (id ${usuario.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());