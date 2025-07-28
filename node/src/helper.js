function filtraOcorrencias(paragrafo) {
   return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
   let textoFinal = '';
   listaPalavras.forEach((paragrafo, index) => {
      const duplicadas = filtraOcorrencias(paragrafo).join(', ');
      if(duplicadas.length > 1) {
         textoFinal += `palavras duplicadas no paragrafo ${index + 1}: ${duplicadas} \n`;
      }
   });
   return textoFinal;
}

export { montaSaidaArquivo };