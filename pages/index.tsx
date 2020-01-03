import React from "react";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

import BaseLayout from "../components/templates/baseLayout/baseLayout";
import Home from "../components/templates/home/home";
import Recommend from "../components/templates/recommend/recommend";

interface Props {
  tweets: any[];
}

const Index: NextPage<Props> = ({ tweets }) => (
  <BaseLayout
    mainElement={<Home tweets={tweets} />}
    subElement={<Recommend />}
  />
);

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/timeline");
  const tweets = await res.json();
  console.log(tweets);
  return { tweets };
};

export default Index;
