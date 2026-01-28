const agora = new Date()

console.log(agora)
console.log("Ano: ", agora.getFullYear())

const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

console.log("Mês: ", mes[agora.getMonth()]) // o mês sempre pega de 0 a 11 e não de 1 a 12
console.log("Dia do mês: ", agora.getDate())
console.log("Hora: ", agora.getHours())
console.log("Minutos: ", agora.getMinutes())
console.log("Segundos: ", agora.getSeconds())
console.log("Milisegundos: ", agora.getMilliseconds())

const nascimento = new Date('1991-03-28:16:35:00.000')

console.log(nascimento)

// toLocaleDateString serve para formatar uma data a depender do idioma
console.log("Data formatada (BR): ", nascimento.toLocaleDateString('pt-BR')) // ISO 8601
console.log("Data formatada (US): ", nascimento.toLocaleDateString('en-US')) // ISO 8601