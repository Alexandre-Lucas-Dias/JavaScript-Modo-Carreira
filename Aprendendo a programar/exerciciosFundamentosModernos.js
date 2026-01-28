// Exercício 1
console.log("Exercício 1")

const pessoa = {
    nome: 'Alexandre',
    idade: 34,
    email: 'alexandrelucasdiascosta@yahoo.com.br'
}

const {nome, idade, email} = pessoa

console.log("As propriedades desestruturadas do objeto pessoa são: ", nome, idade, email)

// Exercício 2
console.log("\nExercício 2")

const linguagensDeProgramacao = ['JavaScript', 'Delphi', 'C']

const [ling1, ling2, ling3] = linguagensDeProgramacao

console.log("As linguagens de programação desestruturadas são: ", ling1, ling2, ling3)

// Exercício 3
console.log("\nExercício 3")

function somarNumerosRest (...numeros) {
    let soma = 0
    for (let contador = 0; contador < numeros.length; contador ++) {
        soma += numeros[contador]
    }
    return soma
}

console.log("O resultado da soma dos números é: ", somarNumerosRest(1, 2, 3, 4, 5))

// Exercício 4
console.log("\nExercício 4")

const primeirasFrutas = ['mamão', 'abacaxi', 'pêra']
const demaisFrutas = ['limão', 'guaraná', 'abacate']

const comboDeFrutas = [...primeirasFrutas, ...demaisFrutas]

console.log("O combinado de frutas é: ", comboDeFrutas)

// Exercício 5
console.log("\nExercício 5")

const nomeDoObjeto = {
    nome: 'Joaquim'
}

const idadeDoObjeto = {
    idade: 60
}

const objetoCompleto = {...nomeDoObjeto, ...idadeDoObjeto}

console.log("O objeto completo é: ",objetoCompleto)

// Exercício 6
console.log("\nExercício 6")

function saudacao (nome = "visitante") { // parâmetro com valor padrão (default)
    console.log(`Olá ${nome}!`)
}

saudacao()
saudacao("Alexandre")

// Exercício 7
console.log("\nExercício 7")

const hoje = new Date()

console.log(`Hoje é ${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`)

// Exercício 8
console.log("\nExercício 8")

const somar = require('./somar')

console.log("O resultado da soma é: ", somar(4, 5))
// Há um exemplo idêntico a este exercício na pasta ./calculadora, porém utilizando o Type do objeto package.json como 'module'. Neste exemplo, foi utilizado o type 'CommonJS', onde as formas de exportação e importação variam a depender do type.

// Exercício 9
console.log("\nExercício 9")

// function livro (titulo, autor) {
//     return{
//         descrever: function () {
//             return `O livro ${titulo} foi escrito por ${autor}`
//         },
//         titulo: titulo,
//         autor: autor
//     }
// }
// const livro1 = livro('As Crônicas de Nárnia', 'C. S. Lewis')
// const livro2 = livro('Harry Potter', 'J. K. Rowling') ou

function livro (titulo, autor) {
    this.descrever = function () {
        return `O livro ${titulo} foi escrito por ${autor}`
    }
    this.titulo = titulo
    this.autor = autor
}
const livro1 = new livro('As Crônicas de Nárnia', 'C. S. Lewis')
const livro2 = new livro('Harry Potter', 'J. K. Rowling')

const cloneLivro1 = {...livro1}
const cloneLivro2 = {...livro2}

delete cloneLivro1.descrever
delete cloneLivro2.descrever

// eu usei a estratégia de clonar os livros, deletando a propriedade 'descrever' (que é um método do livro), na intenção de imprimir os objetos livros sem essa propriedade. Mas sem perder a propriedade dos objetos originais, para constar a descrição adequada no exercício 10
console.log("Livro 1: ",cloneLivro1)
console.log("Livro 2: ",cloneLivro2)

// Exercício 10
console.log("\nExercício 10")

console.log(livro1.descrever())
console.log(livro2.descrever())