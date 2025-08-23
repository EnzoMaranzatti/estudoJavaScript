/* 
   Por padrão o javaScript ao declarar uma variavel 
   sem a palavra-chave o interpretador por padrão adiciona var
   
   var = Escopo Global
   let = Escopo Bloco
   const = Escopo Global
*/
let estudante;
if (1 > 0) {
   estudante = 'Caroline';
   console.log(estudante);
}
 
console.log(estudante);

/* ESCOPO
   É o contexto atual de execução, em que valores e
   expressões são "visíveis" ou podem ser referenciadas. 
   Se uma variável ou outra expressão não estiver 
   "no escopo atual", então não está disponível para uso.
   Os escopos também podem ser em camadas em uma 
   hierarquia, de modo que os escopos filhos tenham 
   acesso aos escopos pais, mas não vice-versa.

   Uma function serve como um procedimento em JavaScript,
   e portanto, cria um escopo, de modo que (por exemplo) 
   uma variável definida exclusivamente dentro da função 
   não pode ser acessada de fora da função ou dentro 
   de outras funções.

   O JavaScript trabalha com três escopos:
   1. Global
   2. Bloco
   3. Função

   * Variaveis declaradas dentro de uma função, sendo ela
   const e let, são locais ou seja serão visivel apenas 
   dentro do bloco da função. Porém ao declarar uma variavel
   var dentro de uma função ela ainda será de escopo global
   sendo uma excessão da regra do escopo de função. Sendo assim
   toda varivel sem ser var são locais.
*/
