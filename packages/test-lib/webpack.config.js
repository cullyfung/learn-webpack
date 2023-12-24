const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    library: {
      name: '_',
      type: 'umd'
    }
  },
  // externals: {
  // lodash: {
  //   commonjs: 'lodash',
  //   commonjs2: 'lodash',
  //   amd: 'lodash',
  //   root: '_'
  // }
  // }
  externals: [nodeExternals()]
};
