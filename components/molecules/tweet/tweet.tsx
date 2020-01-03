import React, { FC } from "react";
import { css } from "@emotion/core";
import { mq } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";

import UserIcon from "../../atoms/userIcon/userIcon";
import TweetContent from "../../atoms/tweetContent/tweetContent";

interface Props {
  tweet: any;
}

/**
 * TODO: できればスマホレイアウト時にUserIconのサイズをsmにしたい
 */
const Tweet: FC<Props> = ({ tweet }) => {
  const { user } = tweet;

  const handleClickAction = (id: string) => {
    console.log(id);
  };

  return (
    <li css={styles.root}>
      <div css={styles.user}>
        <UserIcon user={user} />
      </div>
      <div css={styles.inner}>
        <TweetContent tweet={tweet} clickAction={handleClickAction} />
      </div>
    </li>
  );
};

const styles = {
  root: css`
    display: flex;
    padding: 15px;
    border-bottom: 1px solid ${colors.lightBlack};
    cursor: pointer;
  `,

  user: css`
    min-width: 39px;
    min-height: 39px;
    ${[mq("xs")]} {
      min-width: 46px;
      min-height: 46px;
    }
  `,

  inner: css`
    margin-left: 10px;
  `
};

export default Tweet;
