// processamento mais pesado
function eager(a,b){
    const fim = Date.now() + 2500
    while (Date.now() < fim){   }
    const valor = Math.pow(a,3)
    return valor+b
    
}

// processamento mais leve; só vai ser executado quando chegar todos os dados do processamento
function lazy(a){
    const fim = Date.now() + 2500
    while (Date.now() < fim){   }
    const valor = Math.pow(a,3)
    return function (b){
        return valor+b
    } 
}

console.time('#1')
console.log(eager(3,100))
console.log(eager(3,200))
console.log(eager(3,300))
console.timeEnd('#1') // 7.507s

console.time('#2')
const lazy3 = lazy(3)
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2') // 2.501s