const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log("webpack.production.ts env: ", env);
  return {
    output: {
      filename: "chunk.[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "chunk.[chunkhash].css",
        chunkFilename: "chunk.[chunkhash].css",
      }),
    ],
  };
};
