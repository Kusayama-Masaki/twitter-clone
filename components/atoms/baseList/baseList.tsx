import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

interface Props {
  hasMore?: boolean;
  clickMore?: () => void;
}

const BaseList: FC<Props> = ({ hasMore, clickMore, children }) => (
  <ul css={styles.root}>
    {children}
    {hasMore && (
      <li css={styles.more} onClick={() => clickMore()}>
        さらに表示
      </li>
    )}
  </ul>
);

const styles = {
  root: css`
    > li {
      padding: 10px 15px;
      border-top: 1px solid ${colors.lightBlack};
      &:first-of-type {
        border-top: none;
      }
    }
  `,

  more: css`
    color: ${colors.blue};
    cursor: pointer;
  `
};

export default BaseList;
