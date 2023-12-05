const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, './src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      [{ test: /\.node$/, loader: 'node-loader' }],
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
