
const alunos = ['Ana', 'Maria', 'Eduardo'];
const medias = [10, 6.5, 8, 7.5];

//                                nome, indice
// _ é usado para indicar que o parametro não vai ser usado, mas tem que existir
const reprovados = alunos.filter((_, indice) => {
   return medias[indice] < 7;   
});

console.log(reprovados);