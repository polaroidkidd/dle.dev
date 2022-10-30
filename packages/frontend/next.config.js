const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withPlugins([withBundleAnalyzer], {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
