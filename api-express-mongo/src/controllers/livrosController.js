import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores, livros } from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {

      const buscaLivros = livros.find(); // como esta constante é do tipo query, ela permite utilizar os métodos sort, limit, skip...
      req.resultado = buscaLivros; // req permite o envio de informações entre o controlador e o middleware

      next(); // executar o próximo middleware registrado na rota

    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id);
        // .populate("autor", "nome") // como o meu Schema de Livro contempla o objeto inteiro de Autor no campo autor, o populate se mostrou desnecessário.
        // .exec(); // quando se utiliza async/await o exec() se torna opicional

      // condicional para tratar um possível livro não encontrado
      // o erro 404 é o código para um recurso não localizado
      if (livroResultados !== null) {
        res.status(200).send(livroResultados);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {

    const novoLivro = req.body;
    let autorEncontradoParaCadastro = "";
    try {
      autorEncontradoParaCadastro = await autores.findById(novoLivro.autor);
    } catch {
      next(new NaoEncontrado("Id do autor não localizado."));
    }

    let livroResultado = "";

    if (autorEncontradoParaCadastro !== null) {
      const livroCompletoParaCadastro = { ...novoLivro, autor: { ...autorEncontradoParaCadastro._doc } };
      livroResultado = livroCompletoParaCadastro;
    }
    else {
      livroResultado = novoLivro;
    }
    try {

      const livroCriado = await livros.create(livroResultado);
      res.status(201).send(livroCriado.toJSON());

      // let livro = new livros(req.body);
      // const livroResultado = await livro.save(); // essa é outra forma de criar um livro

    } catch (erro) {
      next(erro);
    }
  }

  static atualizarLivro = async (req, res, next) => {

    const atualizaLivro = req.body;
    let autorEncontradoParaAtualizar = {};
    let manterPreco = true;
    let manterPaginas = true;
    let manterAutor = true;

    if ((atualizaLivro.autor !== null) && (atualizaLivro.autor !== "")) {
      try {
        autorEncontradoParaAtualizar = await autores.findById(atualizaLivro.autor);
      } catch {
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    }

    let livroResultado = {};

    if (autorEncontradoParaAtualizar !== null) {
      const livroCompletoParaAtualizar = { ...atualizaLivro, autor: { ...autorEncontradoParaAtualizar._doc } };
      livroResultado = livroCompletoParaAtualizar;
    }
    else {
      livroResultado = atualizaLivro;
    }

    if ((atualizaLivro.preco === null) || (atualizaLivro.preco === "") || (atualizaLivro.preco === undefined)) {
      manterPreco = false;
    }
    if ((atualizaLivro.paginas === null) || (atualizaLivro.paginas === "") || (atualizaLivro.paginas === undefined)) {
      manterPaginas = false;
    }
    if ((atualizaLivro.autor === null) || (atualizaLivro.autor === "") || (atualizaLivro.autor === undefined)) {
      manterAutor = false;
    }

    try {

      let livroAtualizado = {};
      const id = req.params.id;
      livroAtualizado = await livros.findByIdAndUpdate(id, { $set: livroResultado });

      if (!manterPreco) {
        livroAtualizado = await livros.findByIdAndUpdate({ _id: id }, { $unset: { preco: "" } });
      }
      if (!manterPaginas) {
        livroAtualizado = await livros.findByIdAndUpdate({ _id: id }, { $unset: { paginas: "" } });
      }
      if (!manterAutor) {
        livroAtualizado = await livros.findByIdAndUpdate({ _id: id }, { $unset: { autor: "" } });
      }

      if (livroAtualizado !== null) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (erro) {
      next(erro);
    }

  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      const livrosResultado = livros
        .find(busca);
      //.populate("autor"); // como o meu Schema de Livro contempla o objeto inteiro de Autor no campo autor, o populate se mostrou desnecessário.

      req.resultado = livrosResultado;

      const livrosResultadoPorBusca = await livros.find(busca); // precisei criar esta variável apenas para que as minhas mensagens de busca não encontrada pudessem ser exibidas, caso os parâmetros da requisição não forem encontrados

      if ((busca !== null) && (livrosResultadoPorBusca.length > 0)) {
        next(); // executar o próximo middleware registrado na rota
      } else {
        let buscaNaoEncontrada = [];
        if (String(Object.keys(req.query)).includes("editora")) {
          buscaNaoEncontrada.push("Livro não encontrado pela editora. ");
        }
        if (String(Object.keys(req.query)).includes("titulo")) {
          buscaNaoEncontrada.push("Livro não encontrado pelo título. ");
        }
        if (String(Object.keys(req.query)).includes("minPaginas")) {
          buscaNaoEncontrada.push("Livro não encontrado pela quantidade mínima de páginas. ");
        }
        if (String(Object.keys(req.query)).includes("maxPaginas")) {
          buscaNaoEncontrada.push("Livro não encontrado pela quantidade máxima de páginas. ");
        }
        if (String(Object.keys(req.query)).includes("nomeAutor")) {
          buscaNaoEncontrada.push("Livro não encontrado pelo nome do(a) autor(a). ");
        }

        res.status(200).json(`O(s) seguinte(s) erro(s) foi(ram) encontrado(s) na listagem de livros por filtro: ${buscaNaoEncontrada}`);
      }

    } catch (erro) {
      next(erro);
    }
  }

}

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  // regex é uma expressão regular que, neste contexto, permite que a busca do livro possa ser mais dinâmica, onde apenas parte do filtro já seja suficiente para a busca. O "i" significa case insensitive
  // const regex = new RegExp(titulo, "i");

  let busca = {};

  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.paginas = {};

  // gte = Greater Than or Equal = Maior ou igual que
  if (minPaginas) busca.paginas.$gte = minPaginas;
  // lte = Less Than or Equal = Menor ou igual que
  if (maxPaginas) busca.paginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if (autor !== null) {
      // Alterado de 'busca.autor' para 'busca["autor._id"]', por sugestão da IA do google, uma vez que o meu Schema de Livro está parametrizado para compor o autor como um objeto inteiro, e não apenas o ID.
      busca["autor._id"] = autor._id;
    } else {
      busca = null;
    }

  }

  return busca;

}

export default LivroController