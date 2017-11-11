var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/javascripts/index.tsx"),
    lazy_loader: path.resolve(__dirname, "../src/javascripts/lazy_loader.tsx"),
    vendor: ["react", "redux", "react-router", "react-dom", "react-router-redux", "react-redux", "react-router-dom", "axios"]
  },
  output: {
    filename: '[name].[chunkhash:4].js',
    chunkFilename: '[name].[chunkhash:4].child.js',
    publicPath: "/",
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
      
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "DEVELOPMENT": JSON.stringify(true)
    }),
    new BundleAnalyzerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'runtime'],
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.[chunkhash:4].js",
      minChunks: 3
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      minChunks: 3
    }),
    new HtmlWebpackPlugin({
      title: "Template",
      inject: true,
      template: '!!raw-loader!server/views/index-template.ejs',
      filename: "../views/index.ejs"
    })
  ],
}