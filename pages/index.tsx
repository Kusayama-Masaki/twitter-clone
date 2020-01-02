import React from "react";
import { NextPage } from "next";

import BaseLayout from "../components/templates/baseLayout/baseLayout";
import Home from "../components/templates/home/home";

const Index: NextPage = () => (
  <div>
    <BaseLayout>
      <Home />
    </BaseLayout>
  </div>
);

export default Index;
