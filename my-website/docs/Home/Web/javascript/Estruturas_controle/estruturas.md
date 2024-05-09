---
title: Estruturas de controle
---


# Estruturas de Controle: São construções que permitem controlar o fluxo de execução do código baseado em condições ou repetições.
```javascript
// Exemplo: if
if (condicao) {
  // código a ser executado se a condição for verdadeira
}
```

2. **Break e Continue**: São usados para alterar o fluxo normal de loops.

   ```javascript
   // Exemplo: break
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       break; // sai do loop quando i é igual a 5
     }
   }

   // Exemplo: continue
   for (let i = 0; i < 10; i++) {
     if (i % 2 === 0) {my-website/docs/Home/javascript/Funcoes/_category_.json
       continue; // pula a iteração atual se i for par
     }
     console.log(i); // imprime apenas números ímpares
   }
   ```

3. **Do/While**: É um loop que executa um bloco de código pelo menos uma vez e depois repete o loop enquanto a condição especificada é verdadeira.

   ```javascript
   let i = 0;
   do {
     i++;
   } while (i < 5);
   ```

4. **For**: É um loop que permite especificar a inicialização, a condição de teste e a expressão final em uma única linha.

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

5. **For/In**: É um loop que itera sobre as propriedades enumeráveis de um objeto.

   ```javascript
   const objeto = { a: 1, b: 2, c: 3 };
   for (const prop in objeto) {
     console.log(`objeto.${prop} = ${objeto[prop]}`);
   }
   ```

6. **If**: É uma estrutura condicional que executa um bloco de código se uma condição especificada é verdadeira.

   ```javascript
   if (condicao) {
     // código a ser executado se a condição for verdadeira
   }
   ```

7. **If/Else**: É uma extensão do `if` que permite executar um bloco de código alternativo se a condição `if` não for verdadeira.

   ```javascript
   if (condicao) {
     // código a ser executado se a condição for verdadeira
   } else {
     // código a ser executado se a condição for falsa
   }
   ```

8. **If/Else If**: Permite testar várias condições em sequência.

   ```javascript
   if (condicao1) {
     // código a ser executado se condicao1 for verdadeira
   } else if (condicao2) {
     // código a ser executado se condicao2 for verdadeira
   } else {
     // código a ser executado se nenhuma das condições anteriores for verdadeira
   }
   ```

9. **Switch**: É uma estrutura condicional que permite executar diferentes blocos de código com base em diferentes casos.

   ```javascript
   switch (expressao) {
     case valor1:
       // código a ser executado se expressao === valor1
       break;
     case valor2:
       // código a ser executado se expressao === valor2
       break;
     default:
     // código a ser executado se expressao não for igual a nenhum dos casos
   }
   ```

10. **While**: É um loop que repete um bloco de código enquanto uma condição especificada é verdadeira.
    ```javascript
    let i = 0;
    while (i < 5) {
      i++;
    }
    ```
