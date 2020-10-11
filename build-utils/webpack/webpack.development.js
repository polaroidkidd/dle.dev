import path from 'path';

module.exports = (env) => {
  return {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      progress: true,
      stats: 'errors-only',
      open: false,
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
                  context: path.resolve(__dirname, 'src'),
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
