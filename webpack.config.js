const path = require('path');
const webpack = require('webpack');

module.exports = {
  bail: true,
  stats: 'detailed',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'ui-kit.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@urbica/ui-kit',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  externals: {
    'prop-types': 'prop-types',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    react: 'react',
    recompose: 'recompose'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
