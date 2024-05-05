// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Vá para documentos",
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
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Home",
        },
        {
          to: "/Documentation/docs/category/anotações-do-javascript",
          label: "JavaScript",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentação",
          items: [
            {
              label: "Home",
              to: "/",
            },
            {
              label: "JavaScript",
              to: "/Documentation/docs/category/anotações-do-javascript",
            },
          ],
        },
        // Adicione outros links aqui se necessário
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Geovany-Gutierrez. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
