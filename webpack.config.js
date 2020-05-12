const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = (env) => require(`./utils/webpack/webpack.${env}`)(env);

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  return webpackMerge(
    {
      mode: mode,
      entry: ['react-hot-loader/babel'],
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
                  // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                  ['@babel/plugin-proposal-decorators', {legacy: true}],
                  ['@babel/plugin-proposal-class-properties', {loose: true}],
                  'react-hot-loader/babel',
                  '@babel/plugin-syntax-dynamic-import',
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
          scriptLoading: 'blocking',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode)
  );
};
