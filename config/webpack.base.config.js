const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv')

dotenv.config()
module.exports = () => {
  const { APP_ENV, OMDB_API_KEY } = process.env

  return merge([
    {
      entry: './src/js/app.js',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.scss$/,
            use: [
              APP_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
      node: { fs: 'empty' },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.APP_ENV': JSON.stringify(APP_ENV),
          'process.env.OMDB_API_KEY': JSON.stringify(OMDB_API_KEY),
        }),
      ],
    },
  ])
}
