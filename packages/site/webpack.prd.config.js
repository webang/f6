const path = require("path");
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: 'https://webang.github.io/f6/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...baseConfig.plugins,
  ]
};
