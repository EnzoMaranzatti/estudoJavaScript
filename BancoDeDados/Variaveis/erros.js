// console.log(variavel);
// console.log('oi'

/* DETALHAMENTO DE ERROS

   1. Caminho:
   A primeira coisa que o Node nos fornece é o 
   caminho do arquivo onde ocorreu o erro. É a 
   nossa pasta, é o nosso arquivo erros.js, 
   seguido de :1, que é o número da linha onde ele 
   identificou o erro.

   2. Referencia do erro:
   Em seguida, ele está copiando o código e assinala 
   com uma seta exatamente onde na linha ocorreu o erro, 
   ou seja, até a parte do console.log ele leu sem 
   problemas. Quando chegou em variavel, ele já 
   não conseguiu, porque estamos tentando passar para o
   console uma variável que não existe, literalmente.

   3. STACK TRACE:
   A parte seguinte, que geralmente assusta um pouco, 
   é o que chamamos de Stack Trace. O que é Stack Trace? 
   É esta lista de arquivos estranhos e mensagens 
   estranhas que enchem o nosso terminal de informações. 
   Ela passa uma quantidade de nomes de arquivos, 
   uma quantidade de caminhos de arquivos que não sabemos 
   onde estão.

   O que é o Stack Trace? É uma pilha de comandos que 
   foram chamados internamente pelo Node para executar o 
   programa. Ou seja, quando executamos um programa que 
   está dentro de variáveis.js, escopo.js, internamente 
   o Node chama muitas outras ferramentas nos bastidores,
   e isso ocorre de forma silenciosa normalmente.

*/