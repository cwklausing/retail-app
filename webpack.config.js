const path = require('path');

var config = {
  context: __dirname,
  entry: './scripts/index.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' // place where bundled app will be served
  },
  devServer: {
    publicPath: '/public/',
    inline: true, // autorefresh
    port: 8080 // development port server
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
module.exports = config;
