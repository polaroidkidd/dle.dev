import path from 'path';

const developmentConfig = () => {
  return {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      progress: true,
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
                resourcs: ['./src/app/styles/main.scss'],
              },
            },
          ],
        },
      ],
    },
  };
};

export { developmentConfig };
