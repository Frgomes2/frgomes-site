import { PrismaClient } from "./lib/generated/prisma/client";
const p = new PrismaClient();
const modelos = Object.keys(p).filter((k) => !k.startsWith("$") && !k.startsWith("_"));
console.log("modelos:", modelos);
