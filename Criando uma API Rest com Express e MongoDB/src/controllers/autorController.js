import { autor } from "../models/Autor.js";

class AutorController {

    // static é utilizado quando não se quer instanciar uma classe com new...
    // aqui se listam todos os autores
    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores); // json é uma notação de objeto que tem como referência um objeto Javascript
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    // para listar apenas um autor
    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
    };

    // para cadastrar um novo autor
    // quando se quer enviar informação para ser armazenada (via post), o objeto requisição precisa ter um corpo (body), como propriedade
    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "autor criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    };

    // para atualizar um autor
    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body); // req.body é de onde a informação virá na requisição para atualizar os dados
            res.status(200).json({ message: "autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do autor` });
        }
    };

    // para deletar um autor
    static async excluirAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do autor` });
        }
    };

};

export default AutorController;
