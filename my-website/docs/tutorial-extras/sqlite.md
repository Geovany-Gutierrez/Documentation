---
sidebar_position: 2
---

# Uso de SQLITE em .NET Maui

#### Introdução, criação + configuração, CRUD, etc.
---
### **Introdução ao SQLite e Bancos de Dados Relacionais:**
SQLite é um sistema de gerenciamento de banco de dados relacional leve que é incorporado em .NET MAUI. Ele permite armazenar e recuperar dados de forma eficiente e é ideal para dispositivos móveis e aplicações desktop.

**Exemplo de inicialização do SQLite:**
```csharp
using SQLite;
var db = new SQLiteConnection("caminho_para_o_banco_de_dados.db");
db.CreateTable<Produto>();
```

### **Criação e Configuração de Bancos de Dados SQLite em Aplicativos .NET MAUI:**
A criação e configuração de um banco de dados SQLite são feitas através da definição de tabelas e conexões. É possível definir as tabelas usando classes em C# com atributos que representam as colunas.

**Exemplo de definição de tabela:**
```csharp
public class Produto
{
    [PrimaryKey, AutoIncrement]
    public int Id { get; set; }
    public string Nome { get; set; }
    public double Preco { get; set; }
}
```

### **Operações Básicas de CRUD com SQLite em .NET MAUI:**
CRUD são as operações fundamentais para interagir com o banco de dados: **C**riar, **R**ecuperar, **A**tualizar e **D**eletar.

**Exemplo de atualização de dados com busca condicional:**
```csharp
// Atualizando o preço de um produto específico
var produto = db.Table<Produto>().FirstOrDefault(p => p.Nome == "Produto A");
if (produto != null)
{
    produto.Preco = 15.99;
    db.Update(produto);
}
```

### **Consultas SQL Simples e Avançadas em .NET MAUI:**
Realizar consultas SQL é essencial para a manipulação de dados. É possível executar desde consultas simples até operações mais complexas com joins e agrupamentos.

**Exemplo de consulta com JOIN:**
```csharp
var resultado = db.Query<Produto>(
    "SELECT p.*, c.Nome as CategoriaNome FROM Produto p " +
    "JOIN Categoria c ON p.CategoriaId = c.Id WHERE p.Preco > ?", 50.00);
```

### **Gerenciamento de Versão e Migração de Bancos de Dados em .NET MAUI:**
O gerenciamento de versões e migrações é importante para atualizações do esquema do banco de dados sem perder dados existentes.

**Exemplo de migração com adição de coluna e atualização de dados:**
```csharp
db.Migrate(table => {
    table.AddColumn<Produto>("Estoque");
    // Atualizando o estoque para todos os produtos
    var todosProdutos = db.Table<Produto>().ToList();
    foreach (var p in todosProdutos)
    {
        p.Estoque = 100; // Valor padrão para o estoque
        db.Update(p);
    }
});
```