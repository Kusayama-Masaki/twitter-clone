import React, { FC } from "react";
import { css } from "@emotion/core";

import Tweet from "../../molecules/tweet/tweet";

const Timeline: FC = () => (
  <ul css={styles.root}>
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </ul>
);

const styles = {
  root: css``
};

export default Timeline;
