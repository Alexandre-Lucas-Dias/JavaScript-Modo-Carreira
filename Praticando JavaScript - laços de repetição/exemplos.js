// Contagem de números

// Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

// Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?

const numeroFinal = 50

for (let i = 1; i <= numeroFinal; i ++) {
    console.log(i)
}

// Contagem regressiva

// Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.

// Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.

const contagemRegressiva = 10

for (let i = 10; i >= 0; i --) {
    console.log(i)
}

console.log("LANÇAR!!")

// Listando números pares

// Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.

const finalNumber = 100

for (let i = 1; i <= finalNumber; i ++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Exibindo os caracteres

// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

const senhaCadastrada = "slhdfugcslmdkjgcshdnokugv"

for (let i = 0; i < senhaCadastrada.length; i ++) {
    console.log(`Caractere ${i + 1}: ${senhaCadastrada[i]}`)
}

// Solicitando nomes até digitar ''fim''

// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".

const entradas = ['Alexandre', 'João', 'Felipe', 'Marcos', 'Pedro', 'Jean', 'fim', 'Maurício', 'José']

let i = 0

while (entradas[i] !== 'fim') {
    console.log(`Nome: ${entradas[i]}`)
    i ++
}

// Verificando o acesso restrito

// Você está trabalhando no sistema de controle de acesso de um laboratório secreto. Por questões de segurança, o número 10 deve ser evitado a todo custo. O contador de testes deve exibir os números normalmente, mas precisa ser encerrado imediatamente ao chegar nesse número.

// Crie um programa que inicie a contagem em 1 e siga até 20. Se o número 10 for alcançado, o sistema deve exibir uma mensagem de alerta e interromper a contagem.

for (let i = 1; i <= 20; i ++) {
    if (i === 10) {
        console.log("Número proibido encontrado! Encerrando...")
        break
    }
    console.log(i)
}

// Somando os primeiros N números

// Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.

const totalDias = 1000
let dia = 1
let economia = 0

do {
    economia += dia
    dia ++
} while (dia <= totalDias)

console.log("Total economizado: R$",economia)

// também poderia ser assim
// for (let i = 1; i <= totalDias; i ++) {
//     economia += i
//     console.log(`Dia ${i}: R$${economia}`)
// }

// Temporizador de aquecimento

// Você está programando o temporizador de uma esteira aquecida para secagem de produtos. O sistema precisa manter a esteira aquecida por pelo menos 5 segundos, mesmo que a temperatura ideal já tenha sido atingida.

// O painel deve exibir, segundo a segundo:

// “Aquecendo... segundo X” a cada ciclo;
// A mensagem "Temperatura ideal atingida." exatamente no segundo em que essa condição for alcançada;
// E ao final, o total de segundos que o sistema permaneceu ligado.
// Crie um programa que simule esse funcionamento do temporizador de aquecimento, garantindo que ele continue funcionando até atingir pelo menos 5 segundos.

const tempoMinimo = 20
const temperaturaIdealAlcancadaEm = 15
let segundos = 0

do {
    segundos ++
    console.log("Aquecendo... segundo ", segundos)
    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log("Temperatura ideal atingida.")
    }
} while (segundos < tempoMinimo)

console.log(`Tempo total de aquecimento: ${segundos} segundos`)

// Registro de caixas processadas

// Você recebeu a tarefa de automatizar o painel de uma linha de empacotamento em um centro de distribuição. A cada ciclo, uma nova caixa é processada. A linha só pode processar no máximo 5 caixas válidas por vez. Mas, algumas caixas com número de identificação negativo precisam ser ignoradas, pois estão danificadas.

// Crie um programa que simule o processamento das caixas, exibindo as válidas e ignorando as danificadas. O programa deve parar o processamento assim que 5 caixas válidas forem processadas.

const caixas = [45, 3, 6, 0, -1, -4, 2, -5, 67, 4, -25, 54, -31, 5]
let caixasProcessadas = 0

for (let i = 0; i < caixas.length; i ++) {
    if (caixas[i] < 0) {
        console.log("Caixa danificada, ignorada.")
        continue // ignorar o restante da iteração do laço
    }
    console.log("Caixa processada: ", caixas[i])
    caixasProcessadas ++
    if (caixasProcessadas === 5) {
        break
    }
}

// também poderia ser assim
// let contador = 0

// do {
//     if (caixas[contador] >= 0) {
//         console.log("Caixa processada: ", caixas[contador])
//         caixasProcessadas ++
//     } else {
//         console.log("Caixa danificada, ignorada.")
//     }
//     contador ++
// } while (caixasProcessadas < 5)

console.log("Limite de caixas processadas atingido!")

// Validação de login

// Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

const tentativas = ['pipeline', 'fulano', 'restrito', '5523']
const senhaCorreta = "restrito"

let acessoPermitido = false
let tentativaAtual = 0

while (tentativaAtual < 3) {
    if (tentativas[tentativaAtual] === senhaCorreta) {
        console.log("Acesso permitido!")
        acessoPermitido = true
        break // parar o laço imediatamente
    } else {
        console.log(`Tentativa ${tentativaAtual + 1} inválida.`)
    }
    tentativaAtual ++
}

if (!acessoPermitido) {
    console.log("Acesso bloqueado. Número máximo de tentativas atingido.")
}