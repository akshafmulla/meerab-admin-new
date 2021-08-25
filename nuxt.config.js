const colors = require('vuetify/es5/util/colors').default
const webpack = require("./node_modules/webpack");

module.exports = {
    mode: 'universal',
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/manifest.json' },
        ]
    },
    router: {
        // middleware: "check-page"
    },
    env: {},
    css: [],
    plugins: [
        '~/plugins/filters.js',
        '~/plugins/vue-excel.js',
        { src: '~plugins/ga.js', mode: 'client' },
        { src: "~plugins/chartjs", ssr: false },
    ],
    loading: { color: '#fff' },
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/proxy'
    ],
    axios: {
        credentials: false,
        // baseURL: 'https://adqapi.nathanhr.ae/',
        // crossDomain: true,
        // https: true,
        baseURL: 'http://localhost:4800/',
        crossDomain: false,
        https: false,
    },
    vuetify: {
        treeShake: true,
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            light: true,
            themes: {
                light: {
                    primary: colors.yellow.darken3,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                _: "lodash"
            })
        ],
        extend(config, ctx) {}
    },
    server: {
       port: 5501,
    }
}
