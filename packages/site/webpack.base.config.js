const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    demo: "./src/demo/index.tsx",
    docs: "./src/docs/index.tsx",
  },
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: [/\.md$/],
        loader: require.resolve('raw-loader'),
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 1,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, '../f6/packages'),
          path.resolve(__dirname, '../f6-icons')
        ],
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: require.resolve("postcss-loader"),
          },
          {
            loader: require.resolve("less-loader"),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "demo.html",
      chunks: ["demo"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/docs.html",
      filename: "docs.html",
      chunks: ["docs"],
    }),
  ],
};
