const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagem;
objPersonagem2.nome = 'Maria Vitoria';
/*
   Ao criar uma nova variável, estamos apenas criando uma nova referência para o mesmo objeto. Sendo assim o valor alterado em objPersonagem2 também será alterado em objPersonagem, porque ambos estão apontando para o mesmo objeto (endereco).
*/

const objPersonagem3 = {...objPersonagem};
objPersonagem3.nome = 'Enzo Vinicius';

/*
   Ótima pergunta! Isso se deve ao conceito de herança prototípica em JavaScript. Quando você cria um novo objeto usando Object.create(), esse novo objeto não possui suas próprias propriedades inicialmente, mas ele herda as propriedades do objeto que foi passado como protótipo.

   Vamos detalhar isso com um exemplo:

   const objPersonagem = {
      nome: "Gandalf",
      classe: "mago",
      nivel: "20"
   };

   const objPersonagem2 = Object.create(objPersonagem);

   console.log(objPersonagem2); // {} - O objeto parece vazio
   console.log(objPersonagem2.nome); // "Gandalf" - Acessando a propriedade herdada

   No exemplo acima, objPersonagem2 é um novo objeto que não possui suas próprias propriedades, por isso o console.log(objPersonagem2) exibe {}. No entanto, quando você tenta acessar objPersonagem2.nome, o JavaScript procura essa propriedade no próprio objeto objPersonagem2. Como ela não está presente lá, ele "sobe" na cadeia de protótipos e encontra a propriedade nome no objeto objPersonagem, retornando "Gandalf".

   Esse comportamento é uma característica fundamental da herança prototípica em JavaScript. O novo objeto (objPersonagem2) pode acessar as propriedades do objeto protótipo (objPersonagem) mesmo que não as tenha definido diretamente.
*/



