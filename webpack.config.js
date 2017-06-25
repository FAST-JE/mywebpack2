const webpack = require('webpack');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    auth: PATHS.src + 'pages/auth/auth.js',
    works: PATHS.src + 'pages/works/works.js',
    about: PATHS.src + 'pages/about/about.js',
    blog: PATHS.src + 'pages/blog/blog.js',
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // images from img/flags goes to flags-sprite.svg
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve('./src/img/'),
        options: {
          extract: true,
          spriteFilename: 'flags-sprite.svg'
        }
      }
    ]
  },
  plugins: [
    new SpriteLoaderPlugin()
  ]
};