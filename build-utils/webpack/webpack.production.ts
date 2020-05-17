import { webpackConfig } from '../../webpack.config';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const zlib = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');
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
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            minSize: 0,
          },
          shared: {
            name: 'shared',
            test: /[\\/]src[\\/]app[\\/]components[\\/]/,
            chunks: 'all',
            minSize: 0,
          },
        },
      },
    },
    plugins: [
      // FixMe Compression/Brotli Plugin breaks loading of assets
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 10240,
        minRatio: 0.8,
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
