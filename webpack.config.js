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
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.([jt])sx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                babelrc: false,
                presets: [
                  [
                    "@babel/preset-env",
                    { targets: { browsers: "last 2 versions" } } // or whatever your project requires
                  ],
                  "@babel/preset-typescript",
                  "@babel/preset-react"
                ],
                plugins: [
                  // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                  ["@babel/plugin-proposal-decorators", { legacy: true }],
                  ["@babel/plugin-proposal-class-properties", { loose: true }]
                ]
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ["file-loader?name=[name].[ext]"] // ?name=[name].[ext] is only necessary to preserve the original file name
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
