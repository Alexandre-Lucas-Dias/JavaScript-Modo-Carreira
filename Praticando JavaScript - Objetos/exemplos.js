// Criando um objeto com dados de um produto

// Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:

// Crie um objeto chamado produto.
// O objeto deve conter as propriedades: nome, preco, disponivel.
// Exiba o objeto no console.

const produto = {nome: 'Iphone', preco: 5200, disponivel: true, estoque: 40}

console.log(`${produto.nome} custa ${produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, está ${produto.disponivel ? 'disponível' : 'indisponível'} e tem ${produto.estoque} unidades no estoque`)

// Acessando dados com ponto e colchetes

// Você está criando um painel de configurações para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.

// Escreva um programa que:

// Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// Acesse tema usando notação de ponto.
// Acesse idioma usando notação de colchetes.
// Exiba os dois valores no console.

const configuracoes = {tema: 'escuro', notificacoes: true, idioma: 'US'}

console.log(`Tema: ${configuracoes.tema}`)
console.log(`Idioma: ${configuracoes['idioma']}`)

// Lidando com arrays dentro de objetos

// Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

// Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// Acesse o índice 2 da lista que está dentro do objeto.
// Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

const receita = {
    nome: 'Spumoni de morango',
    ingredientes: ['gelatina de morango', 'leite condensado', 'creme de leite', 'água', 'amor'],
    tempoPreparo: '2 horas'
}

console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`)

// Removendo uma propriedade

// Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:

// Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
// Remova a propriedade modeloAntigo;
// Exiba o objeto final no console.

const carro = {
    marca: 'Chevrolet',
    modelo: 'Classic',
    ano: 2001,
    modeloAntigo: 'Corsa'
}

console.log("Dados do veículo antes da exclusão do modelo antigo: ", carro)

delete carro.modeloAntigo

console.log("Dados do veículo após a exclusão do modelo antigo: ", carro)

// Iterando um array de objetos

// Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo é representado por um objeto, e todos estão organizados dentro de um array.

// Escreva um programa que:

// Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// Use um loop para exibir no console o nome e status de cada dispositivo.

const dispositivos = [
    {nome: 'impressora', status: true},
    {nome: 'telefone', status: false},
    {nome: 'catraca', status: true}
]

for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status ? 'ativo' : 'inativo'}`)
}

// Criando métodos dentro de um objeto

// Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além das informações básicas, também possui um método interno que exibe seu status. Escreva um programa que:

// Crie um objeto maquina com as propriedades: nome, funcionando.
// Adicione um método chamado exibirStatus que exibe no console: "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.", dependendo do valor de funcionando.
// Chame o método exibirStatus.

const maquina = {
    nome: 'Dessolventizador Tostador',
    funcionando: true,
    exibirStatus: function () {
        const mensagem = this.funcionando ? `A máquina ${this.nome} está em funcionamento.` : `A máquina ${this.nome} está parada.`
        console.log(mensagem)
    }
}

maquina.exibirStatus()

// Montando um objeto a partir de pares chave-valor

// Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. Os dados chegam como um array de pares, onde cada par representa uma chave e seu respectivo valor, e você precisa transformar isso em um objeto estruturado, que será usado pelo sistema para preencher os campos automaticamente.

// Sua tarefa é:

// Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor, como este:

const pessoa = [
    ['nome', 'Manoel'],
    ['idade', 45],
    ['cidade', 'Pindamonhangaba']
]

function montarObjeto (pessoa) {
    const objetoPessoa = {}
    for (const par of pessoa) {
        objetoPessoa[par[0]] = par[1]
    }
    return objetoPessoa
}

console.log("O objeto construído com base nos dados da pessoa é: ", montarObjeto(pessoa))

// Criando um sistema de inspeção

// Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquina inspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruído. Essas informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa o nível registrado na inspeção.

// Exibir todas as categorias avaliadas;
// Exibir todos os valores registrados;
// Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
// Se o valor for maior que 50, mostre a mensagem (alerta)
// Caso contrário, mostre (ok)

const relatorio = {
    temperatura: 100,
    vibracao: 15,
    pressao: 67,
    nivelRuido: 20
}

// console.log("Categorias avaliadas: ", Object.keys(relatorio)) // ou então:
console.log(`Categorias avaliadas: ${Object.keys(relatorio).join(", ")}`)
// console.log("Valores registrados: ", Object.values(relatorio)) // ou então:
console.log(`Valores registrados: ${Object.values(relatorio).join(", ")}`)

console.log("Detalhamento:\n")

for (const chave in relatorio) {
    const status = relatorio[chave] > 50 ? '(alerta)' : '(ok)'
    console.log(`${chave}: ${relatorio[chave]} ${status}`)
}

console.log("\n") // ou então:

// const relatorio = {
//   temperatura: 75,
//   vibracao: 40,
//   pressao: 55,
//   nivelRuido: 30
// };

// const categorias = Object.keys(relatorio);
// const valores = Object.values(relatorio);
// const entradas = Object.entries(relatorio);

// console.log("Categorias avaliadas:", categorias);
// console.log("Valores registrados:", valores);

// console.log("\nDetalhamento:");
// for (let [chave, valor] of entradas) {
//   const status = valor > 50 ? "alerta" : "ok";
//   console.log(`${chave}: ${valor} (${status})`);
// }

// Gerando um relatório de manutenção

// Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.

// Agora, o sistema precisa gerar um relatório que exiba:

// O total de dias parados no ano.
// A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// Um alerta caso o total de dias parados seja maior que 20 dias: Status: Atenção! Acima do limite anual. ou Status: Dentro do limite anual.

const manutencao = {
    jan: 3,
    fev: 1,
    mar: 0,
    abr: 0,
    mai: 2,
    jun: 4,
    jul: 0,
    ago: 1,
    set: 2,
    out: 0,
    nov: 0,
    dez: 6
}

let totalDiasParados = 0
let mesComManutencao = 0

for (const mes in manutencao) {
    totalDiasParados += manutencao[mes]
    manutencao[mes] > 0 ? mesComManutencao ++ : false
}

console.log(`Total de dias parados: ${totalDiasParados}`)
console.log(`Meses com manutenção registrada: ${mesComManutencao}`)

if (totalDiasParados > 20) {
    console.log("Status: Atenção! Acima do limite anual.")
} else {
    console.log("Status: Dentro do limite anual.")
}

// Analisando desempenho de estudantes

// Você está finalizando o back-end de uma plataforma de cursos online. Cada curso possui uma lista de estudantes com seus respectivos dados de progresso. Sua tarefa é construir um relatório que mostre o desempenho geral da turma.

// Você deve escrever um programa que:

// Crie um objeto chamado curso, com as seguintes propriedades:

// titulo: string com o nome do curso;
// estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
// Um método interno chamado gerarRelatorio.
// O método gerarRelatorio deve:

// Percorrer o array de estudantes;
// Exibir no console o nome de cada estudante e sua situação:
// Se o progresso for igual ou maior que 70, mostrar "Aprovado";
// Senão, mostrar "Em andamento";
// Ao final, mostrar:
// A quantidade total de estudantes;
// A média geral de progresso da turma.

const curso = {
    titulo: 'JavaScript Backend',
    estudantes: [
        {nome: 'João', progresso: 96},
        {nome: 'Natanael', progresso: 89},
        {nome: 'Pedro', progresso: 92},
        {nome: 'Judas', progresso: 0},
        {nome: 'Simão Zelota', progresso: 82},
        {nome: 'Tomé', progresso: 68},
        {nome: 'Felipe', progresso: 71},
        {nome: 'Mateus', progresso: 99},
        {nome: 'Tiaquinho', progresso: 69},
        {nome: 'Tiagão', progresso: 72},
        {nome: 'André', progresso: 65},
        {nome: 'Tadeu', progresso: 57},
        {nome: 'Maria', progresso: 89},
        {nome: 'Ramá', progresso: 35},
        {nome: 'Tamar', progresso: 78},
        {nome: 'Jesus', progresso: 100}
    ],
    gerarRelatorio: function () {
        let totalProgresso = 0
        for (const estudante of this.estudantes) {
            const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento"
            console.log(`Estudante ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`)
            
            totalProgresso += estudante.progresso    
        }

        const media = totalProgresso / this.estudantes.length
        
        console.log(`\nTotal de estudantes: ${this.estudantes.length}`)
        console.log(`Média geral da turma: ${media.toFixed(2)}%`)
    }
}

curso.gerarRelatorio()



