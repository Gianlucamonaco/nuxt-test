// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/index.scss'],
  devtools: { enabled: true },
  modules: ['nuxt-kql'],
  kql: {
    // auth: 'bearer',
  }
})
