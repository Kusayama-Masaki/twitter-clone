import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { colors } from "../../../assets/styles/variables";

interface Props {
  trend: any;
  clickItem: (name: string) => void;
}

const TrendItem: FC<Props> = ({ trend, clickItem }) => {
  const { name, query, tweet_volume } = trend;

  return (
    <li css={styles.root} onClick={() => clickItem(name)}>
      <Link href={`/search?q=${query}`}>
        <section>
          <p css={styles.text}>日本のトレンド</p>
          <h3 css={styles.name}>{name}</h3>
          {tweet_volume && <p css={styles.count}>{tweet_volume}件のツイート</p>}
        </section>
      </Link>
    </li>
  );
};

const styles = {
  root: css`
    cursor: pointer;
  `,

  text: css`
    font-size: 1.3rem;
    color: ${colors.gray};
  `,

  name: css`
    margin-top: 5px;
    font-weight: bold;
  `,

  count: css`
    margin-top: 5px;
    font-size: 1.3rem;
    color: ${colors.gray};
  `
};

export default TrendItem;
