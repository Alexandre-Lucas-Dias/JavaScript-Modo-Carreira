// Exercício 1
console.log("Exercício 1")

const eu = {
    nome: 'Alexandre Lucas Dias Costa',
    idade: 34,
    profissao: 'Analista de Sistemas'
}

console.log("Este sou eu: ", eu)

// Exercício 2
console.log("\nExercício 2")

console.log(`O valor da propriedade ${Object.keys(eu)[0]} do objeto (eu) é: ${eu.nome}`) // o [0] demonstra qual propriedade do objeto está sendo acessada

// Exercício 3
console.log("\nExercício 3")

eu.idade = 35

console.log(`A nova idade de ${eu.nome} é de ${eu.idade} anos`)

// Exercício 4
console.log("\nExercício 4")

eu.cidade = 'Araguari'

console.log(`Consta agora que o ${eu.nome} mora em ${eu.cidade}`)

// Exercício 5
console.log("\nExercício 5")

function pessoa (pessoa) {
    return `Olá! Este é o ${pessoa.nome}, ele tem ${pessoa.idade} anos, vive em ${pessoa.cidade} e é ${pessoa.profissao}`
}

console.log(pessoa(eu))

// Exercício 6
console.log("\nExercício 6")

const familia = [
    pessoa1 = {
        nome: 'Alexandre',
        idade: 34
    },
    pessoa2 = {
        nome: 'Yasmim',
        idade: 17
    },
    pessoa3 = {
        nome: 'Maria',
        idade: 65
    }
]

console.log("A família completa é composta por: ",familia)

// Exercício 7
console.log("\nExercício 7")

const maioresDeIdadeDaFamilia = familia.filter(valor => {
    if (valor.idade >= 18) {
        return valor.nome
    }
})

console.log("As pessoas maiores de idade da família são: \n")

// for (let contador = 0; contador < maioresDeIdadeDaFamilia.length; contador++) {
//     console.log(Object.values(maioresDeIdadeDaFamilia[contador])[0])
// } ou

maioresDeIdadeDaFamilia.forEach((valor, indice) => {
    console.log(Object.values(maioresDeIdadeDaFamilia[indice])[0])
})

// Exercício 8
console.log("\nExercício 8")

const usuario = {
    nome: 'alexandre.costa',
    //saudacao: () => console.log("Olá", usuario.nome) // notação por ponto (.) é mais direta, porém mais inflexível. Esta forma, ou:
    saudacao: function (){console.log("Olá ", this.nome)} // Arrow function não permite utilizar o this, pois ele aponta para o escopo global
}

usuario.saudacao()

// Exercício 9
console.log("\nExercício 9")

for (const chave in eu) {
    console.log(`A chave ${chave} possui o valor ${eu[chave]}`)
}
console.log("Par completo de chave/valor: ", Object.entries(eu))

// Exercício 10
console.log("\nExercício 10")

const produto = {
    preco: 40,
    quantidade: 200,
}
let valorTotal = produto['preco'] * produto['quantidade'] // notação de colchetes (mais flexível)

console.log("O valor total da compra é de: R$",valorTotal)

// trabalhando com JSON's
// convertendo JSON em objeto

let respostaDoServidor = '{"nome":"João","idade":30}'

let objeto = JSON.parse(respostaDoServidor)

console.log(objeto.nome) // Resultado: João

// convertendo objeto em JSON

let person = { nome: 'João', idade: 30 }

let json = JSON.stringify(person)

console.log(json) // Resultado: '{"nome":"João","idade":30}'

// Exercício extra
console.log("\nExercício extra")

const pessoaPersonalizada = {
    nome: 'Senhor Fulano',
    idade: 50,
    CNH: true
}

console.log("Propriedades do Senhor Fulano antes das alterações:", pessoaPersonalizada)

pessoaPersonalizada.idade = 50 + 3
delete pessoaPersonalizada.CNH

console.log(`Após 3 anos, o ${pessoaPersonalizada['nome']} perdeu a sua carteira. Agora, com ${pessoaPersonalizada.idade} anos de idade, suas propriedades atualizadas agora são: `, pessoaPersonalizada)

pessoaPersonalizada.endereco = 'Abismo'
pessoaPersonalizada.hobby = 'Unificar o Abismo ao Mundo Real'
pessoaPersonalizada.telefone = '1234-5678'

console.log("Segue dados atualizados com relação a chave/valor do ", pessoaPersonalizada['nome'], "\n")
for (const chave in pessoaPersonalizada) {
    console.log(`Chave: ${chave}\nValor: ${pessoaPersonalizada[chave]}`)
}

// o método ".join()" permite separar propriedades de um objeto (tanto chave quanto valor) por meio de uma string personalizada. Muito útil quando se percorre todo o objeto
console.log(`Nomes das chaves do objeto ${pessoaPersonalizada.nome}: ${Object.keys(pessoaPersonalizada).join(", ")}\n`) 

console.log(`Nomes dos valores do objeto ${pessoaPersonalizada.nome}: ${Object.values(pessoaPersonalizada).join(", ")}\n`)

console.log(`Pares de chave/valor do objeto ${pessoaPersonalizada.nome}: ${Object.entries(pessoaPersonalizada).join("/ ")}\n`)