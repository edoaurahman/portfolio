// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@hypernym/nuxt-anime",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-particles",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "nuxt-typedjs",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  particles: {
    lazy: true,
    mode: "full", // 'full' | 'slim' | 'basic' | 'custom'
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "id",
        name: "Indonesia",
      },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});