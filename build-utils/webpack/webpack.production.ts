const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = ({ presets }) => {
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
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new BrotliPlugin({
        asset: '[file].br',
        test: /\.(js|ts|jsx|tsx|scss|css|jpeg|jpg)/,
        threshold: 244,
        deleteOriginalAssets: presets && presets !== 'analyze',
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
