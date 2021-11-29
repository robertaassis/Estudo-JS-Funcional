
// impura pois nao consegue determinar especificamente qual retorno tera
function gerarNumeroAleatorio(min, max){
    const fator = max - min + 1;
    return parseInt(Math.random()*fator) + min
}

console.log(gerarNumeroAleatorio(1, 50))


let qtdExecucoes=0
// pura
function somar(a,b){
    qtdExecucoes++ // efeito colateral observavel; altera algo externo a funcao
    return a+b
}

console.log(somar(5,6))
console.log(somar(4,2))
console.log(qtdExecucoes)