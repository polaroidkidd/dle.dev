import { webpackConfig } from '../../webpack.config';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const zlib = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = ({ presets: presets }: webpackConfig) => {
  return {
    entry: ['./src/index.tsx'],
    output: {
      filename: presets.some((p) => p === 'analyze') ? '[name].js' : 'chunk.[name].[chunkhash].js',
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
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
          shared: {
            name: 'shared',
            test: /[\\/]src[\\/]app[\\/]components[\\/]/,
            minSize: 0,
          },
        },
      },
    },
    plugins: [
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg|jpg)$/,
        compressionOptions: { level: 11 },
        minRatio: 1,
        deleteOriginalAssets: false,
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|jpg)$/,
        compressionOptions: { level: 9 },
        minRatio: 1,
        deleteOriginalAssets: false,
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
