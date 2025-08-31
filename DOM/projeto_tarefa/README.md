# Projeto Ceep 
Este projeto é um exercício prático de como usar DOM para manipulação das páginas HTML. Diferentemente do **"Alura Midi"** na pasta  `paginas_dinamicas` dentro do nosso repositório, esse projeto busca aprofundar os conhecimentos da linguagem usando recursos e lógicas mais avançadas e estruturadas.

Abaixo será explicado detalhadamente cada código usado para a construção da lógica do projeto **"Cepp"**.

### addEventListener()
`addEventListener()` registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela, ou um XMLHttpRequest.

Para registrar mais de uma espera de evento como alvo, chame addEventListener() para o mesmo alvo mas com diferentes tipos de evento ou captura de parâmetros.

#### **Assinatura**
`target.addEventListener(type, listener, options?)`

- `type:` string do evento, p.ex. "click", "input", "submit", "keydown".
- `listener:` função chamada quando o evento ocorre. Recebe um Event (ou derivado).
- `options` (objeto ou booleano legado):
-> `capture:` true para ouvir na fase de captura (antes de chegar ao alvo).

-> `once:` remove automaticamente após a primeira execução.

-> `passive:` indica que não chamará preventDefault() (melhora performance de touchstart/scroll).

- `signal:` AbortSignal para remover automaticamente via AbortController.

```
Observação: ouvintes são disparados na ordem de registro. 
```

### preventDefault()
Cancela o **comportamento padrão** do evento (se `event.cancelable === true`).
Ex.: impedir que um <form> envie, que um <a> navegue, que o touch faça scroll.

#### **Exemplo clássico: impedir envio do formulário**
```js
form.addEventListener('submit', (e) => {
  e.preventDefault(); // não envia
  if (form.checkValidity()) {
    // tratar dados manualmente
  } else {
    form.reportValidity(); // mostra dicas nativas
  }
});
```

#### **Exemplo: link que vira botão**
```js
document.querySelector('a#abrir-modal').addEventListener('click', (e) => {
  e.preventDefault(); // não navega
  abrirModal();
});

```

#### **Verificando se o evento é cancelável**
```js
el.addEventListener('touchmove', (e) => {
  if (e.cancelable) e.preventDefault();
});

```

#### **Diferença para stopPropagation()**
- `preventDefault()` → impede a ação padrão (enviar form, navegar etc.).
- `stopPropagation()` → impede que o evento suba para outros elementos.
- Podem (ou não) ser usados juntos, dependendo da necessidade.

### createElement()
`const el = document.createElement(tagName, options?)`
- `tagName:` "div", "button", "li", etc.
- `options` (raro): { is: 'nome-do-custom-element' } para custom built-in elements.
- Para SVG/math: use document.createElementNS(ns, tag) com o namespace correto.

#### **Exemplo básico: criar um card**
```js
const card = document.createElement('article');
card.className = 'card';

const h3 = document.createElement('h3');
h3.textContent = 'Título';

const p = document.createElement('p');
p.textContent = 'Descrição do item.';

const btn = document.createElement('button');
btn.type = 'button';
btn.textContent = 'Detalhes';
btn.addEventListener('click', () => abrirDetalhes());

card.append(h3, p, btn);
document.querySelector('#grid').append(card);
```

#### **Performance:** `DocumentFragment`
Monte vários nós em memória e injete de uma vez:
```js
const frag = document.createDocumentFragment();

for (const item of dados) {
  const li = document.createElement('li');
  li.textContent = item.nome;
  frag.append(li);
}

document.querySelector('ul#itens').append(frag);
```

#### **Segurança:** evite `innerHTML` com dados do usuário
Prefira `textContent` (ou `createTextNode`) para escapar conteúdo e evitar XSS:
```js
const li = document.createElement('li');
li.textContent = usuarioInput; // seguro

```

#### **Atributos x Propriedades**
```js
const input = document.createElement('input');
input.type = 'checkbox';     // propriedade
input.setAttribute('aria-label', 'Aceito'); // atributo (útil p/ ARIA, data-*, etc.)
input.dataset.id = '42';     // data-id="42"

```
- `Inserir:` parent.append(el), parent.prepend(el), parent.insertBefore(el, ref)
- `Remover:` el.remove() ou parent.removeChild(el)
- `Substituir filhos:` parent.replaceChildren(...novos)

### parentElement
A propriedade `parentElement` retorna o **elemento pai** mais próximo de um nó no DOM.
- Se o nó não tiver um pai (ou se o pai for o document), **retorna null.**
- Diferente de `parentNode:` este pode retornar nós que não são elementos (como Document ou DocumentFragment).

```js
const span = document.querySelector('span.destaque');
console.log(span.parentElement); 
// mostra o <p> que contém o <span>
```

#### **Uso prático**
- Subir na hierarquia para manipular o container.
- Excluir/remover elementos baseados em um filho clicado.
- Identificar a seção/painel a que um botão pertence.

```js
document.addEventListener('click', (e) => {
  if (e.target.matches('.remover')) {
    const li = e.target.parentElement; 
    li.remove(); // remove o <li> inteiro
  }
});
```

### appendChild()
O método `appendChild()` insere um nó como **último filho de um elemento pai.**

- Move o nó se ele já existir em outro lugar do DOM (não duplica).
- Retorna o nó inserido.

`parent.appendChild(child);`
- `parent:` elemento pai (onde inserir).
- `child:` nó que será adicionado (pode ser elemento, texto, fragmento).

```js
const lista = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'Novo item';

lista.appendChild(li); // insere no final da lista
```

#### **Exemplo: mover elemento**

```js
const item = document.getElementById('item');
const outraLista = document.getElementById('outra-lista');

outraLista.appendChild(item); 
// "item" é removido da lista original e adicionado na nova
```

#### **Comparação com** `append()`
- `appendChild()` aceita apenas um nó.
- `append()` aceita múltiplos nós e/ou strings.

```js
lista.append('texto', li1, li2); // válido
lista.appendChild('texto');      // ❌ erro (não é nó)
```

#### **Usando juntos:** `parentElement` + `appendChild()`
```js
document.querySelector('#mover').addEventListener('click', () => {
  const p = document.querySelector('p span');
  const divDestino = document.querySelector('#destino');
  
  // pegar o pai do <span>
  console.log(p.parentElement.tagName); // mostra P

  // mover o <span> para dentro da div destino
  divDestino.appendChild(p);
});
```

#### **Informações Extras**
- `insertBefore(pai, filho):` Coloca um nó antes do outro.
- `replaceChild( elemento1, elemento2):` Substitui o nó elemento 1 pelo nó elemento2.
- `removeChild(elemento):` Remove um nó da árvore.

### data-attributes
São atributos HTML “customizados” que começam com data-. Eles servem para guardar metadados no próprio elemento, pensados para serem lidos pelo JavaScript (ou usados como ganchos de seleção).
```html
<button
  data-product-id="42"
  data-action="buy"
  data-price="199.90">
  Comprar
</button>
```
No JS você acessa via a propriedade `dataset:`
```js
const btn = document.querySelector('[data-action="buy"]');
console.log(btn.dataset.productId); // "42"
console.log(Number(btn.dataset.price)); // 199.9 (sempre vem como string)
btn.dataset.status = 'loading'; // cria/atualiza data-status="loading"
```

#### **Regras rápidas:**
- Nomeia-se `data-nome-do-atributo` (kebab-case). No `dataset`, vira `nomeDoAtributo` (camelCase).

- Os valores são **strings**; se precisar de número/boolean/JSON, você que converte.

- Não coloque segredos ou dados sensíveis: ficam no HTML da página.

#### **Como selecionar com data-attributes**
Você usa seletores de atributo (CSS) com querySelector/querySelectorAll:
```js
// por presença
document.querySelectorAll('[data-action]')

// por valor específico
document.querySelectorAll('[data-action="buy"]')

// útil com delegação de eventos
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  if (action === 'buy') { /* ... */ }
});
```

#### **Então por que usar** `data-attributes` **em vez de** `getElementById()` **ou classe?**

1. **Papel semântico diferente**
- `id`
Identidade única do elemento no documento. Serve para âncoras (`#id`), rótulos de formulário (`<label for="id">`), relações de acessibilidade (`aria-labelledby`, etc.). **Deve ser único.**

→ Use quando o elemento é um só e você realmente quer uma identidade global.

- `class`
Agrupa elementos principalmente para estilização (CSS). Um elemento pode ter várias classes; nomes de classes tendem a mudar com o design.

→ Bom para estilizar e também pode servir de gancho de JS, mas isso cria acoplamento com o CSS.

- `data-*`
Guarda dados e configuração do comportamento. É um gancho neutro (nem identidade, nem estilo).

→ Ideal para conectar HTML ↔️ JS sem “poluir” classes de estilo ou depender de id exclusivo.

2. **Evita acoplamento com o CSS**
Se você seleciona por classe e o time de UI renomeia a classe para mexer no design, seu JS quebra. Com data-*, você tem um gancho estável dedicado ao comportamento:
```
<!-- Classe pode mudar de .btn -> .button -> .c-button -->
<button class="btn primary" data-action="buy">Comprar</button>
```
No JS, você continua usando `[data-action="buy"]` e não depende do nome da classe.

3. **Funciona bem com múltiplas instâncias (sem a restrição de unicidade do `id`)**
`getElementById()` só retorna um elemento e exige unicidade. Se você tem vários cards/botões com o mesmo comportamento, data-* (ou classes) são melhores:
```html
<article data-product-id="1" data-action="open"></article>
<article data-product-id="2" data-action="open"></article>
<article data-product-id="3" data-action="open"></article>
```
```js
document.querySelectorAll('[data-action="open"]').forEach(/* ... */);
```

4. **Parametriza componentes direto no HTML**
Você pode “configurar” o comportamento do componente:
```html
<div class="modal" data-modal-id="signup" data-esc-close="true"></div>
<button data-open-modal="signup">Abrir modal</button>
```
Seu JS lê `data-open-modal`/`data-esc-close` e age sem precisar de JS inline ou objetos globais.

5. **Testes e automação**
É prática comum usar atributos dedicados a testes (ex.: `data-testid`, `data-cy`) para que renomeações de classe não quebrem seus testes (Cypress, Playwright, etc.).

#### **Quando usar cada um (regra prática)**
- Use `id` quando o elemento é único e precisa de identidade (âncora, label de formulário, associações ARIA).

- Use `class` para estilização e agrupamento visual.

- Use `data-*` para:

-> ganchos estáveis de JS (sem depender de nomes de classe);

-> passar parâmetros/configuração para componentes;

-> selecionar múltiplos elementos com o mesmo comportamento;

-> testes/automação.

#### **E performance?**
Historicamente, selecionar por `id` é o mais rápido, seguido por classe e depois por seletor de atributo. Na prática moderna, a diferença é mínima para quase todos os casos de UI; priorize clareza e estabilidade do contrato entre HTML/CSS/JS.