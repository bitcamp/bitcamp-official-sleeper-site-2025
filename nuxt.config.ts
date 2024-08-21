import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
  },
  css: ['~/assets/css/global.css', '~/public/bitcamp-brand/bitcamp.css'],
});
