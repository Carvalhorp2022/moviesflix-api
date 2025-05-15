<h1 align="center">🎬 MoviesFlix API</h1>

Tabela de conteúdos
=================

   * Sobre o projeto
   * Tecnologias
   * Layout
## Sobre o Projeto

<P>Bem seguindo, e avançando curso DevQuest Full-Stack, agora do lado do backend, e passado em Projeto com Node e PostgreSQL, onde foi desenvolvida a MoviesFlix é uma API RESTful, que permite, listar todos os filmes, criar, atualizar, deletar filmes, filtrar filmes por nome do gênero e visualizar detalhes relacionados a idiomas e gêneros</P>

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **Swagger (swagger-ui-express)**

---
## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- Banco de dados configurado no `.env` (ex: PostgreSQL)
- Prisma CLI (`npx prisma`)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/moviesflix-api.git

# Acesse o diretório
cd moviesflix-api

# Instale as dependências
npm install

# Gere os arquivos Prisma e conecte ao banco
npx prisma generate
npx prisma migrate dev

# Inicie o servidor
npm run dev

📖 Documentação da API
A documentação Swagger estará disponível após iniciar o servidor:

http://localhost:3000/docs