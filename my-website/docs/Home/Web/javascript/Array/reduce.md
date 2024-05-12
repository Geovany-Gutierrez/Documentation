---
sidebar_position: 8
title: Reduce
sidebar_label: Reduce
---


### reduce1.js e reduce2.js1

#### Descrição:
Estes exemplos demonstram a utilização do método `reduce` para reduzir um array a um único valor.

#### Código:
```javascript
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Maria', nota: 9.7, bolsista: true}
]

// Implementação do método reduce personalizado
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    // Realiza a soma das notas dos alunos
    return acumulador + atual
}, 0)

console.log(resultado)  
```

#### Explicação:
- Utilizamos o método `map` para extrair as notas dos alunos e, em seguida, o método `reduce` para somá-las.
- No método `reduce`, passamos uma função acumuladora que recebe o acumulador (resultado parcial da operação) e o valor atual (nota do aluno).
- O valor inicial do acumulador é 0, e a cada iteração, a função acumuladora soma a nota atual ao acumulador.
- No final, o resultado é a soma total das notas dos alunos.

#### Exercício:
1. Após a execução do método `reduce`, qual é o resultado esperado?

---