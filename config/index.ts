import en from '../locales/en-US.js'
import pl from '../locales/pl-PL.js'

// console.log(pl)
// export const API_ROOT = 'https://jsonplaceholder.typicode.com/'

export const i18n = {
  // lazy: true,
  // seo: false,
  // loadLanguagesAsync: true,
  // langDir: 'locales/',
  // loadLanguagesAsync: true,

  defaultLocale: 'en',
  // detectBrowserLanguage: {
  //   useCookie: true,
  //   cookieKey: 'i18n_redirected',
  //   alwaysRedirect: false,
  //   fallbackLocale: 'en'
  // },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      // file: 'en-US.js',
    },
    {
      code: 'pl',
      iso: 'pl-PL',
      name: 'PL',
      // file: 'pl-PL.js',
    },
  ],

  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, pl },
  },
}
