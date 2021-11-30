function composicao(...fn){ 
    return function(valor){
        return fn.reduce((acc, fn) => { 
            return fn(acc) 
        }, valor) 
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}

const exagerado = composicao(enfatizar, gritar, tornarLento)
const umPoucoMenosExagerado = composicao(enfatizar, tornarLento)
const resultado = exagerado('cuidado com buraco')
const resultado2 = umPoucoMenosExagerado('pare')

console.log(resultado) // C U I D A D O   C O M   B U R A C O ! ! !
console.log(resultado2) // p a r e ! ! !

