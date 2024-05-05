---
sidebar_position: 2
title: Fundamentos Pt2.
---

12. **Notação Ponto** (`notacao.js`):

    - Usada para acessar propriedades e métodos de objetos.
    - Exemplo:
      ```javascript
      let pessoa = { nome: "Carlos", idade: 28 };
      console.log(pessoa.nome); // Carlos
      ```

13. **Null e Undefined** (`nullEUndefined.js`):

    - `null` é um valor que representa a ausência intencional de qualquer valor de objeto, e `undefined` é um valor primitivo utilizado quando uma variável não teve um valor atribuído.
    - Exemplo:
      ```javascript
      let indefinido;
      let nulo = null;
      console.log(indefinido, nulo); // undefined null
      ```

14. **Números** (`numeros.js`):

    - Em JavaScript, todos os números são representados como valores de ponto flutuante de dupla precisão.
    - Exemplo:
      ```javascript
      let inteiro = 10;
      let decimal = 3.14;
      ```

15. **Cuidados com Números** (`numerosAlgunsCuidados.js`):

    - Devido à precisão de ponto flutuante, alguns cálculos podem não ter resultados exatos.
    - Exemplo:
      ```javascript
      console.log(0.1 + 0.2 === 0.3); // false
      ```

16. **Objetos** (`objeto.js`, `objeto2.js`):

    - Objetos são coleções de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.
    - Exemplo:
      ```javascript
      let livro = {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano: 1943,
      };
      ```

17. **Organização de Código** (`organizacao.js`):

    - O código JavaScript pode ser organizado em blocos, que podem conter declarações, funções, loops, etc.
    - Exemplo:
      ```javascript
      {
        let local = "dentro do bloco";
        console.log(local); // dentro do bloco
      }
      ```

18. **Pares Nome/Valor** (`parNomeValor.js`):

    - Em JavaScript, objetos são conjuntos de pares nome/valor.
    - Exemplo:
      ```javascript
      let pessoa = {
        nome: "Ana",
        idade: 25,
      };
      ```

19. **Operadores Relacionais** (`relacionais.js`):

    - Comparam dois valores e retornam um booleano indicando a relação entre eles.
    - Exemplo:
      ```javascript
      console.log(5 > 3); // true
      ```

20. **Strings** (`string.js`):

    - São sequências de caracteres usadas para representar texto.
    - Exemplo:
      ```javascript
      let saudacao = "Olá, mundo!";
      console.log(saudacao.length); // 11
      ```
