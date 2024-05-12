---
sidebar_position: 7
title: Filter
sidebar_label: Filter
---


### filter1.js e filter2.js

#### Descrição:
Estes exemplos demonstram a utilização do método `filter` para filtrar elementos de um array com base em determinados critérios.

#### Código:
```javascript
const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Ipad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

// Implementação do método filter personalizado
Array.prototype.filter2 = function (callback) {
  const meuArray = [];
  // Itera sobre cada elemento do array
  for (let i = 0; i < this.length; i++) {
    // Chama a função de callback para cada elemento do array
    // Passa o elemento, o índice e o array como parâmetros
    // Verifica se o elemento deve ser incluído no novo array
    if (callback(this[i], i, this)) {
      meuArray.push(this[i]);
    }
  }
  // Retorna o novo array com os elementos filtrados
  return meuArray;
};

// Utilização do método filter personalizado
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

const produtosFiltrados = produtos.filter2(caro).filter2(fragil);
console.log(produtosFiltrados);
```

#### Explicação:
- Criamos uma implementação personalizada do método `filter` chamada `filter2` no protótipo de `Array`.
- Iteramos sobre cada elemento do array, chamando a função de callback passada como argumento para `filter2`.
- Verificamos se o elemento atende aos critérios definidos na função de callback e o incluímos no novo array, caso positivo.
- Demonstramos a utilização do `filter2` para filtrar os produtos que têm preço maior ou igual a 500 e são frágeis.

#### Exercício:
1. Após a execução do método `filter2`, qual é o resultado esperado para cada implementação?

---
