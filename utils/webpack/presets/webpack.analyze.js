const analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const analyze = () => ({
  plugins: [new analyzer()],
});

module.exports = analyze;
