import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Compiler, Configuration } from 'webpack';
import InlineChunkHtmlPlugin from 'inline-chunk-html-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');

interface MiniCssExtractPluginExtended extends MiniCssExtractPlugin {
  apply(compiler: Compiler): void;
}

interface CompressionPluginExtended extends CompressionPlugin {
  apply(compiler: Compiler): void;
}

const productionConfig = (presets: string[] | undefined, depEnv: 'production' | 'staging'): Configuration => {
  const hasPresets = presets !== undefined;

  return {
    output: {
      filename: hasPresets && presets.some((p) => p === 'analyze') ? '[name].js' : '[name].[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
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
      minimizer: [`...`, new TerserPlugin()],
      moduleIds: 'named',
      splitChunks: {
        chunks: 'all',
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
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        title: 'dle.dev',
        inject: true,
        minify: !hasPresets
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
        hash: true,
        cache: !hasPresets,
        favicon: './public/favicon.ico',
        templateParameters: {
          PUBLIC_URL: depEnv === 'production' ? 'https://dle.dev' : 'https://staging.dle.dev',
        },
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+\.js/]),

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
