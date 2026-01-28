const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem-vindo(a) ao Quiz de JavaScript!")
console.log("Responda com a letra correta: a, b ou c\n")

let acertos = 0

rl.question("1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ", (resposta1) => {
    if (resposta1 === "b") {
        acertos++
    }

    rl.question("2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ", (resposta2) => {
        if (resposta2 === "c") {
            acertos++
        }
        rl.question("3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) 'texto'\n> ", (resposta3) => {
            if (resposta3 === "b") {
                acertos++
            }
            if (acertos === 3) {
                console.log("Parabéns, acertou todas!!!")
            } else if (acertos === 2) {
                console.log("Acertou 2. Muito bom, continue assim!")
            } else if (acertos === 1) {
                console.log("Acertou 1. Bom, continue melhorando!")
            } else {
                console.log("Não acertou nenhuma. Continue praticando e tente novamente.")
            }
            rl.close()
        })
    })
})