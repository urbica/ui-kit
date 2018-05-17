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
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types'
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
