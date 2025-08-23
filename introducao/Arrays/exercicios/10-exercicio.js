/*
   Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

   Dicas:

   comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
   você pode resolver usando um for dentro de outro for.
*/

// const matriz = [];

// for(let i = 0; i < 3; i++) {
//    matriz.push([i]);
//    for(j = 0; j < 3; j++){
//       matriz.push([j]);
//    }
// }

// console.log(matriz);

const matriz = [];
var valor = 1;

for (let i = 0; i < 3; i++) {
  const linha = [];

  for (let j = 0; j < 3; j++) {
    const submatriz = [];

    for (let k = 0; k < 3; k++) {
      const sublinha = [];

      for (let l = 0; l < 3; l++) {
        sublinha.push(valor++);
      }

      submatriz.push(sublinha);
    }

    linha.push(submatriz);
  }

  matriz.push(linha);
}

console.log(matriz);







