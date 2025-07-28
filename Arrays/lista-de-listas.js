const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
   `A aluna da posição é: ${lista[0][1]}.
   A nota dessa Aluna é: ${lista[1][1]}`
);

// const funcionarios = [
//    Nome = ['João', 'Lucas', 'Enzo', 'Eduardo'],
//    Salario = [2000, 3500, 1000, 2600]
// ]
const funcionarios = [
   ['João', 'Lucas', 'Enzo', 'Eduardo'],
   [2000, 3500, 1000, 2600]
]

for (let i = 0; i < funcionarios[0].length; i++) {
   console.log(
      `Funcionário: ${funcionarios[0][i]} recebe ${funcionarios[1][i]}\n`
   );
}