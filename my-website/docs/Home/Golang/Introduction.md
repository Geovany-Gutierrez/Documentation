---
sidebar_position: 1
title: Introdução ao Golang
sidebar_label: Introdução
---

# Introdução ao Go

Todo programa Go começa com um `package`, indicando onde eles pertencem.

## Package Main
O `package main` é o ponto de entrada para programas executáveis.

## Importação de Pacotes
```go
import "fmt"
```
No Go, é preciso importar pacotes para usar funções e funcionalidades. "fmt" significa "format" e é usado para input e output.

## Função Main
Todo programa Go executável deve ter uma função `main`:
```go
func main() {
    fmt.Println("Hello World")
}
```
`fmt.Println("Hello World")` usa o `Println` para lançar "Hello World" no console. `Println` quebra a linha após ser lançado.

## Módulos
São coleções de pacotes. Todos os projetos Go têm um arquivo `go.mod`, que contém informações como dependências, a versão do Go, informações de pacotes, etc.

```bash
go mod init <module path>
```

## Comando 'go'
É o comando CLI da linguagem, usado em vários estágios do desenvolvimento:

- **Rodar Código:** `go run`
- **Compilar Executáveis:** `go build`
- **Testar Código:** `go test` testa o pacote atual (`go test ./...` roda códigos em todos os subdiretórios)
- **Gerenciamento de Pacotes com Módulos:** `go mod init` inicializa um novo módulo (projeto Go) e cria um arquivo `go.mod`
- **Download e Instalação de Pacotes:** `go get`
- **Remoção de Dependências Desnecessárias:** `go mod tidy`
- **Listagem de Dependências:** `go list -m all`

## Documentação e Análise de Dependências
- **Documentação:** `go doc` mostra a documentação de um pacote ou símbolo.
- **Análise de Dependências:** `go list` lista informações de pacotes disponíveis.
- **Listagem de Versões de um Módulo:** `go list -m -version <module>`

## Formatação de Código e Ambiente
- **Formatação de Código:** `go fmt` formata o código fonte Go.
- **Ambiente:** `go env` mostra informações do ambiente Go.

## Variáveis em Go
Variáveis são uma maneira de guardar e acessar dados.

### Criação Única
Quando é necessário criar e inicializar uma única variável.
```go
package main

import "fmt"

func main() {
    var singleVariable int
    singleVariable = 10
    fmt.Println(singleVariable)
}
```
Nesse exemplo, `singleVariable` é declarado e depois recebe o valor 10.

### Criação Múltipla
É possível criar múltiplas variáveis ao mesmo tempo.
```go
package main

import "fmt"

func main() {
    var a, b, c = 1, 2, "Coders"
    fmt.Println(a, b, c)
}
```
Nesse exemplo, `a` recebe 1, `b` recebe 2, e `c` recebe "Coders".

### Criação em Bloco
Utilizado quando você precisa delimitar o escopo de uma variável para um único escopo de código.
```go
package main

import "fmt"

func main() {
    {
        var blockVariable int
        blockVariable = 5
        fmt.Println(blockVariable)
    }
    // impossível acessar a variável aqui
}
```
Nesse exemplo, a variável só é acessível dentro do escopo dela.

### Criar e Inicializar
É possível declarar e inicializar uma variável em uma única linha utilizando o `:=`.
```go
package main

import "fmt"

func main() {
    createAndAssignVar := 42
    fmt.Println(createAndAssignVar)
}
```
Nesse exemplo, a variável é declarada e já é inicializada na mesma linha com o uso de `:=`.

## Convenções de Nomenclatura
A nomenclatura de variáveis em Go segue o camelCase.
```go
const camelCase = 20
```
É boa prática dar nomes descritivos às variáveis.
```go
const materialDeLeitura = "Livros"
```

## Diferença entre var e const em Go
Há duas maneiras de declarar variáveis: `var` e `const`.

- `var` é usado para declarar variáveis, seus valores podem ser modificados após a declaração.
- `const` é usado para declarar constantes, com valores inalteráveis após a declaração.

### Exemplo
```go
package main

import "fmt"

func main() {
    // utilizando var
    var variable1 int = 5
    variable1 = 10 // Válido, o valor de variable1 pode ser trocado

    // utilizando const
    const constant1 int = 5
    // constant1 = 10 // Inválido, erro, constantes são inalteráveis

    fmt.Println(variable1, constant1)
}
```
Nesse exemplo, `variable1` pode ter o valor alterado, já `constant1` permanece inalterável após a declaração.