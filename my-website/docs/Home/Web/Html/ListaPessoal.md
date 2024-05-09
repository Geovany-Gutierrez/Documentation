---
sidebar_position: 9
title: Lista Pessoal - Principais
sidebar_label: Lista Pessoal - Principais
---

## Lista dos mais importantes

#### HEAD
- **head**: Especifica a seção com conteúdo legível por máquina.

```html
<head></head>
```

- **title**: Título da página.

```html
<title>Título da Página</title>
```

- **base**: Usado para especificar a URL principal usada para URLs relativas na página.

```html
<base href="https://www.example.com/">
```

- **meta**: Usado para alguns atributos, principalmente para garantir que o navegador use UTF-8 usando o atributo "charset".

```html
<meta charset="UTF-8">
```

- **style**: Usado para carregar um arquivo CSS.

```html
<link rel="stylesheet" href="styles.css">
```

- **link**: Usado para vincular recursos externos como ícones.

```html
<link rel="icon" href="favicon.ico">
```

#### BODY
- **body**: Seção principal com o conteúdo do documento, possui atributos específicos com callbacks úteis.

= **TEXTO** =
- **div**: Não tem comportamento específico, mas tem um nome curto, então é útil como um contêiner genérico.

```html
<div></div>
```

- **h1** a **h6**: Usado para títulos e subtítulos do conteúdo.

```html
<h1>Título Principal</h1>
```

- **li** + (**ul** ou **ol**): Usado para listas, útil em geral.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

- **p**: Usado para parágrafos.

```html
<p>Este é um parágrafo.</p>
```

- **pre**: Usado para exibir arte ASCII ou texto bruto.

```html
<pre>
    Exemplo de arte ASCII
     _
   .__`_.
( ' , ' )
-()---()-
</pre>
```

== **TEXTO EM LINHA** ==
- **a**: Usado para exibir hyperlinks.

```html
<a href="https://www.example.com">Link Externo</a>
```

- **br**: Quebra de linha.

```html
Texto antes<br>Texto depois
```

- **span**: Contêiner de texto inline genérico, semelhante a `<div>`.

```html
<span>Texto inline</span>
```

- **sub**: Usado para texto com linha de base inferior, útil para fórmulas matemáticas e químicas.

```html
<sub>Texto com linha de base inferior</sub>
```

- **sup**: Usado para texto com linha de base superior, útil para expoentes ou números ordinais.

```html
<sup>Texto com linha de base superior</sup>
```