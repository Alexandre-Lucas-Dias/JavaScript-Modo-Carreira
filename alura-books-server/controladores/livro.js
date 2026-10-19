const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivro } = require("../servicos/livro");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number.isInteger(Number(id)) && (Number(id) > 0)) {
            const livro = getLivroPorId(id);
            if (livro.length > 0) {
                res.send(livro);
            } else {
                res.status(422).send("Id inexistente!");
            }
        } else {
            res.status(422).send("Id inválido!");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postLivro(req, res) {
    try {

        if (!req.body.id) {
            res.status(422).send("Campo id obrigatório!");
        } else if (!req.body.nome) {
            res.status(422).send("Campo nome obrigatório!");
        } else {
            const livroNovo = req.body;

            if ((!Number.isInteger(Number(livroNovo.id))) || (Number(livroNovo.id) <= 0)) {
                res.status(422).send("Id deve ser apenas números naturais!");
            } else if (getTodosLivros().find(livro => livro.id === livroNovo.id)) { // esta condição analisa se o id escolhido para postagem já existe no banco de dados
                res.status(422).send("Id já existente! Favor, escolher outro!");
            }
            else {
                insereLivro(livroNovo);
                res.status(201).send("Livro inserido com sucesso");
            }
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number.isInteger(Number(id)) && (Number(id) > 0)) {
            if (getLivroPorId(id).length > 0) {
                const body = req.body;
                if (body.id) {
                    if ((body.id === "") || (!Number.isInteger(Number(body.id))) || (Number(body.id) <= 0)) {
                        res.status(422).send("Id deve ser apenas números naturais!");
                    } else if ((getTodosLivros().find(livro => livro.id === body.id)) && (body.id !== id)) {
                        res.status(422).send("Id já existente! Favor, escolher outro!");
                    } else {
                        modificaLivro(body, id);
                        res.send("Livro modificado com sucesso");
                    }
                } else {
                    modificaLivro(body, id);
                    res.send("Livro modificado com sucesso");
                }

            } else {
                res.status(422).send("Id inexistente!");
            }
        } else {
            res.status(422).send("Id inválido!");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number.isInteger(Number(id)) && (Number(id) > 0)) {
            if (getLivroPorId(id).length > 0) {
                excluiLivro(id);
                res.send("Livro removido com sucesso");
            } else {
                res.status(422).send("Id inexistente!");
            }
        } else {
            res.status(422).send("Id inválido!");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};