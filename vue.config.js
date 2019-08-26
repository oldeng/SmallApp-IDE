module.exports = {
    publicPath: process.env.NODE_ENV === 'production'  ? './' : './',
    configureWebpack:{
        target: 'electron-renderer'
    }
}