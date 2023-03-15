const path = require('path');
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './src/server.js',
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8080,
  },
};