const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      entry: "./src/index.tsx",
      output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader"
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          scriptLoading: "blocking"
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  );
};
