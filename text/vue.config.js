const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{  //用于开发环境
    host: 'localhost',
    port: 8080,
  }

})
