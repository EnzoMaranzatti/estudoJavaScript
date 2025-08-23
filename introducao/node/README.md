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