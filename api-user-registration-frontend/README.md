<<<<<<< HEAD
# API User Registration

Implementação de uma **API REST para cadastro de usuários**, utilizando Node.js, Express, Prisma (com MongoDB), e um frontend React com Vite.

---

## 🧹 Funcionalidades

* CRUD de usuários:

  * **POST /users** — criar usuário
  * **GET /users** — listar todos ou filtrar por nome, email ou idade
  * **PUT /users/\*\*\*\*:id** — atualizar usuário
  * **DELETE /users/\*\*\*\*:id** — apagar usuário
* Frontend React com formulário de cadastro e listagem interativa
* Validação para evitar cadastro de email duplicado
* Sintaxe ajustada garantindo que `age` seja enviada como número (Int)
* Schema Prisma atualizado para `age Int`, com dados inválidos removidos do banco

---

## 🛠️ Tecnologias

* **Backend**: Node.js, Express, Prisma, MongoDB (via Prisma Client)
* **Frontend**: React, Vite, axios
* **Extras**: dotenv para variáveis de ambiente

---

## ⚙️ Instalação

### Backend

1. Crie `.env` na raiz do backend:

   ```env
   DATABASE_URL="sua-string-de-conexão-mongodb"
   ```
2. Instale dependências:

   ```bash
   npm install
   ```
3. Gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```
4. (Opcional) Execute script para limpar dados inválidos:

   ```bash
   node mongo-cleanup.js
   ```
5. Inicie a API:

   ```bash
   npm run dev
   ```

   > Servidor disponível em `http://localhost:3000`

### Frontend

1. Instale dependências:

   ```bash
   npm install
   ```
2. Inicie o frontend:

   ```bash
   npm run dev
   ```

   > Aplicação disponível em `http://localhost:5173` (ou porta similar)

---

## 🔌 Integração Frontend e Backend

No arquivo `src/services/api.js`, a configuração deve ser:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;
```

---

## 🥪 Testando o cadastro

1. Acesse o frontend no navegador.
2. Preencha o formulário com nome, idade e email.
3. Clique em **Cadastrar** para criar um usuário.
4. Os usuários cadastrados serão exibidos abaixo com opção de exclusão.

---

## 📜 Notas importantes

* O campo `age` agora é tratado como número (`Int`), garantindo consistência com o schema Prisma.
* A remoção de registros inválidos no banco é feita via script ou interface gráfica do MongoDB.
* O frontend impede duplicação de email, mas recomenda-se validação adicional no backend se a API for usada por múltiplos clientes.

---

## 📚 Referências

* Prisma MongoDB provider (conversão para `Int`)
* Vite + React para frontend moderno
* Axios para comunicação HTTP
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 41e70c6 (:wrench: Segundo commit)
