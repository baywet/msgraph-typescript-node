const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle.dev.html',
      openAnalyzer: false,
    }),
  ],
  output: {
    filename: 'bundle.dev.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
