// Sem uso de currying
// Currying inves de passar todos os parametros de uma vez, passa de forma parcial

function soma(a,b,c){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(soma(2)(4)(5))

function textoComTamanhoEntre(min){
    return function (max){
        return function (erro){
            return function(texto){
                // Lazy evaluation
                const tamanho = (texto || '').trim().length // se o texto nao tiver setado, assume ele como vazio; tira os espaços em branco; pega o tamanho
                if(tamanho < min || tamanho > max){
                    throw erro
                }
            }
        }
    }
}

function aplicarValidacao(fn,valor){
    return function (valor){
        try{
            fn(valor)
        }
        catch(e){
            return { error : e}
        }
    }
}
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255) // cria versoes parciais
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido!')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)
const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
forcarNomeProdutoValido(p1.nome)
// console.log(aplicarValidao(forcarNomeProdutoValido, p1.nome))
console.log(validarNomeProduto( p1.nome))
