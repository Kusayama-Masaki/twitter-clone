import React, { FC } from "react";
import { css } from "@emotion/core";

import PageNavigationItem from "./pageNavigationItem/pageNavigationItem";

export interface Props {
  items: PageNavigationItem[];
}

const PageNavigation: FC<Props> = ({ items }) => {
  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <ul css={styles.root}>
      {items.map((item: PageNavigationItem) => (
        <PageNavigationItem key={item.id} item={item} clickItem={handleClick} />
      ))}
    </ul>
  );
};

const styles = {
  root: css`
    margin-top: 5px;
  `
};

export default PageNavigation;
