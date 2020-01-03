import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/twitterClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = { screen_name: "@ksymmsk" };
  client.get("statuses/home_timeline", params, (err, tweets, response) => {
    if (!err) {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(tweets));
    }
  });
};
