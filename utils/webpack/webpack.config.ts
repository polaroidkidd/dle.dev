import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration, ProgressPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

export interface IConfiguration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

// Webpack Configs
import { developmentConfig } from './webpack.development';
import { productionConfig } from './webpack.production';
import { applyPresets } from './loadPresets';
import InlineChunkHtmlPlugin from 'inline-chunk-html-plugin';

/**
 * Base Webpack Configuration
 * @param mode Webpack Mode (prod, dev, none)
 * @param presets Currently available preset is "analyze"
 * @param depEnv Deployment Environment (production, staging)
 */
const config = ({
  mode = 'production',
  presets = undefined,
  depEnv = 'production',
}: {
  mode: IConfiguration['mode'];
  presets?: string;
  depEnv?: 'production' | 'staging';
}): IConfiguration => {
  const { presetsArray, hasPresets }: { presetsArray: string[]; hasPresets: boolean } =
    presets === undefined
      ? {
          presetsArray: [],
          hasPresets: false,
        }
      : { presetsArray: presets.split(','), hasPresets: true };
  const isProduction: boolean = mode === 'production';

  return merge(
    {
      mode: mode,
      entry: isProduction
        ? {
            entry: './src/index.tsx',
          }
        : [
            'react-hot-loader/babel',

            // entrypoint
            './src/index.tsx',
          ],

      output: {
        path: __dirname + '/../../dist',
        publicPath: '/',
      },
      resolve: {
        alias: !isProduction
          ? {
              'react-dom': '@hot-loader/react-dom',
            }
          : {},
        fallback: { path: require.resolve('path-browserify') },
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
      },
      module: {
        rules: [
          {
            test: /node_modules\/vfile\/core\.js/,
            use: [
              {
                loader: 'imports-loader',
                options: {
                  type: 'commonjs',
                  imports: ['single process/browser process'],
                },
              },
            ],
          },
          {
            test: /\.([jt])sx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: false,
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      corejs: {
                        version: '3',
                        proposals: true,
                      },
                      useBuiltIns: 'entry',
                      targets: {
                        browsers: ['>1%', 'Firefox ESR', 'not ie < 11'],
                      },
                    },
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: [
                  'syntax-async-functions',
                  '@babel/transform-runtime',
                  ['@babel/plugin-proposal-unicode-property-regex', { useUnicodeFlag: false }],
                  '@babel/plugin-syntax-dynamic-import',
                  ['@babel/plugin-proposal-decorators', { legacy: true }],
                  ['@babel/plugin-proposal-class-properties', { loose: true }],
                  '@babel/plugin-transform-object-assign',
                  'react-hot-loader/babel',
                  [
                    'module-resolver',
                    {
                      root: ['.'],
                      extensions: ['.ts', '.tsx', '.jsx', '.js', '.css', '.scss'],
                      alias: {
                        '@components': './src/app/components',
                        '@pages': './src/app/pages',
                        '@styles': './src/app/styles',
                        '@assets': './src/app/assets',
                        '@containers': './src/app/containers',
                        '@utils': './src/app/utils',
                      },
                    },
                  ],
                ],
              },
            },
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
      plugins: [new CleanWebpackPlugin({ verbose: true }), new ProgressPlugin({})],
    },
    modeConfig(isProduction, hasPresets ? presetsArray : undefined, depEnv),
    applyPresets(mode, hasPresets ? presetsArray : undefined)
  );
};

const modeConfig = (isProduction: boolean, presets: string[], depEnv): IConfiguration => {
  if (isProduction) {
    return productionConfig(presets, depEnv);
  } else {
    return developmentConfig();
  }
};

export default config;
