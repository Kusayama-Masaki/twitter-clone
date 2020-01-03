import React, { FC, MouseEvent } from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

interface Props {
  id: string;
  isFollowed: boolean;
  clickButton: (event: MouseEvent, id: string, isFollowed: boolean) => void;
}

const FollowButton: FC<Props> = ({ id, isFollowed, clickButton }) => {
  const buttonText = isFollowed ? "フォロー中" : "フォロー";

  return (
    <button
      css={styles.root}
      onClick={(event: MouseEvent) => clickButton(event, id, isFollowed)}
    >
      <p>{buttonText}</p>
    </button>
  );
};

const styles = {
  root: css`
    padding: 5px 15px;
    border-color: ${colors.blue};
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.blue};
    background-color: transparent;
    cursor: pointer;
  `
};

export default FollowButton;
