// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      anchorLinks: false
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  
})
