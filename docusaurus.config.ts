import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ATOMIIC #9110 DOCUMENTATION',
  tagline: 'Java is UnderControl!',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://ProgAtomiic.github.io', // Troque pelo seu link do GitHub Pages
  baseUrl: '/frc-docs/', // O nome exato do seu repositório no GitHub
  organizationName: 'ProgAtomiic', // Seu usuário do GitHub
  projectName: 'frc-docs', // O nome do repositório
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          editUrl:
            'https://github.com/ProgAtomiic/frc-docs/tree/main/',
          sidebarCollapsible: true,
          sidebarCollapsed: true,

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ProgAtomiic/frc-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '9110 DOCS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/frc9110.png',
      },
      items: [
        {
          href: 'https://github.com/ProgAtomiic',
          label: 'GitHub',
          position: 'right',
        },

        {
          href: 'https://www.thebluealliance.com/team/9110',
          label: 'TBA',
          position: 'right',
        }

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {

          title: 'Community',
          items: [
            {
              label: 'Site',
              href: 'https://atomiic.com.br/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ProgAtomiic',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Atomiic Docs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
