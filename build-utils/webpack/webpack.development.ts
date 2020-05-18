import { webpackConfig } from '../../webpack.config';

module.exports = (env: webpackConfig) => {
  return {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      progress: true,
      stats: 'errors-only',
    },
    output: {
      filename: 'dev.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };
};
