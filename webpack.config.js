const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const modeConfig = ({ mode, presets }) => require(`./build-utils/webpack/webpack.${mode}`)({ mode, presets });
const presetConfig = require('./build-utils/webpack/loadPresets');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ mode = 'production', presets, depEnv = 'production' }) => {
  if (presets !== undefined) {
    presets = presets.split(',');
  }

  return merge(
    {
      mode: mode,
      entry: [
        'react-hot-loader/babel',
        // polyfills
        'core-js/stable/object/assign',
        'core-js/stable/object/values',
        'core-js/stable/string/repeat',
        'core-js/stable/array/includes',
        'core-js/stable/regexp',
        'core-js/stable/promise',
        'regenerator-runtime/runtime',
        // entrypoint
        './src/index.tsx',
      ],
      output: {
        path: __dirname + '/dist',
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
            exclude: /node_modules/,
            type: 'asset/resource',
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 500,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin({
          dry: false,
          verbose: true,
        }),
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
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig({ mode, presets }),
    presetConfig({ mode, presets })
  );
};
