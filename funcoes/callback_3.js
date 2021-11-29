const fs = require('fs')// bibliotecas do node
const path = require('path') // bibliotecas do node

const caminho = path.join(__dirname, 'dados.txt') // pega o diretorio do arquivo que eu to

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString()) // lê o conteudo que ta em dados.txt
}
console.log('inicio 1')
fs.readFile(caminho, {}, exibirConteudo) // le o arquivo dados.txt (chama a função exibirConteudo pelo callback)
//fs.readFile(caminho, (_ , conteudo) => console.log(conteudo.toString())) // mesma coisa do de cima; os {} podem ser ignorados; arrow function
console.log('fim 1') // printa fim 1 sem ter printado tudo de dados.txt, pois é mais "rápido"

console.log('inicio 2')
console.log(fs.readFileSync(caminho).toString()) // assincrono; so vai printar fim 2 depois que printar tudo de dados.txt
console.log('fim 2')
