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
    width: 100%;

    &.xs {
      min-width: 25px;
    }

    &.sm {
      min-width: 39px;
    }

    &.md {
      min-width: 46px;
    }
  `,

  image: css`
    display: inline-block;
    width: 100%;
    border-radius: 50%;
  `
};

export default UserIcon;
