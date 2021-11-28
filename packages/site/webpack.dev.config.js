const path = require("path");
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: ''
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    ...baseConfig.plugins,
  ]
};
