// objetos
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99 },
    {nome: 'Impressora', qtde: 0, preco: 649.50 },
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
]

const nome = item => item.nome // printa só os nomes

// function nome(n,i,a){
//     return a[i].nome; // mesma coisa da de cima
//}

const precoFinal = item => item.qtde * item.preco // printa o preco final

// function precoFinal(n,i,a){
//     return a[i].qtde* a[i].preco;  // mesma coisa da de cima
// }

console.log(carrinho.map(nome))
console.log(carrinho.map(precoFinal))