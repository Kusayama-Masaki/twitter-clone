import React, { FC, MouseEvent } from "react";
import { css } from "@emotion/core";
import { colors } from "../../../assets/styles/variables";

import FollowButton from "../../../atoms/followButton/followButton";

interface Props {
  item: User;
  clickItem: (name: string) => void;
  clickFollow: (event: MouseEvent, id: string, isFollowed: boolean) => void;
}

const UserItem: FC<Props> = ({ item, clickItem, clickFollow }) => {
  const { id, name, image, isFollowed } = item;

  return (
    <li onClick={() => clickItem(id)}>
      <section css={styles.root}>
        <img css={styles.image} src={image} width="49" height="49" alt="" />
        <div css={styles.inner}>
          <h3 css={styles.name}>{name}</h3>
          <p css={styles.id}>@{id}</p>
        </div>
        <div css={styles.button}>
          <FollowButton
            id={id}
            isFollowed={isFollowed}
            clickButton={clickFollow}
          />
        </div>
      </section>
    </li>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  image: css`
    display: block;
    margin-right: 10px;
    border-radius: 50%;
  `,

  inner: css`
    flex-grow: 1;
    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
  `,

  name: css`
    font-weight: bold;
  `,

  id: css`
    margin-top: 2px;
    color: ${colors.gray};
  `,

  button: css`
    min-width: 92px;
  `
};

export default UserItem;
