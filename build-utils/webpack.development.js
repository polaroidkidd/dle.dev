module.exports = (env) => {
  console.log("webpack.development.ts env: ", env);
  return {
    devtool: "inline-source-map",
  };
};
