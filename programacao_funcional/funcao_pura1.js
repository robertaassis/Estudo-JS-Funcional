// funcao em que o valor de retorno é determinado APENAS pelos seus valores de entrada, sem efeitos colaterais observaveis

const PI = 3.14

// impura pois PI eh externo a funcao
function areaCirc(raio){
    return raio*raio*PI
}

// pura
function areaCircPura(raio, pi){
    return raio*raio*pi
}

console.log(areaCirc(10))
console.log(areaCirc(10, 3.14))