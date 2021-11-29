const nums = [3,1,7,9,4,6]

function ordenar(array){
    return [...array].sort() // pura, pois nao altera nada de fora
    // nao altera array original;  ... pega todos os elementos desse array e cria um novo array com esses elementos;
}

// function ordenar(array){
//     return array.sort() // assim seria impura pois estaria alterando o array original que esta de fora
// }

ordenar(nums)
const x = ordenar(nums)
console.log(nums) // array original; [ 3, 1, 7, 9, 4, 6 ]
console.log(x) // array duplicado, o que foi ordenado; [ 1, 3, 4, 6, 7, 9 ]
console.log(nums.slice(2)) // pega a partir da 2 posicao no array; [ 7, 9, 4, 6 ]