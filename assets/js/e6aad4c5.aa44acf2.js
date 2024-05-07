"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1612],{7493:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>s});var a=r(4848),n=r(8453);const t={sidebar_position:2,title:"Cole\xe7\xe3o Pares Chave-Valor",sidebar_label:"Pares Chave-Valor"},i=void 0,d={id:"Home/javascript/Objetos/ColecaoDinamica",title:"Cole\xe7\xe3o Pares Chave-Valor",description:"Cole\xe7\xe3o Din\xe2mica de Pares Chave-Valor",source:"@site/docs/Home/javascript/Objetos/ColecaoDinamica.md",sourceDirName:"Home/javascript/Objetos",slug:"/Home/javascript/Objetos/ColecaoDinamica",permalink:"/Documentation/docs/Home/javascript/Objetos/ColecaoDinamica",draft:!1,unlisted:!1,editUrl:"https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/docs/Home/javascript/Objetos/ColecaoDinamica.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Cole\xe7\xe3o Pares Chave-Valor",sidebar_label:"Pares Chave-Valor"},sidebar:"tutorialSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/Documentation/docs/Home/javascript/Objetos/Introducao"},next:{title:"Criando Objetos",permalink:"/Documentation/docs/Home/javascript/Objetos/CriacaoDeObjetos"}},c={},s=[{value:"Cole\xe7\xe3o Din\xe2mica de Pares Chave-Valor",id:"cole\xe7\xe3o-din\xe2mica-de-pares-chave-valor",level:2}];function l(e){const o={code:"code",h2:"h2",hr:"hr",pre:"pre",...(0,n.R)(),...e.components},{Details:r}=o;return r||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"cole\xe7\xe3o-din\xe2mica-de-pares-chave-valor",children:"Cole\xe7\xe3o Din\xe2mica de Pares Chave-Valor"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"// Declarando objeto a partir do construtor Object\r\nconst produto = new Object();\r\n// Criando e atribuindo o atributo 'nome'\r\nproduto.nome = 'Cadeira';\r\n// De forma resumida, o produto.marca ser\xe1 gen\xe9rico, sem se diferir do comportamento de outras declara\xe7\xf5es\r\nproduto['Marca'] = 'Gen\xe9rica';\r\n// Criando e atribuindo o atributo 'preco'\r\nproduto.preco = 220;\r\n\r\nconsole.log(produto);\r\n\r\n// Deletando produto.preco\r\ndelete produto.preco;\r\n// Deletando produto.marca\r\ndelete produto['Marca'];\r\nconsole.log(produto);\r\n\r\n// Criando um objeto carro\r\nconst carro = {\r\n    modelo: 'A4',\r\n    valor: 80000,\r\n    // Passando objeto no objeto carro\r\n    proprietario: {\r\n        nome: 'Jo\xe3o',\r\n        idade: 56,\r\n        endereco: {\r\n            logradouro: 'Rua ABC',\r\n            numero: 123\r\n        }\r\n    },\r\n    // Condutor -> Array de objetos\r\n    condutores: [{\r\n        nome: 'Junior',\r\n        idade: 19\r\n    }, {\r\n        nome: 'Ana',\r\n        idade: 42\r\n    }],\r\n    // Passando fun\xe7\xe3o no objeto\r\n    calcularValorSeguro: function() {\r\n        // ...\r\n    }\r\n};\r\n\r\ncarro.modelo = 1000;\r\n// Carro -> Proprietario -> Endereco -> Logradouro\r\ncarro['proprietario']['endereco']['logradouro'] = 'Av Gigante';\r\nconsole.log(carro);\r\n\r\n// Deletando carro.proprietario. Tudo dentro do objeto proprietario ser\xe1 exclu\xeddo\r\ndelete carro.proprietario;\r\n\r\nconsole.log(carro);\n"})}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Exerc\xedcio: Remover Propriedade"}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"// Crie uma fun\xe7\xe3o chamada 'removerPropriedade' que receba dois par\xe2metros: um objeto e o nome de uma propriedade.\r\n// A fun\xe7\xe3o deve verificar se a propriedade existe no objeto. Se existir, deve remov\xea-la do objeto e retornar true.\r\n// Se a propriedade n\xe3o existir, a fun\xe7\xe3o deve retornar false.\n"})}),(0,a.jsx)(o.hr,{}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"// Testando a fun\xe7\xe3o com o objeto 'produto'\r\nconsole.log(\"Propriedade 'nome' removida:\", removerPropriedade(produto, 'nome')); // Resultado: true\r\nconsole.log(produto); // Verificando se a propriedade 'nome' foi removida\r\n\r\nconsole.log(\"Propriedade 'cor' removida:\", removerPropriedade(produto, 'cor')); // Resultado: false\r\nconsole.log(produto); // Verificando se a propriedade 'cor' foi removida\n"})}),(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Resposta"}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"function removerPropriedade(obj, propriedade) {\r\n  if (obj.hasOwnProperty(propriedade)) {\r\n    delete obj[propriedade];\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n}\n"})})]})]})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>d});var a=r(6540);const n={},t=a.createContext(n);function i(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);