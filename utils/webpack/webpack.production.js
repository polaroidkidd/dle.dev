const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const compression = require('compression-webpack-plugin');

module.exports = (env) => {
  return {
    entry: ['./src/index.tsx'],
    output: {
      filename: 'chunk.[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new compression({
        test: /\.(js|ts|jsx|tsx|scss|css|jpeg|jpg)/,
        compressionOptions: {level: 9},
        threshold: 254,
        deleteOriginalAssets: env.presets !== 'analyze',
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'chunk.[chunkhash].css',
        chunkFilename: 'chunk.[chunkhash].css',
      }),
    ],
  };
};
