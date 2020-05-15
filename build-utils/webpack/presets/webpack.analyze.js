const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const analyze = () => ({
  plugins: [new WebpackBundleAnalyzer()],
});

module.exports = analyze;
