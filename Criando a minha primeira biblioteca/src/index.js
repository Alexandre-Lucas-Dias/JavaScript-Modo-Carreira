// const { log } = require('console')
const fs = require('fs') // o fs é uma biblioteca que serve para o node interagir com o sistema de arquivos do sistema operacional do computador

const trataErros = require('./erros/funcoesErro')

// o process.argv permite criar um array de strings, onde cada posição deste array se refere a uma instrução passada pelo terminal, separadas por espaço

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

// console.log(caminhoArquivo, link)


// utf-8 é o encoding que é o sistema de encodamento para os caracteres do idioma de origem latina
fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro // throw vai "lançar" o erro pra frente
        contaPalavras(texto)
    } catch (erro) { // IMPORTANTE SABER: este erro do catch não é o mesmo erro do throw
        trataErros(erro)
    }
})

// função principal da aplicação
function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    // como o filter retorna um resultado booleano, se o 'paragrafo' for vazio, o JavaScript interpreta como Falsy e não vai mapear este elemento
    // const arrayDeObjetosDePalavras = paragrafos.filter(paragrafo => paragrafo).map(paragrafo => {
    //     return verificaPalavrasDuplicadas(paragrafo)
    // }) // ou, de uma forma mais performática, para não consumir tanto da memória. Pois um map dentro de um filter representa um loop dentro de outro:
    
    // o método flatMap() já faz a função do filter() e do map() de uma única vez. Ele faz uma espécie de concatenação, aplanando todos os possíveis arrays internos dentro do array externo, e considera os valores desses arrays internos como sendo valores do array externo, transformando em apenas um array. Por exemplo:

    // [1, 2, [3, 4]] se torna [1, 2, 3, 4]
    const arrayDeObjetosDePalavras = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })

    // Utilizando o reduce() para criar o mesmo array de parágrafos sem elementos vazios, similar ao filter() + map() ou ao flatmap():
    // const result = paragrafos.reduce((acum, paragrafo) => {
    //     if (paragrafo) {
    //         return [...acum, paragrafo]
    //     }
    //     return acum
    // },[])

    // let arrayDeObjetosDePalavras = []
    // for (const paragrafo of result) {
    //     arrayDeObjetosDePalavras.push(verificaPalavrasDuplicadas(paragrafo))
    // }

    console.log(arrayDeObjetosDePalavras)
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n')
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // o primeiro parâmetro é uma expressão regular
}

function verificaPalavrasDuplicadas(texto) {
    // o split separa uma string em um array, onde cada elemento será definido quando o sistema encontrar a string definida entre parênteses do método
    const listaPalavras = texto.split(' ')
    
    const objetoDePalavras = {}
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra)
            objetoDePalavras[palavraLimpa] = (objetoDePalavras[palavraLimpa] || 0) + 1
        }
    })
    return objetoDePalavras
}