import { webpackConfig } from '../../webpack.config';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = ({ presets: presets }: webpackConfig) => {
  return {
    entry: ['./src/index.tsx'],
    output: {
      filename: presets.some((p) => p === 'analyze') ? '[name].js' : 'chunk.[chunkhash].js',
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
        cacheGroups: {
          vendor: {
            name: presets.some((p) => p === 'analyze') ? 'vendors' : 'vendors.[chunkhash]',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
          shared: {
            name: presets.some((p) => p === 'analyze') ? 'shared' : 'shared.[chunkhash]',
            test: /[\\/]src[\\/]app[\\/]components[\\/]/,
            chunks: 'all',
            minSize: 0,
          },
        },
      },
    },
    plugins: [
      new BrotliPlugin({
        asset: '[file].br',
        test: /\.(js|ts|jsx|tsx|scss|css|jpeg|jpg)/,
        threshold: 244,
        deleteOriginalAssets: presets.some((p) => p === 'analyze'),
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: presets.some((p) => p === 'analyze') ? '[name].css' : 'style.[chunkhash].css',
        chunkFilename: presets.some((p) => p === 'analyze')
          ? '[name].css'
          : 'style.[chunkhash].css',
      }),
    ],
  };
};
