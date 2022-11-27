export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: false,

  // Router
  router: {
    // Return page 404
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404/index.vue'),
      });
    },
  },

  extend(config) {
    config.resolve.symlinks = false;
  },

  env: {
    title: 'bossa',
    description: 'bossa',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TITLE',
    description: 'DESCRIPTION',
    htmlAttrs: {
      lang: 'pt_br',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'google-site-verification',
        content: 'DESCRIPTION',
      },
      {
        name: 'keywords',
        content: 'KEYWORDS',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'TITLE',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'DESCRIPTION',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/img/share/cover.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'TITLE',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TITLE',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'DESCRIPTION',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/share/cover.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/img/share/cover.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'TITLE',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        href: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        href: '/favicon/site.webmanifest',
      },
    ],
    script: [
      {
        hid: 'gtmHead',
        rel: 'preconnect',
        innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.rel='preconnect';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','--------------  CODE --------------- ');
        `,
        crossorigin: true,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    noscript: [
      {
        hid: 'gtmBody',
        rel: 'preconnect',
        crossorigin: true,
        innerHTML: `
          <noscript><iframe rel="dns-prefetch" src="https://www.googletagmanager.com/ns.html?id=-------------- CODE --------------- "
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        `,
        pbody: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/helpers.js',
    '~plugins/vue-the-mask.js',
    { src: '~/plugins/vue-screen.client.js', mode: 'client' },

    { src: '@/plugins/particles', ssr: false },
  ],

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type),
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/layout', '~/components/shared'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'vue-screen/nuxt',
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: '/404',
    Sitemap: 'https://DOMAIN.com.br/sitemap.xml',
  },

  // https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://DOMAIN.com.br',
    cacheTime: 1000 * 60 * 15,
    gzip: false,
    generate: true, // Enable me when using nuxt generate
    exclude: ['/404'],
  },
};
