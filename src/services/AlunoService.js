const prisma = require("../databases/prisma");
const AlunoInvalidoError = require("../errors/AlunoInvalidoError");
const AlunoNaoEncontradoError = require("../errors/AlunoNaoEncontradoError");

class AlunoService {
    async findMany(page, pageSize, orderBy = 'id', order = 'asc') {
        const alunos = await prisma.aluno.findMany({
            skip: (page - 1) * pageSize,
            take: Number(pageSize),
            orderBy: {
                [orderBy]: order
            }
        });

        const total = await prisma.aluno.count();

        return { alunos, total };
    }

    async findUnique(id) {
        const aluno = await prisma.aluno.findUnique({
            where: { id: Number(id) }
        });

        if (!aluno) {
            throw new AlunoNaoEncontradoError();
        }

        return aluno;
    }

    async update(id, dadosAtualizados) {
        // Verifica se o aluno existe (se não existir, o findUnique lança o erro 404 automaticamente)
        await this.findUnique(id);

        // Se passou, atualiza no banco de dados
        const alunoAtualizado = await prisma.aluno.update({
            where: { id: Number(id) },
            data: dadosAtualizados
        });

        return alunoAtualizado;
    }

    async create(aluno) {
        const { nome, email } = aluno;
        if (!nome || !email) {
            throw new AlunoInvalidoError();
        }

        const novoAluno = await prisma.aluno.create({ data: aluno });

        return novoAluno;
    }

    async delete(id) {
        // Verifica se o aluno existe (se não, lança o erro 404)
        await this.findUnique(id);

        // Apaga o aluno do banco de dados
        await prisma.aluno.delete({
            where: { id: Number(id) }
        });
    }
}

module.exports = new AlunoService();