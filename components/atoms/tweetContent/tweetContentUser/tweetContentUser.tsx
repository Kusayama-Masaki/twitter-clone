import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { colors } from "../../../assets/styles/variables";

export interface Props {
  user: any;
  createdAt: string;
}

const TweetContentUser: FC<Props> = ({ user, createdAt }) => {
  const { name, screen_name } = user;

  return (
    <Link href="/">
      <a css={styles.root}>
        <em css={styles.name}>{name}</em>
        <span css={styles.screenName}>@{screen_name}</span>
        <span css={styles.time}>・{createdAt}</span>
      </a>
    </Link>
  );
};

const styles = {
  root: css`
    &:hover {
      > em {
        text-decoration: underline;
      }
    }
  `,

  name: css`
    margin-right: 5px;
    font-weight: bold;
  `,

  screenName: css`
    color: ${colors.gray};
  `,

  time: css`
    color: ${colors.gray};
  `
};

export default TweetContentUser;
