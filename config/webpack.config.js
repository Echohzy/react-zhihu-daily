var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/javascripts/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../server/public")
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.(scss|css)$/,use: [{ loader: "style-loader" },{ loader: "css-loader" },{ loader: "sass-loader"}]}, 
      
      { test: /\.(tsx|ts)$/, loader: "awesome-typescript-loader"},

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    
      { test: /\.(eot|svg|ttf|woff|woff2|otf)$/, loader: 'url-loader'}
      

    ]
  }
}