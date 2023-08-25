// EXERCÍCIO 01
export function anoBissexto(ano) {
    if(ano < 0){
        return "INVALID"
    }else if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        return "TRUE"
    }else{
        return "FALSE"
    }

}


// EXERCÍCIO 02 
export function pedraPapelTesoura() {
    const jokenpo = ["PEDRA", "PAPEL", "TESOURA"]
    const escolhaAleatoria = Math.floor(Math.rondom() * 3)
    return jokenpo[escolhaAleatoria]

}

// EXERCÍCIO 03
export function checkNumeroPrimo(numero) {
    if (numero < 2){
        return "INVALID"
    }
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return "FALSE"
        }
    }

    return "TRUE"
}