/*
   2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

   rua (string): nome da rua.
   cidade (string): nome da cidade.
   estado (string): nome do estado.
   Preencha as subpropriedades do objeto endereco com valores fictícios.

   Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

   No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
*/

const infoPessoa = {
   nome: "João",
   idade: 30,
   solteiro: true,
   hobbies: ["futebol", "leitura", "jogos"],
   endereco: {
      rua: "Rua das Flores",
      cidade: "São Paulo",
      estado: "SP"
   }
}

function mostrarInfoPessoa(obj) {
   console.log("Nome:", typeof obj.nome, obj.nome);
   console.log("Idade:", typeof obj.idade, obj.idade);
   console.log("Solteiro:", typeof obj.solteiro, obj.solteiro);
   console.log("Hobbies:", Array.isArray(obj.hobbies) ? "array" : typeof obj.hobbies, obj.hobbies.join(", "));
   
   // mostrar o endereço
   if (obj.endereco) {
       console.log("Endereço:");
       console.log("- Rua:", obj.endereco.rua);
       console.log("- Cidade:", obj.endereco.cidade);
       console.log("- Estado:", obj.endereco.estado);
   }
}

mostrarInfoPessoa(infoPessoa);
