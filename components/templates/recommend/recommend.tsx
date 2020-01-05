import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/styles/variables";

import SearchKeyword from "../../molecules/searchKeyword/searchKeyword";
import RecommendTrends from "../../organisms/recommendTrends/recommendTrends";
import RecommendUser from "../../organisms/recommendUser/recommendUser";

interface Props {
  trends: any[];
}

const Recommend: FC<Props> = ({ trends }) => (
  <div css={styles.root}>
    <div css={styles.search}>
      <SearchKeyword />
    </div>
    <RecommendTrends trends={trends} />
    <RecommendUser />
  </div>
);

const styles = {
  root: css``,

  search: css`
    position: sticky;
    top: 0;
    padding: 10px 0 8px;
    background-color: ${colors.navy};
  `
};

export default Recommend;
