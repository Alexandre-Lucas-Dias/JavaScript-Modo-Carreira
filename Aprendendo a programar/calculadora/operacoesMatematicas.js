import { match } from "assert"

export function soma(num1, num2) {
    return num1 + num2
}

export function subtracao (num1, num2) {
    return num1 - num2
}

export function multiplicacao (num1, num2) {
    return num1 * num2
}

export function divisao (num1, num2) {
    return num1 / num2
}

export function exponenciacao (base, expoente) {
    return Math.pow(base, expoente)
}

export function radiciacao (radicando, indice) {
    return Math.pow(radicando, 1/indice)
}

export function logaritmo (logaritmando, base) {
    return Math.log(logaritmando) / Math.log(base)
}

export function seno (num) {
    return Math.sin(Math.PI * num / 180) // esse cálculo é uma conversão de grau para radiano
}

export function cosseno (num) {
    return Math.cos(Math.PI * num / 180) // esse cálculo é uma conversão de grau para radiano
}

export function tangente (num) {
    return Math.tan(Math.PI * num / 180) // esse cálculo é uma conversão de grau para radiano
}

export function arcoSeno (num) {
    num = Math.asin(num)
    return num = num * 180 / Math.PI // esse cálculo é uma conversão de radiano para grau
}

export function arcoCosseno (num) {
    num = Math.acos(num)
    return num = num * 180 / Math.PI // esse cálculo é uma conversão de radiano para grau
}

export function arcoTangente (num) {
    num = Math.atan(num)
    return num = num * 180 / Math.PI // esse cálculo é uma conversão de radiano para grau
}

export function secante (num) {
    return Math.pow(Math.cos(Math.PI * num / 180), -1) // esse cálculo é uma conversão de grau para radiano
}

export function cossecante (num) {
    return Math.pow(Math.sin(Math.PI * num / 180), -1) // esse cálculo é uma conversão de grau para radiano
}

export function cotangente (num) {
    return Math.pow(Math.tan(Math.PI * num / 180), -1) // esse cálculo é uma conversão de grau para radiano
}

export function arcoSecante (num) {
    return Math.acos(Math.pow(num, -1)) * 180 / Math.PI // esse cálculo é uma conversão de radiano para grau
}

export function arcoCossecante (num) {
    return Math.asin(Math.pow(num, -1)) * 180 / Math.PI // esse cálculo é uma conversão de radiano para grau
}

export function arcoCotangente (num) {
    return Math.atan(Math.pow(num, -1)) * 180 / Math.PI // esse cálculo é uma conversão de radiano para grau
}