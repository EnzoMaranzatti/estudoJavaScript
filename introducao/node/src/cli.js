// O require so funciona com modulos, arquivo javascript ou equivalentes
// process.argv: Pega os valores e instruções do terminal e é passado em um array
// const caminhoArquivo = process.argv;
// const link = caminhoArquivo[2];


import fs from 'fs'; // const fs = require('fs');
import path from 'path';
import tratarErro from './erros/funcoesErro.js'; //const trataErros = require('./erros/funcoesErro');   
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helper.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();
program
   .version('0.0.1')
   .option('-t, --texto <string>', 'Caminho do texto a ser processado')
   .option('-d, --destino <string>', 'Caminho da pasta onde salvar o arquivo de resultado')
   .action((options) => {
      const { texto, destino } = options;
      if(!texto || !destino) {
         console.error(chalk.red('Erro: favor inserir caminho de origem e destino'))
         program.help();
         return
      } 

      const caminhoTexto = path.resolve(texto);
      const caminhoDestino = path.resolve(destino);

      try {
         processaArquivo(caminhoTexto, caminhoDestino)
         console.log(chalk.green('Texto processado com sucesso'));
      } catch(erro) {
         console.log('Ocorreu um erro no processamento', erro);
      }
   })

program.parse();

// const caminhoArquivo = process.argv;
// const link = caminhoArquivo[2];
// const endereco = caminhoArquivo[3];

function processaArquivo(texto, destino) {
   fs.readFile(texto, 'utf-8', (erro, texto) => {
      // Todo o codigo que é possivel que de erro, e captura esse erro e joga para o catch
      try {
         if(erro) throw erro;
         const resultado = contaPalavras(texto);
         cria_e_salvaArquivo(resultado, destino)
      } catch(erro) {
         // O que fazer com o erro
         tratarErro(erro);
      }
   });
}

async function cria_e_salvaArquivo(listaPalavras, endereco) {
   const arquivoNovo = `${endereco}/resultado.txt`;
   const textoPalavras = montaSaidaArquivo(listaPalavras);
   try {
      await fs.promises.writeFile(arquivoNovo, textoPalavras); // Nao retorna nada
      console.log('Arquivo Criado');
   } catch(erro) {
      throw erro;
   }
}

/* 
   function cria_e_salvaArquivo(listaPalavras, endereco) {
      const arquivoNovo = `${endereco}/resultado.txt`;
      const textoPalavras = JSON.stringify(listaPalavras); // Converte para texto

      fs.promises.writeFile(arquivoNovo, textoPalavras)
      .then(() => {
         console.log('arquivo criado');
      })
      .catch((erro) => {
         throw erro;
      })
      .finally(() => console.log('operacao finalizada'));
   }
*/

/*
   EXPORT, IMPORT, EXPORT DEFAULT:

   Com certeza! Vamos detalhar os tipos de importação em JavaScript (ES Modules) e quando usar cada um:Tipos de Importação em JavaScript (ES Modules)
   Importação Nomeada (Named Import)
      
   Como funciona:
   Você especifica os nomes exatos dos itens que deseja importar entre chaves {}.
   Os nomes devem corresponder exatamente aos nomes das exportações nomeadas no módulo de origem.


   Quando usar:
   Quando você precisa importar itens específicos de um módulo que exporta múltiplos valores nomeados.
   Quando você conhece os nomes exatos dos itens que deseja usar.

   export const PI = 3.14159;

   // arquivo: principal.js
   import { somar, PI } from './calculadora.js';

   console.log(somar(5, 3)); // Saída: 8
   console.log(PI); // Saída: 3.14159
                     
   Importação Padrão (Default Import)
      
   Como funciona:
   Você importa a exportação padrão do módulo sem usar chaves {}.
   Você pode escolher qualquer nome para a variável que receberá a exportação padrão.


   Quando usar:
   Quando você precisa importar a exportação principal de um módulo que define uma única exportação padrão.
   Geralmente usado para importar classes, funções ou objetos que representam a funcionalidade principal do módulo.

   // arquivo: principal.js
   import util from './utilitario.js';

   util(); // Saída: Função utilitária
                     
   Importação com Alias (Import as)
         
   Como funciona:
   Você importa um item com um nome diferente do nome original usando a palavra-chave as.


   Quando usar:
   Quando você precisa evitar conflitos de nomes entre itens importados de diferentes módulos.
   Quando você quer usar um nome mais descritivo ou abreviado para um item importado.

   // arquivo: principal.js
   import { somar as adicionar } from './calculadora.js';

   console.log(adicionar(5, 3)); // Saída: 8
                     
   Como funciona:
   Você importa todo o módulo como um objeto, onde as propriedades do objeto correspondem às exportações do módulo.


   Quando usar:
   Quando você precisa acessar múltiplos itens de um módulo e não quer listar todos os nomes individualmente.
   Quando você quer manter o código mais conciso e evitar a importação explícita de cada item.

   export const PI = 3.14159;

   // arquivo: principal.js
   import * as calc from './calculadora.js';

   console.log(calc.somar(5, 3)); // Saída: 8
   console.log(calc.PI); // Saída:
                    

*/

/*

   THEN, ASYNC, AWAIT, PROMISES:

   #Promises:

      Em JavaScript, uma "promise" (promessa) é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona. Pense nela como um "compromisso" de que algo será feito, mas não sabemos exatamente quando. A promise tem três estados possíveis:

      Pendente (pending): O estado inicial, antes da operação ser concluída ou falhar.
      Cumprida (fulfilled): A operação foi concluída com sucesso e um valor resultante está disponível.
      Rejeitada (rejected): A operação falhou e um motivo de falha está disponível.

   #then:

      O método .then() é usado para lidar com o resultado de uma promise quando ela é cumprida (resolvida com sucesso). Ele recebe uma função de callback que será executada quando a promise for resolvida. Essa função recebe o valor resultante da promise como argumento.
                  
   #catch:

      O método .catch() é usado para lidar com erros ou rejeições em uma promise. Ele também recebe uma função de callback que será executada quando a promise for rejeitada. Essa função recebe o motivo da rejeição como argumento.
   
   #finally:

      O método .finally() é usado para executar um bloco de código que sempre será executado, independentemente de a promise ser cumprida ou rejeitada. É útil para realizar tarefas de limpeza ou finalização, como fechar conexões ou liberar recursos.

   #async:

      A palavra-chave async é usada para declarar uma função assíncrona. Uma função assíncrona é uma função que pode conter expressões await. A palavra-chave async permite que você escreva código assíncrono de forma mais síncrona, facilitando a leitura e o entendimento.
   
   #await:

      A palavra-chave await é usada dentro de uma função async para pausar a execução da função até que uma promise seja resolvida ou rejeitada. Ela retorna o valor resultante da promise resolvida.

*/