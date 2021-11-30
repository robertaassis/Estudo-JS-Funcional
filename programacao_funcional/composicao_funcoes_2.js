function composicao(...fn){ 
    return function(valor){
        return fn.reduce(async (acc, fn) => { // espera promise ser resolvido pra so depois chamar funcao
            if(Promise.resolve(acc) == acc){
                return fn(await acc) // espera o contador ser resolvido; retorna promise
            } else return fn(acc)    
        }, valor) 
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    // return `${texto}!!!`
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(`${texto}!!!`)
        }, 2000)
    })
}

function tornarLento(texto){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(texto.split('').join(' '))
        }, 3000)
    })
}

const exagerado = composicao(enfatizar, gritar, tornarLento)
const umPoucoMenosExagerado = composicao(enfatizar, tornarLento)
exagerado('cuidado com buraco').then(console.log)
umPoucoMenosExagerado('para').then(console.log)


