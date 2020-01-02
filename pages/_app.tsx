import React from "react";
import App from "next/app";

import "../lib/fontAwesome";
import "reset-css/reset.css";
import { Global, css } from "@emotion/core";
import { globalStyles } from "../components/assets/styles/globals";
import { colors } from "../components/assets/styles/variables";

class TwitterClone extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div css={styles.root}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </div>
    );
  }
}

const styles = {
  root: css`
    color: ${colors.white};
    background-color: ${colors.navy};
  `
};

export default TwitterClone;
