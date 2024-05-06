---
sidebar_position: 2
title: Metadados do documento
sidebar_label: Metadados
---

# Metadados do documento

**Conceito e Uso:** Os metadados, como `<meta>`, fornecem informações sobre o documento HTML, como a codificação de caracteres, descrição e palavras-chave para mecanismos de busca.

**Exemplo de código (base):**
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

- **base**

**Descrição:** Este elemento geralmente define configurações básicas para o documento HTML, como a codificação de caracteres e outros metadados.

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

- **head**

**Descrição:** O elemento head geralmente contém elementos que não são exibidos na página, como metadados, links para folhas de estilo e scripts.

```html
<!-- Conteúdo do head -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Outros metadados e links para folhas de estilo aqui -->
```

- **link**

**Descrição:** Este elemento geralmente contém elementos `<link>` para vincular o documento HTML a folhas de estilo externas.

```html
<!-- Conteúdo do link -->
<link rel="stylesheet" href="styles.css">
```

- **meta**

**Descrição:** O elemento meta geralmente contém elementos `<meta>` para definir metadados do documento, como a descrição da página e palavras-chave para mecanismos de busca.

```html
<!-- Conteúdo do meta -->
<meta name="description" content="Descrição da página">
<meta name="keywords" content="palavras-chave, para, busca">
```

- **style**

**Descrição:** Este elemento geralmente contém estilos CSS embutidos ou vincula o documento a uma folha de estilo interna.

```html
<!-- Conteúdo do style -->
<style>
    /* Estilos CSS aqui */
</style>
```

- **title**

**Descrição:** O elemento title geralmente contém o título da página, definido pelo elemento `<title>`.

```html
<!-- Conteúdo do title -->
<title>Título da Página</title>
```