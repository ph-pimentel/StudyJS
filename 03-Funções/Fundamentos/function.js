// 1 - Funções
// Declaramos que vai ser uma função, com o nome dela, podendo ter parâmetros ou não
// const Name = 'Emily';
// function saudacoes(){
//     console.log(`Good Morning ${Name}`)
// }
// saudacoes(); // Chamando a função

// 2 - Funções Anônimas
// Declaramos uma função através de uma variável const, para falar que é única
// const saudacoes = function(Name){ // Passamos um parâmetro para ela
//     console.log(`Good Evening ${Name}`)
// }
// saudacoes('Pedro'); // Retornando com o parâmetro

//3 - Funções com return
// const adicao = function (a,b) {
//     return(
//         a + b
//     );
// }
// console.log(adicao(30,30));

//4 - Escopo Funções
// let number = 40;
// function whatIsNumber() {
//     let number = 20
//     console.log(number)
// }
// console.log(number);
// whatIsNumber();

// 5 - Escopo Aninhado - Nested Scopes
// function callX(){
//     let x = 50;
//     function callX2(){
//         let x = 60;
//         console.log(x)
//     }
//     console.log(x)
//     callX2()
//         if (true){
//             let x = 70;
//             console.log(x)
//         }
// }
// callX()

// 6 - Arrow Function
// const multiplicacao = (a,b) => a * b
//
// console.log(multiplicacao(2,5));
//
// const divisao = (a,b) => {
//     return console.log(a / b)
// }
// divisao(5,1)

//7 - Parâmetros Opcionais em Funções
// const saudacoes = (Name, saudacao = 'Good Morning' ) =>{
//     return console.log(`${saudacao}, ${Name}`)
// }
// saudacoes('Peter');

//8 - Closure 

// Neste exemplo eu só repeti este código uma vez por conta do bloco após ser executado não existir mais
// const saudacao = (n) => {
//     let m = 0;
//     m++
//     return console.log(`Your name is: ${n} and you repeat this code ${m}`)
// }

// saudacao('Pedro');
// saudacao('Pedro');


//Exemplo com Closure
// const saudacaoClosure = (n,m) => {
//     return function () {
//         m++
//         console.log(`This is n value: ${n} and m value: ${m}`)
//     };
// }

// const saudacao = saudacaoClosure('Pedro', 0); 
// saudacao();
// saudacao();
// saudacao();

//9 - Recursão
// const fatorial = (x) => {
//     if (x === 0){
//         return 1
//     }
//     return x * fatorial(x - 1);
// }
// const num = 5
// const result = fatorial(num)
// console.log(`Este é o fatorial de ${num} => ${result}`)

// 10 - Operador rest(...)
// const somar = (...numbers) => {
//     let result = numbers.reduce((n1,n2) => n1 + n2)
//     console.log(`Resultado da operação: ${result}`)
// }
// somar(10,10,20)

