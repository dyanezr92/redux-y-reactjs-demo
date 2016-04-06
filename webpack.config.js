/*global require: true, module: true, __dirname: true*/
var path = require("path");
var webpack = require("webpack");

module.exports = {

  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3030",
    "webpack/hot/only-dev-server",
    "./src/main.jsx"
  ],

  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/static/"
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint"
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["react-hot", "babel?presets[]=es2015&presets[]=stage-0&presets[]=react"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|ttf|woff2?|svg)$/,
        loader: "file"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ["", ".css", ".js", ".jsx"],
    alias: {
      "app": path.resolve(__dirname, "src/"),
      "bootstrap": path.resolve(__dirname, "node_modules/bootstrap/dist")
    }
  }
}
