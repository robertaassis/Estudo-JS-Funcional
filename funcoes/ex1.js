function bomDia(){
    console.log('Bom dia');
}

const boaTarde = function (){
    console.log('Boa tarde');
}

function teste(fn){
    console.log('realmente eh funcao: '+ fn);
}

function executarQualquerCoisa(fn){
   // console.log(typeof fn); // retorna o tipo do que ta no parametro
    if(typeof fn === 'function'){
        teste(fn);
    }
}

executarQualquerCoisa(3); // number
executarQualquerCoisa(bomDia); // function
executarQualquerCoisa(boaTarde); //function 


// Retornar função a partir de outra função

function potencia(base){
    return function(exp){
        return Math.pow(base,exp);
    }
}

const bits8 = potencia(2); // base
console.log(bits8(6)); // exp, 2 elevado a 6

// console.log(potencia(2)(6)) seria a mesma coisa