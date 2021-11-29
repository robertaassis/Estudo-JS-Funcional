const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: false},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: true },
]
//cltr alt pega todas as linhas; ctrl + setinha vai pra onde vc quer

// 1. Apenas elementos que sao frageis
const frageis = item => item.fragil // vai retornar true or false, se for false, nao coloca no produtosFrageis

const produtosFrageis = carrinho.filter(frageis); 
console.log(produtosFrageis)

// 2. pega quantidade * preco -> total de cada elemento
const preco = item => item.preco * item.qtde

const precoTotal = produtosFrageis.map(preco);
console.log(precoTotal)

// 3. media dos totais

// forma mais facil
// const media = (acc, el) => (acc + el)
// const somaPrecos = precoTotal.reduce(media)
// const tamanho = precoTotal.length
// const mediaPrecos = somaPrecos/tamanho
// console.log(mediaPrecos.toFixed(2))

// mais dificil
const media = (acc, el) => {
    const novaQtd = acc.qtde+1; // primeiro qted é 0, proximo será 1, depois 2, etc, como se fosse qtde++
    const novoTotal = acc.total+el
    return{
        qtde:novaQtd,
        total:novoTotal,
        media : novoTotal/novaQtd
    }
   
}
const somaPrecos = precoTotal.reduce(media, {qtde:0, total:0, media:0}) // retorna { qtde: 2, total: 188.3, media: 94.15 }
console.log(somaPrecos.media) // retorna 94,15

// 4. JUNTANDO OS 3

var cont=1
const mediaPrecos = carrinho.filter(item => item.fragil).map(item => item.preco * item.qtde).reduce((acc, el) => {
    cont++;
    return (acc + el);
})

const mediaTotal= mediaPrecos/cont;
console.log(mediaTotal)