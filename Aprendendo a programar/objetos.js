const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'Paula'

// console.log("Nome: ", pessoa.nome)
// console.log("Sobrenome: ", pessoa.sobrenome)

const livro = {
    título: 'O Hobbit',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'Inglês', 'Português', 'Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log("Livro antes: ", livro)

delete livro.paginas

console.log("Livro depois: ", livro)

console.log("Autor do livro: ", livro['autor']) // outra forma de acessar uma propriedade de um objeto. É importante ressaltar que deve-se utilizar aspas simples!

console.log("Editora", livro['editora']) // não existe a propriedade 'editora' no objeto

const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britânico',
    idade: 98,
    // livros: [livro] se eu considerar esse valor para esta chave do objeto 'autor' irá ocorrer uma referência circular, pois o próprio objeto 'autor' será considerado dentro do objeto livro como uma nova propriedade, logo mais
}

console.log("Autor: ",autor)

livro.autor = autor

console.log("Livro:", livro)

livro.autor.nacionalidade