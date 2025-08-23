/*
  Você recebeu um array com pontuações de alunos em uma prova:

   const notas = [8.5, 7.0, 9.2, 6.5, 10.0];

   Utilize o método some() para verificar se algum aluno tirou nota inferior a 7. Depois, use o método every() para verificar se todos os alunos foram aprovados com nota igual ou superior a 6. Mostre o resultado de ambas as verificações no console.

*/

/*

   | Método  | Verifica se...                            | Retorna `true` se... |
   | ------- | ----------------------------------------- | -------------------- |
   | `some`  | **Algum** elemento cumpre a condição      | Pelo menos um cumpre |
   | `every` | **Todos** os elementos cumprem a condição | Todos cumprem        |

   Retorna um valor booleano
*/

const notas = [8.5, 7.0, 9.2, 6.5, 10.0];

const verificarNotas = notas.some(nota => nota < 7);

const alunosAprovados = notas.every(nota => nota >= 6);

console.log("Algum aluno tirou nota inferior a 7?", verificarNotas);
console.log("Todos os alunos foram aprovados com nota >= 6?", alunosAprovados); 





