const nums = [4,8,3,2,9,1,9,3]
// somar os valores do vetor

// 1. Reduce
const somar = (a,b) => a+b
const total = nums.reduce(somar)
console.log(total)

// 2. Recursividade
function somarArray(array, total=0){
    console.log('esse e o array ' + array)
    // esse e o array 4,8,3,2,9,1,9,3
    // esse e o array 8,3,2,9,1,9,3
    // esse e o array 3,2,9,1,9,3
    // esse e o array 2,9,1,9,3
    // esse e o array 9,1,9,3
    // esse e o array 1,9,3
    // esse e o array 9,3
    // esse e o array 3
    // esse e o array 
    if(array.length==0){
        return total
    }
    return somarArray(array.slice(1), total+array[0]) // vai sempre pegando o primeiro elemento
}
const total1=somarArray(nums)
console.log(total1)