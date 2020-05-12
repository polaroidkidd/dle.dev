const compression = require('compression-webpack-plugin');

const compress = () => ({
  plugins: [new compression()],
});

module.exports = compress;
