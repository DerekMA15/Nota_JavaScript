# CSS ψ(｀∇´)ψ

## O que é CSS?

CSS (Cascading Style Sheets) é uma linguagem usada para estilizar elementos escritos em HTML. Com CSS, é possível controlar cores, fontes, tamanhos, posicionamentos e muito mais.

---

## Formas de aplicar o CSS

### 1. CSS Inline
- Aplicação de estilos diretamente no elemento HTML, usando o atributo `style`.
- **Maior precedência**, ou seja, sobrescreve outras regras de CSS.
- **Pouco prático** em grandes projetos, pois dificulta a manutenção.

**Exemplo:**

```html
<p style="color: red; font-size: 16px;">Texto em vermelho</p>
````

---

### 2. CSS Interno (embutido no HTML)

* Utiliza a tag `<style>` dentro do `<head>` do documento HTML.
* Ideal para páginas únicas ou testes rápidos.

**Exemplo:**

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

---

### 3. CSS Externo

* O estilo é definido em um arquivo separado (ex: `estilos.css`) e vinculado com a tag `<link>`.
* **Mais recomendado** para projetos organizados e reutilizáveis.

**Exemplo:**

```html
<head>
  <link rel="stylesheet" href="estilos.css">
</head>
```

---

## Principais Estilos CSS

### 1. Cor e Fundo

* `color`: cor do texto
* `background-color`: cor de fundo

```css
p {
  color: black;
  background-color: lightgray;
}
```

---

### 2. Fonte

* `font-family`: tipo da fonte
* `font-size`: tamanho da fonte
* `font-weight`: peso (negrito, normal, etc.)

```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
}
```

---

### 3. Textos

* `text-align`: alinhamento do texto
* `text-decoration`: decoração (sublinhado, none)
* `text-transform`: transformação (maiúsculas, minúsculas)

```css
h2 {
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}
```

---

### 4. Box Model

* `width`, `height`: largura e altura
* `padding`: espaçamento interno
* `margin`: espaçamento externo
* `border`: borda

```css
div {
  width: 200px;
  height: 100px;
  padding: 10px;
  margin: 20px;
  border: 2px solid black;
}
```

---

### 5. Display e Posição

* `display`: define o tipo de exibição (ex: block, inline, flex)
* `position`: define a posição do elemento (ex: static, relative, absolute, fixed)

```css
.container {
  display: flex;
  position: relative;
}
```

---

### 6. Estilização de Links

```css
a {
  color: blue;
  text-decoration: none;
}

a:hover {
  color: red;
}
```

---

### 7. Responsividade

* `@media`: permite aplicar estilos diferentes conforme o tamanho da tela

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

---

## Dica Final

Sempre prefira o uso de **CSS externo** para manter seu código HTML mais limpo e seu estilo mais organizado e reutilizável.

---



