// flatmap primeiro faz map depois flat
const letrasAninhadas = [['o', 'l', 'a'],['m','u','n','d','o']]

console.log(letrasAninhadas.flat()) // cria um novo array com todos elementos sub-arrays concatenados nele
// letras.flat(Infinity) achata ao maximo

const letras = letrasAninhadas.flat(Infinity) // sao varios subvetores dentro de um vetor so,
// entao cria um vetor com todos os elementos tirando os subvetores
// [
//     'o', 'l', 'a',
//     'm', 'u', 'n',
//     'd', 'o'
// ]
const resultado = letras.map(l => l.toUpperCase()).reduce((a,b)=>a+b) // transforma todas as letras em maiuscula e concatena elas
console.log(resultado)



