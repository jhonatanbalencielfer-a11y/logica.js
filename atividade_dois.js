const PromptSync = require("prompt-sync")();

function mostrarPares (numero)
{
    let pares=[]

    for(let i = 0; i <= numero; i++) {

        if(i % 2 === 0) {
            pares.push(i)
        }
    }
    console.log("numeros pares até "+ numero + ":", pares);
}

mostrarPares(numero);