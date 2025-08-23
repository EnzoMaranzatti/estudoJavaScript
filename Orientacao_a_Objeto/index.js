import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const listaCursos = ["Java", "Python", "JavaScript", "C++", "C#", "Ruby", "Go", "Kotlin", "Swift", "PHP", "Rust", "C", "Assembly"];

const novoUser = new User('Juliana', 'J@j.com', '2024-01-01');
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas("Cassio", "cassio@gmail.com");
console.log(dadosFicticios);

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente("Ana", "ana@r.com", "2024-01-01");
// console.log(novaDocente.exibirInfos());
