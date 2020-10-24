import path from 'path';
import { Configuration } from 'webpack';
import { Configuration as WebPackDevServerConfig } from 'webpack-dev-server';

const developmentConfig = (): Configuration => {
  const devServer: WebPackDevServerConfig = {
    historyApiFallback: true,
    stats: 'errors-only',
    open: true,
    hot: true,
    port: 3000,
  };

  return {
    devtool: 'source-map',
    devServer: devServer,
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
