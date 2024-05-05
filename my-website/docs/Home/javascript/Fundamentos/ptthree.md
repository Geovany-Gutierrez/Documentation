---
sidebar_position: 3
title: Fundamentos Pt3.
---

21. **Template Strings** (`templateString.js`):

    - Permitem a incorporação de expressões dentro de strings, facilitando a concatenação.
    - Exemplo:
      ```javascript
      let nome = "Maria";
      let mensagem = `Bem-vinda, ${nome}!`;
      console.log(mensagem); // Bem-vinda, Maria!
      ```

22. **Operador Ternário** (`ternario.js`):

    - É um operador condicional que atribui um valor a uma variável baseado em uma condição.
    - Exemplo:
      ```javascript
      let idade = 18;
      let podeVotar = idade >= 18 ? "sim" : "não";
      console.log(podeVotar); // sim
      ```

23. **Tipagem Fraca** (`tipagemFraca.js`):

    - JavaScript é uma linguagem de tipagem fraca, o que significa que as variáveis podem mudar de tipo.
    - Exemplo:
      ```javascript
      let variavel = "texto";
      variavel = 10; // agora é um número
      ```

24. **Tratamento de Erros** (`tratamentoDeErros.js`):

    - O JavaScript fornece blocos `try`, `catch`, `finally` e a palavra-chave `throw` para tratar erros.
    - Exemplo:
      ```javascript
      try {
        throw new Error("Algo deu errado!");
      } catch (e) {
        console.log(e.message); // Algo deu errado!
      }
      ```

25. **Tudo é Função** (`tudoEFuncao.js`):

    - Em JavaScript, funções são objetos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos ou retornadas por outras funções.
    - Exemplo:
      ```javascript
      const somar = function (a, b) {
        return a + b;
      };
      console.log(somar(5, 3)); // 8
      ```

26. **Operadores Unários** (`unarios.js`):

    - São operadores que atuam em apenas um operando. Exemplos incluem `typeof`, que retorna o tipo de uma variável, e `delete`, que remove uma propriedade de um objeto.
    - Exemplo:
      ```javascript
      let numero = 5;
      console.log(typeof numero); // number
      ```

27. **Declaração de Variáveis com Let** (`usandoLet1.js`, `usandoLetEmLoop1.js`, `usandoLetEmLoop2.js`):

    - `let` permite declarar variáveis com escopo de bloco, diferente de `var`, que declara variáveis com escopo de função ou global.
    - Exemplo:
      ```javascript
      let a = 2;
      {
        let a = 3;
        console.log(a); // 3
      }
      console.log(a); // 2
      ```

28. **Declaração de Variáveis com Var** (`usandoVar1.js`, `usandoVar2.js`, `usandoVarEmLoop1.js`, `usandoVarEmLoop2.js`):

    - `var` é a forma mais antiga de declarar variáveis em JavaScript. Variáveis declaradas com `var` têm escopo de função ou global.
    - Exemplo:
      ```javascript
      var a = 2;
      {
        var a = 3;
        console.log(a); // 3
      }
      console.log(a); // 3
      ```

29. **Variáveis e Constantes** (`variaveiseconstantes.js`):
    - `let` é usado para declarar variáveis que podem mudar, enquanto `const` é usado para declarar constantes que não podem ser reatribuídas.
    - Exemplo:
      ```javascript
      const PI = 3.14159;
      let raio = 2;
      let area = PI * raio * raio;
      console.log(area); // 12.56636
      ```
