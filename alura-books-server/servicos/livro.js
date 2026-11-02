const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id === id);
    return livroFiltrado;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    // livrosAtuais[indiceModificado] -> um objeto, exemplo {id: "2", nome: "Livro irado"}
    // modificacoes -> objeto com modificações, exemplo {nome: "nome mucho legal"}

    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function excluiLivro(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const indiceParaExclusao = livros.findIndex(livro => livro.id === id);

    livros.splice(indiceParaExclusao, 1); // esta ação remove o item da lista de acordo com o índice. O número 1 é a quantidade removida

    fs.writeFileSync("livros.json", JSON.stringify(livros));

    // versão do professor da Alura
    // const livrosFiltrados = livros.filter(livro => livro.id !== id);
    // fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    excluiLivro
}