// funcoes sao tratadas como qualquer outra variavel; linguagem trata a funcao como variavel; consegue armazenar funcao como variavel

// as 3 abaixo sao funcao de primeira classe
const x = 3;
const y = function(txt){
   return 'esse e texto ' + txt
}
const k = () => 'oiii'

console.log(x)
console.log(y('sou funcao de primeira classe'))
console.log(k())