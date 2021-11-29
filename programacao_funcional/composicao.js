function composicao(...fn){ // passa quantas funcoes que quer
    return function(valor){
        return fn.reduce((acc, fn) => { // chama a primeira funcao, depois com o retorno da primeira funcao, chama a segunda funcao com
            // esse retorno como parametro, depois a terceira funcao etc
            return fn(acc) // como se fosse then em promise; a resposta de uma funcao passa de parametro pra outra funcao
        }, valor) 
    }
}

function gritar(texto){
    // console.log('entrei 2')
    // console.log(texto)
    return texto.toUpperCase()
}

function enfatizar(texto){
    // console.log('entrei 1')
    // console.log(texto)
    return `${texto}!!!`
}

function tornarLento(texto){
    // console.log('entrei 3')
    // console.log(texto)
    return texto.split('').join(' ')
}

const resultado = composicao(enfatizar, gritar, tornarLento)('para')
console.log(resultado)
// chama enfatizar primeiro que colocar !!! depois de para, depois chama gritar com para!!! como parametro e a coloca em upper case
// entrei 1
// para
// entrei 2
// para!!!
// PARA!!!
// entrei 3
// PARA!!!
// P A R A ! ! !
