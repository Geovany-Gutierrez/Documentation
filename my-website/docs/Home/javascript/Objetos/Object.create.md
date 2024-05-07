---
sidebar_position: 10
title: Criando com Object.create()
sidebar_label: Object.create()
---

## Criando Objetos com `Object.create()`

```javascript
const pai = { nome: "Pedro", corCabelo: "preto" };

// Criando o objeto filha1 utilizando o objeto pai como protótipo
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo); // Resultado: preto

// Criando o objeto filha2 com dois parâmetros (pai e atributos específicos de filha2)
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});
console.log(filha2.nome); // Resultado: Bia
filha2.nome = "Daenerys"; // Não afeta o valor devido à propriedade 'writable: false'
console.log(Object.keys(filha2)); // Resultado: ['nome']
console.log(Object.keys(filha1)); // Resultado: ['nome']

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(`${key}: Filha 2 property`)
    : console.log(`${key}: Hierárquico`);
  // hasOwnProperty -> Pertence à própria filha2?
}
```

Qual será o resultado de `console.log(filha1.corCabelo)`?

<details>
<summary>Resposta</summary>
`preto`
</details>
Qual será o resultado de `console.log(Object.keys(filha2))`?
<details>
<summary>Resposta</summary>
`['nome']`
</details>
