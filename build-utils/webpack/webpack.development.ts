module.exports = (env) => {
  return {
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      progress: true,
      stats: 'errors-only',
    },
    entry: ['./src/index.tsx'],
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
