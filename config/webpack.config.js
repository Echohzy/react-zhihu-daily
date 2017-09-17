var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
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
      { test: /\.tsx?$/, loader: "awesome-typescript-loader"},

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      
      {test: /\css?$/,use: [{ loader: "style-loader" },{ loader: "css-loader" }]},

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}