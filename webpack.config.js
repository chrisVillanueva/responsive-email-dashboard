
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './main.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  /*
  module: {
    devtool: "source-map",
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.jpg?$|\.gif?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader",
                  "css-loader?sourceMap",
                  "sass-loader?sourceMap"]
      }
    ]
  },
  */
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.jpg?$|\.gif?$/,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: ["style-loader",
              "css-loader?sourceMap",
              "sass-loader?sourceMap"]
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"]
  },
  context: resolve(__dirname, 'app'),
  devtool: 'inline-source-map',
  devServer: {
    // enable HMR on the server
    //contentBase: resolve(__dirname, 'app'),
    // match the output path
    //publicPath: '/',
    // match the output `publicPath`
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true
  }
};
