import { createInterface } from 'readline'
import { soma, subtracao, multiplicacao, divisao, exponenciacao, radiciacao, logaritmo, seno, cosseno, tangente, arcoSeno, arcoCosseno, arcoTangente, secante, cossecante, cotangente, arcoSecante, arcoCossecante, arcoCotangente } from './operacoesMatematicas.js'

const ask = (query) => {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise(resolve => leitor.question(query, (ans) => {
        leitor.close()
        resolve(ans)
    }))
}

function resultadoOperacao(resultado) {
    if (resultado !== null) {
        console.log("O resultado da operação é: ", resultado)
    }
}

function validadorNumerico(numero1, numero2) {
    if ((!Number(numero1)) || (!Number(numero2))) {
        // eu tive que usar essa estratégia abaixo, pois o Number não está transformando zero em número, quando a informação é proveniente do 'ask'
        if (((numero1 === 0) || (numero2 === 0))) {
            return true
        } else {
            console.log("Valor inválido! Apenas números!")
        }
    } else {
        return true
    }
}

function validadorNumericoUnitario(numero) {
    if (!Number(numero)) {
        if (numero === 0) {
            return true
        } else {
            console.log("Valor inválido! Apenas números!")
        }
    } else {
        return true
    }
}

let resultado = null
let num1 = 0
let num2 = 0
let num = 0
let opcao = ''
let sair = false
let invalido

console.log("****SEJA MUITO BEM VINDO(A) À MINHA SINGELA CALCULADORA CIENTÍFICA!!!****\n")

do {
    opcao = await ask("Digite a opção:\n\n+: soma\n-: subtração\n*: multiplicação\n/: divisão\n^: exponenciação\nraiz: radiciação\nlog: logaritmo\nsen: seno\ncos: cosseno\ntan: tangente\nasen: arco de seno\nacos: arco de cosseno\natan: arco de tangente\nsec: secante\ncossec: cossecante\ncotan: cotangente\nasec: arco de secante\nacossec: arco de cossecante\nacotan: arco de cotangente\ns: sair\n>")
    if (opcao === 's') {
        console.log("Obrigado por usar a calculadora! Até a próxima!")
        await ask("Pressione Enter para continuar!")
        sair = true
    } else if ((opcao !== '+') && (opcao !== '-') && (opcao !== '*') && (opcao !== '/') && (opcao !== '^') && (opcao !== 'raiz') && (opcao !== 'log') && (opcao !== 'sen') && (opcao !== 'cos') && (opcao !== 'tan') && (opcao !== 'asen') && (opcao !== 'acos') && (opcao !== 'atan') && (opcao !== 'sec') && (opcao !== 'cossec') && (opcao !== 'cotan') && (opcao !== 'asec') && (opcao !== 'acossec') && (opcao !== 'acotan')) {
        console.log("Opção inválida! Somente é permitido uma das opções descritas abaixo!")
        await ask("Pressione Enter para continuar!")
    } else if ((opcao === '+') || (opcao === '-') || (opcao === '*')) {
        invalido = true
        do {
            const numero1 = await ask("Digite o primeiro número:\n>")
            const numero2 = await ask("Digite o segundo número:\n>")

            num1 = Number(numero1)
            num2 = Number(numero2)
            if (validadorNumerico(num1, num2)) {
                invalido = false
                if (opcao === '+') {
                    resultado = soma(num1, num2)
                } else if (opcao === '-') {
                    resultado = subtracao(num1, num2)
                } else {
                    resultado = multiplicacao(num1, num2)
                }
                resultadoOperacao(resultado.toFixed(10))
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === '/') {
        invalido = true
        do {
            const dividendo = await ask("Digite o dividendo:\n>")
            const divisor = await ask("Digite o divisor:\n>")

            num1 = Number(dividendo)
            num2 = Number(divisor)

            if (validadorNumerico(num1, num2)) {
                if (num2 === 0) {
                    console.log("O divisor não pode ser zero!")
                } else {
                    invalido = false
                    resultado = divisao(num1, num2)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === '^') {
        invalido = true
        do {
            const base = await ask("Digite a base:\n>")
            const expoente = await ask("Digite o expoente:\n>")

            num1 = Number(base)
            num2 = Number(expoente)

            if (validadorNumerico(num1, num2)) {
                if ((num1 === 0) && (num2 === 0)) {
                    console.log("Pelo menos a base ou o expoente devem ser diferentes de zero!")
                } else {
                    invalido = false
                    resultado = exponenciacao(num1, num2)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'raiz') {
        invalido = true
        do {
            const radicando = await ask("Digite o radicando:\n>")
            const indice = await ask("Digite o índice:\n>")

            num1 = Number(radicando)
            num2 = Number(indice)

            if (validadorNumerico(num1, num2)) {
                if (num1 < 0) {
                    console.log("O radicando não pode ser negativo!")
                } else if (num2 === 0) {
                    console.log("O índice não pode ser zero!")
                } else {
                    invalido = false
                    resultado = radiciacao(num1, num2)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'log') {
        invalido = true
        do {
            const logaritmando = await ask("Digite o logaritmando:\n>")
            const base = await ask("Digite a base:\n>")

            num1 = Number(logaritmando)
            num2 = Number(base)

            if (validadorNumerico(num1, num2)) {
                if (num1 <= 0) {
                    console.log("O logaritmando deve ser maior que zero!")
                } else if ((num2 <= 0) || (num2 === 1)) {
                    console.log("A base deve ser maior que zero e diferente de 1!")
                } else {
                    invalido = false
                    resultado = logaritmo(num1, num2)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'sen') {
        invalido = true
        do {
            const angulo = await ask("Digite o ângulo:\n>")

            num = Number(angulo)

            if (validadorNumericoUnitario(num)) {
                invalido = false
                resultado = seno(num)
                resultadoOperacao(resultado.toFixed(10))
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'cos') {
        invalido = true
        do {
            const angulo = await ask("Digite o ângulo:\n>")

            num = Number(angulo)

            if (validadorNumericoUnitario(num)) {
                invalido = false
                resultado = cosseno(num)
                resultadoOperacao(resultado.toFixed(10))
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'tan') {
        invalido = true
        do {
            const angulo = await ask("Digite o ângulo:\n>")

            num = Number(angulo)

            if (validadorNumericoUnitario(num)) {
                if (num % 90 === 0) {
                    console.log("O ângulo não pode ser múltiplo de 90°, pois a tangente destes ângulos é infinita!")
                } else {
                    invalido = false
                    resultado = tangente(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'asen') {
        invalido = true
        do {
            const seno = await ask("Digite o seno:\n>")

            num = Number(seno)

            if (validadorNumericoUnitario(num)) {
                if ((num < -1) || (num > 1)) {
                    console.log("O seno deve estar em um intervalo entre -1 e 1!")
                } else {
                    invalido = false
                    resultado = arcoSeno(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'acos') {
        invalido = true
        do {
            const cosseno = await ask("Digite o cosseno:\n>")

            num = Number(cosseno)

            if (validadorNumericoUnitario(num)) {
                if ((num < -1) || (num > 1)) {
                    console.log("O cosseno deve estar em um intervalo entre -1 e 1!")
                } else {
                    invalido = false
                    resultado = arcoCosseno(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'atan') {
        invalido = true
        do {
            const tangente = await ask("Digite a tangente:\n>")

            num = Number(tangente)

            if (validadorNumericoUnitario(num)) {
                invalido = false
                resultado = arcoTangente(num)
                resultadoOperacao(resultado.toFixed(10))
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'sec') {
        invalido = true
        do {
            const angulo = await ask("Digite o ângulo:\n>")

            num = Number(angulo)

            if (validadorNumericoUnitario(num)) {
                if ((num % 90 === 0) && (num !== 0)) {
                    console.log("O ângulo não pode ser múltiplo de 90°, pois a secante destes ângulos é infinita!")
                } else {
                    invalido = false
                    resultado = secante(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'cossec') {
        invalido = true
        do {
            const angulo = await ask("Digite o ângulo:\n>")

            num = Number(angulo)

            if (validadorNumericoUnitario(num)) {
                if ((num % 180 === 0) || (num === 0)) {
                    console.log("O ângulo não pode ser nem zero nem múltiplo de 180°, pois a cossecante destes ângulos é infinita!")
                } else {
                    invalido = false
                    resultado = cossecante(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'cotan') {
        invalido = true
        do {
            const angulo = await ask("Digite o ângulo:\n>")

            num = Number(angulo)

            if (validadorNumericoUnitario(num)) {
                if ((num % 180 === 0) || (num === 0)) {
                    console.log("O ângulo não pode ser nem zero nem múltiplo de 180°, pois a cotangente destes ângulos é infinita!")
                } else {
                    invalido = false
                    resultado = cotangente(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'asec') {
        invalido = true
        do {
            const secante = await ask("Digite a secante:\n>")

            num = Number(secante)

            if (validadorNumericoUnitario(num)) {
                if ((num > -1) && (num < 1)) {
                    console.log("A secante deve ser menor ou igual a -1 ou maior ou igual a 1!")
                } else {
                    invalido = false
                    resultado = arcoSecante(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else if (opcao === 'acossec') {
        invalido = true
        do {
            const cossecante = await ask("Digite a cossecante:\n>")

            num = Number(cossecante)

            if (validadorNumericoUnitario(num)) {
                if ((num > -1) && (num < 1)) {
                    console.log("A cossecante deve ser menor ou igual a -1 ou maior ou igual a 1!")
                } else {
                    invalido = false
                    resultado = arcoCossecante(num)
                    resultadoOperacao(resultado.toFixed(10))
                }
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    } else {
        invalido = true
        do {
            const cotangente = await ask("Digite a cotangente:\n>")

            num = Number(cotangente)

            if (validadorNumericoUnitario(num)) {
                    invalido = false
                    resultado = arcoCotangente(num)
                    resultadoOperacao(resultado.toFixed(10))
            }
            await ask("Pressione Enter para continuar!")
        } while (invalido)
    }
} while (!sair)