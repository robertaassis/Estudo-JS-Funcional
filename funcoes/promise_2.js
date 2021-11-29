// PROMISE ASSINCRONO

// setTimeout(function(){
//         console.log('exec 1')
//         setTimeout(function(){
//             console.log('exec 2')
//     }, 2000)
// }, 2000)

function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Vish')
        }, tempo)
    })
}

esperarPor(3000).then(() => esperarPor()).then(() => esperarPor()).then(console.log) // depois de 7 seg, printa vish