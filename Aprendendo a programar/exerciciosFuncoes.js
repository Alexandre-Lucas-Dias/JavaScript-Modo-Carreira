// Exercício 1
console.log("Exercício 1")

function saudacao() {
    console.log("Olá! Seja bem-vindo(a)!")
}

saudacao()

// Exercício 2
console.log("Exercício 2")

function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)
}

apresentarPessoa("Alexandre", 34)

// Exercício 3
console.log("Exercício 3")

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

console.log("O seu IMC corresponde a aproximadamente", calcularIMC(92, 1.79).toFixed(2))

// Exercício 4
console.log("Exercício 4")

function verificarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log("O aluno foi", verificarAprovacao(10))

// Exercício 5
console.log("Exercício 5")

function ehPar(numero) {
    // if (numero % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // } // também funciona desta forma
    return numero % 2 === 0
}

console.log("O número informado é par?", ehPar(4))

// Exercício 6
console.log("Exercício 6")

function soma(num1, num2) {
    return num1 + num2
}

console.log("A soma dos números informados é igual a", soma(3, 4))

// Exercício 7
console.log("Exercício 7")

function calcularTroco(valorCompra, valorPago){
    return valorPago - valorCompra
}

console.log("O troco da compra ficou em: R$", calcularTroco(44.5, 50))

// Exercício 8
console.log("Exercício 8")

const somar = (num1, num2) => num1 + num2 // lembrando que arrow function (=>) não precisa de "return"

console.log("A soma dos números informados é igual a", somar(30, 40))

// Exercício 9
console.log("Exercício 9")

function executarAcao(acao) { // esta é a HOF (Higher-Order Function)
    acao()
}

// function acaoASerExecutada() {
//     console.log("Executando ação!")
// }

// executarAcao(acaoASerExecutada) // também funciona desta forma

executarAcao(function(){
    console.log("Executando ação!")
}) // aqui, tudo o que está entre os parênteses da função "executarAcao" é o argumento desta função, que no caso é uma função callback

// Exercício 10
console.log("Exercício 10")

function fazerPergunta(pergunta, respostaCorreta) {
    console.log(pergunta,"\n")
    if (respostaCorreta === "Stranger Things") {
        console.log("PARABÉNS!!! VOCÊ ACERTOU!!")
    } else {
        console.log("Sinto muito, você errou.")
    }
}

fazerPergunta("Qual é a melhor série do mundo?", "Stranger Things")