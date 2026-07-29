// Expõe os endpoints de autenticação que o Auth.js usa internamente.
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
