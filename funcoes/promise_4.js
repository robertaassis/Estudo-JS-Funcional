const fs = require('fs')// bibliotecas do node
const path = require('path') // bibliotecas do node

function leArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, {}, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt') 
leArquivo(caminho).then(conteudo => conteudo.split('\n')).then(linhas=>linhas.join(',')).then(console.log) // tira o separador \n (pular linha) e troca ele por virgula