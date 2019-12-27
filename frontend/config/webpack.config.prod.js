const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
module.exports = merge(baseConfig, {
  mode: "production",
  devtool: 'cheap-eval-source-map'
})
