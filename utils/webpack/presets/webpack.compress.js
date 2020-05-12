const compression = require('compression-webpack-plugin');

const compress = () => ({
  plugins: [
    new compression({
      test: /\.(js|ts|jsx|tsx|scss|css|jpeg|jpg)/,
      compressionOptions: {level: 9},
      threshold: 254,
    }),
  ],
});

module.exports = compress;
