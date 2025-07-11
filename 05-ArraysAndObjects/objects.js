// 1 - Object Literal and Object
// const city = { // Object Literal tem propriedades fixas, não sendo reutilizável
//     description: 'have must people'
// }

// class Produto { // Object sendo reutilizável e não tendo propriedades fixas
//     constructor(nome,preco){
//         this.nome = nome;
//         this.preco = preco;
//     }
// }

// const produto1 = new Produto ('Laptop', 2500)
// console.log(produto1)

//2 - deletando/inserindo propriedades

// const frut = {
//     name: 'Apple',
//     color: 'Red',
// }
// frut.weight = '200g' //Adicionando propriedades
// delete frut.color //Deletando propriedades
// console.log(frut)

// class Fruts {
//     constructor(name,preco){
//         this.name = name;
//         this.preco = 'R$' + preco;
//     }
// }

// const Fruts1 = new Fruts ('Banana', 12.00)
// Fruts1.color = 'Yellow' //Adicionando propriedades
// delete Fruts1.preco //Deletando propriedades
// console.log(Fruts1)

// 3 - Métodos para Objetos

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

// 4 -Mutação

// const dinossaur = {
//     type: 'animal',
//     information: true
// }

// const animal = dinossaur // Modifica um e a modificação ocorre no outro também
// animal.weight = 1200 + 'kg'
// console.log(animal)
// console.log(dinossaur)

// Extra - String métodos
// Sendo String também um objeto ela possui métodos

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

// 5 - For in
// Iteração de loops com objetos sendo as propriedades e valores atribuidos
// const candidato = {
//     nome: 'Peter',
//     dev: "Senior"
// }
// const exibirCanditados = () => {
//     for (const pessoa in candidato) { //Sendo 'pessoa' os atributos e candidato = 'propriedades'
//         console.log(`${pessoa}: ${candidato[pessoa]}`)
//     }
// }
// exibirCanditados()

//Destructuring
//Ele mapeia o atributo inserido no objeto de acordo com o mesmo nome da propriedade
// const candidato = {
//     nome: 'Pedro',
//     idade: 23
// }
//Podendo atribuir outro nome a variavel 
//Valores definidos como padrão caso o usuário não tenha
// const {nome: nomeCandidato, profissao = 'Não especializado', idade} = candidato
// console.log(`${nomeCandidato} e ${idade} e ${profissao}`)
