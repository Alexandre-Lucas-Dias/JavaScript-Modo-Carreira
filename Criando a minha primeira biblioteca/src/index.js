// const { log } = require('console')

// função principal da aplicação
export function contaPalavras(texto) {
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
    
    return arrayDeObjetosDePalavras
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