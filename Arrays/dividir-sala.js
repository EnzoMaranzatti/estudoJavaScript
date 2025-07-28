/*
   O método slice() em JavaScript é uma função muito útil que permite extrair uma parte de um array e retornar um novo array contendo os elementos selecionados.

   - início: É o índice onde a extração começa. Este parâmetro é opcional e, se não for fornecido, o padrão é 0, ou seja, começa do primeiro elemento do array.

   - fim: É o índice onde a extração termina, mas o elemento nesse índice não é incluído no novo array. Este parâmetro também é opcional. Se não for fornecido, o slice() irá extrair até o final do array.

   O método slice() não altera o array original. Ele retorna um novo array com os elementos extraídos.
   Se o índice de início for maior que o comprimento do array, o resultado será um array vazio.
   Se o índice de fim for menor que o índice de início, o resultado também será um array vazio.
*/

const listaEstudante = [
   'Maria', 'Leticia', 'Eduardo', 'Lorenzo',
   'Adamastor', 'Cleber', 'Enzo', 'Diego',
   'Eduarda', 'Bia', 'Rena', 'Uno', ' Elesis',
   'Ronan', 'Cassandra', 'Wolverine', 'Surfista',
   'Hog Rider', 'Mago Magico', 'Calabreza', 'Camilo'
];

const sala1 = listaEstudante.slice(0, listaEstudante.length / 2);
const sala2 = listaEstudante.slice(listaEstudante.length / 2);

console.log(sala1);
console.log(sala2);