import React, { FC } from "react";
import { css } from "@emotion/core";

import InputSearch from "../../atoms/inputSearch/inputSearch";

const SearchKeyword: FC = () => {
  return (
    <div css={styles.root}>
      <InputSearch placeholder="キーワード検索" />
    </div>
  );
};

const styles = {
  root: css``
};

export default SearchKeyword;
