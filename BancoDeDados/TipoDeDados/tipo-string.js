const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'Estudar bastante!'";
const citacao = `Ju diz: "Nosso lema é 'Estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);
console.log('A estudante chama ' + estudante);

// Template string
console.log(`A estudante chama  ${estudante}`);

// Funções prontas para strings
const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);

console.log(Number(true));
Number(false);

/* METODOS

includes() = Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:

const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true

-------------

toLowerCase() = Converte todos os caracteres da string para letras minúsculas.

const texto = 'POR FAVOR, NÃO GRITE';
texto.toLowerCase(); // retorna 'por favor, não grite'

-------------

toUpperCase() = Converte todos os caracteres da string para letras maiusculas. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods

*/

/* LIST OF UNICODE CHARACTERS

https://en.wikipedia.org/wiki/List_of_Unicode_characters
*/

// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'
// const c = '\u00A9'
// const registro = '\u00AE'

// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)
// console.log(c)
// console.log(registro)