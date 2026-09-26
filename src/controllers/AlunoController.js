const alunoService = require("../services/AlunoService");

class AlunoController{

    async findMany(request, response){
        let { page, pageSize, orderBy, order } = request.query;

        // Valores padrão
        page = Number(page) || 1;
        pageSize = Number(pageSize) || 10;
        orderBy = orderBy || 'id';
        order = order === 'desc' ? 'desc' : 'asc'; // Garante que seja asc ou desc

        const resultado = await alunoService.findMany(page, pageSize, orderBy, order);

        // Retorna o objeto com { alunos, total }
        return response.status(200).json(resultado);
    }

    async create(request, response){
        try{
            const aluno = await alunoService.create(request.body);
            return response.status(201).json({aluno});
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }

}

module.exports = new AlunoController();