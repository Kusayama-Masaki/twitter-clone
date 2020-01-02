import React from "react";
import { NextPage } from "next";

import BaseLayout from "../components/templates/baseLayout/baseLayout";
import Home from "../components/templates/home/home";
import Recommend from "../components/templates/recommend/recommend";

const Index: NextPage = () => (
  <BaseLayout mainElement={<Home />} subElement={<Recommend />} />
);

export default Index;
