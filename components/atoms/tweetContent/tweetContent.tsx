import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

import TweetContentUser from "./tweetContentUser/tweetContentUser";
import TweetContentActions from "./tweetContentActions/tweetContentActions";

export interface Props {
  tweet: any;
  clickAction: (id: string) => void;
}

const TweetContent: FC<Props> = props => {
  const { tweet, clickAction } = props;
  const { user, text, created_at, retweet_count, favorite_count } = tweet;

  return (
    <div css={styles.root}>
      <TweetContentUser user={user} createdAt={created_at} />
      <div css={styles.text}>{text}</div>
      <div css={styles.actions}>
        <TweetContentActions
          retweetCount={retweet_count}
          favoriteCount={favorite_count}
          clickAction={clickAction}
        />
      </div>
    </div>
  );
};

const styles = {
  root: css``,

  text: css`
    margin-top: 5px;
  `,

  actions: css`
    margin-left: -12px;
  `
};

export default TweetContent;
