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