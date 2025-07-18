/// Aprofundamento!

//1 - Callbacks
// function comprarLivro(callback, saudacao = 'Olá, tudo bem? Qual seria o seu nome?'){
//     let response = prompt(`${saudacao}`);
//     callback(response);
// }
// comprarLivro((response) => {
//     console.log(`${response}, Gostaria de comprar o livro 'Ortodoxia' ?`)
// })

//2 - Programação Funcional 

// Funções como argumentos
// function saudacao(falar) {
//     falar();
// }
// const falarSaudacao = () => console.log(`Olá! Bem vindo`)
// saudacao(falarSaudacao)

// function math(operacao, x, y) {
//     return operacao(x,y)
// }
// const soma = (x,y) => x + y
// const divisao = (x,y) => x / y
// console.log(math(soma,10,20))
// console.log(math(divisao,10,20))


//Funções que retornam outras funções
// function agradecimento(name){
//     return () => console.log(`Obrigado pela visita ${name}`)
// }
// const acao = agradecimento('Peter'); //Através do closure
// acao();

//Composição de Funções
// const number = [0,1,2,3,4]

// const result = number 
//     .filter(n => n % 2 === 0)
//     .map(n => n * 2)
//     .reduce((x,y) => x + y, 0)
// console.log(result)

//Currying
// function somar(a) {
//     return function(b){
//         return a + b
//     }
// }
// console.log(somar(10)(10))

// const somarArrow = a => b => a + b
// console.log(somarArrow(10)(20))