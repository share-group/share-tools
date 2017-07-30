const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'nosources-source-map',
  entry: {
    app: './src/index.js',
    vendor: ['lodash', 'react', 'axios']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      }
    }),
    new HTMLWebpackPlugin({
      inject: 'body',
      cache: true,
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      }
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.(less|css)$/,
      loader: "style-loader!css-loader!less-loader"
    }]
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  }
};