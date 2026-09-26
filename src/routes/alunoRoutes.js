const express = require("express");
const alunoController = require("../controllers/AlunoController");
const validarAluno = require("../middlewares/validarAluno");

const router = express.Router();

router.get("/", (request, response, next)=>{
    console.log("Esse middleware está executando antes do controller!");
    next();
}, alunoController.findMany);

router.post("/", validarAluno, alunoController.create);

// Rota do Requisito 2 (Buscar por ID)
router.get("/:id", alunoController.findUnique);

// Rota do Requisito 3 (Atualizar) que acabaste de fazer!
router.put("/:id", validarAluno, alunoController.update);

module.exports = router;