-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config_site" (
    "id" SERIAL NOT NULL,
    "github_username" TEXT,
    "titulo" TEXT,
    "descricao" TEXT,
    "foto_url" TEXT,
    "capa_url" TEXT,
    "atualizado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "config_site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sobre" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "atualizado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sobre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competencias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "nivel" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "competencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projetos_manuais" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "url" TEXT,
    "imagem_url" TEXT,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "ordem" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "projetos_manuais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "github_repos_config" (
    "id" SERIAL NOT NULL,
    "repo_nome" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "oculto" BOOLEAN NOT NULL DEFAULT false,
    "descricao_custom" TEXT,

    CONSTRAINT "github_repos_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links_sociais" (
    "id" SERIAL NOT NULL,
    "plataforma" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "links_sociais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config_contato" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "whatsapp" TEXT,
    "mensagem_padrao" TEXT,

    CONSTRAINT "config_contato_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "github_repos_config_repo_nome_key" ON "github_repos_config"("repo_nome");
