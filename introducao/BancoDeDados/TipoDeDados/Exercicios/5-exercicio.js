/* PERGUNTA

Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

*/

/* METODOS UTILIZADOS

toUpperCase() = Deixa tudo maiusculo

toLowerCase() = Deixa tudo minusculo

length = Retorna o tamanho da string

charAt(index) = A partir de um index retorna um caracter da string

str[index] = Acesso direto ao index e retorna o caracter do index correspondete

indexOf(index) = Retorna um numero (o numero onde começa a palavra dentro da string) a partir do index onde o texto foi encontrado pela primeira vez. Se o texto nao foi encontrado retorna -1. Esse metodo é case sensitive, ou seja, a palavra tem que ser exatamente igual para retornar corretamente.

substring(index, index) = Extrai uma parte de uma string a partir de dois index (incio, fim)

replace(index, index) = Substitui o primeiro index pelo o segundo

replaceAll(index, index) = Substitui a string inteira pelo segundo index

split(separador) = Tranfoma a string em array a partir do index indetificado dentro da string principal

join(separador) = Retorna o array em uma string, usando o separador definido no index do metodo

trim() = Tira os espaçamento iniciais e finais

*/

const nome = 'Maria Vitoria';
const sobrenome = 'de Lima Luizetti Oliveira';
const nomeCompleto = nome + ' ' + sobrenome;

// toUpperCase()
console.log(nomeCompleto.toUpperCase());
// toLowerCase()
console.log(nomeCompleto.toLowerCase());

// length
console.log(nomeCompleto.length);

// charAt(index)
console.log(nomeCompleto.charAt(14));

// str[index]
console.log(nomeCompleto[3]);

// indexOf(index)
console.log(nomeCompleto.indexOf('Vitoria'));

// substring(index, index)
console.log(nomeCompleto.substring(0, 5));

// replace(index, index)
console.log(nomeCompleto.replace('Maria', 'Enzo'));

// replaceAll(index, index)
console.log(nomeCompleto.replaceAll(nomeCompleto, 'Enzo'));

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const lista = 'maçã, banana, pera';

// split(separador)
console.log(lista.split(','));

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const listaCompras = [
   'Maca',
   'Banana',
   'Abobora'
];

// join(separador)
console.log(listaCompras.join('-'));

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const nome2 = '                  Enzo Vinicius                         ';

// trim()
console.log(nome2.trim());





