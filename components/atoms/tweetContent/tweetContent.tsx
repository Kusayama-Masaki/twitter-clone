import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

import TweetContentUser from "./tweetContentUser/tweetContentUser";
import TweetContentActions from "./tweetContentActions/tweetContentActions";

interface Props {
  clickAction: (id: string) => void;
}

const TweetContent: FC<Props> = props => {
  const { clickAction } = props;

  return (
    <div css={styles.root}>
      <TweetContentUser />
      <div css={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in
        tempore possimus nihil voluptatibus mollitia quam suscipit, similique
        necessitatibus animi cum quis accusantium eveniet voluptate sapiente
        optio a molestias quod.
      </div>
      <div css={styles.actions}>
        <TweetContentActions clickAction={clickAction} />
      </div>
    </div>
  );
};

const styles = {
  root: css``,

  content: css`
    margin-top: 5px;
  `,

  actions: css`
    margin-left: -12px;
  `
};

export default TweetContent;
