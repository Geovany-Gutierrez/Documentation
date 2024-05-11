---
sidebar_position: 1
title: Formulario de login
sidebar_label: Login
---


# App.tsx

<details>
<summary>Código do App.tsx</summary>

```jsx
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage/loginPage";
import Teste from "./pages/CarouselPage/teste";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (storedUser && storedUser.token) {
            setIsLoggedIn(true);
            setCurrentUser(storedUser);
        } else {
            setIsLoggedIn(false);
            setCurrentUser(null);
        }
    }, [isLoggedIn]);

    return (
        <>
            {isLoggedIn ? <Teste currentUser={currentUser} /> : <LoginPage />}
        </>
    );
}

export default App;
```

</details>

# Form.tsx

<details>
<summary>Código do Form.tsx</summary>

```jsx
import { Title, Paragraph, InputField, FormLabel, SubmitButton, RedSpan } from "../styles/form.styles";
import React, { useState } from "react";

function generateToken() {
    return Math.random().toString(36).substring(2, 18);
}

const Form: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formType, setFormType] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleToggleForm = () => {
        setUsername("");
        setPassword("");
        setFormType(formType === 0 ? 1 : 0);
    };

    const handleRegister = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const usernameToCreate = (document.getElementById("createUser") as HTMLInputElement)?.value.trim();
        const passwordToCreate = (document.getElementById("createPassword") as HTMLInputElement)?.value.trim();
        if (!usernameToCreate || !passwordToCreate) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const existingUser = JSON.parse(localStorage.getItem(usernameToCreate) || "null");
        if (existingUser) {
            alert("Este usuário já existe. Por favor, escolha outro nome de usuário.");
            return;
        }
        const token = generateToken();
        const newUser = {
            username: usernameToCreate,
            password: passwordToCreate,
            token: token
        };
        localStorage.setItem(usernameToCreate, JSON.stringify(newUser));
        alert("Registro bem-sucedido! Por favor, faça login.");
        handleToggleForm();
    };

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        const usernameInput = (document.getElementById("username") as HTMLInputElement)?.value.trim();
        const passwordInput = (document.getElementById("password") as HTMLInputElement)?.value.trim();
        if (!usernameInput || !passwordInput) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const storedUser = JSON.parse(localStorage.getItem(usernameInput) || "null");
        if (storedUser && storedUser.password === passwordInput) {
            if (!storedUser.token) {
                const token = generateToken();
                storedUser.token = token;
                localStorage.setItem(usernameInput, JSON.stringify(storedUser));
            }
            localStorage.setItem('currentUser', JSON.stringify(storedUser));
            setLoggedIn(true);
            alert("Login bem-sucedido!");
            window.location.reload();
        } else {
            alert("Usuário ou senha incorretos!");
        }
    };

    return (
        <form onSubmit={formType === 0 ? handleLogin : handleRegister} action="">
            <Title htmlFor="username">{formType === 0 ? "Bem vindo(a) de volta!" : "Crie sua conta!"}</Title>
            <Paragraph>{formType === 0 ? "Acesse sua conta" : "Crie uma nova conta"}</Paragraph>
            <InputField
                id={formType === 0 ? "username" : "createUser"}
                placeholder={formType === 0 ? "Usuário" : "Crie seu Usuário"}
                value={username}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => setUsername(e.target.value)}
            />
            <InputField
                id={formType === 0 ? "password" : "createPassword"}
                placeholder={formType === 0 ? "Senha" : "Crie sua Senha"}
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassword(e.target.value)}
            />
            {formType === 0 ? (
                <div>
                    <input type="checkbox" id="salvarLogin" />
                    <FormLabel htmlFor="salvarLogin">Salvar login</FormLabel>
                </div>
            ) : null}
            <SubmitButton type="submit" value={formType === 0 ? "Entrar" : "Registrar"} />
            <Paragraph \$textAlign="center">
                {formType === 0 ? "Ainda não tem o login?" : "Já tem uma conta?"}
                <a href="#" onClick={handleToggleForm}>
                    <RedSpan>{formType === 0 ? "Cadastre-se" : "Faça login"}</RedSpan>
                </a>
            </Paragraph>
        </form>
    );
};

export default Form;
```

</details>

<details>
<summary>App</summary>

## App.tsx - Documentação

O arquivo `App.tsx` é o ponto de entrada principal do aplicativo React. Ele gerencia o estado de autenticação do usuário e renderiza as páginas correspondentes com base nesse estado.

### Estados

- `isLoggedIn`: Um booleano que determina se o usuário está logado.
- `currentUser`: Armazena as informações do usuário logado.

### useEffect Hook

O hook `useEffect` é utilizado para verificar se existe um usuário logado no `localStorage`. Se um usuário com um token válido for encontrado, o estado `isLoggedIn` é definido como `true` e `currentUser` é atualizado com as informações do usuário.

### Renderização Condicional

O componente `App` utiliza renderização condicional para exibir a página de teste (`Teste`) se o usuário estiver logado (`isLoggedIn` é `true`). Caso contrário, a página de login (`LoginPage`) é exibida.

### Código de Exemplo

```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (storedUser && storedUser.token) {
      setIsLoggedIn(true);
      setCurrentUser(storedUser);
    } else {
      setIsLoggedIn(false);
      setCurrentUser(null);
    }
  }, [isLoggedIn]);

  return (
    <>{isLoggedIn ? <Teste currentUser={currentUser} /> : <LoginPage />}</>
  );
}
```

</details>

<details>
<summary>Form</summary>

## Form.tsx - Documentação

O arquivo `Form.tsx` contém um componente de formulário que permite aos usuários se registrarem ou fazerem login. Ele usa estados para gerenciar as entradas do usuário e alternar entre os modos de login e registro.

### Estados

- `username`: Armazena o nome de usuário inserido.
- `password`: Armazena a senha inserida.
- `formType`: Determina se o formulário está no modo de login (`0`) ou registro (`1`).
- `loggedIn`: Um booleano que indica se o usuário está logado.

### Funções

- `generateToken`: Gera um token aleatório para o usuário.
- `handleToggleForm`: Alterna entre os modos de login e registro e limpa os campos de entrada.
- `handleRegister`: Lida com o processo de registro do usuário.
- `handleLogin`: Lida com o processo de login do usuário.

### Código de Exemplo

```jsx
const Form: React.FC = () => {
  // ... estados e funções ...

  return (
    <form onSubmit={formType === 0 ? handleLogin : handleRegister}>
      {/* ... campos de entrada e botões ... */}
    </form>
  );
};
```

### Explicação Detalhada

- **generateToken**: Esta função cria um token único para cada usuário, que é usado para autenticar sessões de usuário.
- **handleToggleForm**: Quando o usuário deseja alternar entre o formulário de login e registro, esta função limpa os campos de `username` e `password` e atualiza `formType`.
- **handleRegister**: Esta função é chamada quando o usuário submete o formulário de registro. Ela valida os campos de entrada e, se tudo estiver correto, cria um novo usuário no `localStorage`.
- **handleLogin**: Similarmente, esta função é chamada quando o formulário de login é submetido. Ela verifica as credenciais do usuário e, se estiverem corretas, loga o usuário e recarrega a página.

</details>

Entendido! Vamos detalhar como os dados são tratados no `localStorage` pelas funções `handleLogin`, `handleRegister` e `handleToggleForm` do seu código React.

<details>
<summary>Tratamento de Dados no Local Storage</summary>

## Tratamento de Dados no Local Storage

O `localStorage` é uma ferramenta poderosa para armazenar dados localmente no navegador do usuário. No contexto do seu aplicativo, ele é utilizado para gerenciar informações de autenticação e registro de usuários.

### handleLogin

A função `handleLogin` é responsável por autenticar um usuário com base nas credenciais fornecidas. Aqui está o que acontece passo a passo:

1. **Validação**: Verifica se os campos de `username` e `password` não estão vazios.
2. **Busca de Usuário**: Procura no `localStorage` por um usuário com o `username` fornecido.
3. **Verificação de Credenciais**: Compara a senha do usuário armazenada com a senha fornecida.
4. **Geração de Token**: Se o usuário não tiver um token, um novo é gerado.
5. **Atualização de Dados**: Atualiza o `localStorage` com o token do usuário.
6. **Autenticação**: Define o usuário como atual (`currentUser`) e recarrega a página.

### handleRegister

A função `handleRegister` lida com o registro de novos usuários. O processo é o seguinte:

1. **Validação**: Assegura que os campos de `username` e `password` para criação estão preenchidos.
2. **Verificação de Existência**: Checa se o `username` já existe no `localStorage`.
3. **Criação de Usuário**: Se o `username` não existir, cria um novo objeto de usuário com `username`, `password` e um `token` gerado.
4. **Armazenamento**: Salva o novo usuário no `localStorage`.
5. **Confirmação**: Exibe uma mensagem de sucesso e chama `handleToggleForm` para alternar para o formulário de login.

### handleToggleForm

A função `handleToggleForm` é usada para alternar entre os formulários de login e registro. Ela também limpa os campos de entrada:

1. **Limpeza de Campos**: Zera os valores de `username` e `password`.
2. **Alternância de Formulário**: Muda `formType` para alternar entre login (0) e registro (1).

### Exemplo de Código

```jsx
const handleLogin = (event) => {
  // ... processo de login ...
};

const handleRegister = (e) => {
  // ... processo de registro ...
};

const handleToggleForm = () => {
  setUsername("");
  setPassword("");
  setFormType(formType === 0 ? 1 : 0);
};
```

</details>
