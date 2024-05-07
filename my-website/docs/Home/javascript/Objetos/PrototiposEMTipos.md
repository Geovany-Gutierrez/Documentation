---
sidebar_position: 12
title: Prototipos em String e Array
sidebar_label: Prototipos em String e Array
---

## Extensão de Protótipos em Tipos Nativos(String e Array)

```javascript
console.log(typeof String); // Resultado: function
console.log(typeof Array); // Resultado: function
console.log(typeof Object); // Resultado: function
// Todos eles têm um protótipo, pois toda função tem um protótipo

String.prototype.reverse = function () {
  // Usando split da String para converter em array
  // Convertido em array, pode-se utilizar a função Array .reverse()
  // Após a conversão, junta tudo com o .join('')
  return this.split("").reverse().join("");
};

console.log("1234".reverse()); // Resultado: '4321'

Array.prototype.first = function () {
  return this[0];
};

console.log(["a", "b"].first()); // Resultado: 'a'

// Não substitua comportamentos que já existem
String.prototype.toString = function () {
  return "Lascou tudo";
};

console.log("1234".reverse()); // Resultado: '4321'
```

Qual será o resultado de `console.log('1234'.reverse())`?

<details>
<summary>Resposta</summary>
`'4321'`
</details>
Qual será o resultado de `console.log(['a', 'b'].first())`?
<details>
<summary>Resposta</summary>
`'a'`
</details>
