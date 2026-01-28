const readline = require('readline') // 'readLine' é uma biblioteca que o Node utiliza para o usuário poder interagir com o sistema através do terminal
// const dobrarNumero = require('./funcoes')
const leitor = readline.createInterface({ // aqui a intenção é indicar que o leitor vai usar o processo do terminal que a gente executa (node.algumaCoisa)
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual é o seu nome? ", (nome) =>{
    console.log("Olá, ", nome)
    console.log("Boas vindas ao nosso sistema!")

    leitor.question("Qual é a sua idade? ", (idade) => {
        if (idade >= 18) {
            console.log("Uau! Você já pode tirar a sua CNH!")
        } else {
            console.log("Você ainda não pode tirar a sua CNH!")
        }
        leitor.close()
    })
    
})

// console.log(dobrarNumero(20))