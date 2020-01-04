import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/twitterClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = { id: 23424856 }; // Japan
  client.get("trends/place", params, (err, trends, response) => {
    if (!err) {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(trends[0].trends));
    }
  });
};
