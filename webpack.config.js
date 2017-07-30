const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'nosources-source-map',
  entry: {
    app: './src/index.js',
    vendor: ['lodash']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      hash: true,
      mobile: true,
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
      }
    })
  ],
  module: {
    rules: [{
      test: /\.less$/,
      loader: "style-loader!css-loader"
    }]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};