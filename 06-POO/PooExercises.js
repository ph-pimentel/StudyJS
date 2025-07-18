class Bebida {
    constructor (aguaNecessaria, nome){
        this.aguaNecessaria = aguaNecessaria
        this.nome = nome
    }
    preparar(){
        console.log(`Preparando a ${this.nome}`)
    }
}

class Cafe extends Bebida{
    constructor (aguaNecessaria = 200, nome = 'café'){
       super (aguaNecessaria, nome )
       
    }
    preparar(){
        console.log(`${this.nome} pronto!`)
    }
}

class Cha extends Bebida{
    constructor (aguaNecessaria = 150, nome = 'chá'){
        super (aguaNecessaria, nome)
    }
    preparar(){
        console.log(`${this.nome} pronto!`)
    }
}

class Maquina {
    #agua = 0;
    constructor(agua = 0){
        this.#agua = agua
    }

    colocarAgua(ml){
        this.#agua += ml
        console.log(`Colocou ${this.#agua} ml`)
    }

    preparar(bebida){
        if (this.#agua < bebida.aguaNecessaria){
            console.log(`Não temos a bebida disponível`)
            return;
        }

        this.#agua -= bebida.aguaNecessaria
        bebida.preparar()
        console.log(`Água restante: ${this.#agua}`)
    }
}

const cafe1 = new Cafe()
const cha1 = new Cha()
const Maquina1 = new Maquina()

Maquina1.colocarAgua(500)
Maquina1.preparar(cha1)
Maquina1.preparar(cafe1)
Maquina1.preparar(cafe1)


