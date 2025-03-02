// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      email: process.env.NUXT_MAIL_TARGET,
    },
  },
  modules: [
    "nuxt-typedjs",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@hypernym/nuxt-anime",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-particles",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_MAIL_TARGET,
        },
        smtp: {
          host: process.env.NUXT_MAIL_HOST,
          port: process.env.NUXT_MAIL_PORT,
          secure: true,
          auth: {
            user: process.env.NUXT_MAIL_USERNAME,
            pass: process.env.NUXT_MAIL_PASSWORD,
          },
        },
      },
    ],
    "@nuxt/image",
    "@nuxthub/core",
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
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});