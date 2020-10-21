if (process.env.ENV === 'development') require('dotenv').config()
module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESC || '',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
        integrity:
          'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
        crossorigin: 'anonymous',
      },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'icon', type: 'image/x-icon', href: process.env.API + 'backend/api/get-setting/image?id=26' || '' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/snowfall.css',
    '~/assets/css/snow.css',
    '~/assets/scss/snow.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/lazyload.js',
      ssr: true,
    },
    {
      src: '~/plugins/carousel3d.js',
      ssr: false,
    },
    {
      src: '~/plugins/overlay.js',
      ssr: true,
    },
    {
      src: '~/plugins/aos.js',
      ssr: false,
    },
    {
      src: '~/plugins/filters.js',
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  proxy: {
    '/api/': { target: process.env.API, pathRewrite: { '^/api': '' } },
  },
  router: {
    linkExactActiveClass: 'active',
    middleware: ['auth'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/dotenv',
      {
        systemvars: true,
      },
    ],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', { proxy: true }],
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    '@nuxtjs/device',
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/players-auth',
            method: 'post',
            propertyName: 'accessToken',
          },
          logout: false,
          user: {
            url: '/api/players',
            method: 'get',
            propertyName: '',
          },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/',
      callback: '/login',
    },
  },
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'error',
        message: (option) => option.message,
        options: {
          type: 'error',
          duration: 2000,
        },
      },
      {
        name: 'success',
        message: (option) => option.message,
        options: {
          type: 'success',
          duration: 2000,
        },
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  // content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  // env: {
  //   API: process.env.API
  // },
  server: {
    port: process.env.PORT || 8080, // default: 3000
    // host: process.env.HOST || 'localhost', // default: localhost
    host: '0.0.0.0', // default: localhost
  },
}
