# Programação para Frameworks Web

Este repositório contém os códigos e exemplos desenvolvidos durante a disciplina Programação para Frameworks Web, ministrada pelo professor Thiago Rodrigues.

## 🚀 Executando o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

```env
DATABASE_URL="mysql://root:SUA_PALAVRA_PASSE@localhost:3306/api_alunos"
DB_PASSWORD="SUA_PALAVRA_PASSE"
PORT=3000
```

### 4. Sincronizar o Banco de Dados

```bash
npx prisma db push
```

### 5. Executar o projeto

```bash
node src/index.js
```

## 📝 Atualizações Recentes

Foi implementado o CRUD da entidade **Aluno**, contemplando as operações de criação, consulta, atualização e exclusão de registros.

### Operações do CRUD

- **create** — cria um novo registro de aluno no banco de dados.
- **findMany** — retorna todos os alunos cadastrados.
- **findUnique** — busca um aluno específico através de um identificador único.
- **update** — atualiza os dados de um aluno existente.
- **delete** — remove um aluno do banco de dados.

---

**Disciplina:** Programação para Frameworks Web  
**Professor:** Thiago Rodrigues  
**Aluno:** Thalyson Chaves Nunes
