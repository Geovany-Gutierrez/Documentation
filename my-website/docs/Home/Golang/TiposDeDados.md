---
sidebar_position: 2
title: Tipos de Dados em Golang
sidebar_label: Tipos de Dados
---

# Tipos de Dados em Golang

Existem diferentes tipos de dados em Golang, que incluem: `number`, `string`, `boolean`, `array`, `pointer`, `struct`, `map` e `interface`.

## Exemplos

### Number (int, float64)
Usado para representar valores numéricos (inteiros ou decimais).

```go
package main

import "fmt"

func main() {
    // Inteiro
    var intVar int = 42
    fmt.Println(intVar)

    // Decimal
    var decimalVar float64 = 3.14
    fmt.Println(decimalVar)
}
```
Nesse exemplo, `intVar` é um número inteiro, e `decimalVar` é um decimal.

### String
Usado para representar uma sequência de caracteres.

```go
package main

import "fmt"

func main() {
    var stringVar string = "Hello, Golang"
    fmt.Println(stringVar)
}
```
Nesse exemplo, a variável do tipo string `stringVar` recebe o texto "Hello, Golang".

### Boolean
Usado para representar valores lógicos (true ou false).

```go
package main

import "fmt"

func main() {
    var boolVar bool = true
    fmt.Println(boolVar)
}
```
Nesse exemplo, `boolVar` recebe o valor lógico 'true'.

### Array
Usado para armazenar uma sequência de elementos do mesmo tipo com valor fixo.

```go
package main

import "fmt"

func main() {
    var intArray [3]int = [3]int{1, 2, 3}
    fmt.Println(intArray)
}
```
Nesse exemplo, `intArray` é um array de inteiros com tamanho fixo (3).

### Pointer
Usado para guardar o endereço de memória de uma variável.

```go
package main

import "fmt"

func main() {
    var originalVar int = 42
    var pointerVar *int = &originalVar
    fmt.Println(*pointerVar) // Desreferenciando o ponteiro
}
```
Nesse exemplo, `pointerVar` é um ponteiro para o endereço de memória do valor de `originalVar`.

### Struct (Structure)
Usado para agrupar variáveis de diferentes tipos sob um único nome.

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    var personVar Person = Person{Name: "Alice", Age: 22}
    fmt.Println(personVar)
}
```
Nesse exemplo, `personVar` é um struct representando uma 'Person', com valores atribuídos aos seus campos.

### Map
Usado para representar pares de chave-valor.

```go
package main

import "fmt"

func main() {
    var myMap map[string]int = map[string]int{"one": 1, "two": 2, "three": 3}
    fmt.Println(myMap)
}
```
Nesse exemplo, `myMap` é um map com chaves do tipo string e valores inteiros.

### Interface
Um conjunto de métodos (com suas assinaturas) que se espera que a struct tenha implementado.

```go
package main

import "fmt"

type Shape interface {
    Area() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return 3.14 * c.Radius * c.Radius
}

func main() {
    var myShape Shape = Circle{Radius: 5.0}
    fmt.Println(myShape.Area())
}
```
Nesse exemplo, `Shape` é uma interface, e `Circle` é uma struct implementando o método `Area` da interface `Shape`.