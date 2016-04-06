/*global require: true, module: true, __dirname: true*/
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");

new WebpackDevServer(webpack(config), {
  contentBase: "public/",
  hot: true,

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },

  stats: {
    chunkModules: false,
    colors: true
  }})
.listen(3030, "0.0.0.0", function (err) {
  if (err) {
    console.error(err);
  }
});
