import React, { FC } from "react";
import { css } from "@emotion/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import IconButton from "../../iconButton/iconButton";

/**
 * TODO:
 * hover時のアイコン色を指定できるようにする
 */

interface Props {
  clickAction: (id: string) => void;
}

interface Action {
  id: string;
  icon: IconProp;
  count?: number;
}

const actions: Action[] = [
  {
    id: "replay",
    icon: "comment",
    count: 10
  },
  {
    id: "retweet",
    icon: "retweet",
    count: 100
  },
  {
    id: "fav",
    icon: "heart",
    count: 1
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

const TweetContentActions: FC<Props> = ({ clickAction }) => (
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

  count: css``
};

export default TweetContentActions;
