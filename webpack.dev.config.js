const path = require('path');

const devServer = {
  // hot: true, // 告诉 dev-server 我们在使用 HMR
  contentBase: path.resolve(__dirname, 'dist'),
  compress: false,
  inline: true,
  port: 9000,
};

module.exports = Object.assign({}, require('./webpack.prod.config'), { devServer });
