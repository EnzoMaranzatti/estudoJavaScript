/*
  3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
*/


const arrayNumber = [20, 340, 20, 204, 430];

function procurarNumber (num) {
   return `Numero escolhido: ${num} | Retorno (indice): ${arrayNumber.indexOf(num)} \n${arrayNumber}`;
} 

console.log(procurarNumber(30));
