// 1- Arrays (No JS arrays são considerados objetos, mas começando no 0)
// const listMerch = ["Apple", "Banana", "Blue Berry"];
// console.log(listMerch[2])
// console.log(listMerch);

//1.1 Proprietades (Sendo parecidas com métodos)
// const numbers = [1,2,3,4,5];
// console.log(numbers.length)

//1.2 Métodos (Sendo "funções" que nos ajudam a manipular dados que são considerados objetos)
// const listNumbers = [-1,0,1,2];

// Adição/Remoção de Elementos
// listNumbers.push(3) // Push - Adiciona no final
// listNumbers.pop() // Pop - Remove o último elemento
// listNumbers.unshift(-2) // Unshift - Adiciona no começo
// listNumbers.shift() // Shift - Remove do começo
// console.log(listNumbers)


// Transformação do Array
// const listNumbers = [1,2,3].map(x => x * 2) // map - cria um novo array mas aplicando as condições
// const paresNumbers = [1,2,3,4,5].filter(x => x % 2 === 0) // filter - filtra os dados gerados no array
// const soma = [1,2,3,4].reduce((acc,val) => acc + val) // reduce - junta o contéudo dos arrays em um só
// console.log(soma)

//Busca
// const people = [{name: "James", id: 1}, {name: "Laura", id: 2}] 
// const people1 = people.find(u => u.name === "James") // find - resulta o dado com base no parâmetro passado
// console.log(people1)
// const fruts = ["Apple", "Banana"]
// console.log(fruts.includes("Apple")) //includes - Retorna se existe aquele parâmetro
// console.log(fruts.indexOf("Apple")) //indexOf - Mostra a posição de Apple

// Ordenação e Manipulação
// const numbers = [-5,-100,20,70,10]
// console.log(numbers.sort()) // sort - organiza em ordem os elementos do array
// console.log(numbers.reverse()) // reverse - inverte a ordem dos elementos 
// const numbersN = [-2,-1,0,1,2]
// const numberNegativos = numbersN.slice(0,3); // slice - resulta de acordo com (ínicio / fim - 1)
// console.log(numberNegativos)
// const Names = ["Josh", "Kim", "Ash", "Robert"];
// Names.splice(2,1,"Henry") // splice - (inicio = onde começa, quantosRemover aparitr do início, adição )
// console.log(Names);

// Iteração
// const letters = ["a", "b", "c"];
// letters.forEach(letters => console.log(letters)) // foreach - executo uma ação para cada elemento
// const numberNegativos = [1,2,4,-5].some(x => x < 0) // some - Verifica se algum elemento está de acordo com a condição
// console.log(numberNegativos)
// const numberPositivos = [-1,-2,-4,5].every(x => x > 0) //every - Verifica se todos estão
// console.log(numberPositivos)

//Conversão 
// const greetings = ["Olá", "Povo da Rua", 10]
// console.log(greetings.join(' ')) // join - junta os elementos e os exibe uma String
// console.log(greetings.toString()) // toString - converto o array em string

//2- Loop em Arrays
// const names = ['Peter', 'Spike', 'Miguel', 'Michael']
// for (let i = 0;i < names.length;i++){
//     console.log(`Os nomes dos alunos que fazem matemática: ${names[i]}`)
// }

// 3 - Rest Operator
// Quando utilizamos uma function e não sabemos quantos parâmetro vamos utilizamos o rest, ele junta os argumentos em um array
// const Adição = (operacao = "soma", ...values) => { // ...values = aceita quantos parâmetro eu colocar
//     if (operacao === "soma"){
//         return values.reduce((a,b) => a + b) // reduce pega todos estes parâmetros e soma 
//     }

// }
// console.log(Adição(10,20,30))

//4 - Spread
// Ao invés de agrupar em um array como o Rest Operator ele os espalha fora dele, podendo juntar arrays e objetos
// const numbers = [1,2,3,4,5];
// const numbers2 = [6,7,8,9,10];
// console.log(...numbers, ...numbers2) // Juntando Arrays

// //Combinação e copia de objetos com diferentes propriedades
// class Fruts {
//     constructor(fruta){
//         this.fruta = fruta;
//     }
// }
// const priceFruts = {
//     price: "R$" + 12.20
// }
// const Maca = new Fruts ('Maça')
// const Apple = {...priceFruts, ...Maca}
// console.log(Apple)

// 5 - For of
// Faz uma iteração com arrays, objetos, strings mais facilitado para loops
// const Adição = (...values) => {
//     let total = 0;
//     for (const numbers of values) { // 'Mapea' os argumentos que vão vir, executa o que foi pedido, e solta o 'total'
//         total += numbers
//     }
//     return total;
// }
// console.log(Adição(1,2,3,4))

// 6 - Destructuring Array
//Mapeamento dos valores dentro do array através do valor de i
// const nomes = ["Peter", "Michael", "Jackson"]

// for (let i = 0;i < nomes.length; i++){
//     let exibirNomes = nomes
//     console.log(`${exibirNomes[i]}`)
// }
