# DOM 
O **DOM (Document Object Model)** é uma interface de programação que representa documentos HTML e XML como uma estrutura em forma de árvore.

Em outras palavras, quando você abre uma página da web no navegador, o HTML é convertido em um objeto chamado DOM, onde cada elemento (tags, atributos, texto, etc.) vira um nó dessa árvore.

#### **Estrutura básica:**
- O documento inteiro → **nó raiz** (`document`)
- As tags HTML (`<html>`, `<head>`, `<body>`) → **elementos**
- Os atributos das tags (`class`, `id`, etc.) → **nós de atributo**
- O texto dentro das tags → **nós de texto**

#### **Exemplo:**
HTML:
```
<html>
  <body>
    <p>Hello World</p>
  </body>
</html>
```

DOM em forma de árvore:
```
document
 └── html
      └── body
           └── p
                └── "Hello World"
```

#### **Por que é importante?:**
- O DOM permite que linguagens como JavaScript interajam com a página.
- Você pode acessar, alterar, criar ou remover elementos dinamicamente.

#### Exemplo em JavaScript:

`document.getElementById("meuTexto").innerHTML = "Novo conteúdo!";`

Esse código encontra um elemento com `id="meuTexto"` e muda seu conteúdo de texto.

Em resumo: o DOM é a ponte entre o código (HTML/CSS/JS) e o navegador, permitindo que páginas web sejam dinâmicas e interativas.

