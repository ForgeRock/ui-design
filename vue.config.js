const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
            }
        }
    },
    runtimeCompiler: true,
    devServer: {
        host: 'localhost',
        proxy: {
            '/openidm': {
                target: 'http://localhost:8080/openidm',
                pathRewrite: { '^/openidm': '' },
                changeOrigin: true
            }
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: ['./node_modules/bootstrap/scss/bootstrap.scss', './src/scss/theme-variables.scss']
        },
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
};
