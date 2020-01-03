const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

const nextConfig = {
  compress: true,
  serverRuntimeConfig: {
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    accessTokenKey: process.env.ACCESS_TOKEN_KEY,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  }
};

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]"
        }
      }
    ],
    withImages
  ],
  nextConfig
);
