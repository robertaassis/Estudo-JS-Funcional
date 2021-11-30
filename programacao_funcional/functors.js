// objetos que implementam a função MAP que também é um "wrapper" de um valor
function TipoSeguro(valor){
    return {
        valor: valor,
        map(fn){
            const novoValor=fn(this.valor)
            console.log(fn + " esse e o novo fn")
            console.log(fn + " esse e o novo fn")
            // t => t.toUpperCase() esse e o novo fn
            // t=>`${t} !!!!!!` esse e o novo fn
            return TipoSeguro(novoValor)
        }
    }
}

const resultado = TipoSeguro('esse e o texto').map(t => t.toUpperCase()).map(t=>`${t} !!!!!!`).map(console.log)