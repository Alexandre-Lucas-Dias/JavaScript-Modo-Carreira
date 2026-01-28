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