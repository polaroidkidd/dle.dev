const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
});
