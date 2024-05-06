---
sidebar_position: 7
title: Elementos multimidia
sidebar_label: Multimidia
---

# Multimidia

**Conceito e Uso:** Elementos de multimídia, como `<img>` e `<video>`, permitem a inclusão de conteúdo como imagens, áudio e vídeo em uma página HTML.

**Exemplo de código (img.html):**
```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

- **area.html**

**Descrição:** O arquivo area.html geralmente contém uma área clicável em uma imagem, usada em mapas de imagem.

```html
<map name="mapa">
    <area shape="rect" coords="0,0,50,50" href="pagina.html" alt="Área 1">
    <area shape="circle" coords="100,100,50" href="pagina.html" alt="Área 2">
</map>
<img src="imagem.jpg" alt="Mapa de imagem" usemap="#mapa">
```

- **audio.html**

**Descrição:** O arquivo audio.html geralmente contém um elemento de áudio para reprodução de som.

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Seu navegador não suporta o elemento de áudio.
</audio>
```

- **img.html**

**Descrição:** O arquivo img.html geralmente contém uma imagem.

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

- **map.html**

**Descrição:** O arquivo map.html geralmente contém um mapa de imagem, associado a áreas clicáveis em uma imagem.

```html
<map name="mapa">
    <area shape="rect" coords="0,0,50,50" href="pagina.html" alt="Área 1">
    <area shape="circle" coords="100,100,50" href="pagina.html" alt="Área 2">
</map>
<img src="imagem.jpg" alt="Mapa de imagem" usemap="#mapa">
```

- **track.html**

**Descrição:** O arquivo track.html geralmente contém uma trilha de texto ou metadados para elementos de áudio ou vídeo.

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="legendas.vtt" kind="subtitles" srclang="pt-br" label="Português">
    Seu navegador não suporta o elemento de vídeo.
</video>
```

- **video.html**

**Descrição:** O arquivo video.html geralmente contém um elemento de vídeo para reprodução de vídeo.

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    Seu navegador não suporta o elemento de vídeo.
</video>
```