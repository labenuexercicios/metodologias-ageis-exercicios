// EXERCÍCIO 01
export function anoBissexto(ano) {
   if (ano<0){
    return 'INVALID'


   } else if ((ano%4 ===0 && ano % 100 !==0) || ano%400 === 0) {
        return 'TRUE'

   } else {
    return 'FALSE'
   } 
}


// EXERCÍCIO 02
export function pedraPapelTesoura() {
   const escolhas = ["PEDRA", "PAPEL", "TESOURA"] // Criando array com as escolhas
   const aleatorizar = Math.floor(Math.random() * escolhas.length) // Aleatorizando as escolhas dentro de uma VAR
   return escolhas[aleatorizar] //Retornando o metodo dentro da VAR
}


// EXERCÍCIO 03
export function checkNumeroPrimo(numero) {          
            
      if (numero <= 1 || isNaN(numero)) {
         return 'INVALID'
      } else{
      for (const i = 2; i < numero; i++){
         if(numero % i === 0){
            return 'FALSE'
         } else  {
            return 'TRUE'
         
         }
      }
   }
   }

   
   
   
   /* if (numero <= 1 || isNaN(numero)) {
      return 'INVALID'
   } else{
   for (const i = 2; i < numero; i++){
      if(numero % i === 0){
         return 'FALSE'
      } else  {
         return 'TRUE'
      
      }
   }
}
}
*/


/* 
Escreva uma função que recebe um número pertencente exclusivamente ao conjunto dos Naturais, e retorna uma string com "TRUE" para primo, "FALSE" para não primo e "INVALID" para valores de entrada <= 1. Exemplo: input: 13, output: "TRUE"
Exemplo: input: 12, output: "FALSE"
Exemplo: input: 1, output: "INVALID"
*/