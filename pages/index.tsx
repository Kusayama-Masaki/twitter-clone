import React from "react";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { getApiBaseUrl } from "../utils/";

import BaseLayout from "../components/templates/baseLayout/baseLayout";
import Home from "../components/templates/home/home";
import Recommend from "../components/templates/recommend/recommend";

interface Props {
  tweets: any[];
  trends: any[];
}

const Index: NextPage<Props> = ({ tweets, trends }) => (
  <BaseLayout
    mainElement={<Home tweets={tweets} />}
    subElement={<Recommend trends={trends} />}
  />
);

Index.getInitialProps = async () => {
  const [resTweets, resTrends] = await Promise.all([
    fetch(`${getApiBaseUrl}/timeline`),
    fetch(`${getApiBaseUrl}/trends`)
  ]);

  const [tweets, trends] = await Promise.all([
    resTweets.json(),
    resTrends.json()
  ]);

  return { tweets, trends };
};

export default Index;
