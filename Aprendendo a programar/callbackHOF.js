// Higher-Order Function === função que recebe outra função como parâmetro

function calcular (numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma (num1, num2) {
    return num1 + num2
}

function divisao (num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular (3, 8, soma) // soma é uma função callback
console.log("Resultado da soma:", resultadoSoma)

const resultadoDivisao = calcular (32, 8, divisao) // divisão é uma função callback
console.log("Resultado da divisão:", resultadoDivisao)