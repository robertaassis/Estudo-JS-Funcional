function gerarNumerosEntre(min, max, tempo){
    if(min>max) [max,min] = [min,max] //troca o valor das variaveis
    
        return new Promise(resolve =>{
            setTimeout(function()  {
            const fator = max - min + 1; // essa linha e a debaixo é a fórmula pra gerar número aleatório entre número max e min
            const aleatorio = parseInt(Math.random() *fator) + min;
            
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
            gerarNumerosEntre(1,60,2000),
            gerarNumerosEntre(1,60,1000),
            gerarNumerosEntre(1,60,5000),
        ])
}

gerarVariosNumeros().then(numeros => console.log(numeros)) // devolve 3 numeros aleatorios depois do maior segundo (5seg);
// ou seja, só depois de todas as promessas terem sido cumpridas