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