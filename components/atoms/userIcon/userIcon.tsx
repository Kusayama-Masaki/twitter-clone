import React, { FC } from "react";
import { css } from "@emotion/core";

export interface User {
  name: string;
  image: string;
}

export interface Props {
  user: User;
  size?: string;
}

const UserIcon: FC<Props> = ({ user, size }) => (
  <div css={styles.root} className={size}>
    <img css={styles.image} src={user.image} alt={user.name} />
  </div>
);

const styles = {
  root: css`
    width: 46px;
    height: 46px;

    &.sm {
      width: 25px;
      height: 25px;
    }
  `,

  image: css`
    display: inline-block;
    width: 100%;
    border-radius: 50%;
  `
};

export default UserIcon;
