import React, { FC } from "react";
import { css } from "@emotion/core";

const Hello: FC = () => <div css={styles.root}>Hello</div>;

const styles = {
  root: css`
    color: tomato;
  `
};

export default Hello;
