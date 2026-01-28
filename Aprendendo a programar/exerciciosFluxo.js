// Exercício 1
console.log("Exercício 1:")

const idade = 16

if (idade >= 18){
    console.log("Pode comprar bebida alcoólica")
} else {
    console.log("Venda proibida para menores de 18 anos")
}

// Exercício 2
console.log("Exercício 2:")

const horaAtual = 21

if (horaAtual >= 6 && horaAtual < 12){
    console.log("Bom dia")
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

// Exercício 3
console.log("Exercício 3:")

const valor = 5

if (valor > 0){
    console.log("Positivo")
} else if (valor < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}

// Exercício 4
console.log("Exercício 4:")

const nota = 6

if (nota >= 9){
    console.log("A")
} else if (nota >= 8 && nota < 9) {
    console.log("B")
} else if (nota >= 6 && nota <= 7.9) {
    console.log("C")
} else if (nota >= 4 && nota <= 5.9) {
    console.log("D")
} else {
    console.log("E")
}

// Exercício 5
console.log("Exercício 5:")

const numero = 4

numero % 2 === 0 ? console.log("Par") : console.log("Ímpar")

// Exercício 6
console.log("Exercício 6:")

const opcao = 3

console.log("Escolha a opção: 1- 'Cadastrar', 2- 'Listar', 3- 'Sair'")

switch (opcao) {
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Listar")
        break
    case 3:
        console.log("Sair")
        break
    default:
        break
}

// Exercício 7
console.log("Exercício 7:")

const email = ""

if (email === "") {
    console.log("Preencha o campo de email")
} else {
    console.log("Email válido")
}

// Exercício 8
console.log("Exercício 8:")

const senha = "asdf"
const senhaValida = true

if (senhaValida) {
    console.log("Senha válida")
} else {
    console.log("Senha muito curta")
}

// Exercício 9
console.log("Exercício 9:")

const saldoDisponivel = 80
const valorCompra = 60

if (saldoDisponivel >= valorCompra) {
    console.log("Compra aprovada")
} else {
    console.log("Saldo insuficiente")
}

// Exercício 10
console.log("Exercício 10:")

const nome = "Alexandre"
const correioEletronico = "alex@alura.com"
const age = 34
let formularioValido = false

if ((nome != "") && (correioEletronico != "") && ((age != "") || (age > 0))) {
    formularioValido = true
}

if (formularioValido) {
    console.log("Formulário enviado com sucesso!")
} else {
    console.log("Por favor, preencha todos os campos corretamente")
}