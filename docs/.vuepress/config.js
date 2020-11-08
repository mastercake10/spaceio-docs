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

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
	logo: '/assets/img/logo.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/mastercake10',
      },
      {
        text: 'Spigot',
        link: 'https://www.spigotmc.org/resources/authors/mastercake.29634/',
      }
    ],
    sidebar: {
      '/plugin/safarinet/': [
        {
          title: 'SafariNet',
          collapsable: false,
          children: [
            '',
            'config',
            'commands',
          ]
        }
      ],
      '/plugin/customoregen/': [
        {
          title: 'CustomOreGen',
          collapsable: false,
          children: [
            '',
            'config',
            'commands',
          ]
        }
      ],
      '/': [
        {
          title: 'Plugins',
          collapsable: false,
          children: [
            ['plugin/safarinet/', 'SafariNet'],
            ['plugin/customoregen/', 'CustomOreGen'],
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
  ]
}
