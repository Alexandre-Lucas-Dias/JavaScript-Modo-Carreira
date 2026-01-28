// Exercício 1
console.log("Exercício 1:")

const idade = 17

console.log(`É maior de idade? ${idade >= 18}`)

// Exercício 2
console.log("Exercício 2:")

const nota1 = 4
const nota2 = 6
const media = (nota1 + nota2)/2
console.log(`A média do aluno é maior ou igual a 7? ${media >= 7}`)

// Exercício 3
console.log("Exercício 3:")

const valorCompra = 35.9
const valorPago = 50
const troco = valorPago - valorCompra

console.log(`O troco a ser devolvido é de R$${troco.toFixed(2)}`)

// Exercício 4
console.log("Exercício 4:")

const senha1 = "abcde"
const senha2 = "12345"

console.log(`O resultado da comparação entre as senhas mostra o seguinte resultado: ${senha1 === senha2}`)

// Exercício 5
console.log("Exercício 5:")

const totalAulas = 100
const faltas = 24

console.log(`As faltas ultrapassaram o limite de 25% do permitido? ${faltas > 0.25 * totalAulas}`)

// Exercício 6
console.log("Exercício 6:")

const temLogin = true
const temSenha = true

console.log(`Há login e senha? ${temLogin && temSenha}`)

// Exercício 7
console.log("Exercício 7:")

const disponivel = false

console.log(`Está indisponível? ${!disponivel}`)
console.log(`E está disponível? ${disponivel}`)

// Exercício 8
console.log("Exercício 8:")

const num1 = 5
const num2 = 6

console.log(`Ambos os números são pares e iguais? ${(num1%2===0) && (num2%2===0) && (num1 === num2)}`)

// Exercício 9
console.log("Exercício 9:")

const porcentagem = 0.15 * 120

console.log(`15% de 120 é igual a ${porcentagem}`)

// Exercício 10
console.log("Exercício 10:")

const resultadoExpressao = 2 + 3 * 5

console.log(`O resultado da expressão 2 + 3 * 5 é igual a ${resultadoExpressao} pois, na aritmética, a multiplicação tem prioridade sobre a soma`)
