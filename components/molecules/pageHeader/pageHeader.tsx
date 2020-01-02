import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

import IconButton from "../../atoms/iconButton/iconButton";

export interface Props {
  title: string;
}

const PageHeader: FC<Props> = props => {
  const { title } = props;

  return (
    <header css={styles.root}>
      <h1 css={styles.title}>{title}</h1>
      <IconButton icon="star-of-life" size="lg" />
    </header>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    min-height: 53px;
    padding: 0 15px;
    border-bottom: 1px solid ${colors.lightBlack};
  `,

  title: css`
    flex-grow: 1;
    font-size: 1.9rem;
    font-weight: bold;
  `
};

export default PageHeader;
