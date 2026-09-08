import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores, livros } from "../models/index.js";

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = autores.find();

      req.resultado = autoresResultado;

      next();

    } catch (erro) {
      next(erro);
    }
  }

  static listarAutorPorId = async (req, res, next) => {

    try {
      const id = req.params.id;

      const autorResultado = await autores.findById(id);

      // condicional para tratar um possível autor não encontrado
      // o erro 404 é o código para um recurso não localizado
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }

    } catch (erro) {
      // aqui o next vai encaminhar o erro obtido no controlador e mandar para o middleware de tratamento de erros
      next(erro);
    }
  }


  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);

      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  // ********* versão original ****************
  static atualizarAutor = async (req, res, next) => {

    const atualizaAutor = req.body;
    let manterNacionalidade = true;
    if ((atualizaAutor.nacionalidade === null) || (atualizaAutor.nacionalidade === "") || (atualizaAutor.nacionalidade === undefined)) {
      manterNacionalidade = false;
    }
    try {
      let autorResultado = {};
      const id = req.params.id;
      const autorAntigo = await autores.findById(id);

      if (!manterNacionalidade) {
        await autores.findByIdAndUpdate({ _id: id }, { $unset: { nacionalidade: "" } });
      }
      autorResultado = await autores.findByIdAndUpdate(id, { $set: atualizaAutor }, { new: true, runValidators: true });

      if (autorResultado !== null) {

        await livros.updateMany({ "autor.nome": autorAntigo.nome }, { $set: { autor: autorResultado } });

        res.status(200).send({ message: "Autor atualizado com sucesso" });

      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  // ******************** VERSÃO IA *****************
  // static atualizarAutor = async (req, res, next) => {
  //   const atualizaAutor = req.body;
  //   const id = req.params.id;

  //   try {
  //     // 1. Configura a query de atualização do autor
  //     const updateQuery = { $set: atualizaAutor };

  //     // Se nacionalidade for inválida, remove o campo no mesmo comando
  //     if (!atualizaAutor.nacionalidade) {
  //       updateQuery.$unset = { nacionalidade: "" };
  //       delete updateQuery.$set.nacionalidade; // Evita conflito de set/unset no mesmo campo
  //     }

  //     // 2. Busca o autor ANTES de atualizar para saber o nome antigo dele
  //     const autorAntigo = await autores.findById(id);

  //     if (!autorAntigo) {
  //       return next(new NaoEncontrado("Id do Autor não localizado."));
  //     }

  //     // 3. Atualiza o autor e ativa a opção { new: true } para retornar o objeto já atualizado
  //     const autorAtualizado = await autores.findByIdAndUpdate(
  //       id,
  //       updateQuery,
  //       { new: true, runValidators: true }
  //     );

  //     // 4. Atualiza os livros vinculados usando o nome antigo como filtro e os dados novos no payload
  //     await livros.updateMany(
  //       { "autor.nome": autorAntigo.nome },
  //       { $set: { autor: autorAtualizado } }
  //     );

  //     res.status(200).send({ message: "Autor atualizado com sucesso" });

  //   } catch (erro) {
  //     next(erro);
  //   }
  // }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autoresResultado = await autores.findByIdAndDelete(id);

      if (autoresResultado !== null) {
        await livros.updateMany({ "autor.nome": autoresResultado.nome }, { $unset: { autor: "" } });

        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }


}

export default AutorController