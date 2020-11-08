import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Compiler, Configuration } from 'webpack';

interface MiniCssExtractPluginExtended extends MiniCssExtractPlugin {
  apply(compiler: Compiler): void;
}

interface CompressionPluginExtended extends CompressionPlugin {
  apply(compiler: Compiler): void;
}

const productionConfig = (presets: string[] | undefined): Configuration => {
  return {
    output: {
      filename: presets && presets.some((p) => p === 'analyze') ? '[name].js' : '[name].[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'singletonStyleTag',
              },
            },
            {
              loader: 'css-loader',
            },

            {
              loader: 'sass-loader',
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
    //^(?!.*(trunk|tags|branches)).*$
    optimization: {
      minimize: true,
      minimizer: [`...`, new TerserPlugin(), new CssMinimizerPlugin()],

      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
      moduleIds: 'named',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendorMain: {
            test(module: Configuration) {
              return (
                module.context.includes('node_modules') &&
                [
                  'react',
                  'react-dom',
                  'react-router',
                  'react-router-dom',
                  'react-promise-tracker',
                  'axios',
                  'webfontloader',
                  'react-loader-spinner',
                  'styled-components',
                  '@styled-icons',
                ].some((name) => module.context.includes(name))
              );
            },
            name: 'vendorMain',
          },
          vendorBlogRender: {
            test(module: Configuration) {
              return (
                module.context.includes('node_modules') &&
                ['react-markdown', 'react-syntax-highlighter'].some((name) => module.context.includes(name))
              );
            },
            name: 'vendorBlogRender',
          },
          coreJS: {
            test(module: Configuration) {
              return module.context.includes('node_modules') && ['core-js'].some((str) => module.context.includes(str));
            },
            name: 'coreJS',
          },

          vendorUtils: {
            test(module: Configuration) {
              return (
                module.context.includes('node_modules') &&
                ![
                  'react-markdown',
                  'react-syntax-highlighter',
                  'react',
                  'react-dom',
                  'react-router',
                  'react-router-dom',
                  'react-promise-tracker',
                  'axios',
                  'webfontloader',
                  'react-loader-spinner',
                  'styled-components',
                  '@styled-icons',
                  'core-js',
                ].some((str) => module.context.includes(str))
              );
            },
            name: 'vendorUtils',
          },
        },
      },
    },
    plugins: [
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
