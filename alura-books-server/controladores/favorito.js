const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favorito");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postFavorito(req, res) {
    try {

        const id = req.params.id;

        if (getTodosFavoritos().find(livro => livro.id === id)) { // esta condição analisa se o id escolhido para postagem já existe no banco de dados
            res.status(422).send("Id já existente nos favoritos! Favor, escolher outro!");
        }
        else {
            insereFavorito(id);
            res.status(201).send("Livro inserido nos favoritos com sucesso");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

        deletaFavoritoPorId(id);
        res.send("Livro removido dos favoritos com sucesso");

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}