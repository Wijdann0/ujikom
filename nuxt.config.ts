// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }
      ],
      // please note that this is an area that is likely to change
      style: [],
      noscript: []
    }
  },  
  compatibilityDate: '2024-12-05',
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ]
})
