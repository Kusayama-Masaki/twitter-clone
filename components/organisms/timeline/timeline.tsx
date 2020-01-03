import React, { FC } from "react";
import { css } from "@emotion/core";

import Tweet from "../../molecules/tweet/tweet";

interface Props {
  tweets: any[];
}

const Timeline: FC<Props> = ({ tweets }) => (
  <ul css={styles.root}>
    {tweets.map((tweet: any) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </ul>
);

const styles = {
  root: css``
};

export default Timeline;
