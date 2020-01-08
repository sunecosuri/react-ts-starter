const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rules = [
  {
    test: /\.tsx?$/,
    use: "ts-loader",
  }
]

/** @type {import('webpack').Configuration */
const config = {
  mode: "development",
  entry: "./src/client/app.tsx",
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, 'dist'),
    // 出力ファイル名
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  module: {
    rules: rules
  },
  module: {
    rules
  },
};


module.exports = config
