import { PrismaClient } from "@prisma/client";

// Cliente Prisma reutilizável (padrão singleton).
// Em desenvolvimento, o Next.js recarrega o código a cada mudança;
// sem isso, abriríamos conexões demais com o banco.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
