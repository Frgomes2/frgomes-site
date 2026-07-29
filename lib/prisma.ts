// Cliente Prisma reutilizável (singleton).
// Nesta versão, o client é gerado em lib/generated/prisma e o ponto
// de entrada é o arquivo "client", por isso o import termina em /client.
import { PrismaClient } from "./generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}