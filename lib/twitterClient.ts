import getConfig from "next/config";
import Twitter from "twitter";

const { serverRuntimeConfig } = getConfig();
const {
  consumerKey,
  consumerSecret,
  accessTokenKey,
  accessTokenSecret
} = serverRuntimeConfig;

const client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret
});

export default client;
