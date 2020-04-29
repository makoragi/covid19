import { Configuration } from '@nuxt/types'
import { Configuration as WebpackConfiguration } from 'webpack'
import i18n from './nuxt-i18n.config'
const webpack = require('webpack')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const environment = process.env.NODE_ENV || 'development'

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | 熊本県新型コロナウイルス感染症対策サイト(dev)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、熊本県有志が開設したものです。熊本県から発表された情報を用いていますが、本サイトの運営に関しては熊本県は一切関係しておりません。。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '熊本県新型コロナウイルス感染症対策サイト(dev)'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dev-covid19-kumamoto.netlify.com/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '熊本県新型コロナウイルス感染症対策サイト(dev)'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、熊本県有志が開設したものです。熊本県から発表された情報を用いていますが、本サイトの運営に関しては熊本県は一切関係しておりません。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dev-covid19-kumamoto.netlify.com/ogp.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://dev-covid19-kumamoto.netlify.com/ogp.png'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '234540354278042'
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true
    },
    {
      src: '@/plugins/axe',
      ssr: true
    },
    {
      src: '@/plugins/vuetify.ts',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['nuxt-i18n', i18n],
    'nuxt-svg-loader',
    'nuxt-purgecss',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      icons: false
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID // .env.production などに設定してください。
  },
  optionalCookies: [
    {
      name: 'i18n_redirected',
      label: 'i18n Redirection Cookie',
      description:
        'For automatically switching UI languages in accordance with locale preferences in the web browser configuration.',
      cookies: ['i18n_redirected']
    }
  ],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl'
      })
    ],
    postcss: {
      plugins: [
        autoprefixer({ grid: 'autoplace' }),
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './node_modules/vuetify/dist/vuetify.js',
            './node_modules/vue-spinner/src/ScaleLoader.vue'
          ],
          whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
          whitelistPatterns: [/(col|row)/]
        })
      ]
    },
    extend(config: WebpackConfiguration, _) {
      // default externals option is undefined
      config.externals = [{ moment: 'moment' }]
    }
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  manifest: {
    name: '熊本県新型コロナウイルス感染症対策サイト',
    theme_color: '#00a040',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null
  },
  generate: {
    fallback: true,
    routes() {
      const locales = ['ja', 'en', 'zh-cn', 'zh-tw', 'ko', 'ja-basic']
      const pages = [
        '/cards/details-of-confirmed-cases',
        '/cards/details-of-tested-cases',
        '/cards/number-of-confirmed-cases',
        '/cards/number-of-confirmed-cases-by-municipalities',
        '/cards/attributes-of-confirmed-cases',
        '/cards/number-of-tested',
        '/cards/number-of-inspection-persons',
        '/cards/number-of-reports-to-covid19-telephone-advisory-center',
        '/cards/number-of-reports-to-covid19-consultation-desk',
        '/cards/predicted-number-of-toei-subway-passengers',
        '/cards/agency'
      ]

      const routes: string[] = []
      locales.forEach(locale => {
        pages.forEach(page => {
          if (locale === 'ja') {
            routes.push(page)
            return
          }
          const route = `/${locale}${page}`
          routes.push(route)
        })
      })
      return routes
    }
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  }
}

export default config
