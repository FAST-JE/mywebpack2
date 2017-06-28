const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    auth: path.resolve(PATHS.src, './pages/auth/auth.js'),
    works: path.resolve(PATHS.src, './pages/works/works.js'),
    about: path.resolve(PATHS.src, './pages/about/about.js'),
    blog: path.resolve(PATHS.src, './pages/blog/blog.js')
  },
  output: {
    path: PATHS.dist,
    filename: './js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.dist),
    new HtmlWebpackPlugin({
      filename: 'auth.html',
      chunks: ['auth', 'common'],
      template: path.resolve(PATHS.src, './pages/auth/auth.pug')
    }),
    new HtmlWebpackPlugin({
      filename: 'works.html',
      chunks: ['works', 'common'],
      template: path.resolve(PATHS.src, './pages/works/works.pug')
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about', 'common'],
      template: path.resolve(PATHS.src, './pages/about/about.pug')
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog', 'common'],
      template: path.resolve(PATHS.src, './pages/blog/blog.pug')
    }),
    new ExtractTextPlugin('./css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};