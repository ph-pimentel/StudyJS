//1- Callbacks

// function comprarLivro(callback, saudacao = 'Olá, tudo bem? Qual seria o seu nome?'){
//     let response = prompt(`${saudacao}`);
//     if (response === null){
//         alert(`Precisa colocar o nome`)
//         return;
//     }else {
//         setTimeout(() => { 
//             callback(response);
//         }, 2000)
//     }
    
// }
// comprarLivro((response) => {
//     console.log(`${response}, Gostaria de comprar o livro 'Ortodoxia' ?`)
// })

//2- Promises

// const pedidoPizza = new Promise((resolve, reject) => {
//     let pedidos = 90

//     setTimeout(() => {
//         if (pedidos >= 60){
//             resolve('Funcionario do mês!!')
//         }else{
//             reject(`Falta pouco para ser funcionario do mês ${60 - pedidos}`)
//         }
//     }, 2000);
// });

// pedidoPizza
//     .then((mensagem) => {
//         console.log(mensagem)
//     })
//     .catch((error) => {
//         console.log(error)
//     });


// function ChamadaBD(){
//     return new Promise((resolve, reject) => {
//         const status = false
        
//         setTimeout(() => {
//             if (status === false){
//                 reject('Chamada falha')
//             }
//             if (status === true){
//                 resolve('Chamada recebida!')
//             }
//         },5000);
//     });
// }

// ChamadaBD()
//     .then(mensagem => {
//         console.log(`Sucesso! -> mensagem armazenada no promise: ${mensagem}`)
//     })
//     .catch(error => {
//         console.log(`Falhada! -> erro no reject: ${error}`)
//     })


// Promise.all([ChamadaBD(), pedidoPizza])
//     .then(mensagem => {
//         console.log('Sucesso nos promises:', mensagem)
//     })
//     .catch(error => {
//         console.log('Erro nos promises:', error)
//     })

// 3 - Async e Await

// function ChamadaBD(tempo,sucesso){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if(sucesso){
//                 resolve(`Sucesso: ${tempo / 1000}s`)
//             }else{
//                 reject(`Erro: ${tempo / 1000}s`)
//             }
//         }, tempo);
//     });
// }

// async function Login() {
//     try{
//         console.log('Validando credenciais...')
//         const dados1 = await ChamadaBD(5000, false)
//         console.log('Dados validados!')
//     }
//     catch (error) {
//         console.log('Ocorreu erro..', error)
//     }
// }

// Login();


// 4 - Generators

// function* Carrinho(){
//     console.log("1 item");
//     yield 1;
//     console.log("2 itens");
//     yield 2;
//     console.log("3 itens");
//     yield 3;
// }

// const iterador = Carrinho();

// iterador.next()
// iterador.next()
// iterador.next()

