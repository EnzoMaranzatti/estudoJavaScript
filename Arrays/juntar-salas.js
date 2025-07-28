/*
   O método concat() em JavaScript é utilizado para unir dois ou mais arrays. Quando você usa esse método, ele não altera os arrays originais, mas retorna um novo array que contém todos os elementos dos arrays que você está concatenando.

   - Importante: Como mencionado, o concat() não modifica os arrays originais. Portanto, salaJS e salaPython permanecem inalterados após a operação.
*/

const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas);