// 1. Object Literal

// const city = {
//     description: 'have must people'
// }

// Com Object.create()

// const saudacao = {
//     falar () {
//         console.log(`Saudar ${this.nome}`)
//     }
// }

// const saudacao1 = Object.create(saudacao)
// saudacao1.nome = 'Maria'
// saudacao1.falar()


//2. deletando/inserindo propriedades

// const frut = {
//     name: 'Apple',
//     color: 'Red',
// }
// frut.weight = '200g' //Adicionando propriedades
// console.log(frut.hasOwnProperty('color')) // Verifica se a propriedade existe
// delete frut.color //Deletando propriedades
// console.log(frut)
// console.log(frut.hasOwnProperty('color'))

// class Fruts {
//     constructor(name,preco){
//         this.name = name;
//         this.preco = 'R$' + preco;
//     }
// }

// const Fruts1 = new Fruts ('Banana', 12.00)
// Fruts1.color = 'Yellow' //Adicionando propriedades
// delete Fruts1.preco //Deletando propriedades
// console.log()
// console.log(Fruts1)

// 3. Métodos para Objetos

// class Pessoa {
//     constructor(name){
//         this.name = name;
//     }
// }
// const pessoa1 = new Pessoa('Peter')
// const people = {
//     cpf: 111
// }
// console.log(Object.keys(pessoa1)) // Object.keys - retorna em formato de array as propriedades do objeto
// console.log(Object.values(pessoa1)) // Object.values - retorna em formato de array o valor das propriedades
// console.log(Object.entries(pessoa1)) // Object.entries - combinação de .keys + .values
// Object.assign(pessoa1, people) // Object.assign - pega as propriedades que têm no 'people' e mescla no 'pessoa1'
// console.log(pessoa1)

// 4. Mutação de Objetos

// const dinossaur = {
//     type: 'animal',
//     information: true,
//         localizacao: {
//             pais: this.pais
//         }
// }

// const animalPre = Object.assign({},dinossaur) //Shallow copy
// animalPre.nome = 'T-rex'

// const animalPre2 = {...dinossaur} //Shallow copy 
// animalPre2.nome = 'Raptor'
// animalPre2.localizacao.pais = 'Não definido' //Shallow copy não funciona com objetos aninhados

// const animalPre3 = structuredClone(dinossaur)
// animalPre3.localizacao.pais = 'Canada'

// const animal = dinossaur // Mutação
// animal.weight = 1200 + 'kg'

// console.log(animal)
// console.log(dinossaur)
// console.log(animalPre)
// console.log(animalPre2)
// console.log(animalPre3)

// 4.1 Object.freeze
// const biblioteca = {
//     nomeLivro: 'Ortodoxia',
//         descricao: {
//             genero: 'Não definido'
//         }
// }
// Object.freeze(biblioteca)
// biblioteca.sinopse = 'Livro muito bom' // Não funcionou
// biblioteca.autor = 'Chesterton' // Não funcionou
// delete biblioteca.nomeLivro // Não funcionou
// biblioteca.descricao.genero = 'Definido pelo Shallow Freeze' // Funciona em subobjetos
// console.log(biblioteca)

// // 4.2 Deep Freeze
// const livro = {
//     nomeLivro: 'Quincas Borba',
//         descricao: {
//             genero: 'Não definido'
//         }
// }

// function deepFreeze(obj) {
//     Object.freeze(obj);
//     for (let chave in obj) {
//         if (
//             typeof obj[chave] === 'object' &&
//             obj[chave] !== null &&
//             !Object.isFrozen(obj[chave])
//         ) {
//             deepFreeze(obj[chave])
//         }
//     }
// }

// deepFreeze(livro);
// livro.descricao.genero = 'Definido' // Não funciona
// console.log(livro)


// 5. For in
// const candidato = {
//     nome: 'Peter',
//     dev: "Senior"
// }
// const exibirCanditados = () => {
//     for (const pessoa in candidato) {
//         console.log(`${pessoa}: ${candidato[pessoa]}`)
//     }
// }
// exibirCanditados()


// 6. Destructuring
// const candidato = {
//     nome: 'Pedro',
//     idade: 23
// }
// const {nome: nomeCandidato, profissao = 'Não especializado', idade} = candidato
// console.log(`${nomeCandidato} e ${idade} e ${profissao}`)

// 6.1 - Destructuring em funções:
// function catalogo({produto, preco}){
//     return `Nome do produto: ${produto} | Preço: ${preco}`
// }

// const produto1 = {produto: 'Laptop', preco: 2500.00}

// console.log(catalogo(produto1))

/// Extra 

// 7. String métodos

// Trim
// const text = ' AAAAAAA \n '
// console.log(text)
// console.log(text.trim()) // remove os caracteres e espaços em brancos

// PadStart e PadEnd
// const testPadStart = "1";
// const newNumber = testPadStart.padStart(3,"0") //Vai adicionar 0 até completar a quantidade de dígitos
// console.log(newNumber);
// const Number2 = testPadStart.padEnd(3,"0") // Vai completar com 0 a partir do final da string
// console.log(Number2);

//Split
// const text = "O livro era bom demais!"
// console.log(text.split(" ")) // Passamos o parâmetro que vai ser seguido para converter em array

//Join
// const produtos = ["Mouse", "Teclado", "Mousepad"]
// console.log(produtos.join(" ")) // Junta os Strings do array para exibir em uma única String

//Repeat
// const text = "Trabalho Dev!! \n"
// console.log(text.repeat(5)) //repeat = repete com determinados parâmetros
