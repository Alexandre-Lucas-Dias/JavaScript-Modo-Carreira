const pessoa = {
    nome: 'Vinicios',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

for (const chave in pessoa) { // for in foi feito exclusivamente para objetos
    console.log("Chave: ", chave)
    console.log("Valor: ", pessoa[chave])
}

const chaves = Object.keys(pessoa) // apenas para chaves
const valores = Object.values(pessoa) // apenas para valores

const entradas = Object.entries(pessoa) // para chaves e valores

console.log("Chaves: ", chaves)
console.log("Valores: ", valores)
console.log("Entradas (chave/valor): ", entradas)