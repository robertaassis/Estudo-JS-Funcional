function gerarNumerosEntre(min,max, numerosProibidos){
    if(min>max) [max,min] = [min,max] //troca o valor das variaveis
    return new Promise((resolve,reject) =>{
        const fator = max - min + 1; // essa linha e a debaixo é a fórmula pra gerar número aleatório entre número max e min
        const aleatorio = parseInt(Math.random() *fator) + min;
      
        if(numerosProibidos.includes(aleatorio)){ // se o numero gerado ta dentre os numerosProibidos
            reject('Numero repetido')
        }else{
            resolve(aleatorio)
        }
    })
}
// gerarNumerosEntre(1,5,[1,2,4]).then(console.log).catch(err => console.log(`o erro gerado foi: ${err}`)):

async function gerarmegaSena(qtd){
    const numeros = [];
    try{
      for(let _ of Array(qtd).fill()) {// cria um array com qtd x de posições undefined
       numeros.push(await gerarNumerosEntre(1,60, numeros))
      }
     return numeros
    } catch(e){
        if(tentativas>100) throw 'que chato!!'
        else gerarmegaSena(qtd, tentativas+1)
    }
}

gerarmegaSena(6).then(console.log).catch(console.log)