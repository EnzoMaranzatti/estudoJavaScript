## **JSON**

JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos e fácil de interpretar e gerar por máquinas. Ele é amplamente usado na comunicação entre sistemas, especialmente em aplicações web que trocam dados entre o cliente (navegador) e o servidor.

#### Estrutura básica

```
{
  "nome": "João",
  "idade": 30,
  "ativo": true,
  "hobbies": ["leitura", "futebol", "programar"],
  "endereco": {
    "cidade": "São Paulo",
    "estado": "SP"
  }
}

```

#### Regras e características
- Os dados são representados como objetos `({})` e arrays `([])`
- As chaves (ou nomes dos campos) devem estar entre aspas duplas
- Os valores podem ser: string, número, booleano, array, objeto ou null
- Não é permitido comentários (diferente de outras linguagens).

### *Mais sobre JSON em JavaScript*
Caso você já tenha um arquivo JSON em seu repositório e esteja programando em um ambiente diretamente em Node.js você pode importar o JSON no seu arquivo JavaScript usando `require()`. 

Se você estiver usando JavaScript em um ambiente de navegador (por exemplo, com HTML), o require() não está disponível por padrão. Nesse caso, você teria que:

- Usar fetch() para carregar o JSON;
- Ou usar módulos ES6 com import (com algumas configurações extras).

Levando em consideração que estamos em um ambiente Node.js e temos um arquivo JSON chamado estudantes que contem um grande array de objetos com os dados dos alunos, para importa-lo em seu projeto JavaScript usamos `require()`, assim podemos manipular esse JSON usando metodos da linguagem em questão.

#### Exemplo de importação
`const dados = require('./estudantes.json');`

#### Métodos JSON em JavaScript
| Método                | Descrição                                        | Exemplo de uso                    | Retorno            |
| --------------------- | ------------------------------------------------ | --------------------------------- | ------------------ |
| `JSON.stringify(obj)` | Converte um objeto JavaScript em uma string JSON | `JSON.stringify({ nome: "Ana" })` | `'{"nome":"Ana"}'` |
| `JSON.parse(str)`     | Converte uma string JSON em um objeto JavaScript | `JSON.parse('{"nome":"Ana"}')`    | `{ nome: "Ana" }`  |


