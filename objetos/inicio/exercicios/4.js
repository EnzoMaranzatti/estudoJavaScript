/*
   4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

   No final do arquivo livro.js, adicione uma avaliação ao objeto.

   Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

   Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
*/

const livro = {
   titulo: 'O Senhor dos Anéis',
   autor: 'J.R.R. Tolkien',
   anoPublicacao: 1954,
   genero: 'Fantasia',
   avaliacao:  null

}
const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro['anoPublicacao'];

livro.avaliacao = 10;

let mostrarAvaliacao = '';

if(livro.avaliacao != null) {
   mostrarAvaliacao = `O livro tem nota ${livro.avaliacao}`
} 

const mostrarDetalhes = `O livro se chama ${livro['titulo']} do autor ${livro['autor']} publicado ${livro['anoPublicacao']} à ${livro['idadePublicacao']} anos atrás, tendo como seu gênero principal ${livro['genero'].toLowerCase()}. ${mostrarAvaliacao}`;

console.log(mostrarDetalhes);