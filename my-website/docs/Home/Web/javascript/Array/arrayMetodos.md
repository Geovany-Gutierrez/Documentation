---
sidebar_position: 4
title: Metodos importantes
sidebar_label: Metodos do Array
---


### arrayMetodos.js

#### Descrição:
Neste exemplo, são utilizados métodos de array como `pop`, `push`, `shift`, `unshift`, `splice` e `slice` para manipulação de arrays.

#### Código:
```javascript
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um item ao final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um item no início do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona elementos em uma posição específica
console.log(pilotos)

pilotos.splice(3, 1) // Remove um elemento em uma posição específica
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Retorna parte do array a partir de uma posição específica
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna parte do array entre duas posições específicas
console.log(algunsPilotos2)
```

#### Explicação:
Demonstramos diversos métodos de manipulação de arrays em JavaScript, como `pop`, `push`, `shift`, `unshift`, `splice` e `slice`.

#### Exercício:
1. Após cada operação de manipulação de array, qual é o estado atual do array `pilotos`?

---
