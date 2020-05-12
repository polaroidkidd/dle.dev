const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const modeConfig = (env) => require(`./utils/webpack/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      entry: "./src/index.tsx",
      output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader",
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          scriptLoading: "blocking",
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode)
  );
};
