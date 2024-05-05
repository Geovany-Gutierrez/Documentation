// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação',
  tagline: 'Vá para documentos',
  favicon: 'img/favicon.ico',

  // Defina aqui a URL de produção do seu site
  url: 'https://geovany-gutierrez.github.io',
  // Defina o caminho base sob o qual seu site é servido
  // Para o deploy no GitHub Pages, geralmente é '/<nomeDoRepositorio>/'
  baseUrl: '/Documentation/',

  // Configuração de deploy no GitHub Pages
  organizationName: 'Geovany-Gutierrez', // Geralmente o nome do seu usuário ou organização no GitHub
  projectName: 'Documentation', // Geralmente o nome do seu repositório

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Mesmo que você não use internacionalização, você pode usar este campo para definir
  // metadados úteis como o idioma do html. Por exemplo, se o seu site for em português,
  // você pode querer substituir "en" por "pt".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Altere isto para o seu repositório
          editUrl: 'https://github.com/Geovany-Gutierrez/Documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Altere isto para o seu repositório
          editUrl: 'https://github.com/Geovany-Gutierrez/Documentation/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Documentação',
      logo: {
        alt: 'Logo do Projeto',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/flutter', label: 'Flutter', position: 'left' },
        {
          href: 'https://github.com/Geovany-Gutierrez/Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
