import languages from './static/lang/languages'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Pony Express',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
  ],

  i18n: {
    // Options
    //to make it seo friendly remove below line and add baseUrl option to production domain
    seo: true,
    baseUrl: 'https://www.ponyexpressmallorca.com/',
    lazy: true,
    locales: languages,
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es'
    },
    detectBrowserLanguage: false,
    //detectBrowserLanguage: {
    //  useCookie: true,
    //  cookieKey: 'i18n_redirected',
    //  alwaysRedirect: true
    //},
    langDir: 'static/lang/'
  },

  pwa: {

    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      name: 'Pony Express Mallorca',
      description: 'Alquiler ponis en Mallorca',
      lang: 'es',
      ogHost: 'https://diverpark.net'
    },

    // https://pwa.nuxtjs.org/modules/manifest.html
    manifest: {
      name: 'Pony Express Mallorca',
      short_name: 'Pony Express Mallorca',
      start_url: '/',
      description: 'Alquiler ponis en Mallorca',
      lang: 'es',
      background_color: '#fedc40'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {}
      }
    }
  }
}
