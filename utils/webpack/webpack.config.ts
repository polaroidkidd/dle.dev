import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration, ProgressPlugin, ProvidePlugin } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

import { developmentConfig } from './webpack.development';
import { productionConfig } from './webpack.production';

// custom loaders
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const presetConfig = require('./loadPresets');

const config = ({
  mode = 'production',
  presets = [],
  depEnv = 'production',
}: {
  mode: Configuration['mode'];
  presets?: string[];
  depEnv?: string;
}): Configuration => {
  return merge(
    {
      mode: mode,
      entry: [
        'react-hot-loader/babel',
        // polyfills

        // general polyfills
        'core-js/stable/promise',
        'core-js/stable/regexp',
        'core-js/stable/set',

        // specific polyfills
        'core-js/stable/array/fill',
        'core-js/stable/array/includes',
        'core-js/stable/array/from',
        'core-js/stable/object/assign',
        'core-js/stable/object/values',
        'core-js/stable/string/repeat',
        'regenerator-runtime/runtime',

        // polyfills not imported yet from core-js
        // 'core-js/stable/array-buffer',
        // 'core-js/stable/array',
        // 'core-js/stable/data-view',
        // 'core-js/stable/date',
        // 'core-js/stable/dom-collections',
        // 'core-js/stable/function',
        // 'core-js/stable/json',
        // 'core-js/stable/map',
        // 'core-js/stable/math',
        // 'core-js/stable/number',
        // 'core-js/stable/object',
        // 'core-js/stable/reflect',
        // 'core-js/stable/string',
        // 'core-js/stable/symbol',
        // 'core-js/stable/typed-array',
        // 'core-js/stable/url-search-params',
        // 'core-js/stable/url',
        // 'core-js/stable/weak-map',
        // 'core-js/stable/weak-set',

        // entrypoint
        './src/index.tsx',
      ],
      output: {
        path: __dirname + '/../../dist',
        publicPath: '/',
      },
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
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
      plugins: [
        new CleanWebpackPlugin({ verbose: true }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
          scriptLoading: 'defer',
          title: 'dle.dev',
          inject: 'body',
          minify:
            mode === 'production' && !presets.some((p) => p !== 'analyze')
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
              : true,
          hash: false,
          cache: mode === 'production' && !presets.some((p) => p !== 'analyze'),
          favicon: './public/favicon.ico',
          templateParameters: {
            PUBLIC_URL: depEnv === 'production' ? 'https://dle.dev' : 'https://staging.dle.dev',
          },
        }),
        new ProgressPlugin({}),
      ],
    },
    modeConfig(mode, presets),
    presetConfig({ mode, presets })
  );
};

const modeConfig = (mode: Configuration['mode'], presets: string[]): Configuration => {
  if (mode === 'production') {
    return productionConfig(presets);
  } else {
    return developmentConfig();
  }
};

export default config;
