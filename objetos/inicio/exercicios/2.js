/*
   2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

   Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

   Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

   Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/

const livro = {
   titulo: 'O Senhor dos Anéis',
   autor: 'J.R.R. Tolkien',
   anoPublicacao: 1954,
   genero: 'Fantasia'
}
const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `O livro se chama ${livro.titulo} do autor ${livro.autor} publicado ${livro.anoPublicacao} à ${livro.idadePublicacao} anos atrás, tendo como seu gênero principal ${livro.genero.toLowerCase()}`;

console.log(mostrarDetalhes);