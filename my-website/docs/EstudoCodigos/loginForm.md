---
sidebar_position: 1
title: Estudo TS - Login Form
sidebar_label: Login Form
---

<details>
<summary>Código</summary>
```javascript
import {
  Title,
  Paragraph,
  InputField,
  FormLabel,
  SubmitButton,
  RedSpan,
} from "../styles/form.styles";

// Componente
import React, { useState } from "react";

function generateToken() {
  // Gera um número aleatório de 16 dígitos
  return Math.random().toString(36).substring(2, 18);
}

const Form: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState(0); // 0 é o login e 1 é o registro
  const [loggedIn, setLoggedIn] = useState(false); 

  const handleToggleForm = () => {
    setUsername(""); // Limpa o username ao alternar entre os formulários
    setPassword(""); // Limpa a senha ao alternar entre os formulários
    setFormType(formType === 0 ? 1 : 0);
  };

  const handleRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const usernameToCreate = (document.getElementById(
      "createUser"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras
    const passwordToCreate = (document.getElementById(
      "createPassword"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras

    if (!usernameToCreate || !passwordToCreate) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem(usernameToCreate) || "null"
    );
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

    const usernameInput = (document.getElementById(
      "username"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras
    const passwordInput = (document.getElementById(
      "password"
    ) as HTMLInputElement)?.value.trim(); // Remove espaços extras

    if (!usernameInput || !passwordInput) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const storedUser = JSON.parse(
      localStorage.getItem(usernameInput) || "null"
    );
    if (storedUser && storedUser.password === passwordInput) {
      if (!storedUser.token) {
        const token = generateToken();
        storedUser.token = token;
        localStorage.setItem(usernameInput, JSON.stringify(storedUser));
      }
      localStorage.setItem('currentUser', JSON.stringify(storedUser));
      setLoggedIn(true);
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <form
      onSubmit={formType === 0 ? handleLogin : handleRegister}
      action=""
    >
      <Title htmlFor="username">
        {formType === 0 ? "Bem vindo(a) de volta!" : "Crie sua conta!"}
      </Title>
      <Paragraph>
        {formType === 0 ? "Acesse sua conta" : "Crie uma nova conta"}
      </Paragraph>
      <InputField
        id={formType === 0 ? "username" : "createUser"}
        placeholder={formType === 0 ? "Usuário" : "Crie seu Usuário"}
        value={username}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setUsername(e.target.value)
        }
      />
      <InputField
        id={formType === 0 ? "password" : "createPassword"}
        placeholder={formType === 0 ? "Senha" : "Crie sua Senha"}
        value={password}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setPassword(e.target.value)
        }
      />
      {formType === 0 ? (
        <div>
          <input type="checkbox" id="salvarLogin" />
          <FormLabel htmlFor="salvarLogin"> Salvar login</FormLabel>
        </div>
      ) : null}
      <SubmitButton
        type="submit"
        value={formType === 0 ? "Entrar" : "Registrar"}
      />
      <Paragraph $textAlign="center">
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
<summary>Entendendo o código</summary>
```javascript
import {
  Title,
  Paragraph,
  InputField,
  FormLabel,
  SubmitButton,
  RedSpan,
} from "../styles/form.styles";
```

- Aqui estamos importando componentes estilizados do arquivo `form.styles`. Esses componentes estilizados são provavelmente estilos reutilizáveis para os elementos do formulário, como títulos, parágrafos, campos de entrada, botões, etc.

```javascript
import React, { useState } from "react";
```

- Importamos o React e a função `useState`. O React é a biblioteca fundamental para construir interfaces de usuário em React, e `useState` é um gancho que permite adicionar estado a componentes de função.

```javascript
function generateToken() {
  // Gera um número aleatório de 16 dígitos
  return Math.random().toString(36).substring(2, 18);
}
```

- Aqui temos uma função chamada `generateToken`, que gera um token aleatório de 16 caracteres. Esse token é usado para identificar usuários durante o processo de registro.

```javascript
const Form: React.FC = () => {
```

- Aqui declaramos um componente de função chamado `Form`. Ele é definido como um componente de função do React (`React.FC`).

```javascript
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [formType, setFormType] = useState(0);
```

- Estamos usando a função `useState` para definir três estados locais dentro do componente `Form`: `username`, `password` e `formType`. `useState` retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado.

```javascript
const handleRegister = (e: { preventDefault: () => void }) => {
  e.preventDefault();

  const usernameToCreate = (document.getElementById(
    "createUser"
  ) as HTMLInputElement)?.value;
  const passwordToCreate = (document.getElementById(
    "createPassword"
  ) as HTMLInputElement)?.value;

  // Verifica se o usuário já existe
  const existingUser = JSON.parse(localStorage.getItem(usernameToCreate) || 'null');
  if (existingUser) {
    alert("Este usuário já existe. Por favor, escolha outro nome de usuário.");
  } else {
    // Cria um novo usuário
    const token = generateToken();
    const newUser = { username: usernameToCreate, password: passwordToCreate, token: token };
    localStorage.setItem(usernameToCreate, JSON.stringify(newUser));
    alert("Registro bem-sucedido! Por favor, faça login.");
  }
};
```

- `handleRegister` é uma função que lida com o registro de novos usuários. Ele é chamado quando o formulário de registro é enviado.
- Primeiro, ele impede o comportamento padrão do formulário de recarregar a página.
- Em seguida, obtém os valores dos campos de entrada `username` e `password` do formulário de registro.
- Verifica se já existe um usuário com o mesmo nome de usuário no armazenamento local (`localStorage`).
- Se o usuário já existir, exibe um alerta informando que o usuário já existe.
- Caso contrário, cria um novo usuário com um token gerado aleatoriamente e o armazena no `localStorage`.

```javascript
const handleLogin = (event: React.FormEvent) => {
  event.preventDefault();

  const usernameInput = (document.getElementById(
    "username"
  ) as HTMLInputElement)?.value;
  const passwordInput = (document.getElementById(
    "password"
  ) as HTMLInputElement)?.value;

  // Verifica se o usuário existe e se a senha coincide
  const storedUser = JSON.parse(localStorage.getItem(usernameInput) || 'null');
  if (storedUser && storedUser.password === passwordInput) {
    if (!storedUser.token) {
      // Se o token estiver vazio, cria um novo token
      const token = generateToken();
      storedUser.token = token;
      localStorage.setItem(usernameInput, JSON.stringify(storedUser));
    }
    alert("Login bem-sucedido!");
  } else {
    // Se o usuário ou senha estiverem incorretos, exibe um alerta
    alert("Usuário ou senha incorretos!");
  }
};
```

- `handleLogin` é uma função que lida com o processo de login. É chamado quando o formulário de login é enviado.
- Assim como `handleRegister`, primeiro ele impede o comportamento padrão do formulário.
- Em seguida, obtém os valores dos campos de entrada `username` e `password` do formulário de login.
- Verifica se existe um usuário com o nome de usuário fornecido no armazenamento local (`localStorage`) e se a senha corresponde à senha armazenada.
- Se o usuário existir e a senha estiver correta, verifica se o usuário já possui um token. Se não tiver, gera um novo token e o armazena.
- Exibe um alerta informando se o login foi bem-sucedido ou se houve algum erro.

```javascript
const handleToggleForm = () => {
  setFormType(formType === 0 ? 1 : 0);
};
```

- `handleToggleForm` é uma função que alterna entre os modos de login e registro. Quando chamada, altera o estado `formType` entre 0 e 1, alternando assim entre a exibição do formulário de login e o formulário de registro.

```javascript
return (
  <form
    onSubmit={formType === 0 ? handleLogin : handleRegister}
    action="/personagens"
  >
    {/* Componentes de título e parágrafo */}
    <Title htmlFor="username">
      {formType === 0 ? "Bem vindo(a) de volta!" : "Crie sua conta!"}
    </Title>
    <Paragraph>
      {formType === 0 ? "Acesse sua conta" : "Crie uma nova conta"}
    </Paragraph>

    {/* Campos de entrada para username e password */}
    <InputField
      id={formType === 0 ? "username" : "createUser"}
      placeholder={formType === 0 ? "Usuário" : "Crie seu Usuário"}
      value={username}
      onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
        setUsername(e.target.value)
      }
    />
    <InputField
      id={formType === 0 ? "password" : "createPassword"}
      placeholder={formType === 0 ? "Senha" : "Crie sua Senha"}
      value={password}
      onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
        setPassword(e.target.value)
      }
    />

    {/* Checkbox para salvar login (apenas para login) */}
    {formType === 0 ? (
      <div>
        <input type="checkbox ```javascript
      id="salvarLogin" />
        <FormLabel htmlFor="salvarLogin"> Salvar login</FormLabel>
      </div>
    ) : null}

    {/* Botão de envio do formulário */}
    <SubmitButton
      type="submit"
      value={formType === 0 ? "Entrar" : "Registrar"}
    />

    {/* Parágrafo para alternar entre login e registro */}
    <Paragraph $textAlign="center">
      {formType === 0 ? "Ainda não tem o login?" : "Já tem uma conta?"}
      <a href="#" onClick={handleToggleForm}>
        <RedSpan>{formType === 0 ? "Cadastre-se" : "Faça login"}</RedSpan>
      </a>
    </Paragraph>
  </form>
);
```

- Aqui é onde todo o formulário é renderizado.
- Dependendo do estado `formType`, ele decide se deve chamar a função `handleLogin` ou `handleRegister` quando o formulário é enviado.
- O conteúdo do formulário é dinâmico e muda com base em `formType`.
- Os valores dos campos de entrada (`username` e `password`) são controlados pelo estado do componente e atualizados usando a função `setUsername` e `setPassword`.
- Um checkbox para salvar o login é mostrado apenas no formulário de login.
- Um botão de envio é renderizado com base no `formType`.
- Um link para alternar entre login e registro é renderizado, com base em `formType`.

```javascript
export default Form;
```

- Finalmente, o componente `Form` é exportado como padrão para que possa ser importado e utilizado em outros arquivos.
</details>

```markdown
<details>
<summary>Alterações de correção:</summary>

- Na função `handleRegister`, corrigimos a verificação de existência de usuário. Agora, verificamos se já existe um usuário com o mesmo `username` no localStorage antes de tentar criar um novo usuário.
- Na função `handleRegister`, corrigimos a remoção do usuário existente. Agora, removemos a chave do localStorage usando o `username` do usuário existente.
</details>
```

<details>
<summary>Entendendo o código</summary>

```javascript
import {
  Title,
  Paragraph,
  InputField,
  FormLabel,
  SubmitButton,
  RedSpan,
} from "../styles/form.styles";
```

- Aqui estamos importando componentes estilizados do arquivo `form.styles`. Esses componentes estilizados são provavelmente estilos reutilizáveis para os elementos do formulário, como títulos, parágrafos, campos de entrada, botões, etc.

```javascript
import React, { useState } from "react";
```

- Importamos o React e a função `useState`. O React é a biblioteca fundamental para construir interfaces de usuário em React, e `useState` é um gancho que permite adicionar estado a componentes de função.

```javascript
function generateToken() {
  // Gera um número aleatório de 16 dígitos
  return Math.random().toString(36).substring(2, 18);
}
```

- Aqui temos uma função chamada `generateToken`, que gera um token aleatório de 16 caracteres. Esse token é usado para identificar usuários durante o processo de registro.

```javascript
const Form: React.FC = () => {
```

- Aqui declaramos um componente de função chamado `Form`. Ele é definido como um componente de função do React (`React.FC`).

```javascript
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [formType, setFormType] = useState(0);
```

- Estamos usando a função `useState` para definir três estados locais dentro do componente `Form`: `username`, `password` e `formType`. `useState` retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado.

```javascript
const handleRegister = (e: { preventDefault: () => void }) => {
  e.preventDefault();

  const usernameToCreate = (document.getElementById(
    "createUser"
  ) as HTMLInputElement)?.value;
  const passwordToCreate = (document.getElementById(
    "createPassword"
  ) as HTMLInputElement)?.value;

  // Verifica se o usuário já existe
  const existingUser = JSON.parse(localStorage.getItem(usernameToCreate) || 'null');
  if (existingUser) {
    alert("Este usuário já existe. Por favor, escolha outro nome de usuário.");
  } else {
    // Cria um novo usuário
    const token = generateToken();
    const newUser = { username: usernameToCreate, password: passwordToCreate, token: token };
    localStorage.setItem(usernameToCreate, JSON.stringify(newUser));
    alert("Registro bem-sucedido! Por favor, faça login.");
  }
};
```
<details>
<summary>Alterações de correção:</summary>

- Na função `handleRegister`, corrigimos a verificação de existência de usuário. Agora, verificamos se já existe um usuário com o mesmo `username` no localStorage antes de tentar criar um novo usuário.
- Na função `handleRegister`, caso o usuario exista mas esteja vazio, acontece uma sobreposição
- Na função `handleRegister`, corrigimos a remoção do usuário existente. Agora, removemos a chave do localStorage usando o `username` do usuário existente.
</details>
