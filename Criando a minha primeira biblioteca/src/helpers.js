function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1) // chave aqui é a palavra
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = ''
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ')
        if (duplicadas !== "") {
            textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas}\n`
        }
    })
    return textoFinal
}

export { montaSaidaArquivo } // outra forma de exportar módulos