import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "../../../assets/styles/variables";

interface Props {
  item: TrendItem;
  clickItem: (name: string) => void;
}

const TrendItem: FC<Props> = ({ item, clickItem }) => {
  const { name, count } = item;

  return (
    <li css={styles.root} onClick={() => clickItem(name)}>
      <section>
        <p css={styles.text}>日本のトレンド</p>
        <h3 css={styles.name}>{name}</h3>
        <p css={styles.count}>{count}件のツイート</p>
      </section>
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
