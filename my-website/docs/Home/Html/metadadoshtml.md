---
sidebar_position: 2
title: Metadados do documento
sidebar_label: Metadados
---

# Metadados do documento

**Conceito e Uso:** Os metadados, como `<meta>`, fornecem informações sobre o documento HTML, como a codificação de caracteres, descrição e palavras-chave para mecanismos de busca.

**Exemplo de código (base.html):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Descrição da página">
    <meta name="keywords" content="palavras-chave, para, busca">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo da página aqui -->
</body>
</html>
```

- **base.html**

**Descrição:** Este arquivo geralmente define configurações básicas para o documento HTML, como a codificação de caracteres e outros metadados.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <!-- Outros metadados aqui -->
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo da página aqui -->
</body>
</html>
```

- **head.html**

**Descrição:** O arquivo head.html geralmente contém elementos que não são exibidos na página, como metadados, links para folhas de estilo e scripts.

```html
<!-- Conteúdo do head.html -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Outros metadados e links para folhas de estilo aqui -->
```

- **link.html**

**Descrição:** Este arquivo geralmente contém elementos `<link>` para vincular o documento HTML a folhas de estilo externas.

```html
<!-- Conteúdo do link.html -->
<link rel="stylesheet" href="styles.css">
```

- **meta.html**

**Descrição:** O arquivo meta.html geralmente contém elementos `<meta>` para definir metadados do documento, como a descrição da página e palavras-chave para mecanismos de busca.

```html
<!-- Conteúdo do meta.html -->
<meta name="description" content="Descrição da página">
<meta name="keywords" content="palavras-chave, para, busca">
```

- **style.html**

**Descrição:** Este arquivo geralmente contém estilos CSS embutidos ou vincula o documento a uma folha de estilo interna.

```html
<!-- Conteúdo do style.html -->
<style>
    /* Estilos CSS aqui */
</style>
```

- **title.html**

**Descrição:** O arquivo title.html geralmente contém o título da página, definido pelo elemento `<title>`.

```html
<!-- Conteúdo do title.html -->
<title>Título da Página</title>
```