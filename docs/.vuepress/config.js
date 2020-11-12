const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'SpaceIO Plugin Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: "/",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      })
    }
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    displayAllHeaders: true,
    repo: '',
	  logo: '/assets/img/logo.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Plugins',
        link: '/docs/',
      },
      {
        text: 'Spigot',
        link: 'https://www.spigotmc.org/resources/authors/mastercake.29634/',
      },
      {
        text: 'Discord',
        link: 'https://discord.spaceio.xyz/',
      }
    ],
    sidebar: {
      '/plugin/safarinet/': [
        {
          title: 'SafariNet',
          collapsable: false,
          children: [
            '',
            'installation',
            'usage',
            'commands',
            'config',
            'faq',
          ]
        }
      ],
      '/plugin/ushop/': [
        {
          title: 'uShop',
          collapsable: false,
          children: [
            '',
            'installation',
            'usage',
            'commands',
            'config',
            'faq',
          ]
        }
      ],
      '/plugin/customoregen/': [
        {
          title: 'CustomOreGen',
          collapsable: false,
          children: [
            '',
            'installation',
            'usage',
            'commands',
            'config',
            'faq',
          ]
        }
      ],
      '/plugin/advancedoregen/': [
        {
          title: 'AdvancedOreGen',
          collapsable: false,
          children: [
            '',
            'installation',
            'usage',
            'commands',
            'config',
            'faq',
          ]
        }
      ],
      '/plugin/dropedit2/': [
        {
          title: 'DropEdit2',
          collapsable: false,
          children: [
            '',
            'installation',
            'usage',
            'commands',
            'config',
            'faq',
          ]
        }
      ],
      '/plugin/serverpolls/': [
        {
          title: 'ServerPolls',
          collapsable: false,
          children: [
            '',
            'installation',
            'usage',
            'commands',
            'config',
            'faq',
          ]
        }
      ],
      '/': [
        {
          title: 'Plugins',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ['plugin/safarinet/', 'SafariNet'],
            ['plugin/customoregen/', 'CustomOreGen'],
            ['plugin/advancedoregen/', 'AdvancedOreGen'],
            ['plugin/dropedit2/', 'DropEdit2'],
            ['plugin/ushop/', 'uShop'],
            ['plugin/serverpolls/', 'ServerPolls'],
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/back-to-top',
  ]
}
