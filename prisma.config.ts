import path from "node:path";
import { defineConfig } from "prisma/config";
import dotenv from "dotenv";

// Carrega as variáveis do .env.local (onde está a DATABASE_URL)
// e também do .env, se existir.
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
});
