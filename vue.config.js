module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                // 'router': '@/router',
                'views': '@/views',
            }
        }
    },
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }

    },
}