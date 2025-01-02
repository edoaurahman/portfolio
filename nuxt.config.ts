// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@hypernym/nuxt-anime',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-particles',
    '@nuxt/fonts'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: ''
  },
  particles: {
    lazy: true,
    mode: 'full' // 'full' | 'slim' | 'basic' | 'custom'
  }
})