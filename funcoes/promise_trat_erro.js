function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceErro){ // se a chance de erro for maior que o numero aleatorio
          reject('ocorreu um erro!') // se deu erro
        } else{
          resolve(valor) // se deu bom
        }
    })
}

funcionarOuNao('Testando...', 0.8).then(passou => console.log('o valor e: ' + passou)).catch(error => console.log('Erro: ' + error ))
// se não colocar isso no catch, a mensagem de erro é enorme

// forma alternativa
// function funcionarOuNao(valor, chanceErro){
//     return new Promise((resolve, reject) =>{
//         try{
//            if(Math.random() < chanceErro){ // se a chance de erro for maior que o numero aleatorio
//              reject('ocorreu um erro!') // se deu erro
//            } else{
//              resolve(valor) // se deu bom
//            }
//         } catch (e){
//             reject(e)
//         }
//     })
// }