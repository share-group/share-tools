module.exports = { //注意这里是exports不是export
  devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
  entry: __dirname + "/app/main.js", //唯一入口文件
  output: { //输出目录
    path: __dirname + "/build", //打包后的js文件存放的地方
    filename: 'bundle.js', //打包后的js文件名
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
      loader: 'babel-loader'
      //npm install babel-loader
      //npm install babel-core
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=25000'
    }]
  }
};
// 'use strict';
//
// const path = require('path');
// const args = require('minimist')(process.argv.slice(2));
//
// // List of allowed environments
// const allowedEnvs = ['dev', 'dist', 'test'];
//
// // Set the correct environment
// let env;
// if (args._.length > 0 && args._.indexOf('start') !== -1) {
//   env = 'test';
// } else if (args.env) {
//   env = args.env;
// } else {
//   env = 'dev';
// }
// process.env.REACT_WEBPACK_ENV = env;
//
// /**
//  * Build the webpack configuration
//  * @param  {String} wantedEnv The wanted environment
//  * @return {Object} Webpack config
//  */
// function buildConfig(wantedEnv) {
//   let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
//   let validEnv = isValid ? wantedEnv : 'dev';
//   let config = require(path.join(__dirname, 'cfg/' + validEnv));
//   return config;
// }
//
// module.exports = buildConfig(env);
