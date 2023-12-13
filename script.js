// PRATICA |

/* let soma = 0

while(true){
    let numero = prompt("Digite um numero (Digite 0 para parar)")

    numero = parseInt(numero)
    if(numero ===0){
        break

    }
    soma += numero
}

console.log('A soma dos numero inseridos é:' + soma) */

//PRATICA ||

/* function imprimiNumero (){
    let numeroUsuarui = prompt("Informe um numero")
    numeroUsuarui = parseInt(numeroUsuarui)
    for (let i = 0; i<= numeroUsuarui; i++) {
        console.log(i)
        
    }
    
}
imprimiNumero() */



/* function arrayNuneros(){
    let arraySete = [1,2,5,4,5,6,50]

    for(let i = 0; i < arraySete.length; i++){
        console.log("Elemento no indice " +i+ ":" + arraySete[i])

    }
    
}
arrayNuneros() */


// PRATICA |||

const imprimeIdice = () =>{
    const array = [1,2,3,4,5,6,7]

    for(let i = 0; i < array.length; i++){
        console.log(`O numero ${array[i]} esta no indice ${i}`)

    }
}

imprimeIdice()
