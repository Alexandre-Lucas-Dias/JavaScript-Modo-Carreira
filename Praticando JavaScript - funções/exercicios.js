// FUNCTION

// elevar um número x a uma potência y

// base e expoente são identificadores da função, que se comportam como parâmetros. Pode haver um parâmetro padrão, com um valor predefinido que, se não receber argumento quando for chamado, o identificador assume esse valor padrão
function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente)
    
    // ou então
    // let resultado = 1
    // for ( let i = 0; i < expoente; i ++) {
    //     resultado *= base
    // }
    // return resultado
}

console.log(calculaPotencia(4, 3))
console.log(calculaPotencia(5, 5))
console.log(calculaPotencia(6, 8))
console.log(calculaPotencia(3, 4))

// criar função que calcula o fatorial de um número usando recursão
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1
//                           5
const fatorial = function f(num) { // f() é uma função de expressão, ou seja, não é declarada e, neste caso, ela é uma função de recursão
    if ((num === 0) || (num === 1)) return 1
    return num * f(num - 1)
}

// 5 * fatorial(4): 120
// 4 * fatorial(3): 24
// 3 * fatorial(2): 6
// 2 * fatorial(1): 2

console.log(fatorial(5))

// criar uma função para calcular juros compostos
// função deve receber os valores no formato inteiro: valor, % de juros e tempo
// fórmula: valor * (juro elevado a tempo)

const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = juros / 100 + 1
    return valor * Math.pow(taxaJuros, tempo)
}

console.log("R$",calculaJuros(1000, 5, 2))

// CALLBACKS

// criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor1 e valor2

function soma (a, b) {return a + b}
function multiplica (a, b) {return a * b}

function calcula (fnOperacao, valorA, ValorB) {
    return fnOperacao(valorA, ValorB)
}

// quando uma função callback é passada como parâmetro para outra função mais externa, só se faz a referência dessa callback, não podendo colocar parênteses.
console.log(calcula(soma, 5, 5))
console.log(calcula(multiplica, 5, 5))

// criar uma função que emita uma mensagem caso usuário x não esteja interagindo com o sistema após quantidade y de tempo

const userId = "4545656"

// const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`)

// na função setTimeOut, após a vírgula referente ao intervalo de tempo em que ocorrerá a espera para a execução da função interna, passa-se os argumentos que a função interna pode precisar
// setTimeout(avisaUsuario, 2000, userId) // ou então:

setTimeout(userId => console.log(`Sessão de ${userId} está inativa`), 4000, userId)