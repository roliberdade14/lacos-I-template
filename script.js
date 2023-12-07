let soma = 0

while(true){
    let numero = prompt("Digite um numero (Digite 0 para parar)")

    numero = parseInt(numero)
    if(numero ===0){
        break

    }
    soma += numero
}

console.log('A soma dos numero inseridos é:' + soma)