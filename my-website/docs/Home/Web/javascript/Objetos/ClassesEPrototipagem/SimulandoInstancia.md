---
sidebar_position: 13
title: Simulando instancia 'new'
sidebar_label: Simulando 'new'
---


## Simulando o Comportamento do Operador 'new'

```javascript
function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 456);
console.log(aula1, aula2);

// Simulando o operador 'new'
function novo(f, ...params) {
  // Criou um objeto com notação literal
  const obj = {};
  // Associou ao prototype da função passada como parâmetro (f)
  obj.__proto__ = f.prototype;
  // Executa a função (f) passando o contexto (this) como obj e os parâmetros passados em 'params'
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Até breve", 456);
console.log(aula3, aula4);
```

Qual será a saída de `console.log(aula1, aula2)`?

<details>
<summary>Resposta</summary>

```javascript
Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }
```

</details>
Qual será a saída de `console.log(aula3, aula4)`?
<details>
<summary>Resposta</summary>

```javascript
Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Bem vindo', videoID: 456 }
```

</details>
````
