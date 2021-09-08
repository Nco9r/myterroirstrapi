const strapiBaseUri = process.env.API_URL || 'https://admin-myterroir.fr/'

module.exports = {
  mode: 'universal',
  buildDir: 'nuxt-dist',
  env: {
    strapiBaseUri,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Produits artisanaux et cuisine de terroir.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css',
  '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [{ src: './plugins/vue-slick-carousel.js' },
 { src: './plugins/vuefilter.js'}
],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    // '@nuxtjs/strapi'
  ],

  strapi: {
    url: strapiBaseUri,
    entities: ['producteur', 'blogs', 'categoriesblogs'],
  },

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
