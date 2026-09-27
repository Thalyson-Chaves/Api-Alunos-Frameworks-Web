const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'api_alunos'
});

module.exports = new PrismaClient({ adapter });