// Gerando mensagens personalizadas

// Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.

function saudacao (nome = "") {
    if (nome){
        console.log(`Olá, ${nome}! Bem vindo(a)!`)
    } else {
        console.log(`Olá! Bem vindo(a)!`)
    }
}

saudacao("Alexandre")
saudacao()

// Calculando desconto

// Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%).

const descontoPadrao = 40

function calcularDesconto (preco, desconto = descontoPadrao) {
    return preco - (preco * desconto / 100) // ou
    // return preco * (1 - desconto / 100)
}

console.log("O valor do livro com desconto é: R$", calcularDesconto(2535, 26))
console.log(`O valor do livro com desconto padrão de ${descontoPadrao}% é de R$${calcularDesconto(200)}`)

// Calculando a média de duas notas

// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2 // arrow functions de uma única linha não precisa de return, pois ele já é implícito

console.log("A média aritmética das notas é de: ", calcularMedia(75, 72))

// Verificando se um número é par ou ímpar

// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

const verificarParidade = num => num % 2 === 0 ? "Par" : "Ímpar"

console.log("O número é: ", verificarParidade(4))
console.log("O número é: ", verificarParidade(121))

// Cálculo de frete por distância

// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?

function calcularFrete (distancia) {
    if (distancia <= 5) {
        return 5
    } else if (distancia <= 20) {
        return distancia * 0.5
    } else {
        return 20
    }
}

console.log("O valor do frete é: R$", calcularFrete(3))
console.log("O valor do frete é: R$", calcularFrete(6.9))
console.log("O valor do frete é: R$", calcularFrete(567))

// Mensagem pós-processamento

// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:

// o nome do cliente, e
// uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

function processarPedido (nome, tipoCliente, mensagemPersonalizada) {
    console.log(`Processando pedido de ${nome}...`)
    mensagemPersonalizada(nome, tipoCliente)
}

const mensagemPersonalizada = (nome, tipoCliente) => {
    if (tipoCliente === 'vip') {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`)
    } else if (tipoCliente === 'novo') {
        console.log(`Bem vindo(a) ${nome}! Aproveite um cupom de boas-vindas.`)
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`)
    }
}

processarPedido("Yasmim", "vip", mensagemPersonalizada)
processarPedido("Alexandre", "novo", mensagemPersonalizada)
processarPedido("Maria", "comum", mensagemPersonalizada)

// Mensagem com atraso

// Imagine que você está desenvolvendo uma interface de atendimento online. Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.

const responderUsuario = (usuario, mostrarResposta) => {
    console.log("Processando sua pergunta...")
    setTimeout(() => {mostrarResposta(usuario)}, 500) // ou então:
    // setTimeout(mostrarResposta, 3000, usuario)
}

// no setTimeout a chamada da função callback é apenas referenciada, sem informar argumentos por parênteses
function mostrarResposta (usuario) {
    console.log(`Olá, ${usuario}! Aqui está a resposta para sua dúvida.`)   
}

responderUsuario("Alexandre", mostrarResposta)

// Avaliando a pontuação de um usuário

// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo. Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

const avaliarDesempenho = (pontuacao, mensagemPersonalizada2) => {
    let status = ""
    if (pontuacao >= 70) {
        status = "aprovado"
    } else if (pontuacao >= 50) {
        status = "reforco"
    } else {
        status = "reprovado"
    }
    mensagemPersonalizada2(pontuacao, status)
}

function mensagemPersonalizada2 (pontuacao, status) {
    console.log("Sua pontuação: ",pontuacao)

    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!")
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.")
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.")
    }
}

avaliarDesempenho(89, mensagemPersonalizada2)
avaliarDesempenho(54, mensagemPersonalizada2)
avaliarDesempenho(34, mensagemPersonalizada2)

// Classificador de consumo elétrico

// Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

// Sua missão é criar três funções separadas, com responsabilidades bem definidas:

// calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
// classificarConsumo(consumo): Retorna a classificação com base na tabela:
// Consumo mensal (kWh)	Classificação
// Abaixo de 50	"Baixo consumo"
// 50 - 199	"Consumo moderado"
// 200 ou mais	"Alto consumo"
// exibirResumo(nomeAparelho, consumo, classificacao): Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."

function calcularConsumo (potencia, horasPorDia) {
    return potencia * horasPorDia * 3 / 100 // (3 / 100) é o mesmo que (30 / 1000)
}

function classificarConsumo (consumo) {
    if (consumo < 50) {
        return "Baixo consumo"
    } else if (consumo < 200) {
        return "Consumo moderado"
    } else {
        return "Alto consumo"
    }
}

const exibirResumo = (nomeAparelho, consumo, classificacao) => console.log(`${nomeAparelho} tem consumo de ${consumo} Kwh/mês e é classificado(a) como ${classificacao}`)

// const nomeAparelho = "Chuveiro"
// const consumo = calcularConsumo(4400, 2)
// const nomeAparelho = "Carregador de celular"
// const consumo = calcularConsumo(2, 30)
const nomeAparelho = "Televisão"
const consumo = calcularConsumo(200, 20)
const classificacao = classificarConsumo(consumo)
exibirResumo(nomeAparelho, consumo, classificacao)

// Sistema de sorteio com avaliação de participantes

// Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

// Sortear aleatoriamente um nome da lista de participantes.
// Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// Avaliar se o participante foi premiado ou não com base na pontuação:
// Acima de 80: "Parabéns, você foi premiado!"
// Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:

// Uma função para sortear um nome aleatoriamente.
// Uma função para exibir o nome sorteado com 2 segundos de atraso
// Uma função para avaliar a pontuação.
// Uma função final que organize o fluxo completo do sorteio.

const lista = [
    {nome: "Alexandre", pontuacao: 95},
    {nome: "João", pontuacao: 66},
    {nome: "Marcos", pontuacao: 43},
    {nome: "Pedro", pontuacao: 67},
    {nome: "Joaquim", pontuacao: 81},
    {nome: "Leandro", pontuacao: 53},
    {nome: "Gustavo", pontuacao: 12},
]

function sortearParticipante (participantes) {
    return Math.floor(Math.random() * (participantes.length)) + 1
}

function exibirSorteado (sorteado, pontuacao) {
    console.log("Participante sorteado: ", sorteado)
    console.log("Pontuação: ", pontuacao)
    console.log(avaliarPontuacao(pontuacao))
}

function avaliarPontuacao (pontuacao) {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado(a)!"
    } else if (pontuacao > 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios."
    } else {
        return "Infelizmente, não foi dessa vez."
    }
}

function realizarSorteio (participantes) {
    setTimeout(() => console.log("Sorteando..."), 1000)
    const indiceDoNumeroSorteado = sortearParticipante(participantes) - 1
    setTimeout(exibirSorteado, 2000, participantes[indiceDoNumeroSorteado].nome, participantes[indiceDoNumeroSorteado].pontuacao)
}

realizarSorteio(lista)

// Contagem regressiva recursiva

// Sua missão é criar uma função chamada contagemRegressiva que:

// Receba um número inteiro positivo (ex: 5)
// Imprima esse número e, a cada chamada, reduza em 1
// Quando chegar em 0, exiba a mensagem: "Lançamento!"


// function contagemRegressiva(numero) {
//     if (numero > 0) {
//         console.log(numero);
//         contagemRegressiva(numero - 1);
//      } else {
//       console.log("Lançamento!");
//     }
// }

// contagemRegressiva(10); // ou então:

const contagemRegressiva = num => {
    if (num === 0) return 0
    console.log(num)
    return num - contagemRegressiva(num - 1)
}

contagemRegressiva(10)
console.log("Lançamento!")