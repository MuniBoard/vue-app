const { defineConfig } = require('@vue/cli-service')
const { BaseURL } = require("./src/api/util.js")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: BaseURL
  }
})
