// 1- Criação de variáveis
// let Name = "Peter"; //Possível alteração ao decorrer do código, não estático
// const cpf = "xxx.xxx.xxx-xx"; // Estático não altera
// console.log(`Nome do Usuário ${Name} | CPF inválido ${cpf}`);

// 2- Função Prompt
// const Name = prompt("What's your name?"); //Guarda o que o usuário digitar na variável
// alert(`Olá! ${Name}`)

// 3- Função Alert (Exibe uma mensagem através do navegador)
// const mensage = "Don't use alert!"
// alert(mensage)

// 4- Objeto Math e seus métodos
// const number1 = 10, number2 = 20, number3 = 30;
// const money = 30.50;
// console.log(Math.max(number1, number2, number3)) // Método max
// console.log(Math.round(money)) // Arredonda para cima
// console.log(Math.round(money)) // Remove a parte decimal
// console.log(Math.floor(money)) // Arredonda para baixo números decimais


// -> Estruturas de Controle

// 1- IF; ELSE; ELSE IF
// IF = Funciona com base em uma condição se for true executa a caixa de código, se for false retorna o ELSE;
// IF ELSE = Funciona como uma segunda caixa de retorno, adicionando outro retorno com outra condição
// const Name = prompt("What's your name?");
// if (Name !== null && Name.trim() !== ""){
//     alert(`Your name is ${Name}`);
// }
// else{
//     alert(`You have no name :(`);
// }
// * Método Trim = Remove espaços do início ao fim


// -> Estruturas de Repetição (Repete blocos de código até a condição imposta for false)

// 1- While (Imprime o código dentro do bloco até atingir a condição, verificando antes de executar)
// let i = 0;
// while (i <= 10){
//     console.log(i)
//     i++
// }

// 2- Do While (Faz uma execução primeiro depois verifica a condição)
// let i = 0;
// do {
//     console.log(`Valor do i antes da incrementação ${i}`);
//     i++
// } while (i <= 5);

// 3- For (Declaramos a incrementação, condição, progressão do loop)
// for (let i = 0;i <= 5;i++){
//     console.log(`Aqui está o valor de i em for: ${i}`);
//     //Mais simples 
// }

// 4 - break (encerra o loop com uma determinada condição ou não)
// for (let i = 0; i <= 100; i++){
//     console.log(`Value of i: ${i}`);
//     if (i >= 15){ //Através de uma condição ele repete 15 vezes
//         break
//     }
// }

// 5 - continue (continua o loop após uma certa condição)
// for (let i = 0; i <= 20; i++){
//     if (i % 2 === 0){
//         console.log(`Value números pares: ${i}`)
//         continue // Pula números que não derem true na condição
//     }
// }

// 6 - Switch (forma mais limpa ao invés de utilizar if/else muitas vezes)
// let money = 2000.00;
// switch (true) { 
//     case (money >= 5000.00): //Adicionado um parâmetro para filtrar quem pode comprar
//         console.log('Consegue comprar PS5');
//         break;
//     default:
//         console.log('Não consegue comprar PS5');
// }

