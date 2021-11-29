function multiplicar(x,y){
    return x*y
}

function somar2(x,y){
    return x+y
}
function subtrair(x,y){
    return x-y
}
function dividir(x,y){
    return x/y
} 

function calcular(x){
    return function(y){
        return function (fn){
            return fn(x,y); // chama a função, ex: multiplicar, dividir etc
        }
    }
}

function somar (a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(somar(1)(2)(3));
console.log(calcular(8)(4)(multiplicar))
console.log(calcular(8)(4)(somar2))
console.log(calcular(8)(4)(dividir))
console.log(calcular(8)(4)(subtrair))