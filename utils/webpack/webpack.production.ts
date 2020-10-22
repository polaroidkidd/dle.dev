const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const zlib = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = ({ presets: presets }) => {
  return {
    output: {
      filename: presets.some((p) => p === 'analyze') ? '[name].[id].js' : '[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
                modules: {
                  namedExport: true,
                },
              },
            },
            {
              loader: 'css-loader',
              options: {
                esModule: true,
              },
            },
            { loader: 'postcss-loader' },

            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./src/app/styles/main.scss'],
              },
            },
          ],
        },
      ],
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 250 * 1024, // 100 KiB
      maxEntrypointSize: 250 * 1024, // 100 KiB
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.gz') || assetFilename.endsWith('.br');
      },
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
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
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: presets.some((p) => p === 'analyze') ? '[name].css' : 'style.[chunkhash].css',
        chunkFilename: presets.some((p) => p === 'analyze') ? '[name].css' : 'style.[name].[contenthash].css',
      }),
      new CompressionPlugin({
        filename: '[path].[query].[name].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg|jpg)$/,
        compressionOptions: { level: 11 },
        minRatio: 1,
        deleteOriginalAssets: false,
      }),
      new CompressionPlugin({
        filename: '[path].[query].[name].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|jpg)$/,
        compressionOptions: { level: 9 },
        minRatio: 1,
        deleteOriginalAssets: false,
      }),
    ],
  };
};
