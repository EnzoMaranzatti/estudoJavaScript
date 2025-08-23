// Toda arrow funcion é uma expressão de função, ou seja, tem que receber uma variavel

const media = (nota1, nota2, faltas) => {
   let mediaFinal = (nota1 + nota2) / 2;
   let status;

   if(mediaFinal < 7 && faltas > 4) {
      status = 'Aluno Reprovado';
   } else {
      status = 'Aluno Aprovado';
   }

   return {
      nota1: nota1,
      nota2: nota2,
      media: mediaFinal,
      faltas: faltas,
      status: status
   };
};

const resultado = media(5,2,4);

console.log(
   `Informações do Aluno:
   
   Nota 1: ${resultado.nota1}
   Nota 2: ${resultado.nota2}
   Media: ${resultado.media}
   Estado: ${resultado.status}
   `
);

// const exibirNome = (nome) => {
//    return nome;
// }
// A função acima é igual abaixo, apenas está reduzido, não precisa colocar return.
const exibirNome = (nome) => nome;

console.log(exibirNome('Maria'));