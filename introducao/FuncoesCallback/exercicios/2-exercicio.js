/*
  2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
*/

function executaOperacaoEmArray(array, callback) {
  array.forEach((elemento, indice) => {
    const resultado = callback(elemento);
    console.log(`Índice ${indice} | Valor original: ${elemento} | Resultado: ${resultado}`);
  });
}

const numeros = [1, 2, 3, 4, 5];

function dobrar(valor) {
  return valor * 2;
}

executaOperacaoEmArray(numeros, dobrar);
