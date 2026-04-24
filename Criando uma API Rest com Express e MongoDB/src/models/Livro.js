import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false });

// o primeiro parâmetro "livros" é o nome da coleção do banco de dados
const livro = mongoose.model("livros", livroSchema);

export default livro;

// modelo é um objeto que representa uma coleção na base de dados. Logo ele é uma interface para que a API interaja com a coleção na base de dados.