/*
   Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
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

// Suponha que a matriz já foi criada como antes
matriz[2][1][2].push(15);
console.log(matriz[2][1]); // Ver a submatriz modificada








