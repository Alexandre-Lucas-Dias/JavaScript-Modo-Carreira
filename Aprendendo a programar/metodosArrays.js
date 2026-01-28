const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// o método filter não altera o array principal, ele devolve outra lista
const numerosPares = numeros.filter(numero => { // o método filter depende que se tenha um return
    return numero % 2 === 0
})

const numerosImpares = numeros.filter(numero => { // o método filter depende que se tenha um return
    return numero % 2 !== 0
})

console.log("Todos os números: ", numeros)
console.log("Todos os números pares: ", numerosPares)
console.log("Todos os números ímpares: ", numerosImpares)

// o método map vai transformar a lista original em uma lista de coisas diferentes, porém não altera a lista original
const numerosDobrados = numeros.map(numero => { // o método map também depende que se tenha um return
    return numero * 2
})

console.log("Nossa lista mapeada (dobrada): ", numerosDobrados)