const estudantes = require('../estudantes.json');

estudantes.sort((a, b) => {
   if(a.nome > b.nome) return 1;
   if(a.nome < b.nome) return -1;
   return 0;
})

const estudantesNome = estudantes.map(estudante => estudante.nome);

console.log(estudantesNome);

