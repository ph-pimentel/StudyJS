// 1 - Funções
// Declaramos que vai ser uma função, com o nome dela, podendo ter parâmetros ou não
// const Name = 'Emily';
// function saudacoes(){
//     console.log(`Good Morning ${Name}`)
// }
// saudacoes(); // Chamando a função

// 1.1 - Funções Anônimas
// Declaramos uma função através de uma variável const, para falar que é única
// const saudacoes = function(Name){ // Passamos um parâmetro para ela
//     console.log(`Good Evening ${Name}`)
// }
// saudacoes('Pedro'); // Retornando com o parâmetro

//1.2 - Funções que retornam valores
// const adicao = function (a,b) { //Criada uma função que retorna valores de acordo com parâmetros
//     return(
//         a + b
//     );
// }
// console.log(adicao(30,30));

//1.3 - Escopo Funções
//Fora de uma função podemos ter uma variavel com um valor diferente daquele que está dentro da função -
// - as duas não geram conflito entre si.
// let number = 40;
// function whatIsNumber() {
//     let number = 20
//     console.log(number)
// }
// console.log(number);
// whatIsNumber();

// 1.4 - Escopo Aninhado - Nested Scopes
//Por conta do let e const podemos ter diversas variáveis declaradas da mesma forma que não gera conflito -
// - e sim o JS executa em ordem de execução aninhado
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

// 2 - Arrow Function
// Forma mais abreviada de escrever uma função, mas apenas de forma anônima
// const multiplicacao = (a,b) => a * b
// console.log(multiplicacao(2,5));
// const divisao = (a,b) => {
//     return console.log(a / b)
// }
// divisao(5,1)

//2.1 - Parâmetros Opcionais
//Podemos ter parâmetros opicionais na aplicação, assim retornando valores caso não seja preenchido
// const multiplicacao = (a,b) => {
//     if(!a){
//         return console.log('a não foi passado')
//     }
//     if(!b){
//         return console.log('b não foi passado')
//     }
//     return console.log(a*b)
// }
// multiplicacao(10,20)

//2.2 - Argumento Default
// Podemos definir um valor padrão para um campo, mas colocando os primeiros que os opcionais
// const saudacoes = (Name, saudacao = 'Good Morning' ) =>{
//     return console.log(`${saudacao}, ${Name}`)
// }

// saudacoes('Peter');

//3.0 Closure 
// Quando executamos uma função perdemos o bloco de código dela, mas com o closure podemos armazenar -
// o que foi inserido nela. Ou seja 'relembrar'
// const saudacao = (n) => {
//     let m = 0;
//     m++
//     return console.log(`Your name is: ${n} and you repeat this code ${m}`)
// }

// saudacao('Pedro');
// saudacao('Pedro'); // Neste exemplo eu só repeti este código uma vez por conta do bloco após ser executado não existir mais

// const saudacaoClosure = (n,m) => {
//     return function () {
//         m++
//         console.log(`This is n value: ${n} and m value: ${m}`)
//     };
// }

// const saudacao = saudacaoClosure('Pedro', 0); // Armazena a function em uma variavel, que altera o valor interno da função de acordo com a chamada
// saudacao();
// saudacao();
// saudacao();

//4.0 Recursão
// Cria uma espécie de loop dentro da função como (for), utilizando a função nela mesma
// const fatorial = (x) => {
//     if (x === 0){
//         return 1
//     } else {
//         return x * fatorial(x - 1);
//     }
// }
// const num = 2
// const result = fatorial(num)
// console.log(`Este é o fatorial de ${num} => ${result}`)


