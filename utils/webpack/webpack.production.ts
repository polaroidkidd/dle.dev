import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { Compiler, Configuration } from 'webpack';

interface MiniCssExtractPluginExtended extends MiniCssExtractPlugin {
  apply(compiler: Compiler): void;
}

interface CompressionPluginExtended extends CompressionPlugin {
  apply(compiler: Compiler): void;
}

const productionConfig = (presets: string[]): Configuration => {
  return {
    output: {
      filename: presets.some((p) => p === 'analyze') ? '[name].js' : '[name].[contenthash].js',
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
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: presets.some((p) => p === 'analyze') ? '[name].css' : 'style.[name].[contenthash].css',
        chunkFilename: presets.some((p) => p === 'analyze') ? '[name].css' : 'style.[name].[contenthash].css',
      }) as MiniCssExtractPluginExtended,
      new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|svg|jpg)$/,
        exclude: /\.(html|json|txt)$/,
        compressionOptions: { level: 11 },
        minRatio: 1,
        deleteOriginalAssets: false,
      }) as CompressionPluginExtended,
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|svg|jpg)$/,
        exclude: /\.(html|json|txt)$/,
        compressionOptions: { level: 9 },
        minRatio: 1,
        deleteOriginalAssets: false,
      }) as CompressionPluginExtended,
    ],
  };
};

export { productionConfig };
