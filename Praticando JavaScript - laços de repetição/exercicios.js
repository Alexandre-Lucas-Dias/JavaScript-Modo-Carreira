// FOR

// Gerar números aleatórios de 1 a 50 e
// Interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.

for (let contador = 1; contador <= 30; contador ++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`)
        break
    }
}

// Gerar números aleatórios de 1 a 50
// Criar um contador que só é incrementado caso os números NÃO sejam divisíveis por 5
// No final, exibir o valor do contador

let contador = 0

for (let i = 1; i <= 30; i ++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero % 5 === 0) {
        continue // interrompe a iteração do laço
    }
    contador++
}

console.log(contador)

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numeroSecreto = 8
let numeroAleatorio = 0
let tentativas = 0

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    tentativas++
}

console.log(`Adivinhou em ${tentativas} tentativas`)

// Criar um laço que gere um número aleatório de 1 a 50
// executar o laço enquanto não gerar um número par

let numeroRandom = 0

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    console.log(numeroRandom)
} while (numeroRandom % 2 !== 0)

// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo

// const texto = "Alura"
// const texto = "Arara"
// const texto = "Luz azul"
const texto = "Socorram me subino onibus em Marrocos"

let textoInvertido = ""
let textoMinusculo = texto.toLowerCase()
let textoMinusculoSemEspaco = ""

for (let i = 0; i < texto.length; i ++) {
    if (texto[i] !== " ") {
        textoMinusculoSemEspaco += textoMinusculo[i]
    }
}

for (let i = textoMinusculoSemEspaco.length - 1; i >= 0; i --) {
    textoInvertido += textoMinusculoSemEspaco[i]
}

const result = textoMinusculoSemEspaco === textoInvertido ? 
`${texto} é palíndromo` :
`${texto} não é palíndromo`

console.log(result)
