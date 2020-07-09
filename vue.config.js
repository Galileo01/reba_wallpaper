module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
        } else {

        }
        config.resolve.alias
            .set('assets', '@/assets')
            .set('commonjs', '@/commonjs')
            .set('components','@/components')
            .set('network', '@/network')
            .set('views', '@/views')
    },
    publicPath: "./",
    devServer: {
        // proxy: {//代理
        //     '/api':{
        //         target:'http://139.224.68.137:8081',
        //       //   changeOrigin:true,
        //         pathRewrite: {
        //           '/api': ''
        //       }
        //     }
        // }
    }
}
