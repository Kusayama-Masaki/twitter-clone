import React, { FC } from "react";
import { css } from "@emotion/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { mq } from "../../../assets/styles/mixins";

import IconButton from "../../iconButton/iconButton";

/**
 * TODO:
 * hover時のアイコン色を指定できるようにする
 */

interface Props {
  retweetCount: number;
  favoriteCount: number;
  clickAction: (id: string) => void;
}

interface Action {
  id: string;
  icon: IconProp;
  count?: number;
}

const TweetContentActions: FC<Props> = props => {
  const { retweetCount, favoriteCount, clickAction } = props;
  const actions: Action[] = [
    {
      id: "replay",
      icon: "comment",
      count: 0
    },
    {
      id: "retweet",
      icon: "retweet",
      count: retweetCount
    },
    {
      id: "fav",
      icon: "heart",
      count: favoriteCount
    },
    {
      id: "tool",
      icon: "toolbox"
    },
    {
      id: "pocket",
      icon: ["fab", "get-pocket"]
    }
  ];

  return (
    <ul css={styles.root}>
      {actions.map(action => (
        <li
          key={action.id}
          css={styles.inner}
          onClick={() => clickAction(action.id)}
        >
          <IconButton icon={action.icon}>
            {action.count && <span css={styles.count}>{action.count}</span>}
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  `,

  inner: css`
    display: flex;
    align-items: center;
  `,

  count: css`
    display: none;
    ${[mq("xs")]} {
      display: block;
    }
  `
};

export default TweetContentActions;
