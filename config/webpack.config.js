var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, "../src/javascripts/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../server/public")
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", "scss", "css"]
  },

  module: {
    rules: [
      { test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2|otf)$/, loader: 'url-loader'},
      
      { test: /\.(scss|css)$/,use: [{ loader: "style-loader" },{ loader: "css-loader" },{ loader: "sass-loader"}]}, 
      
      { test: /\.(tsx|ts)$/, loader: "awesome-typescript-loader"},
      
      { test: /\.ejs$/, loader: "ejs-loader?title=Daily"},

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "DEVELOPMENT": true
    }),
    new HtmlWebpackPlugin({
      title: "Template",
      inject: true,
      template: '!!raw-loader!server/views/index.ejs'
    }),
    new BundleAnalyzerPlugin()
  ],
}