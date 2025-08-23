/*
   Declare três variáveis 
   diferentes (uma para cada tipo: string, número 
   e booleano) e atribua valores a elas. Em seguida, 
   exiba o tipo de cada variável no console. 
*/

const nome = "Maria Vitoria";
let idade = 19;
let estudando = false;

if(estudando == false) console.log(`Meu nome é ${nome}, tenho ${idade} anos. E não estou estudando [${estudando}]`);
else console.log(`Meu nome é ${nome}, tenho ${idade} anos. E estou estou estudando [${estudando}]`);

console.log(`${nome} = String`);
console.log(`${idade} = Numero`);
console.log(`${estudando} = Booleano`);