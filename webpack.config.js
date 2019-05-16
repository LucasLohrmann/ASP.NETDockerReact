const path = require('path');

module.exports = {
  entry: './wwwroot/source/app.js',
  output: {
    path: path.resolve(__dirname, 'wwwroot/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: ".",
    host: "localhost",
    port: 9000
  },
  resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
          path.join(__dirname),
          "node_modules"
      ]
  },
  module: {
    rules: [
      { test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
};