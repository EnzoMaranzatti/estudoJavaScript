/*
   Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
*/

function juntarArray (array1, array2) { return array1.concat(array2); }

const menuPrincipal = [
   ['Enroladinhos Assados', 'Enroladinhos Fritos', 'Pasteis', 'Coxinhas'],
   ['Calabreza', 'Dois Queijos', 'Quatro Queijos', 'Tradicional']
];
const BellaCapri = menuPrincipal[1];
const VilaSalgados = menuPrincipal[0];

const menuSobremesa = [
   ['Pizza de Nutella'],
   ['Pastel de Nutella']
];
const BellaCapriSobremesa = menuSobremesa[0];
const VilaSalgadosSobremesa = menuSobremesa[1];

console.log('MENU PRINCIPAL - BELLA CAPRI:');
for(let i = 0; i < BellaCapri.length; i++) console.log(`${i + 1} - ${BellaCapri[i]}`); 

console.log('\nMENU SOBREMESA - BELLA CAPRI:');
for(let i = 0; i < BellaCapriSobremesa.length; i++) console.log(`${i + 1} - ${BellaCapriSobremesa[i]}`); 

console.log('\n-----------------------------------------------------------------------\n');

console.log('MENU PRINCIPAL - Villa Salgados:');
for(let i = 0; i < VilaSalgados.length; i++) console.log(`${i + 1} - ${VilaSalgados[i]}`); 

console.log('\nMENU SOBREMESA - Villa Salgados:');
for(let i = 0; i < VilaSalgadosSobremesa.length; i++) console.log(`${i + 1} - ${VilaSalgadosSobremesa[i]}`); 

console.log('\n-----------------------------------------------------------------------\n');

console.log('MENU COMPLETO:');
const menuPrincipalCompleto = juntarArray(BellaCapri, VilaSalgados);
const menuSobremesaCompleto = juntarArray(BellaCapriSobremesa, VilaSalgadosSobremesa);

const menuCompleto = juntarArray(menuPrincipalCompleto, menuSobremesaCompleto);

console.log(menuCompleto);