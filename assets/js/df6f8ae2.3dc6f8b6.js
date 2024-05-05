"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[177],{4710:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var n=a(4848),s=a(8453);const i={sidebar_position:1},r="Princ\xedpios de Programa\xe7\xe3o Orientada a Objetos (POO):",t={id:"Fundamentos/tutorial-basics/poo",title:"Princ\xedpios de Programa\xe7\xe3o Orientada a Objetos (POO):",description:'A POO \xe9 um paradigma de programa\xe7\xe3o baseado no conceito de "objetos", que podem conter dados e c\xf3digo que manipula esses dados. Os quatro princ\xedpios fundamentais da POO s\xe3o:',source:"@site/docs/Fundamentos/tutorial-basics/poo.md",sourceDirName:"Fundamentos/tutorial-basics",slug:"/Fundamentos/tutorial-basics/poo",permalink:"/Documentation/docs/Fundamentos/tutorial-basics/poo",draft:!1,unlisted:!1,editUrl:"https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/docs/Fundamentos/tutorial-basics/poo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"POO e Principios SOLID",permalink:"/Documentation/docs/category/poo-e-principios-solid"},next:{title:"Princ\xedpios SOLID:",permalink:"/Documentation/docs/Fundamentos/tutorial-basics/solid"}},d={},l=[{value:"Abstra\xe7\xe3o:",id:"abstra\xe7\xe3o",level:2},{value:"Exemplo de Abstra\xe7\xe3o em C#:",id:"exemplo-de-abstra\xe7\xe3o-em-c",level:3},{value:"Encapsulamento:",id:"encapsulamento",level:2},{value:"Exemplo de Encapsulamento em C#:",id:"exemplo-de-encapsulamento-em-c",level:3},{value:"Heran\xe7a:",id:"heran\xe7a",level:2},{value:"Exemplo de Heran\xe7a em C#:",id:"exemplo-de-heran\xe7a-em-c",level:3},{value:"Polimorfismo:",id:"polimorfismo",level:2},{value:"Exemplo de Polimorfismo em C#:",id:"exemplo-de-polimorfismo-em-c",level:3}];function c(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"princ\xedpios-de-programa\xe7\xe3o-orientada-a-objetos-poo",children:"Princ\xedpios de Programa\xe7\xe3o Orientada a Objetos (POO):"}),"\n",(0,n.jsx)(o.p,{children:'A POO \xe9 um paradigma de programa\xe7\xe3o baseado no conceito de "objetos", que podem conter dados e c\xf3digo que manipula esses dados. Os quatro princ\xedpios fundamentais da POO s\xe3o:'}),"\n",(0,n.jsx)(o.h2,{id:"abstra\xe7\xe3o",children:"Abstra\xe7\xe3o:"}),"\n",(0,n.jsx)(o.p,{children:"A abstra\xe7\xe3o \xe9 o processo de ocultar os detalhes complexos e mostrar apenas as funcionalidades necess\xe1rias. Em C#, isso pode ser feito usando interfaces ou classes abstratas."}),"\n",(0,n.jsx)(o.h3,{id:"exemplo-de-abstra\xe7\xe3o-em-c",children:"Exemplo de Abstra\xe7\xe3o em C#:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public interface IVeiculo {\n    void Acelerar();\n    void Frear();\n}\n\npublic class Carro : IVeiculo {\n    public void Acelerar() {\n        // Implementa\xe7\xe3o do m\xe9todo Acelerar\n    }\n\n    public void Frear() {\n        // Implementa\xe7\xe3o do m\xe9todo Frear\n    }\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"encapsulamento",children:"Encapsulamento:"}),"\n",(0,n.jsx)(o.p,{children:"O encapsulamento \xe9 a t\xe9cnica de restringir o acesso aos componentes de um objeto, protegendo os dados internos da classe contra acesso n\xe3o autorizado."}),"\n",(0,n.jsx)(o.h3,{id:"exemplo-de-encapsulamento-em-c",children:"Exemplo de Encapsulamento em C#:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public class ContaBancaria {\n    private double saldo;\n\n    public void Depositar(double valor) {\n        if (valor > 0) {\n            saldo += valor;\n        }\n    }\n\n    public double ObterSaldo() {\n        return saldo;\n    }\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"heran\xe7a",children:"Heran\xe7a:"}),"\n",(0,n.jsx)(o.p,{children:"A heran\xe7a permite que uma classe herde propriedades e m\xe9todos de outra classe. Isso promove a reutiliza\xe7\xe3o de c\xf3digo e estabelece uma rela\xe7\xe3o hier\xe1rquica entre classes."}),"\n",(0,n.jsx)(o.h3,{id:"exemplo-de-heran\xe7a-em-c",children:"Exemplo de Heran\xe7a em C#:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public class Animal {\n    public void Respirar() {\n        // Todos os animais respiram\n    }\n}\n\npublic class Peixe : Animal {\n    public void Nadar() {\n        // Peixes nadam\n    }\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"polimorfismo",children:"Polimorfismo:"}),"\n",(0,n.jsx)(o.p,{children:"O polimorfismo permite que objetos sejam tratados como inst\xe2ncias de suas classes pai, em vez de suas classes reais, o que pode ser \xfatil para a generaliza\xe7\xe3o de c\xf3digo."}),"\n",(0,n.jsx)(o.h3,{id:"exemplo-de-polimorfismo-em-c",children:"Exemplo de Polimorfismo em C#:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:'public class Forma {\n    public virtual void Desenhar() {\n        Console.WriteLine("Desenhando uma forma");\n    }\n}\n\npublic class Circulo : Forma {\n    public override void Desenhar() {\n        Console.WriteLine("Desenhando um c\xedrculo");\n    }\n}\n\nForma forma = new Circulo();\nforma.Desenhar(); // Sa\xedda: "Desenhando um c\xedrculo"\n'})})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>t});var n=a(6540);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);