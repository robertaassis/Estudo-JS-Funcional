const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99 },
    {nome: 'Impressora', qtde: 0, preco: 649.50 },
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
]

const getTotal = item => item.qtde * item.preco // retornou 79,9 , 0 e 108,4

const somar = (acc, el) => acc + el // somou 79,9 + 0 = 79,9, depois fez 79,9 + 108,4

const totalGeral = carrinho.map(getTotal).reduce(somar) // mapeei pq só queria qtde e preco depois reduzi pra pegar preco total

console.log(totalGeral)


