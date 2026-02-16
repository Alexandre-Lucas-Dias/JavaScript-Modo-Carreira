// Acessando e modificando elementos de um array

// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.

// Escreva um programa que:

// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.

const listaDeCompras = ['vinagre', 'suco', 'batata', 'tâmaras', 'brócolis', 'chia']

console.log(`O segundo item da lista de compras é: ${listaDeCompras[1]}`)
listaDeCompras[listaDeCompras.length - 1] = 'sorvete'

console.log(`Lista de compras após a alteração: ${listaDeCompras.join(", ")}`)

// Percorrendo listas com for

// Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

// Escreva um programa que:

// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.

const despesas = [46, 24, 120, 45, 462.5, 253, 12, 56, 73]

let total = 0

for (let gasto of despesas) {
    total += gasto
} // ou:

// for (let i = 0; i < despesas.length; i ++) {
//     total += despesas[i]
// }

console.log(`O total gasto das despesas da casa é de R$${total}`)

// Exibindo nomes com for...of

// Você está criando um painel para um sistema de chamada escolar. Você recebeu uma lista com os nomes das pessoas estudantes de uma turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:

// Crie um array com os nomes das pessoas.
// Use o for...of para exibir cada nome individualmente.

const estudantes = ['Josefina', 'Maria', 'Lucas', 'Bernardo', 'Carlos', 'Laís', 'Nicoly', 'Daniel']

for (let aluno of estudantes) {
    console.log(`Estudante: ${aluno}`)
}

// Exibindo mensagens com forEach()

// Você recebeu a missão de desenvolver um sistema de envio de notificações. A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console informando que a mensagem foi enviada. Escreva um programa que:

// Crie um array com uma lista de mensagens.
// Use o método forEach() para exibir uma mensagem no console para cada item da lista.

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado']

// O método forEach() é utilizado quando você quer executar uma ação para cada item do array, mas não precisa retornar um novo array. Obs.: o segundo parâmetro que a função permite é o índice
mensagens.forEach(mensagem => console.log(`Notificação: ${mensagem}`))

// Adicionando e removendo itens de uma lista

// Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:

// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.

const tarefas = ['Treinar', 'Estudar', 'Trabalhar']

console.log(`Lista de tarefas antes de adicionar mais uma: ${tarefas.join(", ")}`)

tarefas.push('Dormir')

console.log(`Lista de tarefas após adicionar mais uma: ${tarefas.join(", ")}`)

tarefas.pop()

console.log(`Lista de tarefas após ter adicionado mais uma e removido ela: ${tarefas.join(", ")}`)

// Clonando um array

// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.

const pedidos = ['carro', 'avião', 'casa']

// usando operador spread (...)
// const copia = [...pedidos, 'iate'] // ou:

// let copia = []
// pedidos.forEach(pedido => copia.push(pedido)) // ou até mesmo:

const copia = pedidos.slice() // ao usar o método slice sem parâmetros, ele cria uma cópia do array original, sem correr o risco de alterar o array original.

copia.push('iate')

console.log(`Array original: ${pedidos.join(", ")}`)
console.log(`Array copiado: ${copia.join(", ")}`)

// Buscando itens em uma lista

// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:

// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.

const livros = ['Memórias Póstumas de Brás Cubas', 'O Cortiço', 'O Alienista', 'Freud e o Inconsciente', 'Uma Breve História do Tempo', 'Inteligência Emocional']

const livroProcurado = 'O Alienista'

const livroEncontrado = livros.filter(livro => {
    if (livro === livroProcurado) return livro
})

if (livroEncontrado.length > 0) {
    console.log(`O livro ${livroProcurado} está disponível.`)
} else {
    console.log(`O livro ${livroProcurado} não foi encontrado.`)
} 

// ou então:

// quando o indexOf não encontra o valor procurado passado como parâmetro, ele retorna -1
// if (livros.indexOf(livroProcurado) !== -1){
//     console.log(`O livro ${livroProcurado} está disponível.`)
// } else {
//     console.log(`O livro ${livroProcurado} não foi encontrado.`)
// }

//Transformando dados com map()

// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:

// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.

const precos = [41, 30, 25, 190, 200, 1000, 413, 459]

const precosComDesconto = precos.map(preco => preco * 0.9)

console.log(`Preços com desconto: ${precosComDesconto.join(", ")}`)

// Filtrando valores

// Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.

// Para isso, você precisa:

// Criar um array com objetos contendo nome e idade de cada participante.
// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// Exibir a lista de aprovados no final.

const participantes = [
    {nome: 'Nicoly', idade: 14},
    {nome: 'Júlia', idade: 16},
    {nome: 'Andressa', idade: 24},
    {nome: 'Rodrigo', idade: 45},
    {nome: 'Alberto', idade: 64},
    {nome: 'Enzo', idade: 8},
    {nome: 'Jeferson', idade: 50},
    {nome: 'Maurício', idade: 13},
    {nome: 'Larissa', idade: 17}
]

const autorizados = []
participantes.filter(participante => {
        if (participante.idade >= 18) {    
            console.log(`Acesso liberado para: ${participante.nome}`)
            autorizados.push(participante.nome)
        }
})

console.log("Lista de aprovados: ", autorizados) // ou então:

// const autorizados = participantes.filter(participante => {
//         if (participante.idade >= 18) {    
//             console.log(`Acesso liberado para: ${participante.nome}`)
//             return participante
//         }
// })

// const aprovados = autorizados.map(participante => participante.nome)

// console.log("Lista de aprovados: ", aprovados)

// Painel de controle de produtos

// Você está desenvolvendo um painel de vendas para a área comercial de uma empresa. O time quer uma visão clara de quais produtos venderam bem, quanto cada um arrecadou, e qual gerou mais lucro.

// Você precisa:

// Mostrar todos os produtos (nome, preço, quantidade).
// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
// Calcular os totais de venda de cada produto.
// Descobrir o mais lucrativo.

const produtos = [
    {nome: 'refrigerador', preco: 3000, quantidadeVendida: 26},
    {nome: 'Televisão', preco: 4000, quantidadeVendida: 150},
    {nome: 'Celular', preco: 1800, quantidadeVendida: 300},
    {nome: 'Microondas', preco: 760, quantidadeVendida: 86},
    {nome: 'Airfryer', preco: 180, quantidadeVendida: 142},
    {nome: 'Computador', preco: 3600, quantidadeVendida: 50},
]

function mostrarProdutos () {
    console.log("\nRelatório de produtos vendidos:\n")
    for (let produto of produtos) {
        console.log(`Produto: ${produto.nome} | preço: ${produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Quantidade vendida: ${produto.quantidadeVendida}`)
    }
}

function produtosComMaisVendas () {
    console.log("\nProdutos com alto volume de vendas (> 100 unidades):\n")
    produtos.filter(produto => produto.quantidadeVendida > 100 ? console.log(produto.nome) : false)
}

function totalDeVendasPorProduto() {
    console.log("\nTotal de vendas por produto:\n")
    produtos.forEach(produto => {
        console.log(`${produto.nome}: ${(produto.preco * produto.quantidadeVendida).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    })
}

function maisLucrativo () {
    let maisLucrativo = {nome: '', total: 0}
    produtos.forEach(produto => {
        if ((produto.preco * produto.quantidadeVendida) > maisLucrativo.total) {
            maisLucrativo.total = produto.preco * produto.quantidadeVendida
            maisLucrativo.nome = produto.nome
        }
    })
    console.log(`\nProduto mais lucrativo: ${maisLucrativo.nome} com ${maisLucrativo.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em vendas.\n`)
}

function organizarRelatorio() {
    mostrarProdutos()
    produtosComMaisVendas()
    totalDeVendasPorProduto()
    maisLucrativo()
}

organizarRelatorio()