module.exports = (env) => {
  console.log("webpack.development.ts env: ", env);
  return {
    devtool: "source-map",
    output: {
      filename: "dev.bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
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
