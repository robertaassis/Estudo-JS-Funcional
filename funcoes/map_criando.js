// cria seu proprio map
Array.prototype.meuMap= function(fn){ // recebe funcao arrow nome e precoFinal
    const mapped = [] // cria um vetor vazio
    for (let i =0; i< this.length;i++){
        mapped.push('====> ' + `${fn(this[i], i, this)}`) // passa valor atual, indice atual e array pra função que foi chamada e 
        // concatena com ====>; crase é pra entrar na string
    }
    return mapped // retorna o vetor 
}

// objetos
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99 },
    {nome: 'Impressora', qtde: 0, preco: 649.50 },
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
]

const nome = (item) => item.nome // printa só os nomes

const precoFinal = (item, indice) => (item.qtde + indice) * (item.preco + indice) // printa o preco final

console.log(carrinho.meuMap(nome))
console.log(carrinho.meuMap(precoFinal))