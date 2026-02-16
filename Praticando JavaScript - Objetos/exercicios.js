// OBJETOS

// crie um objeto 'pessoa' como jogadora em uma plataforma de games e adicione algumas características

const pessoa = {
    nome: 'Victor P',
    nascimento: '2008-06-17',
    cpf: '12323434567',
    pontuacao: 446,
    trofeus: ['tênis', 'vôlei']
}

// imprima no terminal o nome da pessoa e um dos troféus.
console.log(pessoa.nome)
console.log(pessoa.trofeus[1])

// exclua uma propriedade do objeto.

delete pessoa.cpf
console.log(pessoa)

// criar uma função para iterar os troféus.

function exibeTrofeus (listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`)
    }
}

exibeTrofeus(pessoa.trofeus)

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

pessoa.calculaIdade = function calculaIdade() {
    // o this serve para o JS saber que a propriedade está sendo usada no contexto de objeto.
    // o método slice() tem 2 parâmetros, o primeiro deles é o índice onde se inicia o "corte" da string, e o segundo parâmetro é a quantidade de elementos da string a partir deste índice.
    const anoNasc = parseInt(this.nascimento.slice(0, 4))
    const mesNasc = parseInt(this.nascimento.slice(5, 7))
    const diaNasc = parseInt(this.nascimento.slice(8, 10))
    let idade = 0
    
    if ((mesNasc > (new Date().getMonth() + 1)) || ((mesNasc === (new Date().getMonth() + 1)) && (diaNasc > new Date().getDate()))) {
        // Esta condição é para o caso da pessoa ainda não ter feito aniversário no ano. A condição falsa é para caso já tenha feito aniversário no ano.
        idade = new Date().getUTCFullYear() - anoNasc - 1
    } else {
        idade = new Date().getUTCFullYear() - anoNasc
    }
    if (idade !== 1) {
        console.log(`A idade é ${idade} anos.`)
    } else {
        console.log(`A idade é 1 ano.`)
    }
}

pessoa.calculaIdade()

// console.log(pessoa)

// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true
    },
    {
        nome: 'Rafael R',
        ativo: false
    },
    {
        nome: 'Fabio F',
        ativo: false
    }
]

for (const cliente of clientes) {
    const status = cliente.ativo ? 'ativo' : 'inativo'
    console.log(`status cliente ${cliente.nome}: ${status}`)
}