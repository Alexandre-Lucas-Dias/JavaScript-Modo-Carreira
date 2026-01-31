// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2
const num2 = 4
const operacao = 'divisão' // case sensitive

if (operacao === 'soma') {
    console.log(num1 + num2)
} else if (operacao === 'multiplicação') {
    console.log(num1 * num2)
} else {
    console.log("Operação não identificada")
}

// localizar o nível de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
//     $10999 a $7000: 5% de bônus
//     $6999 a $4000: 7% de bônus
//     $3999 p baixo: 9% de bônus

const salario = 12000

if (salario >= 11000) {
    console.log("3% de bônus. Logo seu salário atualizado é de R$", salario * 1.03)
} else if ((salario < 11000) && (salario >= 7000)) {
    console.log("5% de bônus. Logo seu salário atualizado é de R$", salario * 1.05)
} else if ((salario < 7000) && (salario >= 4000)) {
    console.log("7% de bônus. Logo seu salário atualizado é de R$", salario * 1.07)
} else {
    console.log("9% de bônus. Logo seu salário atualizado é de R$", salario * 1.09)
}

// desafio. O que acontece no código abaixo?

const idade = 19

if (idade >= 18) {
    console.log("pode dirigir") // caso a condição do primeiro if seja atendida, jamais vai entrar nos else's
} else if (idade >= 17) {
    console.log("pode procurar a autoescola")
} else {
    console.log("abaixo da idade mínima")
}

// OPERADORES

// verificar se um ano é bissexto.
// um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

// const ano = 2024
// const ano = 2000
// const ano = 2022
const ano = 1600

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`)
} else {
    console.log(`${ano} não é bissexto`)
}

// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nome = "Roberta"
const nota = 8
const faltas = 2

const recebeBonus = ((nota >= 8) & (faltas <= 2))  
? `${nome} recebe bônus`
: `${nome} não recebe bônus`

console.log(recebeBonus)

// criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// ex: usuário free tem acesso limitado ao app
//     usuário premium tem acesso a todas as funções
//     usuário super premium tem acesso total e bônus especiais

const user = "super premium"

switch(user) {
    case "free":
        console.log("Acesso limitado")
        break
    case "premium":
        console.log("Acesso total ao app")
        break
    case "super premium":
        console.log("Acesso total ao app e bônus")
        break
    default:
        console.log("Tipo de user desconhecido")
        break
}