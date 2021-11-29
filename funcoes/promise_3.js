function gerarNumerosEntre(min,max){
    if(min>max) [max,min] = [min,max] //troca o valor das variaveis
    return new Promise(resolve =>{
        const fator = max - min + 1; // essa linha e a debaixo é a fórmula pra gerar número aleatório entre número max e min
        const aleatorio = parseInt(Math.random() *fator) + min;
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10,20).then(num => num*10).then(numX10 => `O Numera gerado x 10 é ${numX10}`).then(console.log)