// promessa retorna um unico valor
// let p = new Promise(function (cumprirPromessa){
//     cumprirPromessa(3)
// })

// para devolver mais do que um valor, tem que ser criado um objeto ou lista etc
let p = new Promise(function (resolve){
    resolve({
        x:3,
        y:4
    })
})

console.log(typeof p) // printa object

// p.then(function(valor){
//     console.log(valor) // printa { x: 3, y: 4 }; mesma coisa da debaixo
// })

p.then(valor => console.log(valor)) 

p.then(valor=> valor.x).then(valordeX => console.log(valordeX)) // printa 3, posso fazer um then após o outro; pode separar cada
// then em uma funcao e chamar a funcao dentro do then