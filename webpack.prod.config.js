const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function getEnv() {
  for (const argv of process.argv) {
    if (argv.startsWith('--env=')) {
      return argv.replace('--env=', '').trim();
    }
  }
  return 'prod';
}

const env = getEnv();

const config = {
  devtool: env === 'prod' ? 'source-map' : 'eval-source-map',
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router', 'axios'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextWebpackPlugin('[name].[hash:8].css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: env === 'prod' } },
      canPrint: env === 'prod',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash:8].js',
    }),
    new HTMLWebpackPlugin({
      inject: 'body',
      cache: false,
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: env === 'prod',
        collapseWhitespace: env === 'prod',
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-1'],
      },
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
    }, {
      test: /\.css$/,
      loader: ExtractTextWebpackPlugin.extract('css-loader'),
    }],
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
};

if (env === 'prod') {
  config.plugins.push(new UglifyJSPlugin({
    output: {
      comments: false,
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
      join_vars: true,
    },
  }));
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
