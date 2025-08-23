/*
   5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
*/

const livro = {
   titulo: 'O Senhor dos Anéis',
   autor: 'J.R.R. Tolkien',
   anoPublicacao: 1954,
   genero: 'Fantasia'

}

livro.genero = 'Aventura';

console.log(livro)