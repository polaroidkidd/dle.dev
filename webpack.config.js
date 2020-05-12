const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = (env) => require(`./utils/webpack/webpack.${env}`)(env);
const presetConfig = require('./utils/webpack/loadPresets');
const copyPlugin = require('copy-webpack-plugin');

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
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
                    {targets: {browsers: 'last 2 versions'}}, // or whatever your project requires
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: [
                  '@babel/plugin-syntax-dynamic-import', // dynamic hot loading preset
                  ['@babel/plugin-proposal-decorators', {legacy: true}],
                  ['@babel/plugin-proposal-class-properties', {loose: true}],
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
        new HtmlWebpackPlugin({
          template: './public/index.html',
          scriptLoading: 'defer',
          title: 'dle.dev',
          templateParameters: {
            PUBLIC_URL: 'https://dle.dev',
          },
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetConfig({mode, presets})
  );
};
