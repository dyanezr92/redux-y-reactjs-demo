/*global require: true, module: true, __dirname: true*/
var path = require("path");

module.exports = {

  entry: "./src/main.jsx",

  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
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
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
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

  resolve: {
    extensions: ["", ".css", ".js", ".jsx"],
    alias: {
      "app": path.resolve(__dirname, "src/"),
      "bootstrap": path.resolve(__dirname, "node_modules/bootstrap/dist")
    }
  }
}
