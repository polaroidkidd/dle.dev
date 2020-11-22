import path from 'path';
import { IConfiguration } from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const developmentConfig = (): IConfiguration => {
  return {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      open: true,
      hot: true,
      port: 3000,
    },
    output: {
      filename: 'dev.bundle.js',
    },
    entry: [
      'react-hot-loader/babel',
      // entrypoint
      './src/index.tsx',
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  mode: 'local',
                  exportGlobals: false,
                  localIdentName: '[local]',
                },
              },
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                sourceMap: true,
                resources: ['./src/app/styles/main.scss'],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        title: 'dle.dev',
        inject: 'head',
        minify: false,
        hash: true,
        cache: true,
        favicon: './public/favicon.ico',
        templateParameters: {
          PUBLIC_URL: 'https://staging.dle.dev',
        },
      }),
    ],
  };
};

export { developmentConfig };
