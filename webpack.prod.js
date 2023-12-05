const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle.prod.html',
      openAnalyzer: false,
    }),
  ],
  output: {
    filename: 'bundle.prod.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
