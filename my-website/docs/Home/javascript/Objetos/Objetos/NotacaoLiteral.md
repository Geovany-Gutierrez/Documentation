---
sidebar_position: 5
title: Notação Literal
sidebar_label: Notação Literal
---

## Notação literal

No `obj3`, o valor de "Nota" não está sendo passado como 7.87 diretamente. Vou corrigir essa explicação. Obrigado por apontar! Vou refazer as anotações com a correção.

```javascript
// Declaração de variáveis
const a = 1;
const b = 2;
const c = 3;

// Criando objetos 'obj1' e 'obj2'
const obj1 = { a: a }; // Objeto 'obj1' com propriedade 'a' e valor de 'a'
const obj2 = { a, b, c }; // Objeto 'obj2' com propriedades 'a', 'b' e 'c' e valores correspondentes
console.log(obj1, obj2);

// Definição de atributos dinamicamente
const nomeAttr = "Nota"; // Atributo 'nomeAttr' com valor "Nota"
const valorAttr = 7.87; // Atributo 'valorAttr' com valor 7.87

// Criando objeto 'obj3' e adicionando atributos dinamicamente
const obj3 = {}; // Objeto vazio
obj3[nomeAttr] = valorAttr; // Adicionando atributo 'Nota' com valor 7.87 ao objeto 'obj3'
console.log(obj3);

// Criando objeto 'obj4' com atributo dinâmico usando notação de colchetes
const obj4 = { [nomeAttr]: valorAttr }; // Objeto 'obj4' com atributo dinâmico 'Nota' e valor 7.87
console.log(obj4);

// Criando objeto 'obj5' com funções
const obj5 = {
  funcao1: function () {}, // Método tradicional de declaração de função
  // Sintaxe ECMAScript 2015 (ES6)
  funcao2() {}, // Nova sintaxe de declaração de função
};

console.log(obj5);
```

<details>
<summary>Explicação</summary>

Em JavaScript, é possível definir propriedades de objetos de forma dinâmica usando a notação de colchetes (`[]`). Isso é útil quando o nome da propriedade está armazenado em uma variável. Por exemplo, ao criar o objeto `obj4`, em vez de escrever `{ nomeAttr: valorAttr }`, utilizamos a variável `nomeAttr` dentro de colchetes para determinar dinamicamente o nome da propriedade.

```javascript
const obj4 = { [nomeAttr]: valorAttr };
```

Essa sintaxe permite que o JavaScript avalie a expressão entre colchetes e use o resultado como o nome da propriedade. Assim, o objeto `obj4` terá uma propriedade chamada "Nota", com o valor 7.87.

No `obj3`, estamos adicionando uma propriedade ao objeto dinamicamente, onde o nome da propriedade é o valor da variável `nomeAttr` e o valor dessa propriedade é o valor da variável `valorAttr`. Portanto, o resultado é um objeto `obj3` com a propriedade `{ Nota: 7.87 }`.

</details>
