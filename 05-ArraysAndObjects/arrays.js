// Arrays

// const listMerch = ["Apple", "Banana", "Blue Berry"];
// console.log(listMerch[2])
// console.log(listMerch);

//1 - Propriedades em Arrays

// const numbers = [1,2,3,4,5];
// console.log(numbers.length)

//2 - Métodos em Arrays
// const listNumbers = [-1,0,1,2];

// 2.1 - Adição/Remoção de Elementos
// listNumbers.push(3) // Push - Adiciona no final
// listNumbers.pop() // Pop - Remove o último elemento
// listNumbers.unshift(-2) // Unshift - Adiciona no começo
// listNumbers.shift() // Shift - Remove do começo
// console.log(listNumbers)


// 2.2 - Transformação
// const listNumbers = [1,2,3].map(x => x * 2) // map - cria um novo array mas aplicando as condições
// const paresNumbers = [1,2,3,4,5].filter(x => x % 2 === 0) // filter - filtra os dados gerados no array
// const soma = [1,2,3,4].reduce((acc,val) => acc + val) // reduce - junta o contéudo dos arrays em um só
// console.log(soma)

// 2.3 - Busca
// const people = [{name: "James", id: 1}, {name: "Laura", id: 2}] 
// const people1 = people.find(u => u.name === "James") // find - resulta o dado com base no parâmetro passado
// console.log(people1)
// const fruts = ["Apple", "Banana"]
// console.log(fruts.includes("Apple")) //includes - Retorna se existe aquele parâmetro
// console.log(fruts.indexOf("Apple")) //indexOf - Mostra a posição de Apple

// 2.4 - Ordenação e Manipulação
// const numbers = [-5,-100,20,70,10]
// console.log(numbers.sort()) // sort - ordena elementos (por padrão, como string)
// console.log(numbers.reverse()) // reverse - inverte a ordem dos elementos 
// const numbersN = [-2,-1,0,1,2]
// const numberNegativos = numbersN.slice(0,3); // slice - resulta de acordo com (ínicio / fim - 1)
// console.log(numberNegativos)
// const Names = ["Josh", "Kim", "Ash", "Robert"];
// Names.splice(2,1,"Henry") // splice - (inicio = onde começa, quantosRemover aparitr do início, adição )
// console.log(Names);

// 2.4 - Iteração
// const letters = ["a", "b", "c"];
// letters.forEach(letters => console.log(letters)) // foreach - executa a ação para cada índice
// const numberNegativos = [1,2,4,-5].some(x => x < 0) // some - Verifica se algum elemento está de acordo com a condição
// console.log(numberNegativos)
// const numberPositivos = [-1,-2,-4,5].every(x => x > 0) //every - Verifica se todos estão
// console.log(numberPositivos)

// 2.5 Conversão 
// const greetings = ["Olá", "Povo da Rua", 10]
// console.log(greetings.join(' ')) // join - junta os elementos e os exibe uma String
// console.log(greetings.toString()) // toString - converto o array em string

//3 - Loop em Arrays
// const names = ['Peter', 'Spike', 'Miguel', 'Michael']
// for (let i = 0;i < names.length;i++){
//     console.log(`Os nomes dos alunos que fazem matemática: ${names[i]}`)
// }

// 4 - Rest Operator
// const Adição = (operacao = "soma", ...values) => { 
//     if (operacao === "soma"){
//         return values.reduce((a,b) => a + b)
//     }

// }
// console.log(Adição(10,20,30))

//5 - Spread
// const numbers = [1,2,3,4,5];
// const numbers2 = [6,7,8,9,10];
// console.log(...numbers, ...numbers2) // Combinando Arrays

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

// 6 - For of
// const Adição = (...values) => {
//     let total = 0;
//     for (const numbers of values) {
//         total += numbers
//     }
//     return total;
// }
// console.log(Adição(1,2,3,4))

// 7 - Destructuring Array
// const nomes = ["Peter", "Michael", "Jackson"]
// const [a,b,c] = nomes

// console.log(a)
// console.log(b)
// console.log(c)