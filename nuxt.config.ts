import { defineNuxtConfig } from 'nuxt'
import path from 'path'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias: {
      "mylib": path.resolve(__dirname, 'mylib')
  }
})

