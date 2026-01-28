const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem-vindo(a) ao quiz do Stranger Things!\n\n")

let acertos = 0

rl.question("1) Qual é o nome do principal vilão da série?\n\n(a) Demogorgon\n(b) Vecna\n(c) Russos\n> ", (res1) => {
    if (res1 === "b") {
        acertos++
    }
    rl.question("2) Quantos portais o Vecna precisou abrir para conectar o mundo invertido ao 'mundo direito'?\n\n(a) 2\n(b) 3\n(c) 4\n> ", (res2) => {
        if (res2 === "c") {
            acertos++
        }
        rl.question("3) Qual é o sobrenome do Lucas?\n\n(a) Sinclair\n(b) Henderson\n(c) Wheeler\n> ", (res3) => {
            if (res3 === "a") {
                acertos++
            }

            if (acertos === 3) {
                console.log("PARABÉNS!! ACERTOU TODAS! VOCÊ É FÃ DE STRANGER THINGS!!!")
            } else if (acertos === 2) {
                console.log("Acertou 2! Você gosta da série, mas pode assistir mais!")
            } else if (acertos === 1) {
                console.log("Acertou 1! Eita, você se interessou pela série, mas precisa assistir mais!")
            } else {
                console.log("Nota-se que você não viu nada da série ainda! Recomendo que assista!")
            }

            rl.close()
        })
    })
})