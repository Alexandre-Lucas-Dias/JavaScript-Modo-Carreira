let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = {...camila1} // ... é o spread operator. Ele "espalha" as propriedades do objeto

camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}

console.log(camila1)

const {nome, ...restante} = camila1 // assim funciona o Rest operator. Ele serve para considerar o RESTANTE das propriedades de um objeto, utilizando (...)

console.log(nome)
console.log(restante)