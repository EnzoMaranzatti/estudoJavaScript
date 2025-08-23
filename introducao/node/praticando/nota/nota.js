import { aluno } from './principal.js'

export default function calcularMedia() {
   return ((aluno.notaIntermediaria + aluno.notaSemestral) / 2) * 0.7 + aluno.notaTrabalho * 0.3; 
}