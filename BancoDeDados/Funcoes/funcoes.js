// Parametros/Argumentos
// Retorno

// function exibirInfosEstudante(nome, nota) {
//    console.log(`O nome é ${nome} e a nota é ${nota}`)
// }

// exibirInfosEstudante('Enzo', 10);

function exibirInfosEstudante(nome, nota) {
   return `O nome é ${nome} e a nota é ${nota}`;
}

console.log(exibirInfosEstudante('Enzo', 5));
console.log(exibirInfosEstudante('Ana', 8));

// declaração da função
function somarDoisNumeros(numA, numB) {
 return numA + numB;
}

// execução (ou chamada) da função
somarDoisNumeros(2, 2);

// atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);
console.log(resultado);

function dividir(dividendo, divisor) {
 return dividendo / divisor;
}

const resultado2 = dividir(10, 2);
console.log(`o resultado é ${resultado}`); // o resultado é 5