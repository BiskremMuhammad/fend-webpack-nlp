const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  module: {
    roles: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
