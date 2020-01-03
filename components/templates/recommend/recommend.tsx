import React, { FC } from "react";
import { css } from "@emotion/core";

import RecommendTrend from "../../organisms/recommendTrend/recommendTrend";
import RecommendUser from "../../organisms/recommendUser/recommendUser";

const Recommend: FC = () => (
  <div css={styles.root}>
    <RecommendTrend />
    <RecommendUser />
  </div>
);

const styles = {
  root: css`
    position: sticky;
    top: 15px;
  `
};

export default Recommend;
