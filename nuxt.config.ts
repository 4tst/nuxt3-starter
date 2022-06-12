import { defineNuxtConfig } from 'nuxt'
import path from 'path'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "mylib": path.resolve(__dirname, 'mylib')
  },
  "ssr": false,
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: {
        port: 30000,
        clientPort: 30000,
        path: '/',
      },
      // proxy: {
      //   "/api": {
      //     target: 'http://172.66.80.1',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   },
      // }
    }
  }
})

