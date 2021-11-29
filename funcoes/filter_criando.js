Array.prototype.myFilter = function (fn){
    const novoArray = []
    for(let i=0;i< this.length;i++){
        if(fn(this[i], i , this)) novoArray.push(this[i]) // se a funcao retornar true, coloca o valor dentro do novo vetor
    }
    return novoArray
}

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99 },
    {nome: 'Impressora', qtde: 0, preco: 649.50 },
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
]

const qtdMaiorQueZero = item => item.qtde > 0
const getNome = item => item.nome

const qtdValida = carrinho.myFilter(qtdMaiorQueZero) // filtra array com apenas aqueles objetos que tem qtd > 0
const produtoValido = carrinho.myFilter(qtdMaiorQueZero).map(getNome) // filtra array com apenas NOMES daqueles objetos que tem qtd > 0

console.log(qtdValida) // traz nome, qtde e preco dos objetos que tem qtd > 0 
console.log(produtoValido) // traz só nome dos objetos que tem qtd > 0 