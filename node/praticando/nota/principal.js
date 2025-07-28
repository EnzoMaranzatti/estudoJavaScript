import calcularMedia from './nota.js';

export const aluno = {
   nome: 'Maria Vitoria',
   idade: 19,
   curso: 'direito',
   notaIntermediaria: 10,
   notaSemestral: 8,
   notaTrabalho: 7,
};

aluno.media = calcularMedia(aluno);

console.log(aluno.media);
