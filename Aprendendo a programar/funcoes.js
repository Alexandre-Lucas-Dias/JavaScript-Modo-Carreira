function dobrarNumero (numero) {
    return numero * 2
}

console.log(dobrarNumero(5))

module.exports = dobrarNumero

function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(() => { 

console.log(this.nome); // Arrow function captura o this corretamente 

}, 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: Carlos