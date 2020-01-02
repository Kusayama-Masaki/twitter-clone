import React from "react";
import App from "next/app";
import "reset-css/reset.css";

class TwitterClone extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default TwitterClone;
