/*
   Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
*/

function outraFuncao() {
   var nome3 = "João";
   console.log("Dentro da função:", nome3);
}

outraFuncao();

console.log("Fora da função:", nome3);