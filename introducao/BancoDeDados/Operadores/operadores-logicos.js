const aluno = 'Maria Vitoria';
const notaFinal = 6;
const faltas = 5;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) console.log('Reprovado, boas festas');
else console.log('Nao foi reprovado por falta');

if (faltas >= 2 && !advertencias ) console.log('Recebeu bonus');
else console.log('Nao recebeu bonus');
