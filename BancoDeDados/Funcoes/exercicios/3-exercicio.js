/*
   Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
*/

const verificarPalindromo = (palavra) => {
   let resultado;
   const palindromo = palavra.split('').reverse().join('');

   if(palavra === palindromo) resultado = `A palavra ${palavra}, é um palindromo. O inverso de ${palavra} é ${palindromo}`;
   else resultado = `A palavra ${palavra}, não é um palindromo. O inverso de ${palavra} é ${palindromo}`;

   return resultado;
};

console.log(verificarPalindromo('Ana'));

