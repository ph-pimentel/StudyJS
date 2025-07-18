//// Exercícios Aprofundamento

// Callback
// 1- Crie uma função esperar que recebe um tempo (em milissegundos) e um callback. Ela deve usar setTimeout para esperar o tempo indicado e depois executar o callback.

// function esperar(tempo, callback){
//     setTimeout(() => {
//         callback(tempo);
//     },tempo)
        
// }
// esperar(3000, (tempo) => {
//     tempo /= 1000
//     console.log(`Passaram ${tempo} segundos`)
// });

// 2 - Você tem uma lista de nomes. Use forEach com callback para exibir uma mensagem de boas-vindas para cada nome
// const arrayNames = ["Peter", "Josh", "Michael"]
// arrayNames.forEach((name) => {
//     console.log(`Nome presente na lista: ${name}`)
// })


//Programação Funcional

// 1- Dado o array de nomes abaixo, use o método .map() com uma função passada como argumento para transformá-los em letras maiúsculas:
// const nomes = ['ana', 'joão', 'maria'];
// function ExibirNomes(exibir) {
//     exibir()
// }
// const tratamento = () => console.log(nomes.map((n) => n.toUpperCase()))
// ExibirNomes(tratamento)

// 2 - Crie uma função multiplicador(fator) que retorna uma função que multiplica qualquer número pelo fator definido:

// function multiplicador(fator) {
//     return (number) => fator * number
// }
// const por10 = multiplicador(10)
// console.log(por10(5))

// 3 -Dado um número, crie três funções:
//dobro(n)
//somarCinco(n)
//quadrado(n)
//Depois, crie uma função que aplica as três funções em sequência (composição manual).

// const dobro = (n) => n * 2
// const somarCinco = (n) => n + 5
// const quadrado = (n) => n * n
// const number = 2
// function exibir(n,t1,t2,t3) {
//     n = t1(n)
//     n = t2(n)
//     n = t3(n)
//     return n
// }
// console.log(exibir(number,dobro,somarCinco,quadrado))

// 4 - Componha funções usando map() para aplicar transformação em um array de números:
// const number = [1,2,3,4]
// function tratamento(n) {
//     const result = n
//         .map((n) => n * 2)
//         .map((n) => n * n)
//    return result
// }
// console.log(tratamento(number))

// 5 - Crie uma função curried saudar que funcione assim:
// saudar = idioma => nome => `Olá, ${nome}!` se idioma === 'pt', ou `Hello, ${nome}!` se 'en'
// console.log(saudar('pt')('Lucas')); // "Olá, Lucas!"
// console.log(saudar('en')('John'));  // "Hello, John!"

// function saudar(idioma){
//     return function(nome){
//         if (idioma === 'pt') {
//             return `Olá, ${nome}!`
//         }
//         if (idioma === 'en'){
//             return `Hello, ${nome}!`
//         }
//     }
// }
// console.log(saudar('pt')('Peter'))
// console.log(saudar('en')('Gabriel'))

// 6 - Implemente uma função curried calcular que recebe um operador (+, -, *, /) e retorna uma função que recebe dois números e executa a operação.
// const somar = (x,y) =>  x + y
// const subtracao = (x,y) => x - y
// const divisao = (x,y) => x / y
// const multiplicacao = (x,y) => x * y
// function contas(operacao) {
//     return function(x){
//         return function(y){
//             return operacao(x,y)
//         }
//     }
// }
// console.log(contas(somar)(10)(10))
// console.log(contas(subtracao)(10)(10))
// console.log(contas(divisao)(20)(10))
// console.log(contas(multiplicacao)(10)(10))

