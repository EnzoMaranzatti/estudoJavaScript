import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const listaCursos = ["Java", "Python", "JavaScript", "C++", "C#", "Ruby", "Go", "Kotlin", "Swift", "PHP", "Rust", "C", "Assembly"];

const novoUser = new User('Juliana', 'J@j.com', '2024-01-01', 'professor');
console.log(novoUser.exibirInfos());

novoUser.nome = "";
console.log(novoUser.nome);

// novoUser.#nome = "Marcia";
// console.log(novoUser.exibirInfos());
// console.log(novoUser.#nome);
// const novoAdmin = new Admin("Rodrigo", "rodrigo@gmail.com", "1990-01-01");
// console.log(novoAdmin.nome);