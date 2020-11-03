const path = require('path')
const resolve = src =>path.resolve(__dirname,'./',src)


module.exports = {
    outputDir:'docs',
    publicPath:'/vue/',
    devServer: {port: '3366'},
    pages: {
        index: {
            entry: resolve('src/story/main.ts'),
            template: 'public/index.html',
            filename: 'index.html',
            title: 'v3-components',
        },
    },
    chainWebpack: config => {
        config.plugins
            .delete('prefetch-index')
            .delete('preload-index');
        config.resolve.alias
            .set('story', resolve('story'))
    }
}