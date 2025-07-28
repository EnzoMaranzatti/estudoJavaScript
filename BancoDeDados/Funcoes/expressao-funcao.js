/*
   Quando usamos expressões de funções ou seja declarar o valor da função a uma variavel, ele é lido apenas quando o interpretador chega ao código, sendo assim, caso declare um console.log() antes da função ocorrera um erro, dizendo que a função não existe. Porém ao declarar um função normalmente sem variaveis, o interpretador do javaScript aplica o efeito "hoisting" (puxando para cima). Sendo assim o interpretador não precisa chegar na linha de código da função para ela ser executada, ela já é executada primeira internamente.
*/

const media = function (nota1, nota2, faltas) {
   let mediaFinal = (nota1 + nota2) / 2;
   let status;

   if(mediaFinal < 7 && faltas > 4) {
      status = 'Aluno Reprovado';
   } else {
      status = 'Aluno Aprovado';
   }

   return {
      nota1: nota1,
      nota2: nota2,
      media: mediaFinal,
      faltas: faltas,
      status: status
   };
};

// console.log(`${media(5, 7, 4).status}
//    Nota1: ${media(5, 7, 4).nota1}
//    Nota2: ${media(5, 7, 4).nota2}
//    Média: ${media(5, 7, 4).media}
//    Faltas: ${media(5, 7, 4).faltas}`);

const resultado = media(5,2,4);

console.log(
   `Informações do Aluno:
   
   Nota 1: ${resultado.nota1}
   Nota 2: ${resultado.nota2}
   Media: ${resultado.media}
   Estado: ${resultado.status}
   `
);

/*
   Quando passamos um valor undefined a uma paramentro, ele irá retornar o valor padrão atribuido nos argumentos da função, sendo assim 
   a variavel resultado4 que coloca como parametro udefined o argumento b ele retorna o valor padrão, ou seja, neste caso o valor 2. Caso 
   fosse null o retorno seria 0 e o resultado da expressão daria 0 também, pois qualquer numero multiplicado por 0 é 0.
*/
function calculaProduto(a, b = 2, c = 1) {
  return a * b * c;
}

const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);