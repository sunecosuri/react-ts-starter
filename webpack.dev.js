const config = require("./webpack.config.js")

module.exports = Object.assign(config, {
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    contentBase: 'dist',
    watchContentBase: true,
  },
})
