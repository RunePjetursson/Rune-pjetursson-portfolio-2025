// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/seo",
    "nuxt-cloudflare-analytics",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Quicksand: {
        wght: [300, 400, 500, 600, 700],
      },
    },
    display: "swap",
  },
  css: ["@/assets/style/main.scss", "@/assets/style/variables.scss"],
});
