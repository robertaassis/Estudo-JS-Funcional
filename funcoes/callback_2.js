function exibeMensagensNaOrdem(mensagem, callback) {
	console.log(mensagem);
    callback();
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function() {
	console.log('Essa é a segunda mensagem exibida na ordem');
});



// outro jeito de fazer o callback
// function exibePrimeiraMensagem (mensagem, callback) {
// 	console.log(mensagem);
// 	callback();
// }
// function exibeSegundaMensagem(){
// 	console.log('Essa é a segunda mensagem do novo exemplo');
// } 
// exibePrimeiraMensagem ('Essa é a primeira mensagem do novo exemplo', exibeSegundaMensagem);