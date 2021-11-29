const pessoa = { nome: 'Maria', altura: 1.76, cidade: 'Sao Paulo'}

// atribuicao por referencia, pois dados internos podem ser modificados; pessoa.nome='Joao' funciona
// se eu colocar novaPessoa.nome = 'Carlos' vai alterar o pessoa tb, pois apontam pro mesmo lugar
// const novaPessoa = pessoa

// pura; passagem por referencia
function alteraPessoa(pessoa){
    const novaPessoa = { ...pessoa }
    novaPessoa.nome='Carlos'
    return novaPessoa
}

// impura
// function alteraPessoa(novaPessoa){
//     novaPessoa.nome='Carlos'
// }

const pessoa2 = alteraPessoa(pessoa)
console.log(pessoa2)

// atribuicao por valor, separacao de memoria
let a = 3
let b = a