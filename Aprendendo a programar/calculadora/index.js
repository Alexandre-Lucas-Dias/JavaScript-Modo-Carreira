// const readline = require('readline') // o método require só funciona quando o type no package.json é "commonJS". Se utilizar o type "module", não dá certo

// quando o type do package.json estiver definido como "module", é assim que se deve fazer a interface do usuário, utilizando a biblioteca 'readline'
import { createInterface } from 'readline'
import { soma, subtracao, multiplicacao, divisao, exponenciacao, radiciacao, logaritmo } from './operacoesMatematicas.js'
const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

function resultadoOperacao(resultado) {
    if (resultado !== null) {
        console.log("O resultado da operação é: ", resultado)
        console.log("Obrigado por usar a calculadora! Até a próxima!")
        leitor.close()
    }
}

function validadorNumerico(numero1, numero2) {
    if ((!Number(numero1)) || (!Number(numero2))) {
        // eu tive que usar essa estratégia abaixo, pois o Number não está transformando zero em número, quando a informação é proveniente do 'question'
        if (((numero1 === 0) || (numero2 === 0))) {
            return true
        } else {
            console.log("Valor inválido! Apenas números! Até a próxima!")
            leitor.close()
        }
    } else {
        return true
    }
}

let resultado = null
let num1 = 0
let num2 = 0

leitor.question("Digite a operação:\n+: soma\n-: subtração\n*: multiplicação\n/: divisão\n^: exponenciação\nraiz: radiciação\nlog: logaritmo\ns: sair\n>", opcao => {
    if (opcao === 's') {
        console.log("Até a próxima!")
        leitor.close()
    } else if ((opcao !== '+') && (opcao !== '-') && (opcao !== '*') && (opcao !== '/') && (opcao !== '^') && (opcao !== 'raiz') && (opcao !== 'log')) {
        console.log("Operador inválido! Somente é permitido uma das opções descritas acima! Até a próxima!")
        leitor.close()
    } else if ((opcao === '+') || (opcao === '-') || (opcao === '*')) {
        leitor.question("Digite o primeiro número:\n>", numero1 => {
            leitor.question("Digite o segundo número:\n>", numero2 => {

                // como o leitor do readline recebe informação apenas via string, ao se trabalhar com o tipo de dados numérico, é necessário fazer a seguinte conversão:
                num1 = Number(numero1)
                num2 = Number(numero2)
                if (validadorNumerico(num1, num2)) {
                    if (opcao === '+') {
                        resultado = soma(num1, num2)
                    } else if (opcao === '-') {
                        resultado = subtracao(num1, num2)
                    } else {
                        resultado = multiplicacao(num1, num2)
                    }
                    resultadoOperacao(resultado)
                }
            })
        })
    }
    else if (opcao === '/') {
        leitor.question("Digite o dividendo:\n>", dividendo => {
            leitor.question("Digite o divisor:\n>", divisor => {

                num1 = Number(dividendo)
                num2 = Number(divisor)

                if (validadorNumerico(num1, num2)) {
                    if (num2 === 0) {
                        console.log("O divisor não pode ser zero! Até a próxima!")
                        leitor.close()
                    } else {
                        resultado = divisao(num1, num2)
                        resultadoOperacao(resultado)
                    }
                }
            })
        })
    } else if (opcao === '^') {
        leitor.question("Digite a base:\n>", base => {
            leitor.question("Digite o expoente:\n>", expoente => {
                
                num1 = Number(base)
                num2 = Number(expoente)

                if (validadorNumerico(num1, num2)) {
                    if ((num1 === 0) && (num2 === 0)) {
                        console.log("Pelo menos a base ou o expoente devem ser diferentes de zero! Até a próxima!")
                        leitor.close()
                    } else {
                        resultado = exponenciacao(num1, num2)
                        resultadoOperacao(resultado)
                    }
                }
            })
        })
    } else if (opcao === 'raiz') {
        leitor.question("Digite o radicando:\n>", radicando => {
            leitor.question("Digite o índice:\n>", indice => {
                
                num1 = Number(radicando)
                num2 = Number(indice)

                if (validadorNumerico(num1, num2)) {
                    if (num1 < 0) {
                        console.log("O radicando não pode ser negativo! Até a próxima!")
                        leitor.close()
                    } else if (num2 === 0) {
                        console.log("O índice não pode ser zero! Até a próxima!")
                        leitor.close()
                    } else{
                        resultado = radiciacao(num1, num2)
                        resultadoOperacao(resultado)
                    }
                }
            })
        })
    } else {
        leitor.question("Digite o logaritmando:\n>", logaritmando => {
            leitor.question("Digite a base:\n>", base => {
                
                num1 = Number(logaritmando)
                num2 = Number(base)

                if (validadorNumerico(num1, num2)) {
                    if (num1 <= 0) {
                        console.log("O logaritmando deve ser maior que zero! Até a próxima!")
                        leitor.close()
                    } else if ((num2 <= 0) || (num2 === 1)) {
                        console.log("A base deve ser maior que zero e diferente de 1! Até a próxima!")
                        leitor.close()
                    } else{
                        resultado = logaritmo(num1, num2)
                        resultadoOperacao(resultado)
                    }
                }
            })
        })
    }
})