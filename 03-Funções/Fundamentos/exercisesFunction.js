// 1- Crie uma função chamada apresentacao que receba um nome como parâmetro e imprima:

// function apresentacao(nome){
//     console.log(`Imprimindo nome: ${nome}`)
// }
// apresentacao('Peter');

// 2- Crie uma função anônima que receba um número e retorne se ele é par ou ímpar.

// const parOuImpar = (x) => {
//     if (x % 2 === 0){
//         console.log(`${x} é par`)
//     }else{
//         console.log(`${x} é impar`)
//     }
// }
// parOuImpar(7);

// 3- Crie uma função chamada media que receba 3 números e retorne a média aritmética.

// const media = (x,y,z,result) => {
//     result = x + y + z / 3
//     return console.log(`A media entre ${x} e ${y} e ${z}: ${result}`)
// }
// media(3,4,5)

// 4- Crie uma função chamada calcularIMC que receba peso e altura e retorne o IMC com duas casas decimais.
// const IMC = (p,a, result) => {
//     result = p / (a*a)
//     return console.log(`IMC é: ${result}`)
// }
// IMC(70,1.80)

// 5- Crie uma variável mensagem fora da função com valor "Global", e dentro de uma função chamada mostrarMensagem declare uma variável com o mesmo nome, mas com o valor "Local".
//Mostre no console os dois valores sem que entrem em conflito.

// let mensagem = 'Global'
// function mostrarMensagem() {
//     let mensagem = 'Local'
//     console.log(`${mensagem}`)
// }
// console.log(mensagem)
// mostrarMensagem()

// 6- Crie uma função chamada outer que tenha uma variável x = 10.
// Dentro dela, crie outra função inner com x = 20, e dentro de um if, defina x = 30.
// Imprima o valor de x em cada escopo.

// function outer(){
//     let x = 10;
//     function inner(){
//         let x = 20;
//         console.log(x)
//     }
//     console.log(x)
//     inner()
//     if (true){
//         let x = 30;
//         console.log(x)
//     }
// }

// outer()

// 7- Reescreva a seguinte função usando arrow function:
// function subtrair(a, b) {
//     return a - b;
//   }
  
// const subtrair = (a,b) => {
//     return a - b
// }
// console.log(subtrair(10,5))

//7.2 - Crie uma arrow function chamada quadrado que recebe um número e retorna o número ao quadrado.

// const quadrado = (a) => {
//     let b = 0;
//     return b = a * a
// }
// console.log(quadrado(8))

// 8 -Crie uma função saudacao que receba um nome e uma saudação opcional (padrão: "Bom dia"), e imprima:
//"Bom dia, Ana!" ou "Boa tarde, Ana!"

// const Saudacao = (nome, saudacao = "Bom dia") => {
//     console.log(`${saudacao}, ${nome}`)
// }

// Saudacao('Pedro')

// 9 - Crie uma função calculo que retorne a multiplicação de dois números, mas avise com uma mensagem se algum dos parâmetros não for passado.

// const calculo = (a,b) => {
//     if (!a){
//         return console.log("Informe a")
//     }
//     if (!b){
//         return console.log("Informe b")
//     }
//     return console.log(a * b)
// }
// calculo()

// 10 - Crie uma função contadorClosure que retorna outra função. A função retornada deve incrementar e mostrar o número de vezes que ela foi chamada.
// const contadorClosure = (n) => {
//     return function(){
//         n++
//         console.log(`Contador ${n}`)
//     }
// }
// const contador = contadorClosure(0);
// contador()
// contador()

// 11 - Crie uma função recursiva chamada contagemRegressiva que receba um número e conte até 0 no console.
// const contagemRegressiva = (number) => {
//     console.log(number)
//     if ( number === 0){
//         console.log('Já está em zero')
//         return 
//     }else{
//         contagemRegressiva(number - 1)
//     }
// }
// contagemRegressiva(5)

// 12- Crie uma função recursiva potencia(base, expoente) que calcule base^expoente sem usar Math.pow. (Precisei de ajuda de IA)
// const potencia = (b,ex) => {
//     if (ex === 0){
//         return 1
//     }else{
//       return b * potencia(b, ex - 1) // Pega uma potência anterior o resultado e faz * b
//     }
// }
// console.log(potencia(2,2))


// 13- Crie uma função fabricaDeSaudacao(nome) que use closure para armazenar o nome, e retorne uma função que aceite uma saudação (ou use valor padrão) e imprima:
// "Boa tarde, João!"
// const fabricaDeSaudacao = (nome) => {
//     return function(saudacao = 'Boa tarde'){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// const saudacao2 = fabricaDeSaudacao('Peter')
// saudacao2()
// saudacao2('Boa noite')

