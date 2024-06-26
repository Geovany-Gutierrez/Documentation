---
sidebar_position: 4
title: Secionamento de conteudo
sidebar_label: Secionamento
---

# Secionamento de conteudo

**Conceito e Uso:** Os elementos de secionamento, como `<section>` e `<article>`, ajudam a organizar o conteúdo da página em seções distintas, como artigos, cabeçalhos e rodapés.

**Exemplo de código (article):**
```html
<article>
    <h2>Título do Artigo</h2>
    <p>Conteúdo do artigo...</p>
</article>
```

- **address**

**Descrição:** O elemento address geralmente contém informações de contato, como endereços de email ou físicos.

```html
<address>
    <p>Endereço de e-mail: exemplo@dominio.com</p>
    <p>Endereço físico: Rua Exemplo, Número 123</p>
</address>
```

- **article**

**Descrição:** Este elemento geralmente contém conteúdo independente e autônomo, como um post de blog ou uma notícia.

```html
<article>
    <!-- Conteúdo independente aqui -->
</article>
```

- **aside**

**Descrição:** O elemento aside geralmente contém conteúdo relacionado ao conteúdo principal, mas que pode ser visualizado separadamente.

```html
<aside>
    <!-- Conteúdo relacionado aqui -->
</aside>
```

- **footer**

**Descrição:** O elemento footer geralmente contém informações de rodapé, como links de navegação secundária ou informações de contato.

```html
<footer>
    <!-- Conteúdo do rodapé aqui -->
</footer>
```

- **h1 a h6**

**Descrição:** Estes elementos geralmente contêm cabeçalhos de diferentes níveis de importância, variando de `<h1>` (mais importante) a `<h6>` (menos importante).

```html
<h1>Título Principal</h1>
<h2>Título Secundário</h2>
<!-- Outros cabeçalhos aqui -->
```

- **header**

**Descrição:** O elemento header geralmente contém o cabeçalho da página, incluindo o logotipo e o menu de navegação principal.

```html
<header>
    <!-- Conteúdo do cabeçalho aqui -->
</header>
```

- **hgroup**

**Descrição:** O elemento hgroup geralmente contém um grupo de cabeçalhos `<h1>` a `<h6>`, usado para agrupar cabeçalhos relacionados.

```html
<hgroup>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
</hgroup>
```

- **main**

**Descrição:** O elemento main geralmente contém o conteúdo principal da página, excluindo cabeçalhos e rodapés.

```html
<main>
    <!-- Conteúdo principal aqui -->
</main>
```

- **nav**

**Descrição:** O elemento nav geralmente contém links de navegação principal.

```html
<nav>
    <!-- Links de navegação aqui -->
</nav>
```

- **search**

**Descrição:** O elemento search geralmente contém um formulário de pesquisa.

```html
<form action="/search" method="get">
    <input type="text" name="q" placeholder="Pesquisar...">
    <button type="submit">Pesquisar</button>
</form>
```

- **section**

**Descrição:** O elemento section geralmente contém uma seção autônoma de conteúdo dentro de um documento.

```html
<section>
    <!-- Conteúdo da seção aqui -->
</section>
```