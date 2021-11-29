// funcao que lembra seu escopo lexico, mesmo quando a funcao eh executada fora desse escopo lexico 
// lexico é onde foi definido, ou seja, mesmo se eu executar ela fora do arquivo que foi definido, ela 
// lembra aquilo que foi definido. Ex: se eu colocar const x = 1000 nesse arquivo, ela ainda vai pegar o const x = 3 do arquivo original
const somarXmais3 = require('./closure_escopo') // precisa do require 

console.log(somarXmais3())