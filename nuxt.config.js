export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-ssg-boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-ssg-boilerplate' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-purgecss',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/scss/*.scss',
      './assets/scss/breakpoints.scss',
      './assets/scss/_mixins.scss'
    ]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['@nuxt/http', {
      baseURL: ''
    }],
    'nuxt-i18n'
  ],

  i18n: {}
}
