import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { colors } from "../../../assets/styles/variables";

const TweetContentUser: FC<{}> = () => (
  <Link href="/">
    <a css={styles.root}>
      <em css={styles.userName}>偽名太郎</em>
      <span css={styles.userAccount}>@gimei_taro</span>
      <span css={styles.time}>・5分</span>
    </a>
  </Link>
);

const styles = {
  root: css`
    &:hover {
      > em {
        text-decoration: underline;
      }
    }
  `,

  userName: css`
    margin-right: 5px;
    font-weight: bold;
  `,

  userAccount: css`
    color: ${colors.gray};
  `,

  time: css`
    color: ${colors.gray};
  `
};

export default TweetContentUser;
