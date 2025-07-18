// 1 - Classes e Construtores

// class Produto { // Object sendo reutilizável e não tendo propriedades fixas
//     constructor(nome,preco){
//         this.nome = nome;
//         this.preco = preco;
//     }
// }

// const produto1 = new Produto ('Laptop', 2500)
// console.log(produto1)

//2. Getter e Setter
//     class Produto {
//         constructor(nome,preco){
//             this.nome = nome
//             this._preco = preco
//         }

//         get preco(){
//             return `R$${this._preco}`;
//         }

//         set preco(valor){
//         if (valor < 0){
//             return `Valor não definido`
//         }else{
//             return this._preco = valor;
//         }
//     }
// }

// const Produto1 = new Produto("Laptop", 2000)
// console.log(Produto1)
// Produto1.preco = -10 //Não funciona - Setter
// Produto1.preco = 3000.00 // Funciona
// console.log(Produto1)

// Em Object Literal
//     const produto = {
//         nome: 'Laptop',
//         _preco: 3000.00,

//         get preco(){
//             return `R$${this._preco}`
//         },

//         set preco(valor){
//             if (valor < 0){
//                 return `Valor indisponível`
//             }else{
//                 return this._preco = valor
//             }
//         }
//     }
// produto.preco = 2000.00
// console.log(produto.preco)


//3. Encapsulamento 
// class Pessoa {
//     #saldo
//     constructor(nome, saldo){
//         this.nome = nome
//         this.#saldo = saldo
//     }

//     mostrarSaldo(){
//         return `Saldo atual ${this.#saldo}`
//     }

//     depositar(valor){
//         this.#saldo += valor
//         return `Seu saldo atual: ${this.#saldo}`
//     }

//     sacar(valor) {
//         this.#saldo -= valor
//         return `Seu saldo atual: ${this.#saldo}`
//     }
// }

// const Pessoa1 = new Pessoa('Peter', 3000)
// console.log(Pessoa1.mostrarSaldo())
// console.log(Pessoa1.depositar(500))
// console.log(Pessoa1.sacar(250))
// console.log(Pessoa1.saldo) // Não funciona



//3.1 Symbol
// const saldoPrivado = Symbol("saldo")

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//         this[saldoPrivado] = 0
//     }

//     mostrarSaldo(){
//         return `Saldo Atual ${this[saldoPrivado]}`
//     }

//     depositar(valor){
//         this[saldoPrivado] += valor
//         return `Saldo Atual ${this[saldoPrivado]}`
//     }

//     sacar(valor){
//         if (valor > this[saldoPrivado]){
//             return `Não disponivel para saque`
//         }else{
//             this[saldoPrivado] -= valor
//             return `Saldo Atual ${this[saldoPrivado]}`    
//         }
//     }
// }

// const Pessoa1 = new Pessoa ('Peter')
// console.log(Pessoa1.mostrarSaldo())
// console.log(Pessoa1.depositar(200))
// console.log(Pessoa1.sacar(150))



//4. Herança
// class Animal {
//     constructor(nome){
//         this.nome = nome;
//     }

//     barulho() {
//         return `${this.nome} emite sons:`
//     }
// }

// class Papagaio extends Animal {
//     constructor(nome,peso){
//         super(nome);
//         this.peso = peso
//     }
//     grunido() {
//         const introducao = super.barulho();
//         return `${introducao} ${this.nome} repete algumas palavras humanas`
//     }
// }

// const Papagaio1 = new Papagaio('Jorge')
// Papagaio1.peso = '40kg'         
// console.log(Papagaio1)
// console.log(Papagaio1.grunido())
// console.log(Object.getPrototypeOf(Papagaio1))



//5. Polimorfismo

// class Animal {
//     constructor(especie){
//         this.especie = especie
//     }

//     barulho(){
//         console.log(`Animais fazem barulho`)
//     }
// }

// class Dog extends Animal {
//     constructor(especie){
//         super(especie)  
//     }

//     barulho(){
//         console.log(`Cachorro faz AU AU AU`)
//     }
// }

// class Cat extends Animal {
//     constructor(especie){
//         super(especie)   
//     }

//     barulho(){
//         console.log(`Gato faz MIAU MIAU`)
//     }
// }

// const Animal1 = new Animal('não definido')
// const Dog1 = new Dog('Golden')
// const Cat1 = new Cat('Gato kakaka')

// const barulhoAnimais = [Animal1, Dog1, Cat1]

// const exibirBarulho = barulhoAnimais.forEach(animal => animal.barulho())
// console.log(Cat1)


//5.1 Polimorfismo Duck Typing

// class Pessoa{
//     constructor(nome){
//         this.nome = nome
//     }

//     gesto(){
//         console.log(`Se move de um lado para o outro`)
//     }
// }

// class Pato{
//     constructor(nome){
//         this.nome = nome
//     }

//     gesto(){
//         console.log(`Se move de um lado para o outro, as vezes voa?`)
//     }
// }

// const Pato1 = new Pato('Duck')
// const Pessoa1 = new Pessoa('Fred')
// const duckTyping = [Pato1, Pessoa1]
// const exibir = duckTyping.forEach(obj => obj.gesto())

//6. Abstração

// class Cafeteria {
//     #agua = 0;
//     constructor(agua = 0){
//         this.#agua = agua
//     }

//     colocarAgua(ml){
//         this.#agua += ml
//     }

//     prepararCafe(){
//         if (this.#agua < 200){
//             console.log(`Não temos café suficiente`)
//             return;
//         }
            
//         this.#agua -= 200
//         console.log(`Café está pronto`)

//     }
    
// }

// const CafeteriaZe = new Cafeteria()
// CafeteriaZe.colocarAgua(400)
// CafeteriaZe.prepararCafe()
// CafeteriaZe.prepararCafe()
// CafeteriaZe.prepararCafe()

// 7. Object.seal()
// const pessoa = {
//     nome: 'Peter'
// }
// Object.seal(pessoa)
// pessoa.cpf = '111.111.111-11' // Não funciona
// delete pessoa.nome // Não funciona
// pessoa.nome = 'Peter Parker' // Funciona
// console.log(pessoa)

