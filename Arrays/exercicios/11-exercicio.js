/*
   Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
*/

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
const submatriz = matriz[1][2];
console.log(submatriz);







