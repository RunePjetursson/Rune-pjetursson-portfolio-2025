// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/seo",
    "nuxt-cloudflare-analytics",
    "@nuxtjs/color-mode",
  ],
  css: ["/assets/style/main.scss"],
});
