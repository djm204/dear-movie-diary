const merge = require('webpack-merge')
const UglifyJs = require('uglifyjs-webpack-plugin')
const WebpackVisualizer = require('webpack-visualizer-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.base.config')

const prodConfig = () => {
  return merge([
    {
      optimization: {
        runtimeChunk: 'single',
        minimizer: [new UglifyJs()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssets(),
        //        new CopyWebpackPlugin([{ from: 'src/static' }]),
        new WebpackVisualizer({ filename: './build-stats.html' }),
      ],
    },
  ])
}

module.exports = () => {
  return merge(baseConfig(), prodConfig())
}
