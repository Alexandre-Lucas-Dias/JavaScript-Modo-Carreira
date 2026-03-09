// cli.js significa "command line interface"
// npm significa "node package manager", ou repositório de pacotes do node

// o fs é uma biblioteca que serve para o node interagir com o sistema de arquivos do sistema operacional do computador
import fs from 'fs'
import path from 'path'
import trataErros from './erros/funcoesErro.js'
import { contaPalavras } from './index.js'
import { montaSaidaArquivo } from './helpers.js'
import { Command } from 'commander'
import chalk from 'chalk'

const program = new Command() // criação de uma nova instância de Command

program
.version('0.0.1')
.option('-t, --texto <string>', 'caminho do texto a ser processado') // as opções da linha de comando
.option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados') // opções de onde queremos salvar o arquivo
.action((options) => {
    const { texto, destino } = options // {} é uma desestruturação

    if (!texto || !destino) {
        console.error(chalk.red('Erro: favor, inserir caminho de origem e destino'))
        program.help() // o help() listará as opções disponíveis para o commander
        return
    }

    const camintoTexto = path.resolve(texto) // o commander precisa primeiro resolver o caminho que será passado pelo terminal
    const caminhoDestino = path.resolve(destino)

    try {
        processaArquivo(camintoTexto, caminhoDestino)
        console.log(chalk.rgb(57, 163, 90).inverse.italic.bold('Texto processado com sucesso'))
    } catch (erro) {
        console.log('ocorreu um erro no processamento', erro)
    }
})

program.parse() // essa linha vai pegar tudo o que foi informado no terminal e fazer uma conversão

// o process.argv permite criar um array de strings, onde cada posição deste array se refere a uma instrução passada pelo terminal, separadas por espaço
// const caminhoArquivo = process.argv
// const link = caminhoArquivo[2]
// const endereco = caminhoArquivo[3]

function processaArquivo(texto, destino) {
    // utf-8 é o encoding que é o sistema de encodamento para os caracteres do idioma de origem latina
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro // throw vai "lançar" o erro pra frente
            const resultado = contaPalavras(texto)
            criaESalvaArquivo(resultado, destino)
        } catch (erro) { // IMPORTANTE SABER: este erro do catch não é o mesmo erro do throw
            trataErros(erro)
        }
    })
}


// async é sempre colocado antes da declaração de uma função, para definir que ela é assíncrona. O await é posicionado no local onde se vai executar o método assíncrono em si. Async/await é uma forma mais simples de fazer promessas. É chamada de açúcar sintático.
async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras)
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras) // os parâmetros do writeFile() são: primeiro, o endereço do arquivo a ser criado e, segundo, o conteúdo que será escrito
        console.log(chalk.rgb(11, 210, 236).inverse.italic.bold("Arquivo criado"))
    } catch (erro) {
        throw erro
    }
}

// function criaESalvaArquivo(listaPalavras, endereco){
//     const arquivoNovo = `${endereco}/resultado.txt`
//     const textoPalavras = JSON.stringify(listaPalavras)
    
//     // a função then é a responsável por fazer a conclusão da promessa. Funções/métodos assíncronos baseados em promessas retornam objetos promessa.
//     fs.promises.writeFile(arquivoNovo, textoPalavras).then(() => {
//         // processamento feito com o resultado da promessa. No caso do writeFile(), como não terá nenhum retorno, não há processamento do resultado da promessa.
//         console.log("Arquivo criado")
//     }).catch(erro => {
//         throw erro
//     }).finally(() => console.log('Operação finalizada')) // o finally() é um método que sempre acontece, independentemente do then() e do catch()
// }