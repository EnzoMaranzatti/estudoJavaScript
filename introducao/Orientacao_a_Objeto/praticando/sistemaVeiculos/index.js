import Veiculo from "./Veiculo.js";
import Carro from "./Carro.js";
import CarroEsportivo from "./CarroEsportivo.js";

// Instâncias
const v1 = new Veiculo("Mercedes", "C300", 2020, 50000);
const c1 = new Carro("VW", "Saveiro", 2015, 20000, 2);
const e1 = new CarroEsportivo("Porsche", "911", 2022, 800000, 2, 350);

// POLIMORFISMO: mesmo método chamado em objetos de classes diferentes
const frota = [v1, c1, e1];
frota.forEach((v) => `${v.informacoes()} \n`);

console.log("\n-- Teste: set inválido (deve cair no catch) --");
try {
  e1.valor = -1000000; // setter lança erro
} catch (err) {
  console.log("Erro ao alterar valor:", err.message);
}

console.log("\n-- Teste: set válido --");
e1.valor = 900000; // ok
e1.informacoes();  // exibe com o novo valor
