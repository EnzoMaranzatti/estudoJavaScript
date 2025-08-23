const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5'); 

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('A media é ' + total.toFixed(2));

const nome = "Juliana";
console.log("Meu nome é " + nome);

/* FUNCÕES

toFixed(x) = uma função que define a quantidade de casas decimais que será exibida. Basta colocar o número desejado dentro dos paranteses.

Number.parseInt('string') = função ultilizada para transformar uma string em uma número. Neste caso em um número inteiro, caso seja um número flutuante é necessário utilizar o Number.parseFloat('string').

*/

/* NaN

console.log(5 * 'a'); // NaN
console.log(5 * '5'); // 25

Nesse caso, o resultado é 25 e não NaN como esperado, afinal de contas estamos tentando multiplicar números e letras. O JavaScript, nestes casos, sempre tenta converter de forma implícita a string em número antes de tentar efetuar a operação aritmética.

* É sempre importante lembrar da conversão implícita quando estamos trabalhando com operações entre dados, e garantir que estas operações estejam recebendo apenas dados do tipo Number.

O caso de operações mal formadas é uma das ocorrências mais comuns de NaN no código, mas não é a única. Existem cinco tipos de operações que podem retornar NaN:

   1. Tentativas de converter para números valores que não podem ser convertidos, como parseInt(‘texto’) ou Number(undefined). Os valores booleanos true e false podem ser convertidos para 1 e 0 usando Number(), porém retornarão NaN caso a tentativa de conversão seja feita com parseInt().

   2. Operações matemáticas que não resultam em números reais, por exemplo Math.sqrt(-1).

   3. Operações onde um dos valores é NaN ou pode ser convertido para NaN, por exemplo 5 * ‘a’, 5 + NaN.

   4. Formatos indeterminados como Infinity / Infinity, Infinity - Infinity. 

   5. Outros casos onde um valor não pode ser representado como número.

*COMO VERIFICAR SE UM VALOR É NaN?*

Você pode utilizar os métodos Number.isNaN() ou isNaN()

const numero = 10;
const nome = 'Ana';

Number.isNaN(numero) // false
Number.isNaN(nome) // false
Number.isNaN(NaN) // true

Observe que nome não é avaliado como NaN nesse contexto. Porém, observe este novo exemplo, utilizando a função isNaN() ao invés de Number.isNan()

isNaN(10) // false
isNaN(nome) // true
isNaN(NaN) // true

A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número. Você pode utilizar um ou outro dependendo da sua necessidade.

*/

/* INFINITY
O Infinity é um valor especial no JavaScript que representa um número infinito. Ele pode surgir em operações matemáticas que não têm um resultado finito, como por exemplo, quando você divide um número por zero.

Por exemplo, se você fizer console.log(1 / 0), o resultado será Infinity. É importante lembrar que Infinity é um valor numérico, mas não é um número real.

 */