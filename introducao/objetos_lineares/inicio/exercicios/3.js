/*
   3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
*/

const livro = {
   titulo: 'O Senhor dos Anéis',
   autor: 'J.R.R. Tolkien',
   anoPublicacao: 1954,
   genero: 'Fantasia'
}
const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro['anoPublicacao'];

const mostrarDetalhes = `O livro se chama ${livro['titulo']} do autor ${livro['autor']} publicado ${livro['anoPublicacao']} à ${livro['idadePublicacao']} anos atrás, tendo como seu gênero principal ${livro['genero'].toLowerCase()}`;

console.log(mostrarDetalhes);