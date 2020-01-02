import React, { FC } from "react";
import { css } from "@emotion/core";
import { mq } from "../../../assets/styles/mixins";
import { colors } from "../../../assets/styles/variables";

/**
 * TODO:
 * - currentでの文字色を変更
 * - 未読時のbadgeを追加
 */

export interface Props {
  item: PageNavigationItem;
  clickItem: (id: string) => void;
}

const PageNavigationItem: FC<Props> = ({ item, clickItem }) => {
  const { id, text, icon } = item;
  const isIconOnly = !text;

  return (
    <li css={styles.root} onClick={() => clickItem(id)}>
      <div css={styles.inner} className={isIconOnly ? "isIconOnly" : ""}>
        <div css={styles.inside}>
          {icon && <div css={styles.icon}>{icon}</div>}
          {text && <p css={styles.text}>{text}</p>}
        </div>
      </div>
    </li>
  );
};

const styles = {
  root: css`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.white};
    & + & {
      margin-top: 10px;
    }
    &:hover {
      color: ${colors.blue};
      cursor: pointer;
      > div {
        background-color: rgba(29, 161, 242, 0.1);
      }
    }
  `,

  inner: css`
    display: inline-block;
    padding: 10px;
    border-radius: 20px;
    &.isIconOnly {
      padding: 10px;
      border-radius: 50%;
      ${[mq("md")]} {
        margin: 0 5px;
      }
    }
    ${[mq("md")]} {
      padding: 10px 15px;
    }
  `,

  inside: css`
    display: flex;
    align-items: center;
  `,

  icon: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    text-align: center;
  `,

  text: css`
    display: none;
    margin-left: 12px;
    ${[mq("md")]} {
      display: block;
    }
  `
};

export default PageNavigationItem;
