function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

function aoQuadrado(a,b){
    return a ** b;
}

function raizQuadrada(a,b){
    if (a <= 0){
        return "Errado, tente novamente"
    }
    return Math.sqrt(a);
}

module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao,
    aoQuadrado,
    raizQuadrada
}