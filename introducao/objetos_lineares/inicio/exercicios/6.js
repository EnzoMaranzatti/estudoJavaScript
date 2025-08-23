/*
   6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
*/

const livro = {
   titulo: 'O Senhor dos Anéis',
   autor: 'J.R.R. Tolkien',
   anoPublicacao: 1954,
   genero: 'Fantasia'

}

delete livro.avaliacao;
console.log(livro);