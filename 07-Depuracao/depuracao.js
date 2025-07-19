//1. Exception
// let nomes = undefined
// console.log(nomes.length)


//2. Try..Catch
// try {
//     const y = 2
//     let x = undefined
//     console.log(y += x)
// }catch(erro){
//     console.log(`Erro indicado: ${erro}`)
// }

//3. Finally
// try {
//     const y = 2
//     let x = undefined
//     console.log(y += x)
// }catch(erro){
//     console.log(`Erro indicado: ${erro}`)
// }finally{
//     console.log(`Executado!`)
// }

//4. Throw
// function somar(a,b) {
//     if (a !== Number){
//         throw new Error('Apenas números!')
//     }
//     if (b !== Number){
//         throw new Error('Apenas números!')
//     }
//     return a + b
// }

// try {
//     console.log(somar(10,'a'))
// }catch(erro){
//     console.log(`${erro}`)
// }

// 5. Assertion
// function assert (condicao, mensagem){
//     if (!condicao){
//         throw new Error (mensagem || 'Falha na asserção')
//     }
// }

// let money = 200
// assert(money >= 5000, "Não tenho dinheiro suficiente")

//6. Debbuger

// let x = 2
// let y = 4

// for(let i = 0;i < y;i++){
//     if (x >= y*y){ 
//         break;
//     }
//     x = x * y 
//     console.log(x)
// }

// debugger;
