// 1. Contagem Regressiva com Callbacks

// function contar(numero, callback){
//     setTimeout(() => {
//         if (numero > 0){
//             console.log(`Contador: ${numero}`)
//             callback(numero - 1)
            
//         }else{
//            console.log("Decolagem!")
//         }
        
//     },1000)
// }

// contar(3, (numero) => {
//         contar(numero, (numero) => {
//                 contar(numero, (numero) => {
//                     contar(numero, () => {})                    
//                 });
//         });
// });

// 2. Resolução Múltipla com Promise.all

// function carregarRecurso(nomeRecurso, tempo, sucesso){
//     return new Promise((resolve, reject) => {
//         if (sucesso){
//                 setTimeout(() => {
//                     resolve(`${nomeRecurso} carregado com sucesso!`)
//             }, tempo)
//         }else {
//             reject(`${nomeRecurso} falhou ao carregar!`)
//         }
//     })
// }

// const carregarRecurso1 = carregarRecurso("Email Validation", 2000, true)
// const carregarRecurso2 = carregarRecurso("Password Validation", 5000, true)
// const carregarRecurso3 = carregarRecurso("Dados do usuário", 6000, true)

// Promise.all([carregarRecurso1, carregarRecurso2, carregarRecurso3])
//     .then((mensagem) => {
//         console.log('Operações Bem-Sucedidas')
//         mensagem.forEach((promises) => console.log(promises))
//     })
//     .catch((error) => {
//         console.log('Failed: ', error)
//     })

//3. Fluxo Assíncrono com async/await e Tratamento de Erros

// function fazerRequisicao(url, sucesso, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(sucesso){
//                 resolve(`Dados de ${url}`)
//             }else {
//                 reject(`Erro ao requisitar ${url}`)
//             }
//         },time)
//     })
// }

// async function executarPedido() {
//     try {
//         console.log('Realizando chamada na API:')

//         const request1 = await fazerRequisicao('api/produtos', true)
//         console.log(request1)

//         const request2 = await fazerRequisicao('api/carrinho', true)
//         console.log(request2)

//         const request3 = await fazerRequisicao('api/pagamento', false)
//         console.log(request3)

//         const request4 = await fazerRequisicao('api/confirmacao', true)
//         console.log(request4)

//         console.log('Chamada feita com sucesso')
//     }
//     catch(error){
//         console.log('Erro:', error)
//     }

// }

// executarPedido()

// 4. Gerador para Simulação de Estoque

// function* estoque(quantidadeInicial){
//     let itensRestantes = quantidadeInicial
//         if (itensRestantes >= 0){
//             for(quantidadeInicial;quantidadeInicial > 0; ){
//            console.log(`Número de itens: ${quantidadeInicial}`)
//             quantidadeInicial -= 1
//             yield
//                 if(quantidadeInicial === 0){
//                     console.log('Estoque acabou')
//                 }
//             }
//         }
// }


// for (let retirada of estoque(2)) {
//     retirada
// }
