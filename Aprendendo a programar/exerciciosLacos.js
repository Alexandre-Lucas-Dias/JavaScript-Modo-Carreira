// Exercício 1
console.log("Exercício 1")

for (let numero = 1; numero <= 10; numero++) {
    console.log("Número: ", numero)
}

// Exercício 2
console.log("Exercício 2")

let acumulador = 0

for (contador = 1; contador <= 100; contador++) {
    acumulador += contador
}

console.log(`O resultado final da soma de todos os números de 1 a 100 é ${acumulador}, pois a cada repetição do laço, a soma acumulada da iteração anterior soma com o valor do contador atual para representar o novo acumulador na nova iteração`)

// Exercício 3
console.log("Exercício 3")

const numeroTabuada = 5

console.log("Tabuada da soma:")

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numeroTabuada} + ${contador} = ${numeroTabuada+contador}`)
}

console.log("Tabuada da subtração:")

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numeroTabuada} - ${contador} = ${numeroTabuada-contador}`)
}

console.log("Tabuada da multiplicação:")

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numeroTabuada} * ${contador} = ${numeroTabuada*contador}`)
}

console.log("Tabuada da divisão:")

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numeroTabuada} / ${contador} = ${numeroTabuada/contador}`)
}

// Exercício 4
console.log("Exercício 4")

let contagemRegressiva = 10

while (contagemRegressiva >= 0) {
  	console.log(contagemRegressiva)
    contagemRegressiva--
}

console.log("Contagem finalizada")

// Exercício 5
console.log("Exercício 5")

let numeroDigitado = 0
let contadorEx5 = 0

do {
    numeroDigitado = Math.floor(Math.random() * 5) // Math.floor(Math.random() * (max - min) + min)
    contadorEx5++    
} while (numeroDigitado !== 0)

if (contadorEx5 === 1) {
    console.log("Foi feita 1 tentativa de digitar o número zero")
} else {
    console.log(`Foram feitas ${contadorEx5} tentativas de digitar o número zero`)
}

// Exercício 6
console.log("Exercício 6")

const numeroSecreto = 3

for (let contador = 1; contador <= 3; contador++) {
    if (numeroSecreto === contador) {
        console.log("Acertou!")
    } else {
        console.log("Tente novamente")
    }
}

// Exercício 7
console.log("Exercício 7")

const anoNascimento = 1991
const anoAtual = 2026

for (let contador = anoNascimento; contador <= anoAtual; contador++) {
    if ((contador - anoNascimento) === 1) {
        console.log(`No ano de ${contador} você tinha 1 ano de idade!`)
    } else if (contador < anoAtual) {
        console.log(`No ano de ${contador} você tinha ${contador-anoNascimento} anos de idade!`)
    } else {
        console.log(`No ano atual, ou seja, de ${anoAtual} você tem ${contador-anoNascimento} anos de idade!`)
    }
}

// Exercício 8
console.log("Exercício 8")

console.log("Números pares entre 1 e 50:")

for (let contador = 1; contador <= 50; contador++) {
    if (contador % 2 === 0) {
        console.log(contador)
    }
}

// Exercício 9
console.log("Exercício 9")

let contadorMultiplosDeTres = 0

for (let contador = 1; contador <= 100; contador++) {
    if (contador % 3 === 0) {
        contadorMultiplosDeTres++
    }
}

console.log(`Entre os números de 1 e 100 há ${contadorMultiplosDeTres} múltiplos de 3`)

// Exercício 10
console.log("Exercício 10")

let opcao = 0

do {
    console.log("1 - Ver saldo\n2 - Fazer depósito\n3 - Sair")
    opcao = Math.floor(Math.random() * (4 - 1) + 1) //Math.floor(Math.random() * (max - min) + min)
    console.log("Opção escolhida: ",opcao)
} while (opcao !== 3)

console.log("Saiu!")

// Exercício extra
console.log("Exercício extra")

const expressao = "Stranger Things"

for (let contador = 0; contador < expressao.length; contador++){
    console.log(expressao[contador]);
}

console.log("Contagem com intervalo:")

let regressiva = 10

const id = setInterval (() => {
    console.log(regressiva)
    if (regressiva === 0) {
        clearInterval(id)
        console.log("Feliz Ano Novo!!!!")
    }
    regressiva--
}, 1000)