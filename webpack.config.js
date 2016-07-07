var webpack = require('webpack');
var path = require('path');

module.exports = {
  // line numbers in case there are errors for debugging
  devtool: 'inline-source-map',
  entry: [
    // (first two) setup for webpack dev server and hot reload
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    // folder where webpack looks for file to run
    './src'
  ],
  output: {
    // typically used for production
    // in this project not doing production, just dev server
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // where webpack looks for the files to bundle together
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    // which extensions webpack will expect
    extensions: ['', '.js']
  },
  module: {
    // where to define loaders
    loaders: [
      {
        // looking for javascript or jsx files
        test: /\.jsx?$/,
        // like gitignore
        exclude: /node_modules/,
        // modules installed to help load app
        // react-hot for hot reloading
        // babel transpile to es6 with react syntax (includes jsx, not standard javascript)
        // es2015 presets for additional features
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  plugins: [
    // used for hot reloading
    new webpack.HotModuleReplacementPlugin(),
    // webpack won't compile if there are errors with this plugin
    new webpack.NoErrorsPlugin()
  ]
};
