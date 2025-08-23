const estudante = 'Fernando';
const estaAprovado = true;

if(estaAprovado)  console.log('Parabens, boas festas'); 
else console.log('REPROVADO, boas festas');

if(estudante === 'Fernando') console.log(`Ola, ${estudante}`);
else console.log('Quem e voce');

/* Coerção de Tipos em JavaScript

A coerção de tipos em JavaScript refere-se à conversão automática e implícita de um tipo de dado para outro durante operações. Isso pode acontecer em operações matemáticas, comparações ou concatenações de strings. Exemplo:

let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero;
console.log(resultado); // Saída: '105' (o número 5 foi convertido para string e concatenado com a string ‘10’)

*/

/* Conversão de Tipos em JavaScript

A conversão de tipos é a transformação explícita de um tipo de dado em outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro. Exemplo:

let valorString = '20';
let valorNumero = parseInt(valorString);

console.log(valorNumero); // Saída: 20 (valor convertido para número usando parseInt)

*/