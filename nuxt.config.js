export default {
  target: 'static',
  head: {
    title: 'test',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://kit.fontawesome.com/a739c6993e.js' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
  components: true,
  modules: ['@nuxtjs/axios'],
  generate: {
    interval: 2000,
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
    ['@nuxtjs/router', { path: 'router', fileName: 'index.ts' }],
  ],
}
