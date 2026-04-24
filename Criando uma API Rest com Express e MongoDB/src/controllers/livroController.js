import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    // static é utilizado quando não se quer instanciar uma classe com new...
    // aqui se listam todos os livros
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros); // json é uma notação de objeto que tem como referência um objeto Javascript
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    // para listar apenas um livro
    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    };

    // para cadastrar um novo livro
    // quando se quer enviar informação para ser armazenada (via post), o objeto requisição precisa ter um corpo (body), como propriedade
    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            // o processo das próximas 2 linhas se refere a criar um livro, agora com um autor, que é uma nova coleção, mas não é obrigatório
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "livro criado com sucesso", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    };

    // para atualizar um livro
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body); // req.body é de onde a informação virá na requisição para atualizar os dados
            res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro` });
        }
    };

    // para deletar um livro
    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro` });
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora; // aqui, query faz referência a um parâmetro de consulta
        try {
            const livrosPorEditora = await livro.find({ editora: editora }); // o primeiro "editora" é o parâmetro do schema do livro e o segundo "editora" é o valor da variável recebido pelo parâmetro de consulta
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    }
};

export default LivroController;
