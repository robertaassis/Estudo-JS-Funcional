// await extrai o valor; se tirasse o await, só receberia promise {pending};
function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Vish')
        }, tempo)
    })
}

function retornaValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 4000)
    })
}

async function executar(){
    let valor = await retornaValor() //só depois de passar os 4 segundos de retornar valor, vai pra próxima linha
    await esperarPor() // ai aqui espera mais 2 depois printa Async 1
    console.log('Async 1 ' + valor);
    await esperarPor() // ai aqui espera mais 2 depois printa Async 2
    console.log('Async 2 '+ (valor+1));
    await esperarPor()
    console.log('Async 3 '+ (valor+2));
    return valor+3
}

executar().then(console.log)