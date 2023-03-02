const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const isDev = process.env.NODE_ENV === "development";

const ContentSecurityPolicy = `
  default-src 'none';
  script-src ${isDev ? `'unsafe-inline' 'unsafe-eval'` : "self"} ;
  script-src-elem 'self' 'unsafe-inline' https://brain.dle.dev/js/script.js ;
  
  style-src 'self' 'unsafe-inline';
  style-src-elem 'self' 'unsafe-inline';
  
  connect-src 'self' https://brain.dle.dev/api/;
  font-src 'self';
  img-src 'self';
  prefetch-src 'self';
  media-src 'self';
  base-uri 'self';
  object-src 'none';
  manifest-src 'self';
  child-src 'none';
  frame-src 'none';
  worker-src 'none';
  frame-ancestors 'none';
  form-action 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "https://brain.dle.dev",
  },
  {
    key: "Access-Control-Request-Method",
    value: "POST, GET, OPTIONS",
  },
];

module.exports = withPlugins([withBundleAnalyzer], {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "simpleicons.org",
        port: "",
      },
    ],
    domains: ["localhost"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
});
