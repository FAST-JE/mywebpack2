const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    auth: path.resolve(PATHS.src, './pages/auth/auth.pug'),
    works: path.resolve(PATHS.src, './pages/works/works.pug'),
    about: path.resolve(PATHS.src, './pages/about/about.pug'),
    blog: path.resolve(PATHS.src, './pages/blog/blog.pug')
  },
  output: {
    path: PATHS.dist, //!!!
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.dist),
    new HtmlWebpackPlugin({
      filename: 'auth.html',
      chunks: ['auth'],
      template: path.resolve(PATHS.src, './pages/auth/auth.pug')
    }),
    new HtmlWebpackPlugin({
      filename: 'works.html',
      chunks: ['works'],
      template: path.resolve(PATHS.src, './pages/works/works.pug')
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about'],
      template: path.resolve(PATHS.src, './pages/about/about.pug')
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog'],
      template: path.resolve(PATHS.src, './pages/blog/blog.pug')
    })
  ]
};