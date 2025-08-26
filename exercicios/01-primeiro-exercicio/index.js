const PromptSync = require("prompt-sync")
console.log("Calculadora de soma, subtração, multiplicação, divisão, aoQuadrado, raizQuadrada!")

const calculadora = require('./calculadoraN');

let number1 = 10;
let number2 = 6;
let resolvendo = "x";
let resultado ;

if (resolvendo === "+"){
    resultado = calculadora.soma(number1,number2);
}else if(resolvendo === "-"){
    resultado = calculadora.subtracao(number1,number2);
}else if (resolvendo === "*"){
    resultado = calculadora.multiplicacao(number1,number2);
}else if(resolvendo === "/"){
    resultado = calculadora.divisao(number1,number2);
}else if(resolvendo === "**"){
    resultado = calculadora.aoQuadrado(number1,number2);
}else if(resolvendo === "x"){
    resultado = calculadora.raizQuadrada(number1,number2);
}


console.log("O resultado do seu resolvendo é : " ,resultado);



