module.exports = (env) => {
  console.log("webpack.production.ts env: ", env);
  return {
    output: {
      filename: "chunk.[chunkhash].js",
    },
  };
};
