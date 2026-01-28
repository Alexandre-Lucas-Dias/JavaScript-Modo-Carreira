const pessoa = {
    nome: 'Nathália',
    idade: 19,
    profissao: 'estudante'
}

const {nome, idade} = pessoa // a desestruturação (que serve tanto para objetos quanto para arrays, o que muda é o caracter {para objetos} e [para arrays]) serve para desmembrar as propriedades de um objeto ou os elementos de um array

console.log(nome)
console.log(idade)

function saudacao ({nome, idade}) {
    console.log("Olá, ", nome)
    if (idade >= 18) {
        console.log("Maior de idade")
    }
}

saudacao(pessoa)

const frutas = ['uva', 'banana']

const [primeira, segunda] = frutas

// const primeira = frutas[0]
// const segunda = frutas[1] // funciona da mesma forma que o destructuring do array "frutas", porém o destructuring proporciona maior legibilidade

console.log(primeira, segunda)