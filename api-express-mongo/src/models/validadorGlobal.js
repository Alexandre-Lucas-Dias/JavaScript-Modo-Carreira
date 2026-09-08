// este é um validador global para informar ao usuário sobre qualquer campo do tipo string quando não for fornecida nenhuma informação

import mongoose from "mongoose";

// o método set irá definir uma validação para todos os campos do tipo String do banco de dados
mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor.trim() !== "",
    message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});