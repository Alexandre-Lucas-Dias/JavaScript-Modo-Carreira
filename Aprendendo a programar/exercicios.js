// exercício 1

let nome = 'Alexandre Lucas Dias Costa'

console.log(`Olá, ${nome}! Seja bem-vindo ao curso de JavaScript!`);

// exercício 2

let anoAtual = 2025
let anoNascimento = 1991
let idade = anoAtual - anoNascimento

console.log(`Você tem ${idade} anos.`);

// exercício 3

let cidade = 'Araguari'
let estado = 'MG'
let pais = 'Brasil'

console.log(`Você está em ${cidade}-${estado}, ${pais}`);

// exercício 4

let temCarteira = true

console.log(`O tipo da variável temCarteira é ${typeof(temCarteira)}`);

// exercício 5

let saldo = 0

function deposito(valorDeposito){
    saldo += valorDeposito
    return saldo
}
function saque(valorSaque){
    saldo -= valorSaque
    return saldo
}

deposito(200)
saque(50)

console.log(`O saldo final da conta é de R$${saldo.toFixed(2)}, pois inicialmente foram depositados R$200,00 e depois sacado R$50,00`);

// exercício 6

let matematica = 80
let portugues = 65
let ciencias = 78
let media = (matematica + portugues + ciencias) / 3

console.log(`A média de notas entre as disciplinas Matemática, Português e Ciências é de ${media.toFixed(2)}`);

// exercício 7

let salario = 3000
let salarioComAumento = salario * 1.1

console.log(`O salário inicial era de R$${salario},00. Porém, com o aumento de 10%, ele foi para R$${salarioComAumento.toFixed(2)}`);

// exercício 8

let cliques = 0

// laço para a "simulação de clique"
for (i = 0; i < 3; i ++) {
    cliques ++;
}

console.log(`Após um total de 3 "simulações de clique", o total de cliques foi igual a ${cliques}`);

// exercício 9

const PI = Math.PI
console.log(`Valor original de PI: ${PI}`);

// PI = 5

// o erro acontece pois não se pode alterar valor de constante

// exercício 10

let mensagem = 'ola'
let numero = 10
let concatenar = mensagem + numero // ou let concatenar = mensagem.concat(numero)

console.log(`O resultado final da concatenação é ${concatenar} e o tipo dessa variável é ${typeof(concatenar)}`);
