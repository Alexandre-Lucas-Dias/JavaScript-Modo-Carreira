const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango']
// uva = 0
// morango = 4

console.log(frutas)

// console.log("Primeira fruta: ", frutas[0])
// console.log("Última fruta: ", frutas[4])
// console.log("Total de frutas: ", frutas.length)

// frutas.push('Melancia') // serve para adicionar itens no array

// console.log("Total de frutas depois de adicionar melancia: ", frutas.length)

// console.log("Última fruta: ", frutas[frutas.length - 1])

// frutas.splice(2, 1) // serve pra remover iten(s) de um array. O primeiro parâmetro é para indicar a posição de onde ocorrerá o corte, e o segundo parâmetro é para indicar a quantidade de itens removidos

// console.log("Depois de remover: ", frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log("Índice: ", i)
    console.log(frutas[i])
}

console.log("Usando forEach:")

frutas.forEach((valor, indice) => { // (valor e índice) são parâmetros para o forEach
    console.log("Índice: ", indice, valor)
})

console.log("Usando for of:")

for (const fruta of frutas) {
    console.log("Fruta da vez: ", fruta)
}