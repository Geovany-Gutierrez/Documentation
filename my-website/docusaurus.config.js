// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Por favor, ative o modo escuro.",
  favicon: "img/favicon.ico",

  trailingSlash: false,
  // A URL de produção do seu site
  url: "https://geovany-gutierrez.github.io",
  // O caminho base sob o qual seu site é servido
  baseUrl: "/Documentation",

  // Configuração de deploy no GitHub Pages
  organizationName: "Geovany-Gutierrez", // Seu usuário ou organização no GitHub
  projectName: "Documentation", // O nome do seu repositório

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pt",
    locales: ["pt"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // O caminho para editar a documentação no seu repositório
          editUrl:
            "https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/",
        },
        blog: {
          showReadingTime: true,
          // O caminho para editar posts do blog no seu repositório
          editUrl:
            "https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Logo do Projeto",
        src: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
        href: 'https://github.com/geovany-gutierrez',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Home',
        },        
        {
          label: 'Fundamentos', // Este é o texto que aparecerá na navbar
          position: 'left',
          items: [ // Os itens do dropdown de primeiro nível
            {
              to: '/Documentation/docs/Home/Fundamentos/intro',
              label: 'Fundamentos Importantes do C#', // O texto que aparecerá no dropdown
            },
            {
              to: '/Documentation/docs/Home/Fundamentos/mobileesqlite/conceitosMobile',
              label: 'Conceitos em Mobile: Conceitos Importantes',
            },
            {
              to: '/Documentation/docs/Home/Fundamentos/mobileesqlite/sqlite',
              label: 'Conceitos em Mobile: SQLite',
            },
            {
              to: '/Documentation/docs/Home/Fundamentos/pooesolid/poo',
              label: 'POO e Princípios SOLID: Princípios',
            },
            {
              to: '/Documentation/docs/Home/Fundamentos/pooesolid/solid',
              label: 'POO e Princípios SOLID: Princípios SOLID',
            },
            // Adicione mais itens aqui se necessário
          ],
        },
        
        {
          label: 'Desenvolvimento Web', // Este é o texto sobre o qual o usuário passará o mouse
          position: 'left',
          items: [ // Itens do dropdown
            {
              to: '/Documentation/docs/category/seção-html', // O caminho para a página de HTML
              label: 'HTML', // O texto que aparecerá no dropdown
            },
            /*{
              to: '/docs/web-development/css',
              label: 'CSS',
            },*/
            {
              to: "/Documentation/docs/category/anotações-do-javascript",
              label: "JavaScript",
            },
            // Você pode adicionar mais itens aqui
          ],
        },    
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
