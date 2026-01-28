const frutas = ['maçã', 'banana', 'goiaba']

const maisFrutas = ['uva', 'morango', 'kiwi']

const clone = [...frutas] // enquanto que com objetos o spread operator "espalha" as propriedades do mesmo, em arrays este operador "espalha" os próprios elementos do array

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

const [primeira, segunda, ...restante] = todasAsFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)