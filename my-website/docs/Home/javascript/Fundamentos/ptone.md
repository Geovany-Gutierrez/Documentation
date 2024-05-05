---
sidebar_position: 1
title: Fundamentos Pt1.
---

# **Fundamentos**:

- JavaScript é uma linguagem de script multi-paradigma que suporta programação orientada a eventos, funcional e imperativa. É amplamente utilizada para adicionar interatividade às páginas web.
- Exemplo:
  ```javascript
  // Variáveis e constantes
  let mensagem = "Olá, mundo!";
  const PI = 3.14;
  ```

2. **Operadores Aritméticos**:

   - São usados para realizar cálculos matemáticos. Incluem operadores como `+`, `-`, `*`, `/`, `%` (resto da divisão), `++` (incremento) e `--` (decremento).
   - Exemplo:
     ```javascript
     let soma = 10 + 5; // 15
     let resto = 10 % 3; // 1
     ```

3. **Arrays**:

   - São estruturas de dados que armazenam múltiplos valores em uma única variável. Cada item em um array tem um índice, começando do zero.
   - Exemplo:
     ```javascript
     let frutas = ["Maçã", "Banana", "Laranja"];
     console.log(frutas[1]); // Banana
     ```

4. **Atribuição**:

   - O operador de atribuição `=` é usado para atribuir valores a variáveis. Existem também operadores de atribuição compostos como `+=` e `*=` que modificam o valor da variável.
   - Exemplo:
     ```javascript
     let x = 10;
     x += 5; // x agora é 15
     ```

5. **Booleanos**:

   - São tipos de dados lógicos que podem ter apenas dois valores: verdadeiro (`true`) ou falso (`false`).
   - Exemplo:
     ```javascript
     let maiorIdade = true;
     if (maiorIdade) {
       console.log("Pode entrar!");
     }
     ```

6. **Comentários**:

   - Comentários são usados para explicar o código e torná-lo mais legível. Eles não são executados pelo JavaScript.
   - Exemplo:
     ```javascript
     // Isto é um comentário de linha
     /* Isto é um comentário
     de múltiplas linhas */
     ```

7. **Destructuring**:

   - Permite desempacotar valores de arrays ou propriedades de objetos em variáveis distintas.
   - Exemplo:
     ```javascript
     let pessoa = { nome: "João", idade: 25 };
     let { nome, idade } = pessoa;
     console.log(nome); // João
     ```

8. **Funções**:

   - Blocos de código designados para realizar uma tarefa específica, podem ser chamados várias vezes.
   - Exemplo:
     ```javascript
     function cumprimentar(nome) {
       return `Olá, ${nome}!`;
     }
     console.log(cumprimentar("Maria")); // Olá, Maria!
     ```

9. **Hoisting**:

   - Comportamento do JavaScript de mover declarações para o topo do escopo antes da execução do código.
   - Exemplo:
     ```javascript
     console.log(numero); // undefined
     var numero = 5;
     ```

10. **Operadores Lógicos**:

    - Usados para determinar a lógica entre variáveis ou valores. Incluem `&&` (e), `||` (ou) e `!` (não).
    - Exemplo:
      ```javascript
      let a = true;
      let b = false;
      console.log(a && b); // false
      ```

11. **Operadores Matemáticos** (`math.js`):

    - O objeto `Math` em JavaScript contém propriedades e métodos para constantes e funções matemáticas.
    - Exemplo:
      ```javascript
      console.log(Math.sqrt(16)); // 4
      ```