const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./js/HMRApp.js"
  ],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    publicPath: '/public/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: ["file-loader"]
      }
    ]
  }
};
