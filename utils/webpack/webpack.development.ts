import path from 'path';
import { IConfiguration } from './webpack.config';

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
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  exportGlobals: false,
                  localIdentName: '[local]',
                },
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
  };
};

export { developmentConfig };
