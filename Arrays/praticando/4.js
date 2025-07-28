/*

   Crie um array linguagens com três linguagens de programação.
   Use um for para mostrar cada linguagem no console.

*/

const linguagens = ['JavaScript', 'Python', 'Java'];


for(let i = 0; i < linguagens.length; i++) {
   console.log(linguagens[i]);
}

for(let linguagem of linguagens) {
   console.log(linguagem);
}