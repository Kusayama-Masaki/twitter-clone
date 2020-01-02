import React from "react";
import { NextPage } from "next";

import Hello from "../components/hello";

const Index: NextPage = () => (
  <div>
    <h1>index page</h1>
    <Hello />
  </div>
);

export default Index;
