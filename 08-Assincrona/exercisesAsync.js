// 1. Contagem Regressiva com Callbacks

function contar(numero, callback){
    setTimeout(() => {
        if (numero > 0){
            console.log(`Contador: ${numero}`)
            callback(numero - 1)
            
        }else{
           console.log("Decolagem!")
        }
        
    },1000)
}

contar(3, (numero) => {
        contar(numero, (numero) => {
                contar(numero, (numero) => {
                    contar(numero, () => {})                    
                });
        });
});


