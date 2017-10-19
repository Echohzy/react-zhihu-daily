var path = require("path");
var webpack = require("webpack");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, "../src/javascripts/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../server/public")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", "scss", "css"]
  },

  module: {
    rules: [
      { test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2|otf)$/, loader: 'url-loader'},
      
      { test: /\.(scss|css)$/,use: [{ loader: "style-loader" },{ loader: "css-loader" },{ loader: "sass-loader"}]}, 
      
      { test: /\.(tsx|ts)$/, loader: "awesome-typescript-loader"},

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "DEVELOPMENT": false
    }),
    new UglifyJSPlugin()
  ],
}