
# **Estudando JavaScript**
Este repositório contém meus estudos, anotações e exemplos práticos em JavaScript, organizados por tópicos fundamentais da linguagem. Ele serve como material de revisão pessoal e guia de consulta para outros estudantes.

## **Glossário**

- [Escopo](#escopo)
- [Funções](#funções)
- [Coerção de Tipos](#coerção-de-tipos)
- [Conversão de Tipos](#conversão-de-tipos)
- [Array](#array)
- [Funções Callback](#funções-callback)
- [Spread Operator](#spread-operator)
- [Objetos](#objetos)
- [JSON](#json)
- [Node.js e Módulos](#nodejs-e-módulos)

## **Escopo**
Por padrão o **JavaScript** ao declarar variável sem a palavra reservada o interpretador indentifica com um **`var`**

- `var` Escopo global
- `let` Escopo de bloco
- `const` Escopo global

Espoco é o contexto atual de execução, em que valores e expressões são visíveis ou podem ser referenciadas. Se uma variável ou outra expressão não tiver "no escopo atual", então não está disponivel para uso. Os escopos também podem ser em camadas em uma hierarquia, de modo que os escopos filhos tenham acesso aos escopos pais, mas não vice-versa

Um function serve como um procedimento em JavaScript, e portanto cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro  de uma função não pode ser acessada de fora da função ou dentro de outras funções.

## **Funções**

**Expressão de função:** Quando usamos expressão de função, ou seja, declarar o valor da função a uma variável, ele é lido apenas quando o interpretador chega ao código, sendo assim, caso declare um console.log() antes da função ocorrerá um erro, dizendo que a função não existe. Porém ao declarar uma função normalmente, sem variáveis, o interpretador aplica o efeito **"hoisting"** (puxando para cima). Sendo assim o interpretador não precisa chegar na linha do código da função para ele ser executado, ela já é executada primeiro internamente.

#### Função padrão

`function minhaFuncao() { ... }`

#### Expressão de função

``` 
const minhaFuncao = function() { ... } 
let minhaFuncao = function() { ... }
var minhaFuncao = function() { ... }

```

#### Arrow function

```
const media = (nota1, nota2) => {
    let media = (nota1 + nota2) / 2;
    let status;

    if(media >= 6) {
        status = true;
    } else {
        status = false;
    }

    return {
        nota1: nota1,
        nota2: nota2,
        mediaFinal: media
    };
}

```
Perceba que não usamos a palavra **function** em vez disso apenas declaramos os seus atributos e usamos **=>** para abrir a função, dai o nome "arrow function". 

A arrow function apenas funciona com **expressão de função** e quando ela tiver apenas uma linha podemos apenas escrever da seguinte forma:

` const exibirNome = nome => console.log("meu nome é ", nome);`

Neste caso não precisamos colocar o return nem abrir as chaves, deixando a declaração bem mais curta.

**Observação:** O `return` sempre retorna um único valor. 
Se você quiser retornar mais de um valor, precisa empacotar esses valores em:

- Um objeto: ideal quando você quer usar nomes para os valores (mais legível).

- Um array: útil quando a posição dos valores é mais importante que o nome (menos legível, mas mais compacto). 

## **Coerção de Tipos**
A Coerção de Tipos em JavaScript refere-se à conversão automática e implícita de um tipo de dado para outro durante a operação. Isso pode acontecer em operações matemáticas, comparações ou concatenações de string.

**Exemplo:**
``` 
// Exemplo 1: Coerção em comparação
console.log("5" == 5); // true
// A string "5" é convertida implicitamente para número antes da comparação

// Exemplo 2: Coerção em concatenação
console.log("O número é " + 10); // "O número é 10"
// O número 10 é convertido implicitamente para string

// Exemplo 3: Coerção em operações matemáticas
console.log("10" - 2); // 8
// A string "10" é convertida implicitamente para número para realizar a subtração
```

## **Conversão de Tipos**
A Conversão de Tipos é a transformação explícita de um tipo de dado para outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro.

**Exemplo:**
``` 
// Exemplo 1: Convertendo string para número
let str = "42";
let num = Number(str);
console.log(num); // 42
console.log(typeof num); // "number"

// Exemplo 2: Convertendo número para string
let valor = 100;
let texto = String(valor);
console.log(texto); // "100"
console.log(typeof texto); // "string"

// Exemplo 3: Convertendo booleano para número
let bool = true;
let convertido = Number(bool);
console.log(convertido); // 1
console.log(typeof convertido); // "number"

```

## **Array**

| Método      | O que faz                                          | Exemplo                            | Resultado     |
| ----------- | -------------------------------------------------- | ---------------------------------- | ------------- |
| `push`      | adiciona elemento no final                         | `arr.push(4)`                      | `[1,2,3,4]`   |
| `pop`       | remove elemento do final                           | `arr.pop()`                        | `[1,2]`       |
| `shift`     | remove elemento do início                          | `arr.shift()`                      | `[2,3]`       |
| `unshift`   | adiciona elemento no início                        | `arr.unshift(0)`                   | `[0,1,2,3]`   |
| `length`    | retorna o tamanho                                  | `arr.length`                       | `3`           |
| `indexOf`   | retorna a posição de um item                       | `arr.indexOf(2)`                   | `1`           |
| `includes`  | verifica se existe um item                         | `arr.includes(3)`                  | `true`        |
| `join`      | junta elementos em string                          | `arr.join("-")`                    | `"1-2-3"`     |
| `reverse`   | inverte a ordem                                    | `arr.reverse()`                    | `[3,2,1]`     |
| `sort`      | ordena (alfabético ou numérico c/ função)          | `arr.sort((a,b)=>a-b)`             | `[1,2,3]`     |
| `slice`     | retorna parte do array                             | `arr.slice(1,3)`                   | `[2,3]`       |
| `splice`    | remove/insere elementos                            | `arr.splice(1,1,"X")`              | `[1,"X",3]`   |
| `forEach`   | percorre cada elemento                             | `arr.forEach(x => console.log(x))` | imprime 1,2,3 |
| `map`       | cria novo array transformado                       | `arr.map(x => x*2)`                | `[2,4,6]`     |
| `filter`    | cria novo array filtrando                          | `arr.filter(x => x>1)`             | `[2,3]`       |
| `reduce`    | reduz a 1 valor acumulado                          | `arr.reduce((acc,x)=>acc+x,0)`     | `6`           |
| `find`      | retorna o primeiro item que corresponde            | `arr.find(x => x>1)`               | `2`           |
| `findIndex` | retorna a posição do primeiro item que corresponde | `arr.findIndex(x => x>1)`          | `1`           |
| `every`     | testa se **todos** satisfazem condição             | `arr.every(x => x>0)`              | `true`        |
| `some`      | testa se **algum** satisfaz condição               | `arr.some(x => x>2)`               | `true`        |
| `flat`      | “achata” arrays aninhados                          | `[1,[2,3]].flat()`                 | `[1,2,3]`     |
| `concat`    | junta dois arrays                                  | `arr.concat([4,5])`                | `[1,2,3,4,5]` |

### *Digas extras*

**Como remover nomes repetidos de uma lista de chamada:**

`Set` O Set é uma estrutura de dados nativa do JavaScript (introduzida no ES6) que armazena valores únicos — ou seja, não permite duplicatas.

*Características do Set:*

- Armazena valores únicos (sem repetições).
- Pode conter valores de qualquer tipo: primitivos ou referências.
- A ordem dos valores inseridos é mantida (inserção).

**Exemplo:**
```
const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = [...new Set(numeros)]; // [1, 2, 3, 4, 5]
```
Passo a passo:

-  Remove duplicatas: `const setUnico = new Set(numeros); // Set { 1, 2, 3, 4 }`
-  Transforma Set em Array: const arrayFinal = `[...setUnico];  // [1, 2, 3, 4]`

Não podemos declarar o Set sem chamar o `new`

## **Funções Callback**

Uma função callback é uma função que é passada como argumento para outra função e é executada após a ocorrência de um evento ou a conclusão de uma operação assíncrona.

Em outras palavras, uma função callback é uma função que é "chamada de volta" depois que alguma outra função termina de executar.

**Exemplo:**

```
const nomes = [
    "João",
    "Maria Vitoria", 
    "Diego", 
    "Eduardo"
];

nomes.forEach(nome => {
    console.log(nome);
})

```

## **Spread Operator**
O spread operator em JavaScript é representado por `...` (três pontos) e serve para espalhar (ou "espalhar o conteúdo") de arrays, objetos, ou até strings em partes individuais.

### *Spread com array*

**1. Clonar um array:**
```
const frutas = ['maçã', 'banana'];
const copiaFrutas = [...frutas];

console.log(copiaFrutas); // ['maçã', 'banana']
```
Caso você faça o exemplo acima da seguinte forma:
```
const frutas = ['maçã', 'banana'];
const copiaFrutas = frutas;

console.log(copiaFrutas); // ['maçã', 'banana']
```
De primeiro momento é praticamente igual, porém nesse caso, o `copiaFrutas` ele está apontando para `frutas`, sendo assim, caso adicionarmos um novo elemento ao array `copiaFrutas`, ele será adicionado ao array original. Exemplo clássico de **atribuição por referência.**

**2. Concatenar array:**
```
const doces = ['chocolate', 'bala'];
const alimentos = [...frutas, ...doces];

console.log(alimentos); // ['maçã', 'banana', 'chocolate', 'bala']
```

### *Spread com Objetos (ECMAScript 2018+)*

**1. Clonar um objeto:**
```
const pessoa = { nome: 'Ana', idade: 25 };
const copiaPessoa = { ...pessoa };

console.log(copiaPessoa); // { nome: 'Ana', idade: 25 }
```
A mesma ideia de **atribuição por referência** explicada no tópico de array acima, é aplicada em objetos também

**2. Mesclar objetos:**
```
const endereco = { cidade: 'São Paulo', estado: 'SP' };
const dadosCompletos = { ...pessoa, ...endereco };

console.log(dadosCompletos);
// { nome: 'Ana', idade: 25, cidade: 'São Paulo', estado: 'SP' }
```
**Observação importante:** Se dois objetos tiverem a mesma chave, o último sobrescreve o valor anterior

### *Atribuição por Valor:*
Quando atribuímos um tipo primitivo a uma nova variável, o JavaScript cria uma cópia do valor.

Alterar o valor da nova variável não afeta a variável original.
O mesmo ocorre quando passamos tipos primitivos como parâmetros para funções: uma cópia do valor é passada, e a alteração do parâmetro dentro da função não modifica a variável original.

### *Atribuição por Referência:*
Arrays não são tipos primitivos, então, ao atribuir um array a uma nova variável, o JavaScript cria uma referência, não uma cópia.
Ambas as variáveis apontam para o mesmo local na memória.
Modificar o array através de qualquer uma das variáveis afeta ambas.
O mesmo acontece quando passamos arrays como parâmetros para funções: a referência do array é passada, e as alterações dentro da função afetam o array original.
Para evitar a modificação do array original ao passá-lo para uma função, podemos usar o spread operator (...) para criar uma cópia do array.

## **Objetos Lineares**
Na programação, especialmente na programação orientada a objetos (POO), um objeto pode ser entendido como uma entidade que representa algo do mundo real dentro do programa. Ele é composto por atributos (que descrevem suas características) e métodos (que definem os comportamentos ou ações que ele pode realizar).

**Estrutura básica:**

```
const obj = {
    atributo: valor,
}
```
### *Acessando um objeto*
```
const estudante = {
   nome: 'Jose Silva',
   idade: 32,
   cpf: '12312312312',
   turma: 'JavaScript'
}
```
Para acessar um atributo de um objeto em JavaScript, temos duas formas principais:

- `estudante.nome`
- `estudante["nome"]`

### *Mais sobre objetos*
- Para deletar um atributo de um objeto usamos `delete` da seguinte forma:
`delete obj.atibuto;`

#### Metodos de Objetos

| Método                        | Descrição                                                                 | Exemplo                                                             |
|------------------------------|--------------------------------------------------------------------------|---------------------------------------------------------------------|
| `Object.keys(obj)`           | Retorna um array com as **chaves** enumeráveis do objeto                 | `Object.keys({a: 1, b: 2}) // ['a', 'b']`                            |
| `Object.values(obj)`         | Retorna um array com os **valores** das propriedades                     | `Object.values({a: 1, b: 2}) // [1, 2]`                              |
| `Object.entries(obj)`        | Retorna um array de arrays `[chave, valor]`                              | `Object.entries({a: 1}) // [['a', 1]]`                              |
| `Object.fromEntries(arr)`    | Converte uma lista de pares chave/valor em um objeto                     | `Object.fromEntries([['a', 1]]) // {a: 1}`                          |
| `Object.assign(dest, src)`   | Copia as propriedades de um ou mais objetos para um objeto destino       | `Object.assign({}, {a: 1, b: 2}) // {a: 1, b: 2}`                    |
| `Object.hasOwn(obj, prop)`   | Verifica se o objeto possui a propriedade como sua (não herdada)         | `Object.hasOwn({a: 1}, 'a') // true`                                |
| `Object.freeze(obj)`         | Congela o objeto (impede alterações em propriedades existentes)          | `Object.freeze(obj)`                                                |
| `Object.seal(obj)`           | Sela o objeto (impede adição/removal de propriedades, mas permite alterar valores) | `Object.seal(obj)`                                          |
| `Object.create(proto)`       | Cria um novo objeto com o protótipo especificado                         | `const obj = Object.create({a: 1})`                                 |
| `Object.defineProperty()`    | Define ou modifica uma propriedade com configurações detalhadas          | `Object.defineProperty(obj, 'a', {value: 10})`                      |
| `Object.getOwnPropertyNames(obj)` | Retorna um array com todas as propriedades (enumeráveis e não)     | `Object.getOwnPropertyNames({a: 1}) // ['a']`                       |
| `Object.getPrototypeOf(obj)` | Retorna o protótipo do objeto                                             | `Object.getPrototypeOf(obj)`                                       |
| `Object.is(a, b)`            | Compara se dois valores são exatamente o mesmo valor                     | `Object.is(NaN, NaN) // true`                                       |

#### Loop de objeto

Para percorrer um objeto o JavaScript disponibiliza uma estrutura de repetição própria para isso o **for in**, onde é usada para iterar sobre as propriedades enumeráveis de um objeto.

**Sintaxe:**

```
for (let chave in objeto) {
  // código que usa a chave
}
```
- `chave` é uma variável que, a cada iteração, recebe o nome (string) de uma propriedade do objeto.
- `objeto` é o objeto cujas propriedades serão percorridas.

**Exemplo:**

```
const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Engenheiro'
};

for (let prop in pessoa) {
  console.log(`${prop}: ${pessoa[prop]}`);
}
```

O for...in percorre também propriedades herdadas da cadeia de protótipos.

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


## **Node**

Tipos de importação em JavaScript (ES Modules) 
### *Export*
É uma palavra-chave usada para tornar variáveis, funções, classes ou outros objetos disponíveis para serem usados em outros módulos JavaScript.
#### Como funciona
**Exportação Nomeada:** Você pode exportar múltiplos itens de um módulo, dando a cada um um nome.

```
// arquivo: meu-modulo.js
export const PI = 3.14159;
export function areaCirculo(raio) {
    return PI * raio * raio;
}
```

**Exportação Padrão (Default):** Você pode ter apenas uma exportação padrão por módulo. Isso é útil quando o módulo tem uma única funcionalidade principal.

```
// arquivo: utilitario.js
export default function utilitario() {
    console.log("Função utilitária");
}
```

**Quando usar:** Use export quando você quer que outros arquivos usem as funcionalidades que você está criando no seu módulo.

### *Import*
`import` é uma palavra-chave usada para trazer variáveis, funções, classes ou outros objetos que foram exportados de outros módulos JavaScript.

#### Como funciona

**Importação Nomeada:** Você especifica os nomes exatos dos itens que você quer importar entre chaves **`{}`**.

```
// arquivo: principal.js
import { PI, areaCirculo } from './meu-modulo.js';

console.log(PI); // Saída: 3.14159
console.log(areaCirculo(5)); // Saída: 78.53975
```

**Importação Padrão (Default):** Você importa a exportação padrão sem usar chaves.

```
// arquivo: principal.js
import utilitario from './utilitario.js';

utilitario(); // Saída: Função utilitária
```

**Importação com Alias:** Você pode dar um novo nome a um item importado usando **`as`**.

```
import { areaCirculo as area } from './meu-modulo.js';

console.log(area(5)); // Saída: 78.53975
```

**Importação do Módulo Inteiro:** Você pode importar todo o módulo como um objeto.

```
import * as modulo from './meu-modulo.js';

console.log(modulo.PI); // Saída: 3.14159
console.log(modulo.areaCirculo(5)); // Saída: 78.53975
```

**Quando usar:** Use import quando você precisa usar funcionalidades que foram criadas e exportadas em outros módulos.

### *Module.exports*
`module.exports` é um objeto especial no Node.js que permite exportar valores de um arquivo para que outros arquivos possam usá-los.

#### Como funciona
Você atribui o que você quer exportar a `module.exports.`

```
// arquivo: meu-modulo.js
function minhaFuncao() {
    console.log("Minha função");
}

module.exports = minhaFuncao;
```

**Quando usar:** Use module.exports em Node.js quando você quer exportar uma única função, objeto ou valor.

### *Require*
`require` é uma função no Node.js usada para importar módulos que foram exportados usando `module.exports.`

#### Como funciona
Você passa o caminho do arquivo que você quer importar para a função `require.`

```
// arquivo: principal.js
const minhaFuncao = require('./meu-modulo.js');

minhaFuncao(); // Saída: Minha função
```

**Quando usar:** Use require em Node.js para importar módulos que foram exportados usando module.exports.

### *Package.json*
`package.json` é um arquivo de configuração no formato JSON que contém metadados sobre um projeto Node.js. Ele inclui informações como o nome do projeto, versão, descrição, dependências, scripts e outras configurações.