import { i18n } from './config'
// const postcssPresetEnv = require('postcss-preset-env')
import postcssImport from 'postcss-import'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Skeleton Nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap',
      },
    ],

    script: [
      {
        src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js',
      },

      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js',
      },
    ],
  },

  css: [
    { src: '~/assets/css/index.pcss', lang: 'postcss' },
    { src: '~/assets/css/vars/_variables.pcss', lang: 'postcss' },
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vee-validate',
    '@/plugins/composition-api',
    '@/plugins/utils',
    '@/plugins/fa.config',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/global/', prefix: 'The', extensions: ['vue'] },
    { path: '~/components/global/layout', prefix: 'The', extensions: ['vue'] },
    { path: '~/components/global/shared', prefix: 'The', extensions: ['vue'] },
    { path: '~/components/atoms/', prefix: 'The', extensions: ['vue'] },
    { path: '~/components/molecules/', prefix: 'The', extensions: ['vue'] },
    { path: '~/components/organisms/', prefix: 'The', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/image',
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@nuxt/components',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxt/content', ['nuxt-i18n', i18n], 'nuxt-gsap'],

  build: {
    transpile: ['vee-validate'],
    postcss: {
      parser: require('postcss-scss'),
      plugins: {
        'postcss-import': postcssImport,
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        cssnano: { preset: 'default' },
        'postcss-assets': {
          relative: true,
          loadPaths: ['assets/img'],
        },
      },

      preset: {
        stage: 2,

        importFrom: ['~/assets/css/vars/_variables.pcss'],
        autoprefixer: {
          grid: true,
          overrideBrowserslist: [
            //'last 2 versions',
            'Android >= 4.0',
            'iOS >= 7',
          ],
        },

        // importFrom: ['/assets/css/index.css'],
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  content: {},
  generate: {
    // choose to suit your project
    interval: 2000,
  },
}
