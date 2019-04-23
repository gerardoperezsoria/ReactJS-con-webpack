var debug = process.env.NODE_ENV !== "development";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/dist/index.js",
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules!bower_components)
          }
      ]
  },
  output: {
    path: __dirname + "/app/js",
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};