
module.exports = {
  globalName: 'ssr',
  // mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  // buildDir: 'nuxt-dist', // Build 发布目录
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'renderer', name: 'renderer', content: `webkit` },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: `NUXT,SSR` },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://at.alicdn.com/t/font_1276549_01dmqdh22x5j.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ccac76' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/injectPlugins.js' },
    { src: '~plugins/main' },
    { src: '~/plugins/i18n.js' },
    { src: '~/components/autoImportCommonComponents.js' },
    { src: '~plugins/iview' }
  ],
  // 配置路由中间件
  router: {
    middleware: [
      'i18n',
      'permission'
    ]
    // base:"/en/"
    // base:"/"
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],
  styleResources: {
    stylus: './assets/css/css.styl'
    // scss: './assets/variables.scss',
    // less: './assets/**/*.less'
    // sass: ...
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // 是否允许跨域
    proxy: true
  },
  proxy: {
    '/japi': 'https://www.douyu.com'
  },
  // proxy: {
  //   '^/japi': {
  //     target: 'https://www.douyu.com'
  //     changeOrigin: true // 表示是否跨域
  //     // pathRewrite: { '^/japi': '' }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'], // 为防止重复打包
    transpile: [/^view-design/],
    extractCSS: {
      allChunks: true
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
