const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const compression = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = (env) => {
  return {
    entry: ['./src/index.tsx'],
    output: {
      filename: 'chunk.[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new BrotliPlugin({
        asset: '[file].br',
        test: /\.(js|ts|jsx|tsx|scss|css|jpeg|jpg)/,
        threshold: 244,
        deleteOriginalAssets: true,
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'chunk.[chunkhash].css',
        chunkFilename: 'chunk.[chunkhash].css',
      }),
    ],
  };
};
