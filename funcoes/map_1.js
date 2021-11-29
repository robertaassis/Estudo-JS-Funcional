// retorna o mesmo numero de elementos do array antigo no novo. Ex: faço map com um array com 5 elementos, o array transformado também terá 5
const nums = [1,2,3,4,5]
const dobro = (n, i, a) => n*2 + i + a.length; // os parametros de map são (valores do array, indice, próprio array)
console.log(nums.map(dobro)) // printa [ 7, 10, 13, 16, 19 ]


const nomes = ['Roberta', 'Paula', 'Maju']
function primeiraLetra(n){
    return n[0]
}
console.log(nomes.map(primeiraLetra))

