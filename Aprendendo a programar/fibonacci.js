let fibonacci = [0, 1]

// let atual = 0

for (let contador = 1; contador <= 18; contador++) {
    // atual += contador
    fibonacci.push(fibonacci[contador] + fibonacci[contador - 1])
}

console.log("A sequência de Fibonacci até a 20ª posição é: ", fibonacci)

const somatorioFibonacci = fibonacci.reduce((resultado, quantidade) => resultado + quantidade)

console.log("O somatório da sequência de Fibonacci até a 20ª posição é: ", somatorioFibonacci)