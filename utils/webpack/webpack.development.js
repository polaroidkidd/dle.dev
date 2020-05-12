module.exports = (env) => {
  console.log("webpack.development.ts env: ", env);
  return {
    devtool: "source-map",
    output: {
      filename: "dev.bundle.js",
    },
  };
};
