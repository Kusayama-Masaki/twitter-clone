import React from "react";
import App from "next/app";

import "reset-css/reset.css";
import { Global } from "@emotion/core";
import { globalStyles } from "../components/assets/styles/globals";

class TwitterClone extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </>
    );
  }
}

export default TwitterClone;
