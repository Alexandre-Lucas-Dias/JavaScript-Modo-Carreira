// Exercício 1
console.log("Exercício 1")

const nomes = ['Alexandre', 'Yasmim', 'Franciele', 'Lucas', 'Maria Abadia']

for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}º nome: ${nomes[i]}`)
}

// Exercício 2
console.log("Exercício 2")

const frutas = ['laranja', 'uva', 'melancia', 'mamão', 'banana']

console.log("Lista de frutas antes das alterações: ",frutas)

frutas.push('abacaxi') // este método sempre adiciona um item ao final da lista

frutas.shift() // este método serve para remover o primeiro item de uma lista

console.log("Lista de frutas após as alterações: ",frutas)

// Exercício 3
console.log("Exercício 3")

const cidades = ['Aragari', 'Uberlândia', 'São Paulo', 'BH', 'Brasília']

console.log("O total de itens da lista cidade é de: ",cidades.length)

// Exercício 4
console.log("Exercício 4")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let totalDosNumeros = 0

for (let i = 0; i < numeros.length; i++) {
    totalDosNumeros += numeros[i]
}

console.log("A soma total de todos os números da listagem é de: ",totalDosNumeros)

// Exercício 5
console.log("Exercício 5")

const notas = [3, 5, 8, 6]

let somaDasNotas = 0

for (const nota of notas) {
    somaDasNotas += nota
}

let media = somaDasNotas / notas.length

if (media >= 7) {
    console.log("Aprovado, pois a média foi de ", media.toFixed(2)) // toFixed(número de casas decimais) serve para definir um número de casas decimais após a vírgula
} else {
    console.log("Reprovado, pois a média foi de ", media.toFixed(2))
}

// Exercício 6
console.log("Exercício 6")

const usuarios = ['alexandre.costa', 'rodrigo.moura', 'eduardo.cordeiro', 'cassiana.ferreira']

usuarios.forEach(user => console.log(`Olá ${user}!`))

// Exercício 7
console.log("Exercício 7")

const precos = [23.9, 40, 22.5, 68.9, 65.1, 24.7, 34.8]

const precosComDesconto = precos.map(valor => {return valor * 0.9})

console.log("O valor dos preços com desconto é:")

for (const valor of precosComDesconto) {
    console.log("R$", valor.toFixed(2))
}

// Exercício 8
console.log("Exercício 8")

const idades = [1, 4, 86, 5, 2, 34, 54, 21, 18, 17]

const maioresDeIdade = idades.filter(idade => {
    if (idade >= 18) {
        return idade
    }
})

console.log("A lista de quem é maior de idade é: ", maioresDeIdade)

// Exercício 9
console.log("Exercício 9")

const precosDeProdutos = [23.9, 40, 22.5, 68.9, 65.1, 24.7, 34.8]

let valorTotalDaCompra = 0

for (const preco of precosDeProdutos) {
    valorTotalDaCompra += preco
}

const valorTotalDaCompraComDesconto = valorTotalDaCompra * 0.8

console.log("O valor total da compra com o cupom de desconto de 20% já aplicado é de: R$", valorTotalDaCompraComDesconto.toFixed(2))

// Exercício 10
console.log("Exercício 10")

const tarefas = ['arrumar a casa', 'estudar', 'trabalhar', 'cuidar dos pets', 'jogar bola', 'fazer compras', 'preparar almoço']

const check = [true, true, false, true, false, false, false]

const tarefasPendentes = tarefas.filter((tarefa, indice) => {
    if (!check[indice]) {
        return tarefa
    }
    // ou:
    // return check[indice] === false
})

console.log("A lista de tarefas pendentes é: ", tarefasPendentes)

// Exemplo de um array heterogêneo com uma tratativa acerca do tipo de variável
const mistura = [42, 'texto', true, { chave: 'valor' }, () => 'função']

console.log("Abaixo segue tratativa de itens quanto ao tipo de variável:\n")

mistura.forEach(item => {
  if (typeof item === 'function') {
    console.log('Executando função:', item())
  } else {
    console.log('Item:', item)
  }
});

// Exemplos de uso com set
let numbers = new Set() // set guarda apenas valores únicos (exclusivos), ou seja, sem duplicatas

numbers.add(5)

numbers.add(6)

numbers.add(6) // Não será adicionado novamente 

console.log(numbers) // Resultado: Set { 5, 6 }

let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5]

let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]

console.log(arraySemDuplicatas) // Resultado: [1, 2, 3, 4, 5]

// Exemplos de uso com map

let mapa = new Map() // Guarda pares de chave e valor com chaves únicas e ordenadas

mapa.set('nome', 'João')

mapa.set('idade', 25)

console.log(mapa.get('nome')) // Resultado: João 

console.log(mapa.get('idade')) // Resultado: 25 


let chaveFuncao = function() {}

let chaveObjeto = {}

let mapaVariado = new Map()

mapaVariado.set(chaveFuncao, 'Valor para função')

mapaVariado.set(chaveObjeto, 'Valor para objeto')

console.log(mapaVariado.get(chaveFuncao)) // Resultado: Valor para função 

console.log(mapaVariado.get(chaveObjeto)) // Resultado: Valor para objeto 