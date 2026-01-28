function saudacao () {
    console.log("E aí, beleza?")
}

setTimeout (saudacao, 2000)

let contador = 0

const id = setInterval (() => {
    contador++
    console.log("Tempo decorido (em segundos): ", contador)
    if (contador === 10){
        clearInterval(id)
    }
}, 1000)