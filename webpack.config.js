var webpack = require("webpack");
var path = require("path");
module.exports = {
  entry: "./webpack/index.js",
  output: {
    path: path.resolve(__dirname, "./frontend/static/js"),
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css/,
        loader: "style-loader",
      },
      {
        test: /\.css/,
        loader: "css-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
