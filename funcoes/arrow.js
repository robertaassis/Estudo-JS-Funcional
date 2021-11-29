// arrow function - função anonima
const feliz = () => console.log('feliz natal')
feliz() // feliz natal

const saudacao = (nome) => "fala " +nome+ " beleza??";
console.log(saudacao('Joao')) // fala Joao beleza??

const potencia = base =>
    exp =>{
        return Math.pow(base,exp)
    }

//const potencia = base => exp => return Math.pow(base,exp) mesma coisa do de cima
    
console.log(potencia(2)(6))