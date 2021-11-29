// funcoes que operam em outras funcoes, tomando-as como argumentos ou retornando-as; funcao a partir de outra funcao

function executar(fn, ...params){ // pode receber quantos parametros necessarios
return fn(...params)
}

function somar(a,b,c){
    return a+b+c
}

function multi(a,b){
    return a*b
}

const r1=executar(somar,4,5,6)
const r2=executar(multi,30,40)

console.log(r1, r2)