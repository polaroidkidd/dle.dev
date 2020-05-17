const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = ({ mode, presets }) =>
  require(`./build-utils/webpack/webpack.${mode}`)({ mode, presets });
const presetConfig = require('./build-utils/webpack/loadPresets');
const copyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

export type webpackConfig = {
  mode: 'production' | 'development';
  presets: string[];
  depEnv: 'production' | 'staging';
};

module.exports = ({
  mode = 'production',
  presets: presets = [],
  depEnv = 'production',
}: webpackConfig) => {
  if (typeof presets === 'string') {
    presets = new Array(presets);
  }

  return webpackMerge(
    {
      mode: mode,
      entry: [
        'react-hot-loader/babel',
        'core-js/modules/es.promise',
        'core-js/modules/es.array.iterator',
      ],
      output: {
        path: __dirname + '/dist',
      },
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.([jt])sx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: [
                  '@babel/plugin-syntax-dynamic-import', // dynamic hot loading preset
                  ['@babel/plugin-proposal-decorators', { legacy: true }],
                  ['@babel/plugin-proposal-class-properties', { loose: true }],
                  'react-hot-loader/babel',
                  [
                    'module-resolver',
                    {
                      root: ['.'],
                      extensions: ['.ts', '.tsx', '.jsx', '.js'],
                      alias: {
                        '@components': './src/app/components',
                        '@pages': './src/app/pages',
                        '@styles': './src/app/styles',
                        '@assets': './src/app/assets',
                        '@containers': './src/app/containers',
                      },
                    },
                  ],
                ],
              },
            },
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
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
          inject: 'head',
          minify: mode === 'production' && presets.some((p) => p !== 'analyze'),
          hash: mode === 'production' && presets.some((p) => p !== 'analyze'),
          cache: mode === 'production' && presets.some((p) => p !== 'analyze'),
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
