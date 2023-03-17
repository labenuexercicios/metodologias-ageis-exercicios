// EXERCÍCIO 01
export function anoBissexto(parameter) {
        if (parameter < 0){
        return `INVALID`
    }    
    else if (parameter % 4 == 0 && parameter % 100 !== 0 || (parameter % 400 == 0)){
        return `TRUE`
    }else{
        return `FALSE`
    }
}


// EXERCÍCIO 02
export function pedraPapelTesoura() {
//const jogo = ["PEDRA", "PAPEL", "TESOURA"]
const indice = Math.floor((Math.random()*3) + 1)
switch (indice) {
    case 1:
        return `PEDRA`
    case 2:
        return `TESOURA`
    default:
        return `PAPEL`
        
}
}

// EXERCÍCIO 03
export function checkNumeroPrimo(parameter) {
    if (parameter <= 1) return `INVALID`

    for(let i = 2; i < parameter; i++){
        if(parameter % i === 0){
            return `FALSE`
        }
    }
    return `TRUE`
}